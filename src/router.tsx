import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children :[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"service",
                element:<Service/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
        ]
    }
])