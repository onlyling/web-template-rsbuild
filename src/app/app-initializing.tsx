import { Skeleton } from 'antd'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import useInitializing from '@/app/useInitializing'
import config from '@/config'

const AppInitializing = () => {
  const navigate = useNavigate()

  useInitializing(() => {
    navigate(config.routerAdminPath)
  })

  // TODO 根据设计稿制作一个简易骨架屏
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={{ width: 400 }}>
        <Skeleton active />
      </div>
    </div>
  )
}

export default memo(AppInitializing)
