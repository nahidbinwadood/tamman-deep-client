import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';

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
    ],
  },
]);
