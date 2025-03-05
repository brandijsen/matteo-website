import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectsArray from "../../data/projectsData";

const Projects = () => {
  const [sortBy, setSortBy] = useState("anno");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Chiudi il dropdown cliccando all'esterno
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sortedProjects = [...projectsArray].sort((a, b) => {
    if (sortBy === "anno") {
      return b.periodo.localeCompare(a.periodo);
    } else if (sortBy === "categoria") {
      return a.service.localeCompare(b.service);
    }
    return 0;
  });

  const groupedProjects = sortedProjects.reduce((acc, progetto) => {
    const key = sortBy === "anno" ? progetto.periodo.split("-")[0] : progetto.service;
    if (!acc[key]) acc[key] = [];
    acc[key].push(progetto);
    return acc;
  }, {});

  return (
    <div id="projects" className="pt-20">
      <section className="py-10 container mx-auto px-32 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">I miei Progetti</h2>
        <br/>
        <p>Esplora i nostri progetti e lasciati ispirare dalle soluzioni innovative che abbiamo sviluppato per affrontare le sfide ambientali, tecnologiche e geologiche. Dalla consulenza ambientale alle analisi geologiche, ogni progetto rappresenta il nostro impegno per un futuro più sostenibile e sicuro.</p>
        {/* Bottone + Dropdown */}
        <div className="mb-4 flex justify-end relative">
          <button
            ref={buttonRef}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-black hover:bg-black hover:text-white border-2 border-black py-1 px-4 rounded-sm text-sm font-semibold transition-all duration-300 ease-in-out"
          >
            Ordina per: {sortBy === "anno" ? "Anno" : "Categoria"}
          </button>

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-8 w-full border-2 border-black rounded-sm shadow-lg text-sm font-semibold"
              style={{ width: buttonRef.current?.offsetWidth }}
            >
              <button
                onClick={() => {
                  setSortBy("anno");
                  setDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-black hover:text-white transition"
              >
                Anno
              </button>
              <button
                onClick={() => {
                  setSortBy("service");
                  setDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-black hover:text-white transition"
              >
                Categoria
              </button>
            </div>
          )}
        </div>

        <ul>
  {Object.entries(groupedProjects).map(([group, projects]) => (
    <div key={group}>
      {sortBy === "service" ? (
        <h3 className="text-xl font-bold mt-5">
        <Link 
            to={`/service/${group.toLowerCase().replace(/\s+/g, "-")}`} 
            className="hover:text-gray-600"
          >
            {group}
          </Link>
        </h3>
      ) : (
        <h3 className="text-xl font-bold mt-5">{group}</h3>
      )}
      <br />
      {projects.map((progetto) => (
        <li key={progetto.id}>
          <h5 className="font-bold">
            <Link to={`/projects/${progetto.id}`} className="hover:text-gray-600">
              {progetto.nome}
            </Link>
          </h5>
          <p>{progetto.descrizione}</p>
          <p><strong>Periodo:</strong> {progetto.periodo}</p>
          <br />
        </li>
      ))}
    </div>
  ))}
</ul>

      </section>
    </div>
  );
};

export default Projects;
