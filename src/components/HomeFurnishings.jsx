import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../assets/style/LivingRoom.scss';
import app from "../firebase/fFirebase";
import { getFirestore, collection, query, onSnapshot, orderBy } from "firebase/firestore";
const dataBase = getFirestore(app);
const LivinRoom = ()=>{
    // get living room acesoory
    const [livinRoom, setLivingRoom] = useState([]);
    useEffect(()=>{
        const getLivingRoom = ()=>{
            try{
                const collectionRef = collection(dataBase, 'LivingRoom');
                const q = query(collectionRef);
                onSnapshot(q, (querySnap)=>{
                    setLivingRoom(querySnap.docs.map(doc=>({...doc.data(), id : doc.id})))
                })

            }catch(err){
                console.log(err);
            }
        }
        getLivingRoom();
    },[])
    console.log(livinRoom)
    return(
        <article className="home-furnishings pb-5">
            <motion.section className="home-furnishings__header d-flex align-items-center justify-content-between pt-3 " 
                            animate={{y:15}} transition={{ duration: 0.5 }}>
                <div className="d-flex align-items-center justify-content-between ps-2">
                    <motion.h2 className="fs-4 me-4">Living Room</motion.h2>
                    <span className='text-muted'>shop</span>
                </div>
                <div className="d-flex  me-4">
                    <Link to='' className="nav-link me-2">Previous</Link><span className="text-muted">{' | '}</span>
                    <Link to='' className="nav-link ms-2">Next</Link>
                </div>
            </motion.section>
            <section className="product-container mt-5">
                {
                    livinRoom.map(room=>{
                        return(
                            <Link to={`/product_area/${room.producName}`} className="nav-link" key={room.id}>
                            <motion.div  className='products' 
                                        whileHover={{ scale: 1.1 }}>
                                            
                                <div className="product-img">
                                    <img src={room.url}/>
                                </div>
                                <div>
                                    <div >
                                         <h2 className="fs-5">{room.producName}</h2>
                                    </div>
                                    
                                    <div>
                                        <span>Price : {room.productPrice}</span><br/>
                                        <span>Size : {room.description}</span><br/>
                                        <span>Available : {room.amount}</span>
                                    </div>
                                    
                                </div>
                            </motion.div>
                            </Link>
                        )
                    })
                }

            </section>
        </article>
    )
}


export default LivinRoom;