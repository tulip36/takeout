import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FoodItemForm from 'src/components/FoodItemForm'

import { QUERY } from 'src/components/FoodItemsCell'

const CREATE_FOOD_ITEM_MUTATION = gql`
  mutation CreateFoodItemMutation($input: CreateFoodItemInput!) {
    createFoodItem(input: $input) {
      id
    }
  }
`

const NewFoodItem = () => {
  const { addMessage } = useFlash()
  const [createFoodItem, { loading, error }] = useMutation(
    CREATE_FOOD_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.foodItems())
        addMessage('FoodItem created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      FoodId: parseInt(input.FoodId),
      CategoryId: parseInt(input.CategoryId),
    })
    createFoodItem({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New FoodItem</h2>
      </header>
      <div className="rw-segment-main">
        <FoodItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFoodItem
