import Navbar from 'src/components/Navbar'

const LandingLayout = ({ children }) => {



  return(
 <div>
<Navbar></Navbar>

<main>{children}</main>
</div>
  )
}

export default LandingLayout
