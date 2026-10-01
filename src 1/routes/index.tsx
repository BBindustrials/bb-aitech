import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/public/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);