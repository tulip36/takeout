import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/AdminsCell'

const DELETE_ADMIN_MUTATION = gql`
  mutation DeleteAdminMutation($id: Int!) {
    deleteAdmin(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const AdminsList = ({ admins }) => {
  const [deleteAdmin] = useMutation(DELETE_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('Admin deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete admin ' + id + '?')) {
      deleteAdmin({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>User name</th>
            <th>Password</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{truncate(admin.id)}</td>
              <td>{truncate(admin.firstName)}</td>
              <td>{truncate(admin.lastName)}</td>
              <td>{truncate(admin.userName)}</td>
              <td>{truncate(admin.password)}</td>
              <td>{truncate(admin.status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.admin({ id: admin.id })}
                    title={'Show admin ' + admin.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAdmin({ id: admin.id })}
                    title={'Edit admin ' + admin.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete admin ' + admin.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(admin.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminsList
