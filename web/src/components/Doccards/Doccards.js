import { Form,TextField,Submit } from '@redwoodjs/forms'
import logo from 'src/components/Navbar/shiptrustlogo.png'
import wood from 'src/components/Doccards/wood.jpg'
const Doccards = () => {
  return (
    <div className="min-h-screen flex items-center bg-fixed bg-gray-500 ">
    <div className="flex-1 max-w-4xl mx-auto ">

    <ul className="grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-7">

<li className="bg-white rounded-lg shadow-xl text-center" ><h1 classname="text-center ">test</h1><div className="h-52 w-12"></div></li>
<li className="bg-white rounded-lg shadow-xl text-center" ><h1 classname="text-center ">test</h1><div className="h-52 w-12"></div></li>
<li className="bg-white rounded-lg shadow-xl text-center" ><h1 classname="text-center ">test</h1><div className="h-52 w-12"></div></li>
<li className="bg-white rounded-lg shadow-xl text-center" > <img className="object-top" src={logo} alt="Shiptrust" /><h1 classname="text-center ">test</h1><div className="h-52 w-12"></div></li>

    </ul>
    </div>
    </div>
      )
}

export default Doccards
