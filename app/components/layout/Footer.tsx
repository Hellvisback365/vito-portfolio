import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // --- IMPORTANT: Replace with your actual profile URLs ---
  const githubUrl = "https://github.com/Hellvisback365"; // Replace with your GitHub username
  const linkedinUrl = "https://www.linkedin.com/in/vito-piccolini/"; // Replace with your LinkedIn profile URL
  // ---

  return (
    <footer className="bg-card text-card-foreground py-8 border-t border-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-secondary-foreground hover:text-primary transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-secondary-foreground hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          {/* Add other social links here if desired */}
        </div>
        <p className="text-sm text-gray-400 mb-2">
          &copy; {currentYear} Vito Piccolini. All rights reserved.
        </p>
         <p className="text-xs text-gray-500">
           Built with React, Vite, Tailwind CSS & deployed on Netlify/Vercel.
         </p>
      </div>
    </footer>
  );
};

export default Footer;
