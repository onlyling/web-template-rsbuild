import { useMemoizedFn, useUpdateEffect } from 'ahooks'
import noop from 'lodash/noop'
import type React from 'react'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'

interface ErrorBoundaryWrapperProps {
  onChangePathname?: (pathname: string) => void
}

const ErrorBoundaryWrapper: React.FC<
  React.PropsWithChildren<ErrorBoundaryWrapperProps>
> = ({ onChangePathname, children }) => {
  const { pathname } = useLocation()
  const onChangePathnameMemo = useMemoizedFn<(pathname: string) => void>(
    onChangePathname || noop,
  )

  useUpdateEffect(() => {
    onChangePathnameMemo(pathname)
  }, [onChangePathnameMemo, pathname])

  return children
}

export default memo(ErrorBoundaryWrapper)
