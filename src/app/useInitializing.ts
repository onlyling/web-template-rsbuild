import { useMemoizedFn } from 'ahooks'
import { useEffect, useState } from 'react'

import useNavigateToLogin from '@/app/useNavigateToLogin'
import useAccess from '@/stores/access'
import useUser from '@/stores/user'

const useInitializing = (callback?: () => void) => {
  const [initializing, setInitializing] = useState(true)
  const navigateToLogin = useNavigateToLogin()
  const callbackMemo = useMemoizedFn(callback || (() => {}))

  useEffect(() => {
    const { fetchUser } = useUser.getState()

    fetchUser()
      .then(() => {
        return useAccess.getState().updateAccess()
      })
      .then(callbackMemo)
      .catch(navigateToLogin)
      .finally(() => {
        setInitializing(false)
      })
  }, [callbackMemo, navigateToLogin])

  return initializing
}

export default useInitializing
