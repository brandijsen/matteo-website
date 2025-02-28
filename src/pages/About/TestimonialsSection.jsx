import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: "Giovanni Rossi",
    role: "Cliente",
    testimonial: "Questo servizio ha cambiato il mio modo di lavorare! Lo consiglio a tutti.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Maria Bianchi",
    role: "Cliente",
    testimonial: "Un'esperienza fantastica, molto professionale e attento alle esigenze del cliente.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Luca Verdi",
    role: "Collaboratore",
    testimonial: "Ottima qualità e serietà, sono felice di collaborare con questa realtà.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Elena Neri",
    role: "Cliente",
    testimonial: "Servizio impeccabile! Non potrei essere più soddisfatta.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Marco Gialli",
    role: "Utente",
    testimonial: "Consiglio vivamente questo servizio, è davvero utile e facile da usare.",
    image: "https://via.placeholder.com/150"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - 1; // Solo un elemento per volta

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === maxIndex;

  return (
    <section id="testimonials" className="py-10 bg-gray-50 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-32">
        <h2 className="text-3xl font-bold mb-6 text-center">Dicono di me</h2>
        <div className="relative h-[200px] overflow-hidden">
          <div className="flex flex-col items-center justify-center p-6 h-full shadow-lg rounded-lg group">
            
            <p className="text-lg text-center italic">&quot;{testimonials[currentIndex].testimonial}&quot;</p>
            <div className="mt-4 text-center">
              <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {!isPrevDisabled && (
            <button 
              onClick={prevSlide} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl p-2 opacity-75 hover:opacity-100"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          {!isNextDisabled && (
            <button 
              onClick={nextSlide} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl p-2 opacity-75 hover:opacity-100"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

