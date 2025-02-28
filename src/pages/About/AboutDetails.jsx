// src/pages/Home/AboutDetails.jsx

import aboutSectionPic from '../../assets/images/aboutSectionPic.jpg'; // Import dell'immagine
import curriculum from '../../assets/docs/prova.pdf'; // Import del PDF del curriculum

const AboutDetails = () => {
  return (
    <section className="py-10 bg-gray-50 text-gray-900"> {/* Ridotto il padding-bottom */}
      <div className="container mx-auto px-32">
        {/* Titolo e Sottotitolo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Chi Sono</h2>
          <p className="text-lg text-gray-700 mt-4">
            Scopri di più sulla mia attività, sulla mia storia, sulla mission e i valori che mi guidano.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Colonna di Foto */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <img
              src={aboutSectionPic}
              alt="Foto 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Colonna di Testi */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">Esperienza</h3>
              <p className="text-gray-700 mt-4">
              Sono un geologo con oltre 10 anni di esperienza nell&rsquo;analisi e nello studio del terreno. Fin da giovane, la mia curiosità per la Terra e i suoi misteri mi ha spinto a intraprendere questo affascinante percorso professionale. Ho lavorato a stretto contatto con enti pubblici e aziende private, affrontando sfide legate alla gestione del rischio geologico, alla tutela ambientale e alla valutazione del sottosuolo per progetti edilizi e infrastrutturali.
              </p>
              <p className="text-gray-700 mt-4">
              La mia passione per la geologia non si limita solo agli studi accademici, ma si estende anche alla ricerca e all&rsquo;applicazione di tecnologie innovative per raccogliere e analizzare dati geospaziali. Credo fermamente nell&rsquo;importanza di utilizzare metodi scientifici avanzati per affrontare le problematiche ambientali e contribuire alla creazione di soluzioni sostenibili che possano fare la differenza per le generazioni future.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">Mission e Vision</h3>
              <p className="text-gray-700 mt-4">
              Il mio obiettivo è fornire soluzioni geologiche precise e tempestive per garantire la sicurezza e la sostenibilità ambientale dei progetti edilizi e infrastrutturali. Credo nell&rsquo;importanza di una gestione responsabile delle risorse naturali e nell&rsquo;uso delle tecnologie più avanzate per studiare il sottosuolo e l&rsquo;ambiente. La mia missione è fare in modo che ogni progetto, grande o piccolo che sia, venga realizzato nel pieno rispetto dell&rsquo;ambiente, riducendo al minimo l&rsquo;impatto ecologico e salvaguardando la sicurezza delle persone.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Valori</h3>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                <li>Integrità</li>
                <li>Qualità</li>
                <li>Innovazione</li>
                <li>Rispetto per l&rsquo;ambiente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottone per "Scarica il Curriculum" */}
{/* Bottone per il download del curriculum */}
<div className="flex justify-center mt-10">
              <a
                href={curriculum} // Percorso del file del curriculum
                download
                className="bg-transparent text-black hover:bg-black hover:text-white border-2 border-black py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out"
              >
                Scarica il Curriculum
              </a>
            </div>
      </div>
    </section>
  );
};

export default AboutDetails;
