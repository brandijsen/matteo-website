// src/pages/ServicesPage.jsx
import { Link } from "react-router-dom";
import ServicesSection from "../Home/ServicesSection";

const ServicesPage = () => {
  return (
<div id="services" className="pt-20">      
      {/* Sezione servizi */}
      <ServicesSection />
      <section className="container mx-auto px-32 flex items-center gap-4 pb-10">
  <p>Scopri i miei progetti e vedi come applico queste competenze nella realtà.</p>  
  <Link
    to="/projects"
    className="text-black hover:bg-black hover:text-white border-2 border-black py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out"
  >
    Scopri di più
  </Link>
</section>

    </div>
  );
};

export default ServicesPage;
