import Admin from 'src/components/Admin/Admin'

export const QUERY = gql`
  query FindAdminById($id: Int!) {
    admin: admin(id: $id) {
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

export const Empty = () => <div>Admin not found</div>

export const Success = ({ admin }) => {
  return <Admin admin={admin} />
}
