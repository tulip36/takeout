import FoodItemsLayout from 'src/layouts/FoodItemsLayout'
import EditFoodItemCell from 'src/components/EditFoodItemCell'

const EditFoodItemPage = ({ id }) => {
  return (
    <FoodItemsLayout>
      <EditFoodItemCell id={id} />
    </FoodItemsLayout>
  )
}

export default EditFoodItemPage
