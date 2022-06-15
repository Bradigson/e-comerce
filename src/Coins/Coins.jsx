import {useReducer, useState, useEffect} from 'react'
import { reducer } from './ReduxToolkit/Reducer';
import { type } from './ReduxToolkit/Store';
import '../assets/style/Coins.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Coins = ()=>{
    const [state, dispatch] = useReducer(reducer, 0);
    const [darkMode, setDarkMode] = useState(true);
    let [coin, setCoin] = useState(0);
    const sum = ()=>{
        dispatch({type : type.sum});
    }
    const subtract = ()=>{
        dispatch({type : type.subtract});
    }
    const reset = ()=>{
        dispatch({type : type.reset});
    }

    const handleDarkMode = ()=>{
        setDarkMode(!darkMode);
    }

    // take money
    const handleTakeit = ()=>{
        if(state === 0){
            alert('no coin');
            
        }else{
            setCoin(coin += state);
            dispatch({type : type.reset});
        }
        
    }
    useEffect(()=>{
        const data = localStorage.getItem('coins');
        if(data){
            setCoin(JSON.parse(data))
        }
    },[])
    useEffect(()=>{
        if(coin){

            localStorage.setItem('coins', JSON.stringify(coin))
        }else{
            return
        }
    })
    
    return(
        <div className='coins-container'>
           
            <div className='bg-light btn-left position-absolute top-0 start-0 ms-5 mt-5 rounded-circle p-2 d-flex align-items-center shadow'>
                <Link to='/' className='nav-link'><i className='bx bx-left-arrow-alt fs-2'></i></Link>
            </div>
            <motion.div 
            animate={{y : 50}}
            transition={{ type: "spring", stiffness: 280 }}
            className='card shadow'>
                <div className=' text-center'>
                    <button  className="btn btn-primary shadow w-25 p-1">
                        <span className='fs-4 me-2'>{coin}.00</span> <span className="badge text-bg-warning rounded-circle p-2 shadow">
                            <i className='bx bx-bitcoin text-light' ></i>
                        </span>
                    </button>
                </div>
                <div className=' d-flex  justify-content-center mt-3'>
                    <h1 className=' d-flex align-items-center justify-content-center w-50 '> 
                    <motion.i 
                     drag
                     dragConstraints={{
                       top: -.5,
                       left: -.5,
                       right: .5,
                       bottom: .5,
                     }}
                     className='bx bxl-bitcoin text-warning me-4'></motion.i> {state}</h1>
                </div>
                <div className='text-center mt-4'>
                    <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={sum} 
                     className='me-4 btn fs-2'><i className='bx bx-plus' ></i></motion.button>
                        {
                            state === 0 ? (
                                <button disabled onClick={subtract} className='btn fs-2'><i className='bx bx-minus'></i></button>
                            ) : (
                                <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={subtract}
                                className='btn fs-2' ><i className='bx bx-minus'></i></motion.button>
                            )
                        }
                    <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={reset} 
                     className='ms-4 btn fs-2'><i className='bx bxs-eraser'></i></motion.button>
                </div>
                <div className='text-center mt-5 text'>
                    <button className='btn btn-dark shadow' onClick={handleTakeit}>Take your coins</button>
                </div>
            </motion.div>
        </div>
    )
}


export default Coins;