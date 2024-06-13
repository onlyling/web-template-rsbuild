import { Skeleton } from 'antd'
import type { LazyExoticComponent } from 'react'
import { Suspense } from 'react'

export const buildRouterSuspense = (LazyRoute: LazyExoticComponent<any>) => {
  return (
    <Suspense fallback={<Skeleton active />}>
      <LazyRoute />
    </Suspense>
  )
}
