import { useMemoizedFn } from 'ahooks'
import { useEffect, useState } from 'react'

import useNavigateToLogin from '@/app/useNavigateToLogin'
import type { User } from '@/stores/user'
import useUser from '@/stores/user'

const useInitializing = (callback?: (info: User) => void) => {
  const [initializing, setInitializing] = useState(true)
  const navigateToLogin = useNavigateToLogin()
  const callbackMemo = useMemoizedFn(callback || (() => {}))

  useEffect(() => {
    const { fetchUser } = useUser.getState()

    fetchUser()
      .then(callbackMemo)
      .catch(navigateToLogin)
      .finally(() => {
        setInitializing(false)
      })
  }, [callbackMemo, navigateToLogin])

  return initializing
}

export default useInitializing
