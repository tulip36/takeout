import { Link, routes } from '@redwoodjs/router'

import FoodItems from 'src/components/FoodItems'

export const QUERY = gql`
  query FOOD_ITEMS {
    foodItems {
      FoodId
      Name
      Quantity
      UnitPrice
      CategoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No foodItems yet. '}
      <Link to={routes.newFoodItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ foodItems }) => {
  return <FoodItems foodItems={foodItems} />
}
