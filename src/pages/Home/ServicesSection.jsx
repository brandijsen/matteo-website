import { Link } from 'react-router-dom';
import serviceImage1 from '../../assets/images/serv1.jpg';
import serviceImage2 from '../../assets/images/serv2.jpg';
import serviceImage3 from '../../assets/images/serv3.jpg';
import serviceImage4 from '../../assets/images/serv4.jpg';
import serviceImage5 from '../../assets/images/serv5.jpg';
import serviceImage6 from '../../assets/images/serv6.jpg';
import services from '../../data/servicesData';


const formatServiceName = (name) => name.toLowerCase().replace(/\s+/g, '-');


const servicesWithImages = services.map(service => ({
  ...service,
  image: service.id === 1 ? serviceImage1 : 
         service.id === 2 ? serviceImage2 :
         service.id === 3 ? serviceImage3 :
         service.id === 4 ? serviceImage4 :
         service.id === 5 ? serviceImage5 : serviceImage6
}));

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-10 container mx-auto px-32 bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">I Servizi che offro</h2>
      <p className="text-lg text-gray-700 mb-10 hidden" id="services-summary">
  Offro una gamma completa di servizi geologici per garantire sicurezza, sostenibilità e affidabilità in ogni progetto.  
  Grazie alla mia esperienza e all&rsquo;uso di tecnologie avanzate, supporto imprese, enti pubblici e privati nella gestione del territorio e delle risorse ambientali.  
  <br /><br />
  I miei servizi includono:  
  <strong> Analisi Geologiche</strong>,  
  <strong> Consulenza Ambientale</strong>,  
  <strong> Studi Sismici</strong>,   
  <strong> Progetti di Infrastrutture</strong>,  
  <strong> Monitoraggio Ambientale</strong>,   
  <strong> Ricerca Sostenibile</strong>.  
  <br /><br />
  Ogni progetto è studiato con attenzione e competenza per fornire soluzioni affidabili, innovative e su misura per le esigenze del cliente.
</p>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesWithImages.map(service => (
          <div key={service.id} className="relative group">
          <h3 className="text-2xl font-semibold text-center mb-4">{service.name}</h3>

            <div className="w-full h-64 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-60 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white mb-4">{service.description}</p>
                <Link to={`/service/${formatServiceName(service.name)}`}>
  <button className="bg-transparent text-white hover:bg-white hover:text-black border-2 border-white py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out">
    Scopri di più
  </button>
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
