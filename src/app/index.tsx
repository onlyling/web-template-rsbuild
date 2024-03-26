import { ConfigProvider, App as AntdApp } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { locale as dayjsLocale } from 'dayjs'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import AppRouter from './app-router'

import 'dayjs/locale/zh-cn'
import './index.css'

dayjsLocale('zh-cn')

const { REACT_ROUTER_MODE } = process.env
const Router = REACT_ROUTER_MODE === 'gh-pages' ? HashRouter : BrowserRouter

const App = () => {
  // TODO 结合自身需求选择路由模式
  return (
    <ConfigProvider locale={zhCN}>
      <AntdApp>
        <Router>
          <AppRouter />
        </Router>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
