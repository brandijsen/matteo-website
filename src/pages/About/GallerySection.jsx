import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import serv1 from '../../assets/images/serv1.jpg';
import serv2 from '../../assets/images/serv2.jpg';
import serv3 from '../../assets/images/serv3.jpg';

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const timerRef = useRef(null); // Riferimento al timer

  const images = [
    { src: serv1, alt: 'Immagine 1' },
    { src: serv2, alt: 'Immagine 2' },
    { src: serv3, alt: 'Immagine 3' },
  ];

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
    setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const prevImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    if (isOpen) {
      resetTimer(); // Avvia il timer solo se il lightbox è aperto
    }
    return () => clearInterval(timerRef.current); // Pulisce il timer quando il componente si smonta
  }, [isOpen]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-32">
        <h3 className="text-3xl font-bold mb-16 text-center">Galleria</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center">
              <img
                src={images[photoIndex].src}
                alt={images[photoIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                    index === photoIndex ? 'border-4 border-black' : ''
                  }`}
                  onClick={() => {
                    setPhotoIndex(index);
                    resetTimer();
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-white rounded-full cursor-pointer ${
              photoIndex === 0 ? 'invisible' : ''
            } hover:text-black`}
            onClick={prevImage}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
          </div>

          <div
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-white rounded-full cursor-pointer ${
              photoIndex === images.length - 1 ? 'invisible' : ''
            } hover:text-black`}
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
    </section>
  );
};

export default GallerySection;
