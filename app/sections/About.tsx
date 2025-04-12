import React from 'react';
// import profilePic from '../assets/vito-piccolini.jpg'; // Uncomment and replace with your actual photo path later

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Riguardo Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="md:w-2/3 lg:w-3/4 text-lg space-y-4">
            <p>
            Sviluppatore Al in formazione, con esperienza nella progettazione e prototipazione di applicazioni basate su modelli
            </p>
            <p>
linguistici di ultima generazione. Durante il mio tirocinio accademico ho integrato LLM locali (LLaMA, Mistral) in sistemi
</p>
<p>
di raccomandazione conversazionale, migliorando le performance attraverso tecniche di caching, chaining e prompt
</p>
<p>
tuning. Solide competenze in Python, LangChain, NLP e architettura di backend (Node.js, MongoDB). Cerco
</p>
<p>
un’opportunità per contribuire allo sviluppo di soluzioni AI orientate all’utente, sfruttando l’ecosistema open-source e
</p>
<p>
le potenzialità dei modelli generativi. 
            </p>
          </div>
          <div className="md:w-1/3 lg:w-1/4 flex justify-center mt-8 md:mt-0">
            <img
              src="modificato.jpg" 
              alt="Vito Piccolini"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-primary"
              loading="lazy" // 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
