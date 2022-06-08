import { Button } from "../assets/style-component/StyleComponent";
import '../assets/style/Header.scss';
const Header = ()=>{
    return(
        <header className=" ">
            <nav className="d-flex justify-content-center align-items-center">
                <div className="text-center w-75">
                    <h1>ShopingWish</h1>
                </div>
                <div className="">
                    <Button className="btn  position-relative">
                    <i class='bx bx-shopping-bag'></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                            9
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </Button>
                </div>
            </nav>
        </header>
    )
}


export default Header;