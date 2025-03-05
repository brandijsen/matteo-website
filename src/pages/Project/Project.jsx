import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import projectsArray from "../../data/projectsData"; // Assumendo che i dati siano in questo file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  // Ottieni l'ID del progetto dalla URL
  const { projectId } = useParams();

  // Trova il progetto corrispondente all'ID
  const progetto = projectsArray.find((project) => project.id === parseInt(projectId));

  // Stati per gestire il lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const timerRef = useRef(null); // Riferimento al timer

  // Funzione per aprire il lightbox
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
    resetTimer(); // Reset timer quando si apre il lightbox
  };

  // Funzione per chiudere il lightbox
  const closeLightbox = () => {
    setIsOpen(false);
    clearInterval(timerRef.current); // Ferma il timer quando si chiude il lightbox
  };

  // Funzione per la navigazione all'immagine successiva
  const nextImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % progetto.images.length);
    resetTimer();
  };

  // Funzione per la navigazione all'immagine precedente
  const prevImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + progetto.images.length - 1) % progetto.images.length);
    resetTimer();
  };

  // Funzione per resettare il timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % progetto.images.length);
    }, 5000);
  };

  useEffect(() => {
    if (isOpen) {
      resetTimer(); // Avvia il timer solo se il lightbox è aperto
    }
    return () => clearInterval(timerRef.current); // Pulisce il timer quando il componente si smonta
  }, [isOpen]);

  if (!progetto) {
    return <p className="text-center text-red-500">Progetto non trovato.</p>;
  }

  return (
    <div id="projects" className="pt-20">
      <section className="py-10 container mx-auto px-32 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">{progetto.nome}</h2>
        <h3><strong>{progetto.service}</strong></h3>
        <br/>
        <p><strong>{progetto.periodo}</strong></p>
<br/>
        <p>{progetto.descrizione}</p>
        <br/>
        <p><strong>Beneficiario:</strong> {progetto.beneficiario}</p>
        <br/>   

        <div className="mt-5">
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {progetto.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg aspect-[4/3] transform transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center">
              <img
                src={progetto.images[photoIndex]}
                alt={`Foto ${photoIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              {progetto.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Foto ${index + 1}`}
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
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-white rounded-full cursor-pointer ${photoIndex === progetto.images.length - 1 ? 'invisible' : ''}`}
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
    </div>
  );
};

export default Project;
