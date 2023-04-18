import React from "react"

const Apply = () => {
  return (
    <section className='py-20'>
      <h2 className='text-3xl text-center font-bold mb-10'>Apply to Join</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='max-w-xs mx-4 flex-grow-0 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-0'>
          <div className='px-6 py-8'>
            <h3 className='text-xl font-bold mb-4'>Apply to be a Hacker</h3>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt lorem ac ipsum lobortis rhoncus.
            </p>
          </div>
          <div className='bg-gray-200 px-6 py-4 flex items-center justify-between'>
            <a href='#' className='text-gray-800 font-bold hover:underline'>
              Apply Now
            </a>
          </div>
        </div>

        <div className='max-w-xs mx-4 flex-grow-0 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-0'>
          <div className='px-6 py-8'>
            <h3 className='text-xl font-bold mb-4'>Apply to be a Sponsor</h3>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt lorem ac ipsum lobortis rhoncus.
            </p>
          </div>
          <div className='bg-gray-200 px-6 py-4 flex items-center justify-between'>
            <a href='#' className='text-gray-800 font-bold hover:underline'>
              Apply Now
            </a>
          </div>
        </div>

        <div className='max-w-xs mx-4 flex-grow-0 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
          <div className='px-6 py-8'>
            <h3 className='text-xl font-bold mb-4'>Apply to Speak</h3>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt lorem ac ipsum lobortis rhoncus.
            </p>
          </div>
          <div className='bg-gray-200 px-6 py-4 flex items-center justify-between'>
            <a href='#' className='text-gray-800 font-bold hover:underline'>
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
