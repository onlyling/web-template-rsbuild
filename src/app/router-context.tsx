import React, { createContext, memo, useContext, useMemo } from 'react'
import type { RouteObject } from 'react-router-dom'
import { useLocation, matchRoutes, useRoutes } from 'react-router-dom'

const RouterContext = createContext<RouteObject[]>([])

export const useRouterContext = () => useContext(RouterContext)

export const useMatchCurrentRoutes = () => {
  const location = useLocation()
  const routes = useRouterContext()
  const currentMatchRoutes = useMemo(
    () => matchRoutes(routes, location) || [],
    [location, routes],
  )

  return currentMatchRoutes
}

export const RouterContextProvider: React.FC<{ routes: RouteObject[] }> = memo(
  ({ routes }) => {
    return (
      <RouterContext.Provider value={routes}>
        {useRoutes(routes)}
      </RouterContext.Provider>
    )
  },
)
