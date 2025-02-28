import { useState, useEffect } from 'react';
import backgroundImageHS1 from '../../assets/images/bgimage.jpg';
import backgroundImageHS2 from '../../assets/images/serv6.jpg';
import backgroundImageHS3 from '../../assets/images/serv2.jpg'; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroSection = () => {
  const backgroundImages = [
    backgroundImageHS1,
    backgroundImageHS2,
    backgroundImageHS3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // Stato per la dissolvenza
  const [isImageChanging, setIsImageChanging] = useState(false); // Stato per gestire il cambio immagine

  useEffect(() => {
    // Cambia l'immagine ogni 10 secondi con una transizione di dissolvenza
    const changeImage = () => {
      if (isImageChanging) return; // Evita di cambiare l'immagine durante il processo
      setIsImageChanging(true); // Imposta che l'immagine sta cambiando
      setFade(false); // Rimuove la dissolvenza

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(true); // Riapplica la dissolvenza
      }, 500); // Ridotto a 500ms per una transizione più veloce

      setTimeout(() => {
        setIsImageChanging(false); // Permette il cambio immagine successivo
      }, 1500); // Ridotto a 1500ms per velocizzare il processo
    };

    const intervalId = setInterval(changeImage, 10000); // Ogni 10 secondi

    return () => clearInterval(intervalId); // Pulisce l'intervallo
  }, [currentImageIndex, isImageChanging]);

  const handlePrevImage = () => {
    if (isImageChanging) return;
    setIsImageChanging(true);
    setFade(false);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1));
      setFade(true);
    }, 500); // Ridotto a 500ms

    setTimeout(() => {
      setIsImageChanging(false);
    }, 1500); // Ridotto a 1500ms
  };

  const handleNextImage = () => {
    if (isImageChanging) return;
    setIsImageChanging(true);
    setFade(false);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setFade(true);
    }, 500); // Ridotto a 500ms

    setTimeout(() => {
      setIsImageChanging(false);
    }, 1500); // Ridotto a 1500ms
  };

  const handleDotClick = (index) => {
    if (isImageChanging) return;
    setIsImageChanging(true);
    setFade(false);

    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(true);
    }, 500); // Ridotto a 500ms

    setTimeout(() => {
      setIsImageChanging(false);
    }, 1500); // Ridotto a 1500ms
  };

  return (
    <section className="hero-container">
      {/* Immagine di sfondo con dissolvenza e zoom */}
      <div
        className={`hero-background ${fade ? 'show zoom' : ''}`}
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      ></div>

      {/* Overlay per migliorare la leggibilità del testo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto con animaizione che parte da zero ogni cambio immagine */}
      <div
        key={currentImageIndex} // Cambia il key ad ogni cambio di immagine
        className={`relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6 hero-content ${fade ? 'show' : ''}`}
      >
        <h1 className="text-5xl font-bold leading-tight mb-4">Geologo Matteo Pompei</h1>
        <p className="text-lg mb-6">
          Esplora i servizi che offriamo per l&rsquo;analisi e lo studio del terreno.
        </p>
  {/* Bottone Servizi */}
  

  {/* Bottone Contattami */}
  <a
  href="#contact"
  className="bg-transparent text-white hover:bg-white hover:text-black border-2 border-white py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out"
>
  Contattami
</a>






        
      </div>

      {/* Navigazione immagini */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 z-20">
        <button onClick={handlePrevImage} className="bg-transparent p-4">
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-3xl" />
        </button>
        <button onClick={handleNextImage} className="bg-transparent p-4">
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-3xl" />
        </button>
      </div>

      {/* Pallini di navigazione */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${currentImageIndex === index ? 'scale-150' : 'scale-100'} hover:scale-125`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
