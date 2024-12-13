import {
  ExclamationCircleOutlined,
  UpOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Dropdown, App } from 'antd'
import { memo } from 'react'

import useLogout from '@/app/useLogout'
import useUser from '@/stores/user'

import './style.less'

const AdminLayoutUserInfo = () => {
  const { user } = useUser()
  const logout = useLogout()
  const app = App.useApp()

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'changePassword',
            label: '修改密码',
          },
          {
            key: 'logout',
            label: '退出登录',
          },
        ],
        onClick: ({ key }) => {
          switch (key) {
            case 'logout':
              app.modal.confirm({
                title: '确定要退出登录吗？',
                icon: <ExclamationCircleOutlined />,
                maskClosable: false,
                onOk: () => {
                  logout()
                },
              })
              break

            default:
              break
          }
        },
      }}>
      <div className="admin-layout-user-info">
        <div className="admin-layout-user-info_avatar">
          <UserOutlined />
        </div>
        <div className="admin-layout-user-info_name">
          {user.name} <UpOutlined />
        </div>
      </div>
    </Dropdown>
  )
}

export default memo(AdminLayoutUserInfo)
