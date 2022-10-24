import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../Shared/Header/Header";

export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
           
        ]
    }
])