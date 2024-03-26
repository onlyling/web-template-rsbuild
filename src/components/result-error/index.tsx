import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useLayoutContentFlex } from '@/app/admin-layout'
import config from '@/config'

export interface ResultErrorProps {
  homePathName?: string
  status: '404' | '403'
}

const ResultError: React.FC<ResultErrorProps> = ({ homePathName, status }) => {
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
        status={status}
        title={status}
        subTitle={
          status === '403'
            ? '哎呀，出错了！无权访问...'
            : '哎呀，出错了！页面不存在...'
        }
        extra={
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

export default ResultError
