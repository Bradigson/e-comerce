import {useState} from 'react';
import '../assets/style/AddProducts.scss';
import { motion } from 'framer-motion';
import app from '../firebase/fFirebase';
import {getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
const dataBase = getFirestore(app);
const storage = getStorage(app);
const AddProduct = ()=>{
    // states
    const [producName, setProducName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [caregory, setCaregory] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);

    // functions
    const handleName = (e)=>{
        setProducName(e.target.value);
    }
    const handlePrice = (e)=>{
        setProductPrice(e.target.value);
    }
    const handleAmount = (e)=>{
        setAmount(e.target.value);
    }
    const handleCaregory = (e)=>{
        let catergoria = e.target.value;
        setCaregory(catergoria.replace(/\s/g,''))
        // setCaregory(e.target.value);
    }

    const handleFile = (e)=>{
        setFile(e.target.files[0])
    }

    const handleDescription = (e)=>{
        setDescription(e.target.value)
    }

    // function send productos to fiebase
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const fileRef = ref(storage, `${file.name}`);
            await uploadBytes(fileRef, file);

            getDownloadURL(ref(storage, `${file.name}`)).then((url)=>{
                addDoc(collection(dataBase, `${caregory}`),{
                    url,
                    producName,
                    productPrice,
                    amount,
                    description,
                    timeStamp : serverTimestamp()
                })
            })
            setLoading(!loading);
            setFile('');
            setProducName('');
            setProductPrice('');
            setAmount('');
            setDescription('');
            setCaregory('');
            
        }catch(err){
            console.log(err)
        }
        
     
    }
 
    return(
        
        <motion.div className='form-container' animate={{y:-20}}>
            <div className='text-center'>
                <h1>Store</h1>
                <p className='text-muted'>add products area, fill up the fields and send to store the products</p>
            </div>
            <form className="row g-3 shadow" onSubmit={handleSubmit}>
                {/* Product img */}
                <div className="mb-2">
                    <label  className="form-label">Product image</label>
                    <input className="form-control" type="file" id="formFile" onChange={handleFile}/>
                </div>


                {/* Product Name */}
                <div className="col-md-3">
                    <label  className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="inputEmail4" value={producName} onChange={handleName} />
                </div>

                {/* Product Prica */}
                <div className="col-md-3">
                    <label  className="form-label">Price</label>
                    <input type="text" className="form-control" id="inputPassword4" value={productPrice} onChange={handlePrice}  />
                </div>

                {/* Amount*/}
                <div className="col-3">
                    <label  className="form-label">Amount</label>
                    <input type="number" className="form-control" id="inputAddress"  value={amount} onChange={handleAmount} />
                </div>

                {/* Description*/}
                <div className="col-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" value={description} onChange={handleDescription} placeholder='Description'></textarea>
                </div>

                {/* Caregory */}
                <div className="col-md-4">
                    <label  className="form-label">Caregory</label>
                    <select id="inputState" className="form-select" value={caregory} onChange={handleCaregory} >
                    <option disabled></option>
                    <option >Choose...</option>
                    <option value='Forniture'>Forniture</option>
                    <option value='Home Office'>Home Office</option>
                    <option value='BedRoom'>BedRoom</option>
                    <option value='Dining Room'>Dining Room</option>
                    <option value='Living Room'>Living Room</option>
                    <option disabled></option>
                    </select>
                </div>
             
                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={()=> setLoading(!loading)}>
                        {
                            loading ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ):('Store')
                        }
                       
                    </button>
                </div>
            </form>

        </motion.div>
    )
}

export default AddProduct;