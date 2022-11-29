import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import TestmonioalPage from './components/TestmonialPage/TestmonialPage';
import ContactPage from "./components/ContactPage/ContactPage"
import Error from "./components/Erorr/Error"
import Footer from './components/Footer/Footer';




function App() {
  return (
    <Router>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/projects' element={<ProjectsPage />} />
          <Route exact path='/testmonial' element={<TestmonioalPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;