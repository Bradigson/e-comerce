import { Button } from "../assets/style-component/StyleComponent";
import '../assets/style/Header.scss';
import { useState } from "react";
const Header = ()=>{
    const [coin, setCoin] = useState(
        localStorage.getItem('coins')
    )
    return(
        <header className=" ">
            <nav className="d-flex justify-content-center align-items-center">
                <div className="text-center w-75">
                    <h1>ShopingWish</h1>
                </div>
                <div className=" w-25 d-flex">
                    <Button className="btn  position-relative">
                    <i className='bx bx-shopping-bag'></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                            0
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </Button>
                    <div className=' text-center w-75  ms-5 '>
                        <button disabled className="btn btn-light w-100 p-1 d-flex align-items-center justify-content-center">
                            <span className='fs-4 me-2'>{coin}.00</span> <span className="badge text-bg-warning rounded-circle p-2 shadow">
                                <i className='bx bx-bitcoin text-light' ></i>
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header;