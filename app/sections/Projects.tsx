import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa'; // Import FaJava
import { SiMongodb } from 'react-icons/si'; // Remove SiJava import

// Import screenshots if you have them
// import befleuntScreenshot from '../assets/befluent-screenshot.png';
// import posdScreenshot from '../assets/posd-screenshot.png';

const projectsData = [
  {
    title: "BeFluent",
    description: "Web app interattiva per bambini dislessici e gestionale per specialisti. Sviluppata in React + Node.js e supporto conversazionale AI. Utilizza MongoDB per la gestione dei dati.",
    imagePlaceholder: "BeFluent_logo.png",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "AI/NLP", icon: null }, // Add specific AI icon if available
    ],
    github: "https://github.com/Hellvisback365/BeFluent", // Replace if different
    demo: null, // Add live demo link if available
  },
  {
    title: "POSD System",
    description: "Soluzione privacy-oriented conforme al GDPR che integra privacy knowledge base, " +
    "autenticazione sicura e gestione di privacy patterns in architettura MVC. Progettato con metodologie " +
    "Agile/Scrum per garantire sicurezza e feedback continuo.",
    imagePlaceholder: "POSD.png",
    tech: [
      { name: "Java", icon: <FaJava /> }, // Use FaJava instead of SiJava
      { name: "MVC Pattern", icon: null },
      { name: "SQL", icon: null }, // Add specific DB icon if known
      { name: "Agile", icon: null },
    ],
    github: "https://github.com/Hellvisback365/POSD_System", // Replace if different
    demo: null, // Add live demo link if available
  },
  // Add more projects here if needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Progetti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-xl overflow-hidden border border-secondary/50 flex flex-col group"
            >
            <div className="relative h-48 md:h-56 overflow-hidden">
                 <img
                   src={project.imagePlaceholder} // Consistently use placeholder
                   alt={`${project.title} screenshot`}
                   style={{ paddingLeft: '130px', width: '600px', height: 'auto' , marginTop: '10px'}}
                   className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                   loading="lazy"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-secondary-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-medium mr-1">Tech:</span>
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-xs flex items-center shadow-sm">
                      {t.icon && <span className="mr-1">{t.icon}</span>}
                      {t.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto pt-4 border-t border-secondary/30">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center text-sm"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center text-sm"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
