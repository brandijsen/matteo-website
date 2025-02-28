import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdBadge } from 'react-icons/fa';

const Contact = () => {
  return (
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-64">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
      Contattami
    </h2>
    <p className="text-center text-gray-700 mb-12">
      Sono qui per rispondere a tutte le tue domande. Non esitare a contattarmi!
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Dettagli di contatto */}
      <div className="space-y-6">
        <div className="flex items-center">
          <FaUser className="text-gray-800 mr-4" />
          <div>
            <p className="text-gray-700">Geologo Matteo Pompei</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-gray-800 mr-4" />
          <div>
            <p className="text-gray-700">email@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-800 mr-4" />
          <div>
            <p className="text-gray-700">+39 123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-gray-800 mr-4" />
          <div>
            <p className="text-gray-700">
              Via Molino, 17<br />
              62020 Monte San Martino (MC), Italia
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaIdBadge className="text-gray-800 mr-4" />
          <div>
            <p className="text-gray-700">P. IVA: 12345678901</p>
          </div>
        </div>
      </div>

      {/* Mappa di Google con marker */}
      <div className="flex justify-end">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.7876383367948!2d13.450583476672596!3d43.02485687113896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132dfe7847f195e9%3A0xf5c55c7af17f1727!2sContrada%20Molino%2C%2017%2C%2062020%20Molino%20MC!5e0!3m2!1sit!2sit!4v1736295924603!5m2!1sit!2sit"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>



  );
};

export default Contact;
