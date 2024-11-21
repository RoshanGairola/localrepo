import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App';
import Header from './header/Header';
import "./styles/App.css";
 import Home from './pages/Home';
 import About from './pages/About';
 import Contact from './pages/Contact';
 import Blog from './pages/Blog';
 import BlogDetails from './pages/BlogDetails';
 import Hokks from './hooks/Hokks';
 
 
 import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/Blog',
            element:<Blog/>
        },
        {
            path:'Blog/:id',
            element:<BlogDetails/>
        }
    ]
)
root.render(
 <><App/>
    <Hokks/>
     
    <RouterProvider router={allRoutes}/>

    </>
);
 
