import { useRoutes } from "react-router-dom"

import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import About from "../pages/About"
import Login from "../pages/Signin"
import Register from "../pages/Signup"
import AdPage from "../pages/AdPage"
import RouteHandler from "../helpers/RouterHandler"
import AddAd from "../pages/AddAd"
import Ads from "../pages/Ads"


export const MainRoutes = () => {
    return useRoutes([
         {path: "/", element: <Home/>},
         {path: "/about", element: <About/>},
         {path: "/signin", element: <Login/>},
         {path: "/signup", element: <Register/>},
         {path: "/post-and-ad", element: 
            <RouteHandler> 
                <AddAd /> 
            </RouteHandler>},
         {path: "/ad/:id", element: <AdPage/>},
         {path: "/ads", element: <Ads/>},
         {path: "*", element: <NotFound/>},
    ])
}

