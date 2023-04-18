import React from "react"

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-6'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <p className='text-gray-400'>Logo</p>
        </div>
        <div className='text-center text-gray-400 mb-4 md:mb-0'>
          <p className='text-xs md:text-base'>
            &copy; 2023 BlockBunch. All rights reserved.
          </p>
        </div>
        <div className='text-center'>
          <a href='#' className='text-gray-400 hover:text-gray-200'>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
