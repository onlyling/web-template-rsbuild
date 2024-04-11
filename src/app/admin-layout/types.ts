import type { RouteObject } from 'react-router-dom'

export interface CustomRouteObject extends Omit<RouteObject, 'children'> {
  /**
   * 路由权限，如果是 undefined 表示不限制
   */
  access?: string[]
  children?: CustomRouteObject[]
}

export interface CustomMenu {
  /**
   * 菜单权限，如果是 undefined 表示不限制
   */
  access?: string[]
  icon?: React.ReactElement
  title: string
  path?: string
  children?: CustomMenu[]
}
