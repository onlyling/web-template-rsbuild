import type { RouteObject } from 'react-router-dom'

import BlankLayout from '@/layouts/blank-layout'

import UserDetail from './detail'
import UserList from './list'
import { USER_LIST, USER_DETAIL } from './path'

const routes: RouteObject[] = [
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
      },
    ],
  },
]

export default routes
