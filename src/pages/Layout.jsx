import { Outlet } from 'react-router-dom';
import Footer from '../components/Navigation/Footer';
import NavigationBar from '../components/Navigation/NavigationBar';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <NavigationBar />
      <main className='px-[3.2rem] py-[1.7rem] flex grow justify-center items-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
