import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ADMIN_MUTATION = gql`
  mutation DeleteAdminMutation($id: Int!) {
    deleteAdmin(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Admin = ({ admin }) => {
  const [deleteAdmin] = useMutation(DELETE_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('Admin deleted')
      navigate(routes.admins())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete admin ' + id + '?')) {
      deleteAdmin({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Admin {admin.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{admin.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{admin.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{admin.lastName}</td>
            </tr>
            <tr>
              <th>User name</th>
              <td>{admin.userName}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{admin.password}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{admin.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdmin({ id: admin.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(admin.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Admin
