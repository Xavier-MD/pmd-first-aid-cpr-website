import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Landing from './pages/Landing';
import About from './pages/About';
import CourseSelect from './pages/CourseSelect';
import Course from './pages/Course';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen min-h-screen flex flex-col overflow-x-hidden'>
        <div className='flex grow bg-gradient-to-b from-white via-blue-100 to-blue-300'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route element={<Layout />}>
              <Route path='/about-us' element={<About />} />
              <Route path='/courses' element={<CourseSelect />} />
              <Route path='/courses/:id' element={<Course />} />
              <Route path='/testimonials' element={<Testimonial />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
