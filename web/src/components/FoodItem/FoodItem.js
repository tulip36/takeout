import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodItemsCell'

const DELETE_FOOD_ITEM_MUTATION = gql`
  mutation DeleteFoodItemMutation($id: Int!) {
    deleteFoodItem(id: $id) {
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

const FoodItem = ({ foodItem }) => {
  const { addMessage } = useFlash()
  const [deleteFoodItem] = useMutation(DELETE_FOOD_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.foodItems())
      addMessage('FoodItem deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete foodItem ' + id + '?')) {
      deleteFoodItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            FoodItem {foodItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Food id</th>
              <td>{foodItem.FoodId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{foodItem.Name}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{foodItem.Quantity}</td>
            </tr>
            <tr>
              <th>Unit price</th>
              <td>{foodItem.UnitPrice}</td>
            </tr>
            <tr>
              <th>Category id</th>
              <td>{foodItem.CategoryId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFoodItem({ id: foodItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(foodItem.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default FoodItem
