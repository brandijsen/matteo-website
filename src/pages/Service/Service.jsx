import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import services from '../../data/servicesData'; // Importa i dati
import {Link} from 'react-router-dom'
import projectsArray from '../../data/projectsData';


const Service = () => {
  const { serviceName } = useParams(); // Ottieni l'ID dal URL
 const service = services.find(s => 
    s.name.toLowerCase().replace(/\s+/g, '-') === serviceName
  );
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const timerRef = useRef(null); // Riferimento al timer

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
    resetTimer(); // Reset timer quando si apre il lightbox
  };

  const closeLightbox = () => {
    setIsOpen(false);
    clearInterval(timerRef.current); // Ferma il timer quando si chiude il lightbox
  };

  const nextImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % service.images.length);
    resetTimer();
  };

  const prevImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + service.images.length - 1) % service.images.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % service.images.length);
    }, 5000);
  };

  useEffect(() => {
    if (isOpen) {
      resetTimer(); // Avvia il timer solo se il lightbox è aperto
    }
    return () => clearInterval(timerRef.current); // Pulisce il timer quando il componente si smonta
  }, [isOpen]);

  if (!service) {
    return <p className="text-center text-red-500">Servizio non trovato.</p>;
  }

  return (
    <div className="pt-20">
      <section className="container mx-auto px-32 items-center gap-4 py-10">
        <h2 className="text-4xl text-center font-bold mb-6">{service.name}</h2>
        <p className="text-lg text-gray-700">{service.description}</p>
        <br />
        <p className="text-lg text-gray-700">{service.detailedDescription}</p>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {service.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`${service.name} ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg aspect-[4/3] transform transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-32 pb-10">

<Link to="/services">
  <button className="text-black hover:bg-black hover:text-white border-2 border-black py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out block mb-4">
    Torna ai servizi
  </button>
</Link>

<div className="flex items-center gap-4"> {/* Flexbox per allineare gli elementi sulla stessa riga */}
  <p className="mb-0"> {/* Elimina il margine inferiore per evitare spazi tra gli elementi */}
    Scopri i miei progetti e vedi come applico queste competenze nella realtà.
  </p>

  <Link
    to="/projects"
    className="text-black hover:bg-black hover:text-white border-2 border-black py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out"
  >
    Scopri di più
  </Link>
</div>

</section>



      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center">
              <img
                src={service.images[photoIndex]}
                alt={`${service.name} ${photoIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              {service.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${service.name} ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${index === photoIndex ? 'border-4 border-black' : ''}`}
                  onClick={() => {
                    setPhotoIndex(index);
                    resetTimer();
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-white rounded-full cursor-pointer ${photoIndex === 0 ? 'invisible' : ''}`}
            onClick={prevImage}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
          </div>

          <div
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-white rounded-full cursor-pointer ${photoIndex === service.images.length - 1 ? 'invisible' : ''}`}
            onClick={nextImage}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
          </div>

          <button
            className="absolute top-0 right-0 p-2 text-white rounded-full"
            onClick={closeLightbox}
          >
            <FontAwesomeIcon icon={faTimes} className="text-3xl hover:text-black" />
          </button>
        </div>
      )}

      <div>{projectsArray[1].nome}</div>
    </div>
  );
};

export default Service;
