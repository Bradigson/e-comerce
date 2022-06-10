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
        <article className="home-furnishings">
            <section className="home-furnishings__header d-flex align-items-center justify-content-between pt-3">
                <div className="d-flex align-items-center justify-content-between ps-2">
                    <h2 className="fs-4 me-4">Living Room</h2>
                    <span className='text-muted'>shop</span>
                </div>
                <div className="d-flex  me-4">
                    <Link to='' className="nav-link me-2">Previous</Link><span className="text-muted">{' | '}</span>
                    <Link to='' className="nav-link ms-2">Next</Link>
                </div>
            </section>
            <section className="product-container">
                {
                    livinRoom.map(room=>{
                        return(
                            <motion.div key={room.id} className='products' 
                                        whileHover={{ scale: 1.1 }}
                                        drag
                                        dragConstraints={{
                                        top: -2,
                                        left: -2,
                                        right: 2,
                                        bottom: 2,
                                        }}>
                                            
                                <div className="product-img">
                                    <img src={room.url}/>
                                </div>
                                <div>
                                    <div>
                                         <h2>{room.producName}</h2>
                                    </div>
                                    
                                    <div>
                                        <spna>{room.productPrice}</spna><br/>
                                        <span>{room.description}</span><br/>
                                        <span>{room.amount}</span>
                                    </div>
                                    
                                </div>
                            </motion.div>
                        )
                    })
                }

            </section>
        </article>
    )
}


export default LivinRoom;