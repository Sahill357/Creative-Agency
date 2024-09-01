

 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from '../containers/HeroSection';
import { ProjectSection } from '../containers/ProjectSection';
import { Stories } from '../containers/Stories';
import { About } from '../Pages/About';
import { NavBar } from '../components/Layout/NavBar';
import { Footer } from '../components/Layout/Footer';
import { AllWorks } from '../Pages/AllWorks';
import { Journal } from '../Pages/Journal';
import { Contact } from '../Pages/Contact';

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProjectSection />
              <Stories />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<AllWorks />} />
          <Route path="/blog" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         
      </>
    </Router>
  );
};

export default App;


