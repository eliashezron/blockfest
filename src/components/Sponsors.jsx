import img4 from '../assets/img/innovationVillageLogo.png'
import img3 from '../assets/img/worldcoinlogo.jpeg'
import celologo from '../assets/celo-logo.png'
import muda from '../assets/mudaLogo.png'
import ngeni from '../assets/ngeni.png'
import binusu from '../assets/binusu.png'
import base from '../assets/base.jpeg'
import motiv from '../assets/motivimg.jpeg'

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
        <div className="flex flex-row flex-wrap justify-evenly gap-2 justify-items-center">
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
          <a
            href="https://motiv.africa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={motiv}
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
          <a href="https://celo.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={celologo}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>
          <a href="https://ngeni.io/" target="_blank" rel="noopener noreferrer">
            <img
              src={ngeni}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>
          <a
            href="https://muda.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={muda}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>
          <a
            href="https://binusu.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={binusu}
              alt="sponsor"
              className="w-28 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>
          <a
            href="https://nileone.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={base}
              alt="sponsor"
              className="w-24 h-24 mx-1 mb-4 sm:w-32 sm:h-32 sm:mx-2"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
