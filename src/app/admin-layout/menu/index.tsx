import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { memo, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import useAccess from '@/stores/access'

import { useMenuContent } from '../menu-content'
import type { CustomMenu } from '../types'

type MenuItem = {
  key: string
  icon: React.ReactElement
  label: string
  children?: MenuItem[]
}

export interface AdminMenuProps {
  menu: CustomMenu[]
}

const filterMenu = (
  menu: CustomMenu[],
  hasAccess: (access: string[] | string) => boolean,
): CustomMenu[] => {
  const m = menu
    .map<CustomMenu>(item => {
      const notBeAuthorized = item.access && !hasAccess(item.access)

      return {
        ...item,
        path: notBeAuthorized ? '' : item.path,
        children: notBeAuthorized
          ? []
          : item.children?.length
            ? filterMenu(item.children, hasAccess)
            : [],
      }
    })
    .filter(item => {
      return item.path || (!item.path && item.children?.length)
    })

  return m
}

const findAllChildrenPath = (menu: CustomMenu): string => {
  const p =
    menu.children
      ?.map(item => {
        return item.path ?? findAllChildrenPath(menu)
      })
      .join('_') || ''

  return p
}

const convertMenu = (menu: CustomMenu[]) => {
  const m = menu.map(item => ({
    key: item.path ?? `${findAllChildrenPath(item)}_parent`,
    icon: item.icon,
    label: item.title,
    children: item.children?.length ? convertMenu(item.children) : undefined,
  })) as MenuItem[]

  return m!
}

const findMenus = (
  menu: MenuItem[],
  path: string,
  parents: MenuItem[],
): MenuItem[] | undefined => {
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let index = 0; index < menu.length; index++) {
    const element = menu[index]
    const current = [...parents, element]

    if (element?.key === path) {
      return current
    }
    const ch = findMenus(element.children || [], path, current)
    if (ch) {
      return ch
    }
  }

  return undefined
}

const AdminMenu: React.FC<AdminMenuProps> = ({ menu }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { selectedKeys, openKeys, setMenuSelect } = useMenuContent()
  const { hasAccess } = useAccess()
  const items = useMemo(
    () => convertMenu(filterMenu(menu, hasAccess)),
    [hasAccess, menu],
  )

  useEffect(() => {
    const menus = findMenus(items, pathname, [])
    if (menus?.length) {
      setMenuSelect(s => ({
        selectedKeys: [menus[menus.length - 1].key],
        openKeys:
          menus.length > 1
            ? menus.slice(0, menus.length - 1).map(item => item.key)
            : s.openKeys,
      }))
    }
  }, [items, pathname, setMenuSelect])

  const onSelect = useCallback(
    (e: { selectedKeys: string[] }) => {
      setMenuSelect(s => ({
        ...s,
        selectedKeys: e.selectedKeys,
      }))
    },
    [setMenuSelect],
  )
  const onOpenChange = useCallback(
    (e: string[]) => {
      setMenuSelect(s => ({
        ...s,
        openKeys: e,
      }))
    },
    [setMenuSelect],
  )
  const onClick = useCallback<Exclude<MenuProps['onClick'], undefined>>(
    e => {
      navigate(e.key)
    },
    [navigate],
  )

  return (
    <Menu
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onSelect={onSelect}
      onOpenChange={onOpenChange}
      onClick={onClick}
      className="admin-layout_sider-menu"
      mode="inline"
      items={items}
    />
  )
}

export default memo(AdminMenu)
