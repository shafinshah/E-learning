
import './App.css'
import React from 'react';
import '@fontsource/roboto/700.css';
import Hero from './Components/Hero';
import CoursesTab from './Components/CoursesTab';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import NewCourse from './Components/newCourse';
import Course from './Components/Course';
import ShowCourse from './Components/showCourse';
import Footer from './footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Hero /> <Footer /></>
  },
 
  {
    path: "/Courses",
    element: <><Navbar /><CoursesTab /><Footer /></>
  },
  {
    path: "/Login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/Signup",
    element: <><Navbar /><SignUp /></>
  },
  {
    path: "/Dashboard",
    element: <><Navbar /><Dashboard /><Footer /></>
  },
  {
    path: "/Create",
    element: <><Navbar /><NewCourse /></>
  },
  {
    path: "/CouserShow",
    element: <><Navbar /><Course /><Footer /></>
  },
  {
    path: "/Course/:id",
    element: <> <Navbar /> <ShowCourse /><Footer /> </>
  }
])


function App() {
   
  return(
      
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App;
