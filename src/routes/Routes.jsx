import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProducts";
import LivinRoom from "../components/HomeFurnishings";
import Page from "../page/Page";

const Rutas = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Page/>}/>
            <Route path='store_products' element={<AddProduct/>}/>
            <Route path='living_room' element={<LivinRoom/>}/>
        </Routes>
    )
}


export default Rutas;