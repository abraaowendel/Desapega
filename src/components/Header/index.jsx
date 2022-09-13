import * as C from "./styles"
import { Link } from "react-router-dom";
import { isLogged } from "../../helpers/auth/AuthHandler";
import Logo from "../../assets/svgs/logo.svg"

const Header = () => {
    let logged = isLogged();
    return (
        <C.HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <img src={Logo} alt=""  height="50px"/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                        <> 
                          <li>
                            <Link to="/my-account">Minha conta</Link>
                          </li>
                          <li>
                            <Link to="/post-and-ad" className="button">Poste um anuncio</Link>
                          </li>
                          <li>
                            <Link to="/logout">Sair</Link>
                          </li>
                        </>
                        }

                        {!logged && 
                        <>
                          <li>
                            <Link to="/signin">Login</Link>
                          </li>
                          <li>
                            <Link to="/signup">Cadastrar</Link>
                          </li>
                        </>
                        }
                    </ul>
                </nav>
            </div>
        </C.HeaderArea>
    );
}
 
export default Header;