import { Skeleton, Space } from 'antd'
import { memo } from 'react'

import {
  AdminLayoutBody,
  AdminLayoutContent,
  AdminLayoutHeader,
  AdminLayoutPage,
  AdminLayoutSider,
} from './layout'

const AdminLayoutSkeleton = () => {
  // TODO 根据设计稿制作一个简易骨架屏
  return (
    <AdminLayoutPage>
      <AdminLayoutHeader>
        <Space direction="horizontal">
          <Skeleton.Avatar active />
          <Skeleton.Input active />
        </Space>

        <Space direction="horizontal">
          <Skeleton.Avatar active />
          <Skeleton.Button active />
        </Space>
      </AdminLayoutHeader>
      <AdminLayoutBody>
        <AdminLayoutSider
          style={{
            padding: 12,
          }}>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </AdminLayoutSider>
        <AdminLayoutContent>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div style={{ backgroundColor: '#fff' }}>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </div>
          </Space>
        </AdminLayoutContent>
      </AdminLayoutBody>
    </AdminLayoutPage>
  )
}

export default memo(AdminLayoutSkeleton)
