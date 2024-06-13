import { lazy } from 'react'

import { buildRouterSuspense } from '@/app/admin-layout'
import type { CustomRouteObject } from '@/app/admin-layout'
import BlankLayout from '@/layouts/blank-layout'

import { USER_LIST, USER_DETAIL } from './path'

const routes: CustomRouteObject[] = [
  {
    path: USER_LIST,
    element: <BlankLayout />,
    children: [
      {
        index: true,
        element: buildRouterSuspense(lazy(() => import('./list'))),
      },
      {
        path: `${USER_DETAIL}/:id`,
        element: buildRouterSuspense(lazy(() => import('./detail'))),
        access: ['user_detail'],
      },
    ],
  },
]

export default routes
