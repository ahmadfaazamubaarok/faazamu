import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} faazamu. All rights reserved. Crafted with React &amp; Vanilla CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
