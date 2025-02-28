import serviceImage1 from '../assets/images/serv1.jpg';
import serviceImage2 from '../assets/images/serv2.jpg';
import serviceImage3 from '../assets/images/serv3.jpg';
import serviceImage4 from '../assets/images/serv4.jpg';
import serviceImage5 from '../assets/images/serv5.jpg';
import serviceImage6 from '../assets/images/serv6.jpg';

const services = [
    { 
      id: 1, 
      name: 'Analisi Geologiche', 
      images: [serviceImage1, serviceImage2, serviceImage3], 
      description: 'Analisi approfondite del terreno per progetti edilizi e infrastrutturali.',
      detailedDescription: 'L’analisi geologica comprende l’esame del terreno, la valutazione della stabilità e la determinazione dei rischi legati a fenomeni naturali come frane e smottamenti. Questi studi sono fondamentali per garantire la sicurezza e la sostenibilità di edifici e infrastrutture, nonché per la pianificazione territoriale nelle aree a rischio.'
    },
    { 
      id: 2, 
      name: 'Consulenza Ambientale', 
      images: [serviceImage2, serviceImage3, serviceImage4], 
      description: 'Servizi di consulenza per la gestione del rischio ambientale.',
      detailedDescription: 'Offriamo consulenza esperta per la gestione dei rischi ambientali, supportando le imprese e le amministrazioni locali nella riduzione degli impatti negativi sull’ambiente. I nostri servizi comprendono valutazioni di impatto ambientale, monitoraggio delle risorse naturali e sviluppo di soluzioni sostenibili per ridurre l’impronta ecologica delle attività industriali.'
    },
    { 
      id: 3, 
      name: 'Studi Sismici', 
      images: [serviceImage3, serviceImage4, serviceImage5], 
      description: 'Ricerche avanzate per la valutazione dei rischi sismici in aree urbane e rurali.',
      detailedDescription: 'Gli studi sismici sono essenziali per valutare la vulnerabilità di edifici e infrastrutture in caso di terremoti. Offriamo analisi sismiche dettagliate che comprendono la mappatura dei rischi sismici, la progettazione di strutture antisismiche e la pianificazione della sicurezza per le aree a maggior rischio. I nostri studi aiutano a ridurre i danni e a salvaguardare le persone e le proprietà.'
    },
    { 
      id: 4, 
      name: 'Progetti di Infrastrutture', 
      images: [serviceImage4, serviceImage5, serviceImage6], 
      description: 'Progettazione e consulenza per infrastrutture in ambienti geologicamente complessi.',
      detailedDescription: 'Ci occupiamo della progettazione e della consulenza per la realizzazione di infrastrutture in contesti geologici difficili, come terreni instabili o ad alto rischio sismico. Offriamo soluzioni innovative per garantire la stabilità e la sicurezza delle infrastrutture, con particolare attenzione alla sostenibilità e alla minimizzazione dell’impatto ambientale.'
    },
    { 
      id: 5, 
      name: 'Monitoraggio Ambientale', 
      images: [serviceImage5, serviceImage6, serviceImage1], 
      description: 'Monitoraggio costante dell’impatto ambientale dei progetti in corso.',
      detailedDescription: 'Offriamo servizi di monitoraggio ambientale in tempo reale per rilevare gli impatti di attività industriali, costruzioni e altre operazioni che potrebbero influire sull’ambiente. Utilizziamo tecnologie avanzate per il monitoraggio della qualità dell’aria, dell’acqua e del suolo, assicurandoci che le normative ambientali vengano rispettate durante tutto il ciclo di vita del progetto.'
    },
    { 
      id: 6, 
      name: 'Ricerca Sostenibile', 
      images: [serviceImage6, serviceImage1, serviceImage2], 
      description: 'Studi per la creazione di soluzioni geologiche sostenibili e a basso impatto ambientale.',
      detailedDescription: 'La ricerca sostenibile mira a sviluppare soluzioni geologiche che rispettino l’ambiente e le risorse naturali. Offriamo studi avanzati sulla gestione delle risorse, l’ottimizzazione dell’utilizzo del suolo e la ricerca di soluzioni innovative per ridurre l’impatto ambientale delle attività industriali, promuovendo un futuro più verde e sostenibile.'
    }
  ];
  
  export default services;
  