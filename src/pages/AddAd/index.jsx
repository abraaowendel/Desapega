
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";

import useApi from "../../helpers/DesapegaAPI";
import * as C from "./styled";



const AddAd = () => {

    const api = useApi();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([])

    const fileField = useRef();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState("");

    const [disable, setDisable] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const getCategories = async () => {
            const json = await api.getCategories();
            setCategories(json)
        } 
        getCategories();
    },[])

    const handleSubmit =  async (event) => {

        event.preventDefault();
        setDisable(true)
        setError('')
        console.log(fileField)

        let errors = [];

        if(!title.trim()){
            errors.push('Sem título')
        }
        if(!category){
            errors.push('Sem categoria.')
        }
        if(errors.length === 0){
            const fData = new FormData();
            fData.append('title', title)
            fData.append('price', price)
            fData.append('priceneg', priceNegotiable)
            fData.append('des', desc)
            fData.append('cat', category)
            
            if(fileField.current.files.length > 0){
                for(let i = 0; i< fileField.current.files.length; i++){
                    fData.append('img', fileField.current.files[i])
                }
            }
            const json = await api.getAdAdd(fData);

            if(!json.error){
                navigate(`/ad/${json.id}`);
            }
            else{
                setError(json.error);
            }

        }
    }

    const priceMask = createNumberMask({
      prefix: 'R$ ',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: '.',
      allowDecimal: true,
      decimalSymbol: ',',
      decimalLimit: 2, 
      integerLimit: 7, 
      allowNegative: false,
      allowLeadingZeroes: false
    })

    
    return (
        <C.PageArea>
            <div className="box">
                <C.PageTitle>Anunciar Produto</C.PageTitle>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                            <input 
                            type="text"
                            disabled={disable}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título do Anúncio"
                            required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="category">
                            <div className="area--title">Categoria</div>
                            <div className="area--input">
                            <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                            required>
                                <option value=""></option>
                                {categories?.map((item, key) => (
                                    <option value={item._id} key={key}>{item.name}</option>
                                ))}
                            </select>
                            </div>
                        </div>
                    </label>
                    <label className="area">     
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            
                        <MaskedInput
                            mask={priceMask}
                            placeholder="R$ "
                            disabled={disable || priceNegotiable}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        </div>
                    </label>
                    <label className="area--check">     
                        <div className="area--title">Preço negociável</div>
                        <div className="area--input">
                           <input 
                           type="checkbox" 
                           disabled={disable}
                           checked={priceNegotiable}
                           onChange={() => setPriceNegotiable(!priceNegotiable)}
                           />
                        </div>
                    </label>
                    <label className="area desc">     
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                           <textarea 
                           type="text" 
                           disabled={disable}
                           value={desc}
                           onChange={(e) => setDesc(e.target.value)}
                           placeholder="Descreva seu produto"
                           required/>
                        </div>
                    </label>
                    <label className="area desc">     
                        <div className="area--title">Imagens</div>
                        <div className="area--input">
                            <input type="file" ref={fileField} multiple required />
                        </div>
                    </label>
                    <label htmlFor="" className="area">
                        <div className="area--input">
                            <button disabled={disable}>Fazer anúncio</button>
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
 
export default AddAd;