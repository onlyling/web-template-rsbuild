import { useMemoizedFn } from 'ahooks'

import useNavigateToLogin from '@/app/useNavigateToLogin'
import useUser from '@/stores/user'

const useLogout = () => {
  const { setToken } = useUser()
  const navigateToLogin = useNavigateToLogin()

  const logout = useMemoizedFn(() => {
    // TODO 补充退出登录接口请求
    new Promise<void>(resolve => {
      setTimeout(resolve, 400)
    }).then(() => {
      setToken('')
      navigateToLogin()
    })
  })

  return logout
}

export default useLogout
