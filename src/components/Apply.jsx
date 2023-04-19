import React from 'react'

const Apply = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-4 bg-apply-img bg-blend-darken md:p-0 ">
      <h2 className="my-5 text-4xl font-bold text-center text-white md:my-10">
        Apply to Join
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex-grow-0 flex-shrink-0 max-w-xs mx-4 mb-8 overflow-hidden bg-gray-100 rounded-lg shadow-lg sm:mb-0">
          <div className="px-6 py-8">
            <h3 className="mb-4 text-xl font-bold">Apply to be a Hacker</h3>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt lorem ac ipsum lobortis rhoncus.
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
            <a href="#" className="font-bold text-gray-800 hover:underline">
              Apply Now
            </a>
          </div>
        </div>

        <div className="flex-grow-0 flex-shrink-0 max-w-xs mx-4 mb-8 overflow-hidden bg-gray-100 rounded-lg shadow-lg sm:mb-0">
          <div className="px-6 py-8">
            <h3 className="mb-4 text-xl font-bold">Apply to be a Sponsor</h3>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt lorem ac ipsum lobortis rhoncus.
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
            <a href="#" className="font-bold text-gray-800 hover:underline">
              Apply Now
            </a>
          </div>
        </div>

        <div className="flex-grow-0 flex-shrink-0 max-w-xs mx-4 overflow-hidden bg-gray-100 rounded-lg shadow-lg">
          <div className="px-6 py-8">
            <h3 className="mb-4 text-xl font-bold">Apply to Speak</h3>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt lorem ac ipsum lobortis rhoncus.
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
            <a href="#" className="font-bold text-gray-800 hover:underline">
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
