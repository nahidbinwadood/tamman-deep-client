import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import { useState, useEffect } from 'react';
import Preloader from '@/Components/Loaders/Preloader';
import CartDrawer from '@/Components/Drawer/CartDrawer';
import useAuth from '@/Hooks/useAuth';

const MainLayout = () => {
  const { loading } = useAuth();
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    // Check if the preloader flag is already set in sessionStorage
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');

    if (hasVisitedBefore) {
      setLoadingScreen(false); // Skip the preloader if the flag exists
    } else {
      setTimeout(() => {
        setLoadingScreen(false); // Hide the preloader after 4 seconds
        sessionStorage.setItem('hasVisitedBefore', 'true'); // Set flag in sessionStorage
      }, 4000);
    }
  }, []);

  if (loadingScreen || loading) return <Preloader />; // Show preloader while loading

  return (
    <>
      <ScrollRestoration />
      <nav className="font-inter">
        <Navbar />
      </nav>
      <main className="font-inter min-h-[calc(100vh-808px)]">
        <Outlet />
      </main>
      <footer className="font-inter">
        <Footer />
      </footer>

      {/* drawer */}
      <CartDrawer />
    </>
  );
};

export default MainLayout;
