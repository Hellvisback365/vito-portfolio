import React from 'react';
import { SiBootstrap } from 'react-icons/si';
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaServer, // Placeholder for REST APIs
  FaBrain,  // Placeholder for Prompt Engineering
  FaEye,
  FaMagic,
  FaChartBar,
  FaComments,
  FaFilter,
  FaCommentDots,
  FaFigma,
  FaUniversalAccess,
  FaMobileAlt,
  FaFileCode,
  FaFileExport,
  FaImage,
  FaNetworkWired,
  FaProjectDiagram,    // Placeholder per Agile
  FaSitemap,           // Placeholder per Scrum
  FaCogs,              // Placeholder per DevOps
  FaCode,              // Placeholder per Visual Studio Code
  FaLaptopCode,        // Placeholder per Eclipse
  FaJava,
  FaGamepad,
  FaGlobeAmericas,
  FaGlobeEurope,
} from 'react-icons/fa';
import {
  SiLangchain,
  SiTensorflow, // Or another relevant AI/ML icon
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiHuggingface, // For LLMs/Transformers
  SiPytorch, 
  SiStyledcomponents,
  SiMaterialdesign,
  SiMysql,
  SiPostman,
} from 'react-icons/si';

// Define skill categories and items
const skillsData = {
  "AI / Machine Learning": [
    { name: "Python", icon: <FaPython /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "LLMs (LLaMA, Mistral)", icon: <SiHuggingface /> },
    { name: "NLP", icon: <SiTensorflow /> }, // Using Tensorflow icon as placeholder
    { name: "Prompt Engineering", icon: <FaBrain /> },
    { name: "Hugging Face", icon: <SiHuggingface /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Reinforcement Learning", icon: <FaBrain /> }, // già coerente
    { name: "Natural Language Processing", icon: <SiTensorflow /> }, // oppure <FaBrain />
    { name: "Computer Vision", icon: <FaEye /> }, // visione artificiale
    { name: "Generative AI", icon: <FaMagic /> }, // crea un effetto "creativo"
    { name: "Deep Learning", icon: <FaBrain /> }, // già messo
    { name: "Recommender Systems", icon: <FaChartBar /> }, // rappresentazione dati
    { name: "Conversational Recommendation Systems", icon: <FaComments /> }, // conversazione + sistemi
    { name: "Transformers", icon: <SiHuggingface /> }, // modello coerente
    { name: "Federated Learning", icon: <FaProjectDiagram /> }, // nodi connessi
    { name: "Data Preprocessing", icon: <FaFilter /> }, // rappresenta il "filtrare" dati
    { name: "Conversational AI", icon: <FaCommentDots /> }, // dialogo
    



  ],
  "Web Development": [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Express.js", icon: <FaServer /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "REST APIs", icon: <FaServer /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Styled Components", icon: <SiStyledcomponents /> },
    { name: "Material UI", icon: <SiMaterialdesign /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Web Accessibility", icon: <FaUniversalAccess /> },
    { name: "Responsive Design", icon: <FaMobileAlt /> },
    { name: "Single Page Applications (SPAs)", icon: <FaFileCode /> },
    { name: "Static Site Generation (SSG)", icon: <FaFileExport /> },
    { name: "Responsive Images", icon: <FaImage /> },
    { name: "Web APIs", icon: <FaCode /> },
    { name: "WebSockets", icon: <FaNetworkWired /> },
    { name: "Version Control (Git)", icon: <FaGitAlt /> },

  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MongoDB Atlas", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL", icon: <FaDatabase /> }, 
    { name: "NoSQL", icon: <FaDatabase /> },

  ],
  "Tools & Methodologies": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Agile", icon: <FaProjectDiagram /> },
    { name: "Scrum", icon: <FaSitemap /> },
    { name: "DevOps", icon: <FaCogs /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Visual Studio Code", icon: <FaCode /> },
    { name: "Eclipse", icon: <FaLaptopCode /> },


  ],
    "Soft Skills": [
        { name: "Problem Solving", icon: <FaBrain /> },
        { name: "Team Collaboration", icon: <FaProjectDiagram /> },
        { name: "Communication", icon: <FaComments /> },
        { name: "Adaptability", icon: <FaUniversalAccess /> },
        { name: "Time Management", icon: <FaChartBar /> },
        { name: "Critical Thinking", icon: <FaBrain /> },
        { name: "Creativity", icon: <FaMagic /> },
    ],
    "Languages": [
        { name: "Italian", icon: <FaGlobeEurope />  }, 
        { name: "English", icon: < FaGlobeAmericas /> }, 
    ],
    "Interests": [
        { name: "AI Ethics", icon: <FaBrain /> },
        { name: "Open Source Contributions", icon: <FaGitAlt /> },
        { name: "Tech Blogging", icon: <FaFileCode /> },
        { name: "Hackathons", icon: <FaProjectDiagram /> },
        { name: "Gaming", icon: <FaGamepad /> }, // Placeholder for gaming
    ],
    "linguaggi di programmazione": [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Java", icon: <FaJava /> }, // Placeholder for Java
        { name: "C#", icon: <FaCode /> }, // Placeholder for C#
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Assembly", icon: <FaCode /> } // Placeholder for Assembly
    ],

};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="bg-card p-6 rounded-lg shadow-lg border border-secondary/50">
              <h3 className="text-xl font-semibold mb-4 text-accent">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center text-lg">
                    {skill.icon ? (
                      <span className="text-primary mr-3 text-xl w-6 text-center">{skill.icon}</span>
                    ) : (
                      <span className="mr-3 w-6"></span> // Placeholder for alignment if no icon
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
