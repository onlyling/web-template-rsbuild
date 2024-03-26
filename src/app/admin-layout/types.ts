import type { RouteObject } from 'react-router-dom'

export interface CustomRouteObject extends Omit<RouteObject, 'children'> {
  /**
   * 路由权限，如果是 undefined 表示不限制
   */
  access?: string[]
  children?: CustomRouteObject[]
}
