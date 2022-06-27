import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import '../assets/style/ProductArea.scss';
import { useState, useEffect } from "react";
import app from "../firebase/fFirebase";
import {getFirestore, collection, query, onSnapshot} from 'firebase/firestore';
import Counter from "../ReduxToolkit/Counter";
const dataBase = getFirestore(app);
const ProductArea = ()=>{

    let { productName } = useParams();

    // Living room data
    const [stuff, setStuff] = useState([]);
    useEffect(()=>{
        const getLivingRoomStuff = ()=>{
            try{
                const collectionRef = collection(dataBase, 'LivingRoom');
                const q = query(collectionRef);
                onSnapshot(q, (querySnap)=>{
                    setStuff(querySnap.docs.map(s=> ({...s.data(), id : s.id})))
                })

            }catch(err){
                console.log(err)
            }
        }
        getLivingRoomStuff();
    },[]);
     
    return(
        <article className="productarea">
            <Header/>
            <div className="product">
                <Link to='/'>back</Link>
                {
                    stuff.map(sf=>{
                        return(
                            
                           sf.id === productName ? (
                               <div className="product_card " key={sf.id}>
                                   <div className=" w-50 h-100 product_card-img">
                                       <img src={sf.url}/>
                                   </div>
                                   <div className=" w-50 pt-5 ps-5">
                                       <h1>{sf.producName}</h1>
                                       <div className="mt-4">
                                           <div>Price : {sf.productPrice}</div>
                                            <div className="fs-4 text-warning d-flex justify-content-between w-25 mt-3">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                           <div className="mt-3">
                                               <div>Available : {sf.amount}</div>
                                               <div>Size : {sf.description}</div>
                                           </div>
                                       </div>
                                       <div className="mt-4 d-flex align-items-center justify-content-evenly">
                                           <div className=" p-1 w-25"><span><Counter/></span></div>
                                           <button className="btn btn-primary">Add</button>
                                       </div>
                                   </div>
                               </div>
                           ):
                           ('')
                        )
                    })
                }
            </div>
        </article>
    )
}


export default ProductArea;