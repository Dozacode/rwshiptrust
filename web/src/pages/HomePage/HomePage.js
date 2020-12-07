import { Link, routes } from '@redwoodjs/router'
import LandingLayout from 'src/layouts/LandingLayout'
import Tailwindcard from 'src/components/Tailwindcard'

const HomePage = () => {
  return (
    <>
  <LandingLayout/>
  <Tailwindcard></Tailwindcard>
    </>
  )
}

export default HomePage


