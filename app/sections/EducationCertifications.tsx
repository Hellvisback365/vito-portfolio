import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = {
  degree: "Laurea Triennale in Informatica (Bachelor's Degree in Computer Science)",
  university: "Università degli Studi di Bari Aldo Moro", // Replace if different
  // duration: "Year - Year", // Optional: Add graduation year or timeframe
};

// Replace with your actual Coursera certifications
const certifications = [
  "Machine Learning Specialization (Coursera - Stanford University)",
  "Deep Learning Specialization (Coursera - deeplearning.ai)",
  "Natural Language Processing Specialization (Coursera - deeplearning.ai)",
  // Add other relevant certifications from your CV
];

const EducationCertifications = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Education Card */}
          <div className="bg-background p-6 rounded-lg shadow-lg border border-secondary/50">
            <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <FaGraduationCap className="mr-3 text-2xl" /> Education
            </h3>
            <p className="text-lg font-medium text-foreground">{education.degree}</p>
            <p className="text-md text-secondary-foreground">{education.university}</p>
            {/* {education.duration && <p className="text-sm text-gray-400 mt-1">{education.duration}</p>} */}
          </div>

          {/* Certifications Card */}
          <div className="bg-background p-6 rounded-lg shadow-lg border border-secondary/50">
             <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <FaCertificate className="mr-3 text-2xl" /> Certifications
            </h3>
            <ul className="list-none space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <FaCertificate className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
