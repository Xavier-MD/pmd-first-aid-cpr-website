import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

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
  const { id } = useParams();

  return (
    <BrowserRouter>
      <div className='h-full flex flex-col'>
        <section className='flex-none basis-28'>{<NavigationBar />}</section>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/courses' element={<CourseSelect />} />
          <Route path='/courses/:id' element={<Course />} />
          <Route path='/testimonials' element={<Testimonial />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <section className='flex-none basis-28'>{<Footer />}</section>
      </div>
    </BrowserRouter>
  );
}

export default App;
