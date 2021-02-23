import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Link to={routes.about()}>go to About</Link>
      </MainLayout>
    </>
  )
}

export default HomePage