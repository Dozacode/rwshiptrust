import { Link, routes } from '@redwoodjs/router'
import LandingLayout from 'src/layouts/LandingLayout'
import Tailwindcard from 'src/components/Tailwindcard'
import FmeasLayout from 'src/layouts/FmeasLayout'
import NewFmea from 'src/components/NewFmea'
import DpatsLayout from 'src/layouts/DpatsLayout'


const HomePage = () => {
  return (


  <LandingLayout>

  <Tailwindcard></Tailwindcard>
  <FmeasLayout/>


<DpatsLayout/>
  </LandingLayout>
  )
}

export default HomePage


