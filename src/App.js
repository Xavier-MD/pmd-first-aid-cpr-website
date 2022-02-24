import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
