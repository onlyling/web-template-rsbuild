import { Link } from 'react-router-dom'

import { USER_DETAIL } from '../path'

const UserList = () => {
  return (
    <>
      <div>1</div>
      <Link to={`${USER_DETAIL}/123`}>to user detail</Link>
    </>
  )
}

export default UserList
