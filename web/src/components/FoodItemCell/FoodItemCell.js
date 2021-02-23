import FoodItem from 'src/components/FoodItem'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>FoodItem not found</div>

export const Success = ({ foodItem }) => {
  return <FoodItem foodItem={foodItem} />
}
