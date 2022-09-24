import * as C from "./styled"

import { useState } from "react";
import { PageContainer, PageTitle } from "../../components/MainComponents";

import useApi from "../../helpers/DesapegaAPI";

const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);

    return (
        <>
        <C.SearchArea>
            <PageContainer>
                <div className="searhBox">
                    <form action="/ads" method="get">
                        <input type="text" name="q" placeholder="O que você precisa"/>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <button>Pesquisar</button>
                    </form>
                </div>
                <div className="categoryList">

                </div>
            </PageContainer>
        </C.SearchArea>
        <PageContainer>
            <C.PageArea>
                ...
            </C.PageArea>
        </PageContainer>
        </>
    );
}
 
export default Home;