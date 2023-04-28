import React from 'react'
import img1 from '../assets/img/dvf2.jpeg'
import img2 from '../assets/img/bdf13.jpeg'
import img3 from '../assets/img/bdf3.jpeg'
import img4 from '../assets/img/bdf11.jpeg'

const Gallery = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="my-5 text-4xl font-bold text-center text-black md:my-10">
        Gallery (DEVFEST '22)
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={img2} alt="Image 1" />
        </div>
        <div>
          <img src={img1} alt="Image 2" />
        </div>
        <div>
          <img src={img4} alt="Image 3" />
        </div>
        <div>
          <img src={img3} alt="Image 4" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
