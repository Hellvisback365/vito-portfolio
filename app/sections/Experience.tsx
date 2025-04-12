import React from 'react';
// Import specific icons you need
import { FaPython } from 'react-icons/fa';
import { SiLangchain, SiHuggingface } from 'react-icons/si';

const Experience = () => {
  // Replace with your actual internship details
  const internship = {
    role: "AI Development Intern",
    company: " LACAM-SWAP, Università di Bari", // Replace with actual company name
    duration: "Marzo 2025 - Giugno 2025", // Replace with actual dates
    description: "Sistema di Raccomandazione Conversazionale Integrato con LLM.",
    details: [
      "Prototipazione in Python di modelli LLM locali (LLaMA, Mistral) tramite Hugging Face Transformers.",
      "Orchestrazione multi-modello con LangChain (LLMChain, ChatOpenAl) e integrazione via OpenRouter API.",
      "Sperimentazione modelli API (llama-4, mistral) per aumentare la diversità e robustezza delle risposte.",
      "Ottimizzazione del prompt engineering e implementazione di esecuzione asincrona con caching.",
      "Risultato: riduzione stimata dei tempi di inferenza del 20-30%.",
    ],
    tech: [
      { name: "Python", icon: <FaPython className="inline mr-1 mb-0.5" /> },
      { name: "LangChain", icon: <SiLangchain className="inline mr-1 mb-0.5" /> },
      { name: "LLMs (LLaMA, Mistral)", icon: <SiHuggingface className="inline mr-1 mb-0.5" /> }, // Using Hugging Face icon as proxy
      { name: "Prompt Engineering", icon: null }, // No specific icon, text is fine
      { name: "Hugging Face Transformers", icon: <SiHuggingface className="inline mr-1 mb-0.5" /> },
      // Add other relevant tools/technologies like Git, Docker if applicable
    ]
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h2>
        {/* Single Experience Card - Add more if needed */}
        <div className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-xl border border-secondary/50">
          <h3 className="text-2xl font-semibold text-primary mb-1">{internship.role}</h3>
          <p className="text-lg text-accent mb-1">{internship.company}</p>
          <p className="text-sm text-gray-400 mb-4">{internship.duration}</p>
          <p className="mb-4 text-lg">{internship.description}</p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-card-foreground">
            {internship.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold mr-2 text-lg">Key Technologies:</span>
            {internship.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center shadow-sm"
              >
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
        </div>
        {/* Add more experience items here if necessary */}
      </div>
    </section>
  );
};

export default Experience;
