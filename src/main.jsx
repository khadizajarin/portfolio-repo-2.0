import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('G-SY8E9607XM'); // Replace with your Tracking ID

// Track the initial page load
ReactGA.pageview(window.location.pathname + window.location.search);



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
