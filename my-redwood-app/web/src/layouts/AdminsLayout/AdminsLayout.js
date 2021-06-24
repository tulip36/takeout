import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const AdminsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.admins()} className="rw-link">
            Admins
          </Link>
        </h1>
        <Link to={routes.newAdmin()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Admin
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default AdminsLayout
