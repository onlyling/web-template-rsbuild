import type { RouteObject } from 'react-router-dom'

import ErrorBoundary from '@/components/error-boundary'
import ResultError from '@/components/result-error'
import config from '@/config'
import PageHome from '@/pages/home'
import PageLogin, { PATH_NAME_LOGIN } from '@/pages/other/login'

import { AdminLayout } from './admin-layout'
import AppInitializing from './app-initializing'
import appMenu from './app-menu'
import { RouterContextProvider } from './router-context'

const pageRoutes = import.meta.webpackContext('../pages', {
  recursive: true,
  regExp: /router\.tsx$/,
})
const autoRoutes: RouteObject[] = []

pageRoutes.keys().forEach(key => {
  const router = pageRoutes(key).default
  autoRoutes.push(...router)
})

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppInitializing />,
  },
  {
    path: PATH_NAME_LOGIN,
    element: <PageLogin />,
  },
  {
    path: config.routerAdminPath,
    element: <AdminLayout menu={appMenu} />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      ...autoRoutes,
      {
        path: '*',
        element: (
          <ResultError status="404" homePathName={config.routerAdminPath} />
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ResultError status="404" />,
  },
]

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <RouterContextProvider routes={routes} />
    </ErrorBoundary>
  )
}

export default AppRouter
