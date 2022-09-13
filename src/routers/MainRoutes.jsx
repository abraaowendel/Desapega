import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import About from "../pages/About"
import Login from "../pages/Signin"
import Register from "../pages/Signup"
import Logout from "../pages/Logout"

Register
export const MainRoutes = () => {
    return useRoutes([
         {path: "/", element: <Home/>},
         {path: "/about", element: <About/>},
         {path: "/signin", element: <Login/>},
         {path: "/signup", element: <Register/>},
         {path: "/logout", element: <Logout/>},
         {path: "*", element: <NotFound/>},
    ])
}
