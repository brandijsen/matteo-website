// src/pages/Home.jsx

import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ContactSection from './ContactSection'

const Home = () => {
  return (
    <div id="home" className="pt-20">
    <HeroSection /> 
    <AboutSection />
    <ServicesSection />
    <ContactSection />
    </div>
  )
}

export default Home
