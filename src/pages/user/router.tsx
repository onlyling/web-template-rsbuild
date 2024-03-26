import type { CustomRouteObject } from '@/app/admin-layout'
import BlankLayout from '@/layouts/blank-layout'

import UserDetail from './detail'
import UserList from './list'
import { USER_LIST, USER_DETAIL } from './path'

const routes: CustomRouteObject[] = [
  {
    path: USER_LIST,
    element: <BlankLayout />,
    children: [
      {
        index: true,
        element: <UserList />,
      },
      {
        path: `${USER_DETAIL}/:id`,
        element: <UserDetail />,
        access: ['user_detail'],
      },
    ],
  },
]

export default routes
