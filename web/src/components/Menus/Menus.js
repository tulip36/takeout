import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MenusCell'

const DELETE_MENU_MUTATION = gql`
  mutation DeleteMenuMutation($id: Int!) {
    deleteMenu(id: $id) {
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

const MenusList = ({ menus }) => {
  const { addMessage } = useFlash()
  const [deleteMenu] = useMutation(DELETE_MENU_MUTATION, {
    onCompleted: () => {
      addMessage('Menu deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menu ' + id + '?')) {
      deleteMenu({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Menu id</th>
            <th>Prince</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Food id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu.id}>
              <td>{truncate(menu.MenuId)}</td>
              <td>{truncate(menu.Prince)}</td>
              <td>{timeTag(menu.StartDate)}</td>
              <td>{timeTag(menu.EndDate)}</td>
              <td>{truncate(menu.FoodId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.menu({ id: menu.id })}
                    title={'Show menu ' + menu.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMenu({ id: menu.id })}
                    title={'Edit menu ' + menu.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete menu ' + menu.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(menu.id)}
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

export default MenusList
