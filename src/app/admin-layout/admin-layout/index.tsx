import { HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { memo, useCallback } from 'react'
import { useOutlet, Link } from 'react-router-dom'

import useInitializing from '@/app/useInitializing'
import config from '@/config'

import {
  AdminLayoutBody,
  AdminLayoutContent,
  AdminLayoutHeader,
  AdminLayoutPage,
  AdminLayoutSider,
} from '../layout'
import {
  LayoutContentClassNameContentProvider,
  useLayoutContentClassNameContent,
} from '../layout-content-class-name-content'
import { MenuContentProvider, useMenuContent } from '../menu-content'
import AdminLayoutSkeleton from '../skeleton'
import AdminLayoutUserInfo from '../user-info'
import './style.less'

const AdminLayout: React.FC<React.PropsWithChildren> = () => {
  const outlet = useOutlet()
  const initializing = useInitializing()
  const { selectedKeys, openKeys, setMenuSelect } = useMenuContent()
  const { className: layoutContentClassName } =
    useLayoutContentClassNameContent()

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

  if (initializing) {
    return <AdminLayoutSkeleton />
  }

  return (
    <AdminLayoutPage>
      <AdminLayoutHeader>
        <Link to="/admin" className="admin-layout_brand">
          <img src={config.logo} className="admin-layout_brand-logo" />
          <div className="admin-layout_brand-name">{config.name}</div>
        </Link>

        <AdminLayoutUserInfo />
      </AdminLayoutHeader>

      <AdminLayoutBody>
        <AdminLayoutSider>
          <Menu
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onSelect={onSelect}
            onOpenChange={onOpenChange}
            className="admin-layout_sider-menu"
            mode="inline"
            items={new Array(5).fill(0).map((_, index) => {
              return {
                key: `main_${index}`,
                icon: <HomeOutlined />,
                label: `主要菜单_${index}`,
                children:
                  index === 0
                    ? undefined
                    : new Array(4).fill(0).map((__, subIndex) => {
                        return {
                          key: `sub_${index}_${subIndex}`,
                          label: `次要菜单_${index}_${subIndex}`,
                        }
                      }),
              }
            })}
          />
        </AdminLayoutSider>
        <AdminLayoutContent className={layoutContentClassName}>
          {outlet}
        </AdminLayoutContent>
      </AdminLayoutBody>
    </AdminLayoutPage>
  )
}

const AdminLayoutWrapper = () => {
  return (
    <LayoutContentClassNameContentProvider>
      <MenuContentProvider>
        <AdminLayout />
      </MenuContentProvider>
    </LayoutContentClassNameContentProvider>
  )
}

export default memo(AdminLayoutWrapper)
