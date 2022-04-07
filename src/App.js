import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import AllCourses from './pages/AllCourses';
import CourseInfo from './components/Courses/CourseInfo';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  const { id } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/courses' element={<AllCourses />} />
        <Route path='/courses/:id' element={<CourseInfo course={id} />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
