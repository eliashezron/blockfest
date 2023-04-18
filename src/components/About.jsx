import React from "react"

const About = () => {
  return (
    <div className='min-h-screen w-screen bg-gray-100 flex justify-center items-center'>
      <div className='max-w-2xl px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-2xl md:text-5xl font-bold text-center mb-4'>
          BlockBunch
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-gray-700 leading-7'>
          BlockBunch is a community of developers and educators who strive to
          promote the widespread adoption of blockchain technologies in Uganda.
          By demystifying complex blockchain concepts, the team actively
          participates in and organizes educational events to further their
          cause. BlockBunch remains committed to fostering the integration of
          blockchain technology within the Ugandan ecosystem, paving the way for
          innovative and transformative solutions.
        </p>
      </div>
    </div>
  )
}

export default About
