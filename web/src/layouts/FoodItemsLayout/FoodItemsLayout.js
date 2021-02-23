import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const FoodItemsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.foodItems()} className="rw-link">
            FoodItems
          </Link>
        </h1>
        <Link to={routes.newFoodItem()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New FoodItem
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default FoodItemsLayout
