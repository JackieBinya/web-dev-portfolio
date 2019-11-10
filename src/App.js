import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Languages from './components/languages/Languages';

const App = () => {
  return (
    <div>
     <Hero/>
     <About/>
     <Languages/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
