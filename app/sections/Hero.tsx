import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-3xl animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Vito Piccolini - <span className="text-primary">AI Developer</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground mb-8">
          Building intelligent solutions with LLMs, LangChain, and modern web technologies. Currently specializing in Conversational Recommendation Systems.
        </p>
        <div className="space-x-4">
          <a href="#projects" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-primary/50">
            View Projects
          </a>
          <a href="#contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-secondary/50">
            Get In Touch
          </a>
        </div>
        {/* Optional: Add a subtle graphic or animation element here later */}
      </div>
    </section>
  );
};

export default Hero;
