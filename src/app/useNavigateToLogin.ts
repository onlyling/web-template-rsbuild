import { useMemoizedFn } from 'ahooks'
import { useNavigate } from 'react-router-dom'

import { PATH_NAME_LOGIN } from '@/pages/other/login'

const useNavigateToLogin = () => {
  const navigate = useNavigate()

  const navigateToLogin = useMemoizedFn(() => {
    navigate(PATH_NAME_LOGIN)
  })

  return navigateToLogin
}

export default useNavigateToLogin
