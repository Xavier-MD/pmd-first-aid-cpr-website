import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './pages/Footer';

function App() {
  const [course, setCourse] = useState('Standard First Aid');
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about-us' element={<About />} />
        <Route
          path='/courses'
          element={<Courses course={course} setCourse={setCourse} />}
        />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
