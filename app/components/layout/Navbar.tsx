import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for hamburger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // In a single-page app, these might scroll to sections.
  // For a multi-route app like this template, they might be Links from react-router-dom
  const navLinks = [
    { href: '#about', label: 'About' }, // Adjust href if using routing later
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  // Placeholder URLs - replace with your actual links
  const githubUrl = "https://github.com/Hellvisback365"; // Replace with your GitHub username
  const linkedinUrl = "https://linkedin.com/in/your-linkedin"; // Replace with your LinkedIn profile

  return (
    <nav className="bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Link to home or top of page */}
            <a href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Vito Piccolini
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {link.label}
              </a>
            ))}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground hover:text-primary p-2 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground hover:text-primary p-2 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-foreground hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-secondary/50">
             <div className="flex items-center justify-center space-x-4">
               <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground hover:text-primary p-2 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground hover:text-primary p-2 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
