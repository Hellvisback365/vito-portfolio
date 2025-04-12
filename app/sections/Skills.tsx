import React from 'react';
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
} from 'react-icons/fa';
import {
  SiLangchain,
  SiTensorflow, // Or another relevant AI/ML icon
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiHuggingface, // For LLMs/Transformers
  // SiPytorch, // Add if relevant
  // SiPostgresql, // Add if relevant
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
  ],
  "Web Development": [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "REST APIs", icon: <FaServer /> },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <FaDatabase /> },
    // { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  "Tools & Methodologies": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Agile", icon: null }, // No specific icon needed
  ]
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
