import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // --- IMPORTANT: Replace with your actual email and LinkedIn URL ---
  const email = "vitopiccolini@live.it"; // Replace with your email
  const linkedinUrl = "https://www.linkedin.com/in/vito-p-9120028a/"; // Replace with your LinkedIn profile URL
  // ---

  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Mettiti in Contatto </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-secondary-foreground">
        Sono attivamente alla ricerca di opportunità nell'ambito dell'intelligenza artificiale e dello sviluppo software. Che tu abbia una domanda, una proposta di progetto o semplicemente voglia entrare in contatto con me, non esitare a contattarmi!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center text-lg text-foreground hover:text-primary transition-colors duration-200 group"
          >
            <FaEnvelope className="mr-2 text-xl text-primary group-hover:scale-110 transition-transform" />
            <span>{email}</span>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg text-foreground hover:text-primary transition-colors duration-200 group"
          >
            <FaLinkedin className="mr-2 text-xl text-primary group-hover:scale-110 transition-transform" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Optional Form Placeholder - Requires backend/service like Netlify Forms or Formspree
        <div className="mt-16 max-w-xl mx-auto text-left">
           <p className="text-center text-sm text-gray-500 mb-4">Or send a message directly:</p>
           <form action="YOUR_FORMSPREE_ENDPOINT" method="POST"> // Replace with your Formspree endpoint if used
               <div className="mb-4">
                   <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                   <input type="text" id="name" name="name" required className="w-full p-3 rounded bg-card border border-secondary focus:outline-none focus:ring-2 focus:ring-primary text-foreground" />
               </div>
               <div className="mb-4">
                   <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                   <input type="email" id="email" name="email" required className="w-full p-3 rounded bg-card border border-secondary focus:outline-none focus:ring-2 focus:ring-primary text-foreground" />
               </div>
               <div className="mb-4">
                   <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                   <textarea id="message" name="message" rows={4} required className="w-full p-3 rounded bg-card border border-secondary focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></textarea>
               </div>
               <div className="text-center">
                   <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-primary/50">
                       Send Message
                   </button>
               </div>
           </form>
        </div>
        */}
      </div>
    </section>
  );
};

export default Contact;
