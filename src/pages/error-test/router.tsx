import { lazy } from 'react'

import { buildRouterSuspense } from '@/app/admin-layout'
import type { CustomRouteObject } from '@/app/admin-layout'

import { ERROR_TEST_ADMIN } from './path'

const routes: CustomRouteObject[] = [
  {
    path: ERROR_TEST_ADMIN,
    element: buildRouterSuspense(lazy(() => import('./admin'))),
  },
]

export default routes
