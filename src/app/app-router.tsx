import type { RouteObject } from 'react-router-dom'

import ResultError from '@/components/result-error'
import config from '@/config'
import PageHome from '@/pages/home'
import PageLogin, { PATH_NAME_LOGIN } from '@/pages/other/login'

import { AdminLayout } from './admin-layout'
import AppInitializing from './app-initializing'
import { RouterContextProvider } from './router-context'

const pageRoutes = require.context('../pages', false, /router\.tsx$/)
let autoRoutes: RouteObject[] = []

pageRoutes.keys().forEach(key => {
  const router = pageRoutes(key).default
  autoRoutes = [...autoRoutes, ...router]
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
    element: <AdminLayout />,
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
  return <RouterContextProvider routes={routes} />
}

export default AppRouter
