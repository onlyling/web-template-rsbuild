import type { CustomRouteObject } from '@/app/admin-layout'

import ErrorTestAdmin from './admin'
import { ERROR_TEST_ADMIN } from './path'

const routes: CustomRouteObject[] = [
  {
    path: ERROR_TEST_ADMIN,
    element: <ErrorTestAdmin />,
  },
]

export default routes
