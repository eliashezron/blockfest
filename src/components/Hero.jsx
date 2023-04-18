import React from "react"

const Home = () => {
  return (
    <div className='h-screen-viewport-nav flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4'>
          Welcome to the Blockchain DevFest
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-gray-600 mb-8'>
          Join us for an exciting week leading up to the main event, where we'll
          host an ideathon that encourages participants to generate and refine
          ideas for potential blockchain applications that address pressing
          African challenges.
        </p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
