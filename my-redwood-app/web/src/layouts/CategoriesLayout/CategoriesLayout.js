import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const CategoriesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.categories()} className="rw-link">
            Categories
          </Link>
        </h1>
        <Link to={routes.newCategory()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Category
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default CategoriesLayout
