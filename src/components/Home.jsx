import { NavLink } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import '../assets/style/Home.scss';

const Home = ()=>{
    return(
        <article className="article">
            <div className="article__container-section">
                {/* section #1 */}
                <section className="article__container-section1">
                    <div className="">
                        <h2>Shop</h2>
                    </div>
                    <div className="line"></div>
                    <div>
                        <ul>
                            <li><NavLink to="living_room" className='nav-link'>Living Room</NavLink></li>
                            <li><NavLink to="" className='nav-link'>Accessories</NavLink></li>
                            <li><NavLink to="" className='nav-link'>Sport</NavLink></li>
                            <li><NavLink to="" className='nav-link'>Clothing Wear</NavLink></li>
                            <li><NavLink to="coins" className='nav-link'>Get Coins</NavLink></li>
                        </ul>
                    </div>
                </section>

                {/* section #2 */}
                <section className="article__container-section2">
                    <HomeSlider/>
                </section>

                {/* section #3 */}
                <section className="article__container-section3">
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
                </section>
            </div>
        </article>
    )
}
export default Home;