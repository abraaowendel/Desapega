
import * as C from "./styled"
import { ErrorMessage, PageContainer, PageTitle } from "../../components/MainComponents";
import { useState } from "react";
import useApi from "../../helpers/DesapegaAPI"
import { doLogin } from "../../helpers/auth/AuthHandler";

const Login = () => {
    const api = useApi();

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        setDisable(true)
        const json = await api.login(email, password)

        if(json.error){
            setError(json.error)
        }
        else{
            doLogin(json.token, rememberPassword)
            window.location.href = "/"
        }
        
        setDisable(false)

    }
    
    return (           
        <C.PageArea>   
            <div className="box">
                <PageTitle>Login</PageTitle>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="area">
                        <div className="area--title">Seu e-mail</div>
                        <div className="area--input">
                            <input 
                            type="email"
                            id="email" 
                            disabled={disable}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            required
                            />
                        </div>
                    </label>
                    <label htmlFor="password" className="area">
                        <div className="area--title">Sua senha</div>
                        <div className="area--input">
                            <input 
                            type="password"
                            id="password"
                            disabled={disable}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            required
                            />
                        </div>
                    </label>
                    <label htmlFor="checked" className="area--check">     
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input 
                            type="checkbox"
                            id="checked"
                            disabled={disable}
                            checked={rememberPassword}
                            onChange={() => setRememberPassword(!rememberPassword)}
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--input">
                            <button disabled={disable}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </div>
            {error &&
                <ErrorMessage>{error}</ErrorMessage>
            }
        </C.PageArea>
    );
}
 
export default Login;