import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import NavigationBar from './components/Navigation/NavigationBar';
import Footer from './components/Navigation/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import CourseSelect from './pages/CourseSelect';
import Course from './pages/Course';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen min-h-screen flex flex-col overflow-x-hidden'>
        <NavigationBar />
        <div className='px-[3.2rem] py-[1.7rem] flex grow justify-center items-center bg-gradient-to-b from-white via-blue-100 to-blue-300'>
          <div className='w-full max-w-7xl mx-auto'>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/courses' element={<CourseSelect />} />
              <Route path='/courses/:id' element={<Course />} />
              <Route path='/testimonials' element={<Testimonial />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
