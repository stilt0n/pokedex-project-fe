import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createAppRouter } from './routes';
import { SignInProvider } from './contexts/SignInContext';

const router = createAppRouter();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignInProvider>
      <RouterProvider router={router} />
    </SignInProvider>
  </React.StrictMode>
);
