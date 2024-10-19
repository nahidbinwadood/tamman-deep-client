import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';
import Shop from '../Pages/Shop/Shop';
import Login from '../Pages/Auth/Login';
import Register from './../Pages/Auth/Register';
import DashboardLayout from './../Layout/Dashboard/DashboardLayout';
import DashboardHome from '../Pages/Dashboard/Dashboard Home/DashboardHome';
import DashboardProfiles from '../Pages/Dashboard/Dashboard Profiles/DashboardProfiles';
import DashboardContacts from '../Pages/Dashboard/Dashboard Contacts/DashboardContacts';
import DashboardSetting from '../Pages/Dashboard/Dashboard Setting/DashboardSetting';

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
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/home',
        element: <DashboardHome />,
      },
      {
        path: '/dashboard/profiles',
        element: <DashboardProfiles />,
      },
      {
        path: '/dashboard/contacts',
        element: <DashboardContacts />,
      },
      {
        path: '/dashboard/setting',
        element: <DashboardSetting />,
      },
    ],
  },
]);
