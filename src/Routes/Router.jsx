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
  // actions
  {
    path: '/actions',
    element: <Actions />,
    children: [
      {
        path: '/actions/contact-card',
        element: <ContactCardAction />,
      },
      {
        path: '/actions/social-builder',
        element: <SocialBuilderAction />,
      },
      {
        path: '/actions/profile',
        element: <ProfileAction />,
      },
      {
        path: '/actions/booking',
        element: <BookingAction />,
      },
      {
        path: '/actions/date-trigger',
        element: <DateTriggerAction />,
      },
      {
        path: '/actions/event',
        element: <EventActions />,
      },
      {
        path: '/actions/email',
        element: <EmailActions />,
      },
      {
        path: '/actions/whatsapp',
        element: <WhatsAppActions />,
      },
      {
        path: '/actions/sms',
        element: <SmsActions />,
      },
      {
        path: '/actions/product-catalogue',
        element: <ProductCatalogue />,
      },
      {
        path: '/actions/link-tree',
        element: <LinkTreeActions />,
      },
      {
        path: '/actions/paypal',
        element: <PaypalAction />,
      },
      {
        path: '/actions/about-me',
        element: <AboutmeActions />,
      },
      {
        path: '/actions/call',
        element: <CallActions />,
      },
      {
        path: '/actions/url',
        element: <UrlActions />,
      },
    ],
  },
]);
