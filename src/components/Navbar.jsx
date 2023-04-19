import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative flex flex-wrap items-center justify-between flex-1 p-6 bg-white bg-white-100">
      <div className="flex items-center flex-1 text-white">
        <span className="text-xl font-semibold tracking-tight text-neutral-700">
          Logo
        </span>
      </div>

      <div className="flex md:hidden" onClick={toggleMenu}>
        <RxHamburgerMenu size={22} />
      </div>

      {isOpen && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col w-full h-screen p-5 bg-white">
          <button
            className="flex items-center self-end px-3 py-2"
            onClick={toggleMenu}
          >
            <GrClose size={25} />
          </button>

          <div className="flex flex-col items-center flex-1 pt-16">
            <Link to="/" className="block mb-8 text-3xl font-light">
              About
            </Link>
            <Link to="/" className="block mb-8 text-3xl font-light">
              Apply
            </Link>
            <Link to="/" className="block mb-8 text-3xl font-light">
              Sponsors
            </Link>
            <Link to="/" className="block mb-8 text-3xl font-light">
              Sign In
            </Link>
            <Link to="/" className="block text-3xl font-light ">
              Sign Up
            </Link>
          </div>
        </div>
      )}

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className="flex items-center flex-1 text-sm lg:flex-grow">
          <Link
            to="/"
            className="block text-lg font-light lg:inline-block lg:mt-0 hover:text-neutral-300"
          >
            About
          </Link>
          <Link
            to="/"
            className="block mx-6 text-lg font-light lg:inline-block lg:mt-0 hover:text-neutral-300"
          >
            Apply
          </Link>
          <Link
            to="/sponsors"
            className="block text-lg font-light lg:inline-block lg:mt-0 hover:text-neutral-300"
          >
            Sponsors
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="block mt-4 mr-4 text-teal-400 lg:inline-block lg:mt-0 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/"
            className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
