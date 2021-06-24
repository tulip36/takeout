import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AdminForm from 'src/components/Admin/AdminForm'

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
const UPDATE_ADMIN_MUTATION = gql`
  mutation UpdateAdminMutation($id: Int!, $input: UpdateAdminInput!) {
    updateAdmin(id: $id, input: $input) {
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

export const Success = ({ admin }) => {
  const [updateAdmin, { loading, error }] = useMutation(UPDATE_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('Admin updated')
      navigate(routes.admins())
    },
  })

  const onSave = (input, id) => {
    updateAdmin({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Admin {admin.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AdminForm
          admin={admin}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
