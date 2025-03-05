import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8"> {/* Cambiato da bg-gray-800 a bg-gray-900 */}
      <div className="container mx-auto px-32">
        {/* Navbar nel footer */}
        <nav className="flex justify-center space-x-8 mb-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">Chi sono</a>
          <a href="/services" className="hover:text-gray-400">Servizi</a>
          <a href="/projects" className="hover:text-gray-400">Progetti</a>
          <a href="/contact" className="hover:text-gray-400">Contattami</a>
        </nav>

        {/* Icone Social */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" className="text-2xl hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-2xl hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>

        {/* Nome con simbolo C cerchiata */}
        <div className="text-center">
          <p className="text-sm">
            © 2025 Geologo Marco Rossi <span className="text-lg"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
