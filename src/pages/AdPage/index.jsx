import * as C from "./styled";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { Slide } from "react-slideshow-image"

import 'react-slideshow-image/dist/styles.css';

import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/AdItem"
import useApi from "../../helpers/DesapegaAPI";


const AdPage = () => {

    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([])

    useEffect(() => {
        const getAdInfo = async () => {
            const json = await api.getAd(id, true);
            setAdInfo(json)
            setLoading(false)
        }
        getAdInfo();
    }, [])

    const formatDate = (date) => {
        let cDate = new Date(date)
        let months = ["Janeiro" ,"Fevereiro","Março" ,"abril" , "Maio" ,"Junho" ,"Julho" ,"Agosto","Setembro" ,"Outubro" ,"Novembro" ,"Dezembro"]
       
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `Criado em ${cDay} de ${months[cMonth]} de ${cYear}.`
    } 

    return (

        <PageContainer>
            <C.BreadChumb>
                {adInfo.category && 
                    <>
                        Você está aqui: 
                        <Link to="">Home</Link>
                        /
                        <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                        /
                        <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                        / {adInfo.title}
                    </>
                }
               
            </C.BreadChumb>
            <C.PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <C.Fake height={300}/>}
                            {!loading && <>
                                <Slide>
                                    {adInfo.images &&
                                        adInfo.images.map((item, key) => (
                                            <img src={item} alt="" />
                                        ))
                                    }
                                </Slide>  
                            </>}
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <C.Fake height={20}/>}
                                {!loading && 
                                <>
                                    <h2>{adInfo.title}</h2>
                                    <small>{formatDate(adInfo.dateCreated)}</small>
                                </>}
                            </div>
                            <div className="adDescription">
                                {loading && <C.Fake height={100}/>}
                                {!loading && <>
                                    <p>{adInfo.description}</p>
                                    <small>Visualizações: {adInfo.views}</small>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rigthSide">
                    <div className="box box--padding">
                        {loading && <C.Fake height={30}/>}
                        {!loading && 
                        <>
                            {adInfo.priceNegotiable &&
                                <p>Preço negociavél.</p>
                            }
                            {!adInfo.priceNegotiable && adInfo.price &&
                                <div className="price">Preço: <br /><span>{adInfo.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></div>
                            }
                        </>}
                    </div>
                    {loading && <C.Fake height={30}/>}
                    {!loading && adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} className="contactSeller">Falar com vendedor</a>
                            <div className="box box--padding">
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </div>
                        </>
                    }
                </div>
            </C.PageArea>
            {adInfo.others &&
                <C.OthersArea>
                     <h2>Outros anúncios desse vendedor</h2>
                    <div className="list">
                        {adInfo.others.map((item, key) => (
                            <AdItem data={item} key={key} others={true}/>
                        ))}
                    </div>
                </C.OthersArea>
            }
        </PageContainer>
    );
}
 
export default AdPage;
