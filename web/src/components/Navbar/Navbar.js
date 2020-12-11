import React from "react";
import logo from 'src/components/Navbar/shiptrustlogo.png'
import {Link,routes} from '@redwoodjs/router'


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-900 mb-3">


        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="/">
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
              <Link to={routes.home()}>Shiptrust</Link></span>


            </a>



            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="Shiptrust"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2"> <Link to={routes.bio()}>Bio</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="Shiptrust"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2"><Link to={routes.roadmap()}>Roadmap</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="Shiptrust"
                >
                  <i className="fab fa-facebook-square text-md leading-lg text-white opacity-75"></i><span className="ml-2"> <Link to={routes.contact()}>Contact</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="Shiptrust"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2"><Link to={routes.settings()}>Signin</Link></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>

    </>
  );
}
