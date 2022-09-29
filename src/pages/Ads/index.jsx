import * as C from "./styled"

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";

import useApi from "../../helpers/DesapegaAPI";

import AdItem from "../../components/AdItem";

let timer;

const Ads = () => {

    const api = useApi();
    const navigate = useNavigate();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);
    const [opacity, setOpacity] = useState(0.3)

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search)
    };

    const query = useQueryString();
    const [q, setQ] = useState(query.get('q') !== null? query.get('q') : "");
    const [cat, setCat] = useState(query.get('cat') !== null? query.get('cat') : "");
    const [state, setState] = useState(query.get('state') !== null? query.get('state') : "");

    const getRecentAds = async () => {
        const json = await api.getAds({
            sort: "desc",
            limit: 9,
            q,
            cat,
            state
        });
        setAdList(json)
        setOpacity(1)
    }


    useEffect(() => {
        const getStates = async () => {
            const json = await api.getStates();
            setStateList(json)
        }
        getStates();        
    },[])

    useEffect(() => {
        const getCategories = async () => {
            const json = await api.getCategories();
            setCategories(json)
        }
        getCategories();        
    },[])

    
    useEffect(() => {

        let queryString = []

        if(q){
            queryString.push(`q=${q}`)
        }
        if(cat){
            queryString.push(`cat=${cat}`)
        }
        if(state){
            queryString.push(`state=${state}`)
        }

        navigate(`?${queryString.join("&")}`, {replace:true})

        if(timer){
            clearTimeout(timer)
        }

        timer = setTimeout(getRecentAds, 1000);
        setOpacity(0.3)
    }, [q, cat, state])


    return (
        <>
        <PageContainer>
            <C.PageArea>
               <div className="leftSide">
                    <form action="" method="get">
                        <input 
                        type="text" 
                        name="q"
                        value={q} 
                        placeholder="O que você deseja?"
                        onChange={(e) => setQ(e.target.value)}
                        />

                        <div className="filterName">Estado:</div>
                        <select name="state" value={state} onChange={(e) => setState(e.target.value)}>
                            <option value=""></option>
                            {stateList?.map((item, key) => (
                                <option value={item.name} key={key}>{item.name}</option>
                            ))}
                        </select>
                        <div className="filterName">Categoria:</div>
                        <ul>
                            {categories?.map((item, key) => (
                                <li key={key} 
                                className={cat == item.slug? "categoryItem active": "categoryItem"}
                                onClick={(e) => setCat(item.slug)}
                                >
                                    <img src={item.img} alt="" />
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </form>
               </div>
               <div className="rigthSide">
                    <h2>Resultados</h2>
                    <div className="warningMessage">Nenhum resultado encontrado...</div>
                    <div className="adItems" style={{opacity:`${opacity}`}}>
                        {adList?.map((item, key) => (
                            <AdItem data={item} others={true} key={key}/>
                        ))}
                    </div>
               </div>
            </C.PageArea>
        </PageContainer>
        
        </>
    );
}
 
export default Ads;