import serviceImage1 from '../assets/images/serv1.jpg';
import serviceImage2 from '../assets/images/serv2.jpg';
import serviceImage3 from '../assets/images/serv3.jpg';
import serviceImage4 from '../assets/images/serv4.jpg';
import serviceImage5 from '../assets/images/serv5.jpg';
import serviceImage6 from '../assets/images/serv6.jpg';

const projectsArray = [
    {
        id: 1,
        nome: "Studio Geologico del Bacino del Fiume Po",
        descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",
        periodo: "2023-2024",
        beneficiario: "Regione Emilia-Romagna",
        service: "Analisi Geologiche",
        images: [serviceImage1, serviceImage2, serviceImage3], 
       
      },
      {
        id: 2,
        nome: "Mappatura Geologica della Costa Siciliana",
        descrizione: "Studio delle formazioni rocciose e del rischio erosione lungo la costa siciliana. L'indagine include rilievi sul campo, l'uso di droni per la scansione della costa e l'analisi comparativa con dati storici per prevedere scenari futuri e proporre strategie di mitigazione dell'erosione.",
        periodo: "2022-2023",
        beneficiario: "Comune di Palermo",
        service: "Analisi Geologiche",
              images: [serviceImage1, serviceImage2, serviceImage3], 
        
      },
      {
        id: 3,
        nome: "Valutazione Geotecnica per la Costruzione di un Tunnel",
        descrizione: "Analisi del sottosuolo per la sicurezza della galleria ferroviaria. Il progetto ha coinvolto prove di penetrazione dinamica, analisi geofisiche con onde sismiche e modellazione tridimensionale del terreno per individuare le caratteristiche meccaniche del sottosuolo e garantire la sicurezza strutturale.",
        periodo: "2021-2022",
        beneficiario: "Ferrovie dello Stato",
        service: "Analisi Geologiche",
              images: [serviceImage1, serviceImage2, serviceImage3], 
        
      },
    {
        id: 4,

      nome: "Caratterizzazione del Sottosuolo per un Nuovo Aeroporto",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",      periodo: "2024",
      beneficiario: "Aeroporti di Roma",
      service: "Analisi Geologiche",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 5,

      nome: "Piano di Risanamento del Lago Trasimeno",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",     periodo: "2023-2025",
      beneficiario: "Regione Umbria",
      service: "Consulenza Ambientale",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 6,

      nome: "Bonifica di un Sito Industriale Contaminato",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",      periodo: "2022-2023",
      beneficiario: "Ente pubblico locale",
      service: "Consulenza Ambientale",
           images: [serviceImage1, serviceImage2, serviceImage3], 
     
    },
    {
        id: 7,

      nome: "Monitoraggio dell’Inquinamento Atmosferico in Area Metropolitana",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2021-2024",
      beneficiario: "Comune di Milano",
      service: "Consulenza Ambientale",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 8,

      nome: "Analisi dell’Impatto Ambientale di un Parco Eolico",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2023-2024",
      beneficiario: "Azienda Energetica Nazionale",
      service: "Consulenza Ambientale",
           images: [serviceImage1, serviceImage2, serviceImage3], 
     
    },
    {
        id: 9,

      nome: "Mappatura della Sismicità della Regione Calabria",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2022-2023",
      beneficiario: "Protezione Civile",
      service: "Studi Sismici",
           images: [serviceImage1, serviceImage2, serviceImage3], 
     
    },
    {
        id: 10,

      nome: "Monitoraggio delle Faglie Attive in Appennino",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2021-2024",
      beneficiario: "Università di Bologna",
      service: "Studi Sismici",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 11,

      nome: "Progetto di Adeguamento Sismico per Edifici Pubblici",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2024-2025",
      beneficiario: "Comune di Firenze",
      service: "Studi Sismici",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 12,

      nome: "Rilievo Sismico in Area Vulcanica",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2023",
      beneficiario: "Istituto Nazionale di Geofisica e Vulcanologia",
      service: "Studi Sismici",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 13,

      nome: "Piano di Costruzione di un Viadotto Antisismico",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2024-2026",
      beneficiario: "Ministero delle Infrastrutture",
      service: "Progetti di Infrastrutture",
           images: [serviceImage1, serviceImage2, serviceImage3], 
     
    },
    {
        id: 14,

      nome: "Progetto per la Metropolitana di Napoli",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2023-2025",
      beneficiario: "Comune di Napoli",
      service: "Progetti di Infrastrutture",
            images: [serviceImage1, serviceImage2, serviceImage3], 
      
    },
    {
        id: 15,

      nome: "Recupero e Riuso delle Acque Reflue in Agricoltura",
descrizione: "Analisi stratigrafica e morfologica del bacino del Po per valutare la stabilità del terreno. Il progetto prevede il prelievo di campioni di suolo, l'analisi della composizione mineraria e la modellazione geodinamica del bacino per identificare eventuali aree di rischio idrogeologico.",       periodo: "2023-2025",
      beneficiario: "Consorzi Agricoli Nazionali",
      service: "Ricerca Sostenibile",
           images: [serviceImage1, serviceImage2, serviceImage3], 
     
    }
  ];
  
  export default projectsArray;