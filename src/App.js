// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <About />
        <Services />
        <Projects />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
