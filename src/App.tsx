import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col selection:bg-neutral-950 selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-neutral-950 text-white text-xs font-mono"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <CurrentlyBuilding />
        <ProjectShowcase />
        <Skills />
        <Journey />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
