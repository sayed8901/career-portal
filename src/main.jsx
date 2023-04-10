import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Statistics from './components/Statistics';
import FeaturedJobs from './components/FeaturedJobs';
import JobDetails from './components/JobDetails';
import AppliedJobs from './components/AppliedJobs';
import Blogs from './components/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('category.json')
      },
      {
        path: '/featuredJobs',
        element: <FeaturedJobs></FeaturedJobs>,
        loader: () => fetch('job.json')
      },
      {
        path: '/jobDetails',
        element: <JobDetails></JobDetails>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
