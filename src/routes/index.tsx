import { createBrowserRouter } from 'react-router-dom';
import AdminLogin from '../pages/admin/Login';
import AdminDashboard from '../pages/admin/Dashboard';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import TaiwoBrightAjayi from '../pages/public/TaiwoBrightAjayi';
import Hackathon2026 from '../pages/public/Hackathon2026';
import FounderPortfolio from '../pages/public/FounderPortfolio';

// Public pages
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Solutions from '../pages/public/Solutions';
import Services from '../pages/public/Services';
import Industries from '../pages/public/Industries';
import Training from '../pages/public/Training';
import Blog from '../pages/public/Blog';
import Contact from '../pages/public/Contact';
import RequestDemo from '../pages/public/RequestDemo';


export const router = createBrowserRouter([
  // Public Routes
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/taiwo-bright-ajayi',
    element: <TaiwoBrightAjayi />,
  },
  {
    path: '/founder-portfolio',
    element: <FounderPortfolio />,
  },
  {
    path: '/hackathon-2026',
    element: <Hackathon2026 />,
  },
  {
    path: '/solutions',
    element: <Solutions />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/industries',
    element: <Industries />,
  },
  {
    path: '/training',
    element: <Training />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/request-demo',
    element: <RequestDemo />,
  },
  
  // Admin Routes
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);