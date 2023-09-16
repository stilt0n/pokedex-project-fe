import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';
import { PokemonPage } from './components/PokemonPage';
import { SignIn } from './components/SignIn';
import { AddPokemon } from './components/AddPokemon';
import { ManagePokedex } from './components/ManagePokedex';
import { GraphQLPage } from './components/GraphQLPage';
import { TypesPage } from './components/TypesPage';
import { PokemonInfo } from './components/PokemonInfo';
import { SignInProvider } from './contexts/SignInContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/pokemon',
        element: <PokemonPage />,
      },
      {
        path: '/pokemon/:pokedexId',
        element: <PokemonInfo />,
      },
      {
        path: '/types',
        element: <TypesPage />,
      },
      {
        path: 'admin/pokemon/0',
        element: <AddPokemon />,
      },
      {
        path: '/admin',
        element: <ManagePokedex />,
      },
      {
        path: '/graphql',
        element: <GraphQLPage />,
      },
      {
        path: 'log-in',
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignInProvider>
      <RouterProvider router={router} />
    </SignInProvider>
  </React.StrictMode>
);
