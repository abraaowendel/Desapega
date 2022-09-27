import { isLogged } from "./auth/AuthHandler";

const RouteHandler = ({children}) => isLogged() ? children : window.location.href = "/signin"

export default RouteHandler;