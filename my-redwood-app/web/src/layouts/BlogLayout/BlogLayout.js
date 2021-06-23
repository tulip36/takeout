import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header className="space-y-3">
        <h1>BlogLayout</h1>
        <nav>
          <ul className="border border-solid space-x-4 text-green-500">
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.about()}>About</Link>
            <Link to={routes.posts()}>Posts</Link>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
