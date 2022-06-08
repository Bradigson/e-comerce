import { NavLink } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import '../assets/style/Home.scss';

const Home = ()=>{
    return(
        <article className="article">
            <div className="article__container-section">
                {/* section #1 */}
                <sectiion className="article__container-section1">
                    <div className="">
                        <h2>Shop</h2>
                    </div>
                    <div className="line"></div>
                    <div>
                        <ul>
                            <li><NavLink to="" className='nav-link'>Home Furnishings</NavLink></li>
                            <li><NavLink to="" className='nav-link'>Accessories</NavLink></li>
                            <li><NavLink to="" className='nav-link'>Sport</NavLink></li>
                            <li><NavLink to="" className='nav-link'>Clothing Wear</NavLink></li>
                        </ul>
                    </div>
                </sectiion>

                {/* section #2 */}
                <sectiion className="article__container-section2">
                    <HomeSlider/>
                </sectiion>

                {/* section #3 */}
                <sectiion className="article__container-section3">
                    <div className="">
                        <span>1.0</span>
                    </div>
                    <div className="">
                        <h4 className="fs-6">Limited edition</h4>
                        <h3>White Clock</h3>
                    </div>
                    <div className=" d-flex justify-content-end">
                        <button className="btn btn-outline-dark">Shop now</button>
                    </div>
                </sectiion>
            </div>
        </article>
    )
}
export default Home;