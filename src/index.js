import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { UsersProvider } from './store/users-context';
import Register from './pages/Register/Register';
import Login from './pages/Home/Login/Login';
import Users from './pages/UsersList/Users'
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "users",
    element: <Users/>,
  },
  {
    path: "register",
    element: <Register/>,
  },
]);
root.render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  </React.StrictMode>
);
