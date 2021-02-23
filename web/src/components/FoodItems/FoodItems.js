import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodItemsCell'

const DELETE_FOOD_ITEM_MUTATION = gql`
  mutation DeleteFoodItemMutation($id: Int!) {
    deleteFoodItem(id: $id) {
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

const FoodItemsList = ({ foodItems }) => {
  const { addMessage } = useFlash()
  const [deleteFoodItem] = useMutation(DELETE_FOOD_ITEM_MUTATION, {
    onCompleted: () => {
      addMessage('FoodItem deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete foodItem ' + id + '?')) {
      deleteFoodItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Food id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Category id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((foodItem) => (
            <tr key={foodItem.id}>
              <td>{truncate(foodItem.FoodId)}</td>
              <td>{truncate(foodItem.Name)}</td>
              <td>{truncate(foodItem.Quantity)}</td>
              <td>{truncate(foodItem.UnitPrice)}</td>
              <td>{truncate(foodItem.CategoryId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.foodItem({ id: foodItem.id })}
                    title={'Show foodItem ' + foodItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFoodItem({ id: foodItem.id })}
                    title={'Edit foodItem ' + foodItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete foodItem ' + foodItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(foodItem.id)}
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

export default FoodItemsList
