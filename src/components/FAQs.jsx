import { useState } from 'react'

const FAQs = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: 'What is BlockBunch?',
      answer:
        'BlockBunch is a platform that connects hackers with sponsors and speakers to organize and participate in hackathons and events related to blockchain and other emerging technologies.',
    },
    {
      question: 'How do I apply to be a hacker?',
      answer:
        'To apply as a hacker, you need to visit our Apply page and fill out the form with your personal information, experience, and interests.',
    },
    {
      question: 'How do I become a sponsor?',
      answer:
        "If you're interested in becoming a sponsor, you can contact us through our Contact page or email us at sponsors@blockbunch.com.",
    },
    {
      question: 'How can I become a speaker?',
      answer:
        'To become a speaker, you need to fill out the Speaker Application form on our website with your personal and professional information, topics of interest, and speaking experience.',
    },
    {
      question: 'How can I get in touch with BlockBunch?',
      answer:
        'You can contact us through our Contact page, email us at contact@blockbunch.com, or follow us on our social media channels.',
    },
  ])

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <footer className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 pt-11">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">FAQs</h2>
        <div className="flex flex-col space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="px-4 py-6 bg-white rounded-lg shadow sm:px-6 md:px-8"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FAQs
