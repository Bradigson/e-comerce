import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProducts";

const Rutas = ()=>{
    return(
        <Routes>
            <Route path='/' element={<h1>home</h1>}/>
            <Route path='store_products' element={<AddProduct/>}/>
        </Routes>
    )
}


export default Rutas;