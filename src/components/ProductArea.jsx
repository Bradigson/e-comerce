import { useParams } from "react-router-dom";
import Header from "./Header";
const ProductArea = ()=>{
    let { productName } = useParams();
    return(
        <article>
            <Header/>
        </article>
    )
}


export default ProductArea;