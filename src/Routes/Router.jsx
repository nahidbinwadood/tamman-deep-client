import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';
import Shop from '../Pages/Shop/Shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);
