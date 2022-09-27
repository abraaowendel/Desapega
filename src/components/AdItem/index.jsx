import { Link } from "react-router-dom";
import * as C from "./styled"

const AdItem = (props) => {
    const { data, others} = props;
    let price = ''

    if(data.priceNegotiable){
        price = "Preço negociável"
    }else{
        price = `${data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    }

    const handleClick = () => {
        if(others == true){
            window.location.href = `/ad/${data.id}`
        }
    }

    return (  
        <C.Item>
            <Link to={`/ad/${data.id}`} onClick={handleClick}>
                <div className="itemImage">
                    <img src={data.image} alt="" />
                </div>
                <div className="itemName">{data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>
        </C.Item>
    );
}
 
export default AdItem;
