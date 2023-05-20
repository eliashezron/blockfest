import img4 from '../assets/img/innovationVillageLogo.png'
import img3 from '../assets/img/worldcoinlogo.jpeg'
import celologo from '../assets/celo-logo.png'

const Sponsors = () => {
  return (
    <section
      className="flex items-center justify-center py-20 bg-white"
      id="sponsors"
    >
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl">
          Sponsors
        </h1>
        <div className="flex flex-row flex-wrap justify-evenly">
          <a
            href="https://innovationvillage.co.ug/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img4}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>

          <a href="https://celo.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={celologo}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>

          <a
            href="https://worldcoin.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img3}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>

          {/* <img
            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
            alt="sponsor"
            className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
          />
          <img
            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
            alt="sponsor"
            className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
          />
          <img
            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
            alt="sponsor"
            className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
          />
          <img
            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
            alt="sponsor"
            className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
          />
          <img
            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
            alt="sponsor"
            className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
