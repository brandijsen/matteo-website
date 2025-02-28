import { Link } from "react-router-dom"; // Per aggiungere i link alla navbar
import logo from '../assets/images/logonuovo.png'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-32 py-4 bg-gray-50 text-gray-900 shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-16" />
      </div>

      {/* Navbar */}
      <nav className="flex items-center space-x-6 text-lg"> {/* Modificato per rimanere in orizzontale */}
        <Link to="/" className="hover:text-gray-600">Home</Link>
        <Link to="/about" className="hover:text-gray-600">Chi sono</Link>

  <Link to="/services" className="hover:text-gray-600">Servizi</Link>
  

        <Link to="/projects" className="hover:text-gray-600">Progetti</Link>
        <Link to="/contact" className="hover:text-gray-600">Contattami</Link>
      </nav>
    </header>
  );
};

export default Header;
