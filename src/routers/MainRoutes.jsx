import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import About from "../pages/About"
import Login from "../pages/Signin"
import Register from "../pages/Signup"

export const MainRoutes = () => {
    return useRoutes([
         {path: "/", element: <Home/>},
         {path: "/about", element: <About/>},
         {path: "/signin", element: <Login/>},
         {path: "/signup", element: <Register/>},
         {path: "*", element: <NotFound/>},
    ])
}
