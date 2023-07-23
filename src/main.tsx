import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root/Root.tsx';
import ErrorPage from './error-page.tsx';
import Home from './pages/home/Home.tsx';
import Products from './pages/products/Products.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
