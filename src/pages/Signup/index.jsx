import { useEffect, useState } from "react";
import { PageContainer, PageTitle,  ErrorMessage} from "../../components/MainComponents";
import { PageArea } from "./styled";
import * as C from "./styled"
import useApi from "../../helpers/DesapegaAPI";
import { doLogin } from "../../helpers/auth/AuthHandler";

const Register = () => {

    const api = useApi();

    const [name,setName] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("");
    const [email, setEmail] = useState("")

    const [stateList, setStateList] = useState([]);

    const [disable, setDisable] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist)
        }
        getStates();
    },[])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisable(true)
        setError('')

        if(password !== confirmPassword){
            setError('Senhas não batem.')
        }

        const json = await api.register(name, email, password, location)

        if(json.error){
            setError(json.error)
        }
        else{
            doLogin(json.token)
            window.location.href = '/';
        }

        setDisable(false)

    }

    return (
        <C.PageArea>
            <div className="box">
                <PageTitle>Fazer Cadastro</PageTitle>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="area">
                            <div className="area--title">Nome Completo</div>
                            <div className="area--input">
                                <input 
                                type="text"
                                id="name" 
                                disabled={disable}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nome Completo"
                                required
                                />
                            </div>
                    </label>
                    <label htmlFor="name" className="area">
                        <div className="state">
                            <div className="area--title">Estado:</div>
                            <div className="area--input">
                                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                                    <option></option>
                                    {stateList.map((item, key) => (
                                        <option key={key} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </label>
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
                    <label htmlFor="confirm-password" className="area">
                        <div className="area--title">Confirme sua senha</div>
                        <div className="area--input">
                            <input 
                            type="password"
                            id="confirm-password"
                            disabled={disable}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Senha"
                            required
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--input">
                            <button disabled={disable}>Fazer Cadastro</button>
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
 
export default Register;