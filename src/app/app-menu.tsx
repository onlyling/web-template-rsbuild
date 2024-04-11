import { HomeOutlined, TeamOutlined, DatabaseOutlined } from '@ant-design/icons'

import config from '@/config'
import { USER_LIST } from '@/pages/user/path'

import type { CustomMenu } from './admin-layout'

const appMenu: CustomMenu[] = [
  {
    icon: <HomeOutlined />,
    title: '首页',
    path: config.routerAdminPath,
  },
  // {
  //   icon: <TeamOutlined />,
  //   title: '用户管理',
  //   path: USER_LIST,
  // },
  {
    icon: <DatabaseOutlined />,
    title: '基础管理',
    children: [
      {
        icon: <TeamOutlined />,
        title: '用户管理',
        path: USER_LIST,
      },
    ],
  },
]

export default appMenu
