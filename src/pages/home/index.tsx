import { Link } from 'react-router-dom'

import { ERROR_TEST_ADMIN } from '@/pages/error-test/path'
import { USER_LIST } from '@/pages/user/path'

const Home = () => {
  return (
    <>
      <p>Home</p>
      <p>
        <Link to={USER_LIST}>go user list</Link>
      </p>
      <p>
        <Link to={`${USER_LIST}lll`}>go 404</Link>
      </p>
      <p>
        <Link to={ERROR_TEST_ADMIN}>go admin error test</Link>
      </p>
    </>
  )
}

export default Home
