import React from 'react'; // Import React
import {
  isRouteErrorResponse,
  Links,
  Meta,
  // Outlet, // No longer needed for single-page structure
  Scripts,
  ScrollRestoration,
} from "react-router";

// Import layout and section components
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import EducationCertifications from './sections/EducationCertifications';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

// Removed unused Route type import
// import type { Route } from "./+types/root";
import "./app.css";

// The LinksFunction type might need adjustment if Route was defining it.
// Let's try removing the type annotation for now, as it just returns a static array.
export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Add 'dark' class for default dark mode and font-sans from Tailwind config
    <html lang="it" className="dark font-sans scroll-smooth">
      <head>
        <title>Vito Piccolini - AI Developer Portfolio</title> {/* Add a default title */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta /> {/* Allows overriding title/meta per route if needed later */}
        <Links />
      </head>
      <body className="bg-background text-foreground"> {/* Apply base background/text colors */}
        {children}
        <ScrollRestoration /> {/* Handles scroll position on navigation */}
        <Scripts /> {/* Includes necessary JS */}
      </body>
    </html>
  );
}

// Main App component now renders the full page structure
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow"> {/* Use flex-grow to push footer down */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
// Keep the ErrorBoundary for handling potential errors
// We might need to adjust the type of 'error' if Route.ErrorBoundaryProps is no longer available.
// Using 'any' for now, but ideally find a replacement type from react-router if needed.
export function ErrorBoundary({ error }: { error: any }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
