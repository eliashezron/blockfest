import React from 'react'

const About = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-screen "
      id="about"
    >
      <div className="max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-center md:text-5xl">
          About BlockBunch
        </h1>
        <p className="text-base leading-7 text-gray-700 sm:text-lg md:text-2xl">
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
