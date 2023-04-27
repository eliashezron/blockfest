import React from 'react'

const Gallery = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="my-5 text-4xl font-bold text-center text-black md:my-10">
        Gallery
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="https://via.placeholder.com/400x400" alt="Image 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x400" alt="Image 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x400" alt="Image 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/400x400" alt="Image 4" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
