import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <Link to={routes.home()}>Home</Link>
      </MainLayout>
    </>
  )
}

export default AboutPage
