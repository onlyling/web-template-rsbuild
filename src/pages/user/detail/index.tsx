import { useParams } from 'react-router-dom'

const UserDetail = () => {
  const params = useParams<{ id: string }>()

  return <div>user id is {params.id}</div>
}

export default UserDetail
