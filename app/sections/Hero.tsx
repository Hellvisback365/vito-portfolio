import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl animate-fade-in gap-8">
        
        {/* Testo a sinistra */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Vito Piccolini - <span className="text-primary">AI Developer</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground mb-8">
            Building intelligent solutions with LLMs, LangChain, and modern web technologies. Currently specializing in Conversational Recommendation Systems.
          </p>
          <div className="space-x-4">
            <a href="#projects" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-primary/50">
              Guarda i Progetti
            </a>
            <a href="#contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-secondary/50">
              Mettiti in Contatto
            </a>
          </div>
        </div>

        {/* Immagine a destra */}
        <div className="md:w-1/2">
          <img
            src="Vito.png"
            alt="Hero Graphic"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
