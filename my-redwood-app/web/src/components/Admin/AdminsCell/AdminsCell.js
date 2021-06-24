import { Link, routes } from '@redwoodjs/router'

import Admins from 'src/components/Admin/Admins'

export const QUERY = gql`
  query ADMINS {
    admins {
      id
      firstName
      lastName
      userName
      password
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No admins yet. '}
      <Link to={routes.newAdmin()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ admins }) => {
  return <Admins admins={admins} />
}
