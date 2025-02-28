import AboutDetails from "./AboutDetails";
import PartnersSection from './PartnersSection'
import GallerySection from './GallerySection'

const About = () => {
  return (
    <div id="about" className="pt-20"> {/* Tailwind padding-top utility class */}
      <AboutDetails />
      <GallerySection />
      <PartnersSection />
    </div>
  );
};

export default About;
