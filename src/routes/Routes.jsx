import { Route, Routes } from "react-router-dom";
import Coins from "../Coins/Coins";
import AddProduct from "../components/AddProducts";
import LivinRoom from "../components/HomeFurnishings";
import ProductArea from "../components/ProductArea";
import Page from "../page/Page";

const Rutas = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Page/>}/>
            <Route path='store_products' element={<AddProduct/>}/>
            <Route path='living_room' element={<LivinRoom/>}/>
            <Route path='product_area/:productName' element={<ProductArea/>}/>
            <Route path='coins' element={<Coins/>}/>
        </Routes>
    )
}


export default Rutas;