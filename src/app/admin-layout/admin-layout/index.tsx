import isNil from 'lodash/isNil'
import { memo, useMemo } from 'react'
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
import AdminMenu from '../menu'
import { MenuContentProvider } from '../menu-content'
import AdminLayoutSkeleton from '../skeleton'
import type { CustomRouteObject, CustomMenu } from '../types'
import AdminLayoutUserInfo from '../user-info'
import './style.less'

interface AdminLayoutProps {
  menu: CustomMenu[]
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ menu }) => {
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
  const { className: layoutContentClassName } =
    useLayoutContentClassNameContent()

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
          <AdminMenu menu={menu} />
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

const AdminLayoutWrapper: React.FC<AdminLayoutProps> = props => {
  return (
    <LayoutContentClassNameContentProvider>
      <MenuContentProvider>
        <AdminLayout {...props} />
      </MenuContentProvider>
    </LayoutContentClassNameContentProvider>
  )
}

export default memo(AdminLayoutWrapper)
