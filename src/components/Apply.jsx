import React from 'react'

const Apply = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen p-4 bg-apply-img bg-blend-darken md:p-0"
      id="apply"
    >
      <h2 className="my-5 text-4xl font-bold text-center text-white md:my-10">
        Apply to Join
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex-grow-0 flex-shrink-0 max-w-xs mx-4 mb-8 overflow-hidden bg-gray-100 rounded-lg shadow-lg sm:mb-0">
          <div className="px-6 py-8">
            <h3 className="mb-4 text-xl font-bold">Apply to be a Hacker</h3>
            <p className="text-base text-gray-700">
              Create innovative solutions for real-world problems using
              blockchain
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
            <a
              href="https://www.eventbrite.com/e/blockchain-devfest-2023-tickets-619578545107"
              className="font-bold text-gray-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="flex-grow-0 flex-shrink-0 max-w-xs mx-4 mb-8 overflow-hidden bg-gray-100 rounded-lg shadow-lg sm:mb-0">
          <div className="px-6 py-8">
            <h3 className="mb-4 text-xl font-bold">Apply to be a Sponsor</h3>
            <p className="text-base text-gray-700">
              support the next generation of East Africa's developers.
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
            <a
              href="https://forms.gle/PD6zgaYc3C5sw6iE8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-800 hover:underline"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="flex-grow-0 flex-shrink-0 max-w-xs mx-4 overflow-hidden bg-gray-100 rounded-lg shadow-lg">
          <div className="px-6 py-8">
            <h3 className="mb-4 text-xl font-bold">Apply to Speak</h3>
            <p className="text-base text-gray-700">
              Share your industry experience and expertise with the developer
              community in Uganda.
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
            <a
              href="https://forms.gle/cCUPrqHxejbgXT8E8"
              className="font-bold text-gray-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <style>
        {`@media screen and (max-width: 640px) {
          .max-w-xs {
            max-width: none;
            width: 100%;
          }
        }`}
      </style>
    </section>
  )
}

export default Apply
