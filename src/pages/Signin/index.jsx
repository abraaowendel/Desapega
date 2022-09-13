
import * as C from "./styled"
import { PageContainer, PageTitle } from "../../components/MainComponents";
import { useState } from "react";
import useApi from "../../helpers/DesapegaAPI"
import { doLogin } from "../../helpers/auth/AuthHandler";

const Login = () => {
    const api = useApi();

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [rememberPassword, setRememberPassword] = useState("")
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
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <C.PageArea>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" disabled={disable}/>
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" disabled={disable}/>
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input type="checkbox" disabled={disable}/>
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disable}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </C.PageArea>
        </PageContainer>
    );
}
 
export default Login;