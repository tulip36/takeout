import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header className="mt-3">
        <h1 className="mb-3">BlogLayout</h1>
        <nav>
          <ul className="border border-solid space-x-4 text-green-500">
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.about()}>About</Link>
            <Link to={routes.posts()}>Posts</Link>
          </ul>
        </nav>
      </header>
      <main className="my-5">{children}</main>
    </>
  )
}

export default BlogLayout
