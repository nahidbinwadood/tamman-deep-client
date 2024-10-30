import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <nav className='font-inter'>
        <Navbar />
      </nav>
      <main className='font-inter min-h-[calc(100vh-808px)]'>
        <Outlet />
      </main>
      <footer className='font-inter'>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
