import { useState } from 'react';
import partner1 from '../../assets/images/stemma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const partners = [
  { name: "Comune di Monte San Martino", logo: partner1, url: "https://www.comune.montesanmartino.mc.it/" },
  { name: "Partner 2", logo: partner1, url: "" },
  { name: "Partner 3", logo: partner1, url: "" },
  { name: "Partner 4", logo: partner1, url: "" },
  { name: "Partner 5", logo: partner1, url: "" },
  { name: "Partner 6", logo: partner1, url: "" },
  { name: "Partner 7", logo: partner1, url: "" },
  { name: "Partner 8", logo: partner1, url: "" }
];

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePartners = 5;
  const maxIndex = partners.length - visiblePartners;

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
    <section id="partners" className="bg-gray-50 text-gray-900 overflow-y-hidden py-10">
      <div className="container mx-auto px-6 lg:px-32">
        <h3 className="text-3xl font-bold mb-16 text-center">Collaborazioni</h3>
        <div className="relative h-[250px] overflow-hidden">
          <div className="flex overflow-x-hidden h-full">
            <div className="flex transition-transform duration-300 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * (100 / visiblePartners)}%)` }}>
              {partners.map((partner, index) => (
                <div key={index} className="min-w-[20%] flex-shrink-0 h-full">
                  <div className="relative flex flex-col items-center justify-center p-4 h-full group">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
                      <img 
                        src={partner.logo} 
                        alt={`Logo di ${partner.name}`} 
                        className="object-contain max-h-full max-w-full" 
                      />
                    </a>
                    <div className="mt-2 text-center text-gray-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
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

export default PartnersSection;
