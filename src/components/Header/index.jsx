import * as C from "./styles"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <C.HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span>O</span>
                        <span>L</span>
                        <span>X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Poste um anuncio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </C.HeaderArea>
    );
}
 
export default Header;