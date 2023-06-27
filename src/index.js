import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/inter/400.css";
import { RouterProvider } from 'react-router-dom';
import MainRouter from './MainRouter';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Assest/css/index.css';
import './Assest/css/animation.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={MainRouter} />
  // <App />
);

