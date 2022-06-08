import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProducts";
import Page from "../page/Page";

const Rutas = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Page/>}/>
            <Route path='store_products' element={<AddProduct/>}/>
        </Routes>
    )
}


export default Rutas;