import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <nav className='font-linik'>
        <Navbar />
      </nav>
      <main className='font-linik'>
        <Outlet />
      </main>
      <footer className='font-linik'>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
