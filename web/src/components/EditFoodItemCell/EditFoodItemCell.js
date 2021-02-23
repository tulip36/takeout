import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FoodItemForm from 'src/components/FoodItemForm'

export const QUERY = gql`
  query FIND_FOOD_ITEM_BY_ID($id: Int!) {
    foodItem: foodItem(id: $id) {
      FoodId
      Name
      Quantity
      UnitPrice
      CategoryId
    }
  }
`
const UPDATE_FOOD_ITEM_MUTATION = gql`
  mutation UpdateFoodItemMutation($id: Int!, $input: UpdateFoodItemInput!) {
    updateFoodItem(id: $id, input: $input) {
      FoodId
      Name
      Quantity
      UnitPrice
      CategoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ foodItem }) => {
  const { addMessage } = useFlash()
  const [updateFoodItem, { loading, error }] = useMutation(
    UPDATE_FOOD_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.foodItems())
        addMessage('FoodItem updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      FoodId: parseInt(input.FoodId),
      CategoryId: parseInt(input.CategoryId),
    })
    updateFoodItem({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit FoodItem {foodItem.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FoodItemForm
          foodItem={foodItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
