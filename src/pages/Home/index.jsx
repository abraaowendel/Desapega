import * as C from "./styled"

import { useEffect, useState } from "react";
import { PageContainer, PageTitle } from "../../components/MainComponents";

import useApi from "../../helpers/DesapegaAPI";
import { Link } from "react-router-dom";

import AdItem from "../../components/AdItem";

const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([])
    
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
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: "desc",
                limit: 8
            });
            setAdList(json)
        }
        getRecentAds();
    },[])
    
    return (
        <>
        <C.SearchArea>
            <PageContainer>
                <div className="searchBox">
                    <form action="/ads" method="get">
                        <input type="text" name="q" placeholder="O que você precisa"/>
                        <select name="" id="">
                            <option value=""></option>
                            {stateList?.map((item, key) => (
                                <option key={key} value={item._id}>{item.name}</option>
                            ))}
                        </select>
                        <button>Pesquisar</button>
                    </form>
                </div>
                <div className="categoryList">
                    {categories?.map((item, key) => (
                        <Link key={key} to={`/ads?cat=${item.slug}`} className="categoryItem">
                            <img src={item.img} alt="" />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </PageContainer>
        </C.SearchArea>
        <PageContainer>
            <C.PageArea>
                <h2>Anúncios recentes</h2>
                <div className="list">
                    {adList?.map((item, key) => (
                        <AdItem key={key} data={item}/>
                    ))}
                </div>
                <Link to="/ads" className="seeAllLink">Ver todos</Link>
            </C.PageArea>
        </PageContainer>
        
        </>
    );
}
 
export default Home;