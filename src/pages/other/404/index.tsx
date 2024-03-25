import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useLayoutContentFlex } from '@/app/admin-layout'
import config from '@/config'

const Page404: React.FC<{ homePathName?: string }> = ({ homePathName }) => {
  const navigate = useNavigate()

  useLayoutContentFlex()

  return (
    <div
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Result
        status="404"
        title={
          <Button
            style={{ marginTop: 24 }}
            type="primary"
            onClick={() => {
              navigate(homePathName ?? config.routerBasePath)
            }}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}

export default Page404
