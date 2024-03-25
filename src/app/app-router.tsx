import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import config from '@/config'
import PageHome from '@/pages/home'
import Page404 from '@/pages/other/404'
import PageLogin, { PATH_NAME_LOGIN } from '@/pages/other/login'

import { AdminLayout } from './admin-layout'
import AppInitializing from './app-initializing'

const pageRoutes = require.context('../pages', false, /router\.tsx$/)
let autoRoutes: RouteObject[] = []

pageRoutes.keys().forEach(key => {
  const router = pageRoutes(key).default
  autoRoutes = [...autoRoutes, ...router]
})

const AppRouter = () => {
  return useRoutes([
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
          element: <Page404 homePathName={config.routerAdminPath} />,
        },
      ],
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ])
}

export default AppRouter
