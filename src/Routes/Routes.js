import { createBrowserRouter, Link } from "react-router-dom";
import Blog from "../Blogs/Blog";
import Courses from "../Courses/Courses";
import Main from "../layout/Main";
import Home from './../Home/Home';
import Catergories from './../Categories/Catergories';
import Details from "../Details/Details";
import Course from './../Course/Course';
import Login from "../Login/Login";
import Register from './../Login/Register';
import PrivateRoute from './PrivateRoute';



export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
          { path: '/', 
           element: <Home></Home>
        },
        {
            path: '/courses',
            element:<Courses></Courses>,
            loader: () => fetch(`https://educational-website-server-site.vercel.app/details`)
        },
        {
            path: '/course/:id',
            element: <PrivateRoute>
                <Course></Course>
                </PrivateRoute>,
            loader: ({params}) => fetch(`https://educational-website-server-site.vercel.app/details/${params.id}`)
        },

        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path:'/category/:id',
            element: <Catergories></Catergories>
            
        },
        {
            path:'/categorise/:id',
            element: <Courses></Courses>,
            loader: ({params}) => fetch(`https://educational-website-server-site.vercel.app/categorise/${params.id}`)
        },

        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/Register',
            element: <Register></Register>
        },
        {
            path: '*',
            element: <div>
                <h1>Page not found</h1>
                <Link to='/'>Go To Home</Link>

            </div>
        }
       
        ]
    }
])