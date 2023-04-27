import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ligula eu purus vestibulum interdum. Donec ultrices varius dolor, vel blandit nibh. Duis sed tincidunt orci, eu lacinia enim.',
  },
  {
    name: 'Jane Doe',
    image: 'https://via.placeholder.com/150',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ligula eu purus vestibulum interdum. Donec ultrices varius dolor, vel blandit nibh. Duis sed tincidunt orci, eu lacinia enim.',
  },
  {
    name: 'Mark Smith',
    image: 'https://via.placeholder.com/150',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ligula eu purus vestibulum interdum. Donec ultrices varius dolor, vel blandit nibh. Duis sed tincidunt orci, eu lacinia enim.',
  },
]

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <section className="container mx-auto my-8">
      <h2 className="my-5 text-4xl font-bold text-center text-black md:my-10">
        Testimonials
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="px-8">
            <div className="flex flex-col items-center justify-center">
              <img
                className="rounded-full mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-gray-800 font-light text-sm">
                {testimonial.testimonial}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
