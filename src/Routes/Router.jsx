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
import ContactCardAction from '@/Pages/Actions/ContactCardAction';
import Actions from '@/Pages/Actions/Actions';
import SocialBuilderAction from '@/Pages/Actions/SocialBuilderAction';
import ProfileAction from '@/Pages/Actions/ProfileAction';
import BookingAction from '@/Pages/Actions/BookingAction';
import DateTriggerAction from '@/Pages/Actions/DateTriggerAction';
import EventActions from '@/Pages/Actions/EventActions';
import EmailActions from '@/Pages/Actions/EmailActions';
import WhatsAppActions from '@/Pages/Actions/WhatsAppActions';
import SmsActions from '@/Pages/Actions/SmsActions';
import ProductCatalogue from '@/Pages/Actions/ProductCatalogue';
import LinkTreeActions from '@/Pages/Actions/LinkTreeActions';
import PaypalAction from '@/Pages/Actions/PaypalAction';
import AboutmeActions from '@/Pages/Actions/AboutmeActions';
import CallActions from '@/Pages/Actions/CallActions';
import UrlActions from '@/Pages/Actions/UrlActions';
import ForgotPassword from '@/Pages/Auth/ForgotPassword';
import PrivateRoute from './PrivateRoute';
import Checkout from '@/Pages/Checkout/Checkout';

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
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/home',
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/profiles',
        element: (
          <PrivateRoute>
            <DashboardProfiles />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/contacts',
        element: (
          <PrivateRoute>
            <DashboardContacts />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/setting',
        element: (
          <PrivateRoute>
            <DashboardSetting />
          </PrivateRoute>
        ),
      },
    ],
  },
  // actions
  {
    path: '/actions',
    element: (
      <PrivateRoute>
        <Actions />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/actions/contact-card',
        element: (
          <PrivateRoute>
            <ContactCardAction />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/social-builder',
        element: (
          <PrivateRoute>
            <SocialBuilderAction />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/profile',
        element: (
          <PrivateRoute>
            <ProfileAction />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/booking',
        element: (
          <PrivateRoute>
            <BookingAction />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/date-trigger',
        element: (
          <PrivateRoute>
            <DateTriggerAction />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/event',
        element: (
          <PrivateRoute>
            <EventActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/email',
        element: (
          <PrivateRoute>
            <EmailActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/whatsapp',
        element: (
          <PrivateRoute>
            <WhatsAppActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/sms',
        element: (
          <PrivateRoute>
            <SmsActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/product-catalogue',
        element: (
          <PrivateRoute>
            <ProductCatalogue />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/link-tree',
        element: (
          <PrivateRoute>
            <LinkTreeActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/paypal',
        element: (
          <PrivateRoute>
            <PaypalAction />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/about-me',
        element: (
          <PrivateRoute>
            <AboutmeActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/call',
        element: (
          <PrivateRoute>
            <CallActions />
          </PrivateRoute>
        ),
      },
      {
        path: '/actions/url',
        element: (
          <PrivateRoute>
            <UrlActions />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
