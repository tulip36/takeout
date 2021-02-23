import FoodItemsLayout from 'src/layouts/FoodItemsLayout'
import FoodItemCell from 'src/components/FoodItemCell'

const FoodItemPage = ({ id }) => {
  return (
    <FoodItemsLayout>
      <FoodItemCell id={id} />
    </FoodItemsLayout>
  )
}

export default FoodItemPage
