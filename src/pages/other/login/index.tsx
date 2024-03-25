import LoginForm from './form'
import LoginPortal from './portal'

const Login = () => {
  return (
    <LoginPortal>
      <LoginForm />
    </LoginPortal>
  )
}

export const PATH_NAME_LOGIN = `/login`

export default Login
