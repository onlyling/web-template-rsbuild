import { ConfigProvider, App as AntdApp } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { locale as dayjsLocale } from 'dayjs'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './app-router'

import 'dayjs/locale/zh-cn'
import './index.css'

dayjsLocale('zh-cn')

const App = () => {
  // TODO 结合自身需求选择路由模式
  return (
    <ConfigProvider locale={zhCN}>
      <AntdApp>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App