import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blogs/Blog";
import Courses from "../Courses/Courses";
import Main from "../layout/Main";
import Home from './../Home/Home';
import Catergories from './../Categories/Catergories';
import Details from "../Details/Details";
import Course from './../Course/Course';



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
            loader: () => fetch(`http://localhost:5000/details`)
        },
        {
            path: '/course/:id',
            element:<Course></Course>,
            loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },

        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path:'/category/:id',
            element: <Catergories></Catergories>
        }
       
        ]
    }
])