import React from 'react';
// import profilePic from '../assets/vito-piccolini.jpg'; // Uncomment and replace with your actual photo path later

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="md:w-2/3 lg:w-3/4 text-lg space-y-4">
            <p>
              Passionate and results-oriented AI Developer in training with a solid foundation in Computer Science and hands-on experience in developing Conversational Recommendation Systems using Large Language Models (LLMs) like LLaMA and Mistral.
            </p>
            <p>
              Proficient in Python for AI/ML, LangChain for LLM application development, and experienced with the full web stack including React and Node.js. My internship focused on optimizing inference times and enhancing user interaction through sophisticated prompt engineering.
            </p>
            <p>
              I thrive on tackling complex challenges and am eager to contribute to innovative AI projects. Always learning and exploring new frontiers in artificial intelligence and software development.
            </p>
          </div>
          {/* Image Column (Optional) */}
          {/* Uncomment this block if you add a profile picture */}
          {/*
          <div className="md:w-1/3 lg:w-1/4 flex justify-center mt-8 md:mt-0">
            <img
              // src={profilePic} // Use the imported photo
              src="https://via.placeholder.com/256/3b82f6/ffffff?text=VP" // Placeholder image
              alt="Vito Piccolini"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-primary"
              loading="lazy" // Lazy load the image
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default About;
