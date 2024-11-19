import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorPage from './error-page';

import { Root, Profile, Recipe, RecipeForm, Feed, Swiper, Login } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },

      {
        path: '/recipe/:id',
        element: <Recipe />,
      },

      {
        path: '/recipeForm',
        element: <RecipeForm />,
      },

      {
        path: '/feed',
        element: <Feed />,
      },

      {
        path: '/swiper',
        element: <Swiper />,
      },

      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
