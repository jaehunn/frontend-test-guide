import { Navigate, RouteObject } from 'react-router-dom';

import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

import ProductsRouterGuard from './components/ProductsRouterGuard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/products" />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <ProductsRouterGuard />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ':id',
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/products" />,
  },
];

export default routes;
