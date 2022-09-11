import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import About from "../pages/About"

export const MainRoutes = () => {
    return useRoutes([
         {path: "/", element: <Home/>},
         {path: "/about", element: <About/>},
         {path: "*", element: <NotFound/>},
    ])
}
