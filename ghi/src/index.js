import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import ErrorNotification from './Components/ErrorNotification';
import HomePage from './Components/Home'
import MoviesList from './Components/MoviesList';
import Login from './Components/LoginForm';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorNotification />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'movies/',
        element: <MoviesList />,
      },
      {
        path: 'login/',
        element: <Login />
      },
    ],
  },
])
// const router =  createBrowserRouter([
//   {
//     path: '/',
//     element: <div> </div>,
//     children: [
//     {
//       path: 'movies',
//       element: <MoviesList />
//     },
//     {
//       path: '/login',
//       element: <Login />
//     }
//   ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
