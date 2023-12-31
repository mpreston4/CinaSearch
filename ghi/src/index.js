import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import ErrorNotification from './Components/ErrorNotification';
import HomePage from './Components/Home'
import MoviesList from './Components/MoviesList';
import Login from './Components/LoginForm';
import Signup from './Components/SignupForm';
import Favorites from './Components/Favorites';
import WatchedList from './Components/WatchedList';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorNotification />,
    children: [
      {
        path: '/CinaSearch/',
        element: <HomePage />,
      },
      {
        path: 'movies/:page',
        element: <MoviesList />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'wishlist',
        element: <Favorites />
      },
      {
        path: 'watchedlist',
        element: <WatchedList />
      },

    ],
  },
])


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
