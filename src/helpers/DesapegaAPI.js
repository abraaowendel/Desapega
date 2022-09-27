import Cookies from "js-cookie"
import qs from "qs";

const BASEAPI = "http://alunos.b7web.com.br:501"

const apiFetchFile= async (endpoint, body) => {
    
    if(!body.token){
        let token = Cookies.get('token')
        if(token){
            body.append('token', token)
        }
    }

    const response = await fetch(`${BASEAPI}${endpoint}`,{
        method: "POST",
        body
    })
    
    const json = await response.json();

    if(json.notallowed){
        window.location.href = "/"
        return;
    }

    return json
}


const apiFetchPost = async (endpoint, body) => {
    
    if(!body.token){
        let token = Cookies.get('token')

        if(token){
            body.token = token
        }
    }

    const response = await fetch(`${BASEAPI}${endpoint}`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    
    const json = await response.json()

    if(json.notallowed){
        window.location.href = "/signin"
        return;
    }

    return json
}

const apiFetchGet = async (endpoint, body = []) => {
    
    if(!body.token){
        let token = Cookies.get('token')

        if(token){
            body.token = token
        }
    }

    const response = await fetch(`${BASEAPI}${endpoint}?${qs.stringify(body)}`)
    

    const json = await response.json()

    if(json.notallowed){
        window.location.href = "/signin"
        return;
    }

    return json
}


export const DesapegaAPI = {
    login: async (email, password) => {
        // fazer consulta ao WEBSERVICE
        const json = await apiFetchPost('/user/signin', {email, password})
        return json
    },
    register: async (name, email, password, location) => {
        const json = await apiFetchPost(
            "/user/signup",
            {name, email, password, state: location}
        )
        return json;
    },
    getStates: async () => {
        const json = await apiFetchGet("/states");
        return json.states
    },
    getCategories: async () => {
        const json = await apiFetchGet("/categories");
        return json.categories
    },
    getAds: async (options) => {
        const json = await apiFetchGet("/ad/list", options)
        return json.ads
    },
    getAd: async (id, other = false) => {
        const json = await apiFetchGet("/ad/item", {id, other})
        return json
    },
    getAdAdd: async (fData) => {
        const json = await apiFetchFile("/ad/add", fData)
        return json
    }
}
export default () => DesapegaAPI;