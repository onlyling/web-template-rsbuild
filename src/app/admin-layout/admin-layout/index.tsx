import { HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import isNil from 'lodash/isNil'
import { memo, useCallback, useMemo } from 'react'
import { useOutlet, Link } from 'react-router-dom'

import { useMatchCurrentRoutes } from '@/app/router-context'
import useInitializing from '@/app/useInitializing'
import ErrorBoundary from '@/components/error-boundary'
import ResultError from '@/components/result-error'
import config from '@/config'
import useAccess from '@/stores/access'

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
import type { CustomRouteObject } from '../types'
import AdminLayoutUserInfo from '../user-info'
import './style.less'

const AdminLayout: React.FC<React.PropsWithChildren> = () => {
  const outlet = useOutlet()
  const initializing = useInitializing()
  const currentMatchRoutes = useMatchCurrentRoutes()
  const authorization = useMemo(() => {
    if (currentMatchRoutes.length) {
      const route = currentMatchRoutes[currentMatchRoutes.length - 1]
        .route as CustomRouteObject

      if (!isNil(route.access)) {
        return useAccess.getState().hasAccess(route.access)
      }
    }

    return true
  }, [currentMatchRoutes])
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
        <ErrorBoundary>
          <AdminLayoutContent className={layoutContentClassName}>
            {authorization ? (
              outlet
            ) : (
              <ResultError status="403" homePathName={config.routerAdminPath} />
            )}
          </AdminLayoutContent>
        </ErrorBoundary>
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
