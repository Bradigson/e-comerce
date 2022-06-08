// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/style/HomeSlider.scss';
import img1 from '../assets/imgs/img1.png';

const HomeSlider = ()=>{


    return(
        <div className='slider'>
            <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={35}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='img'>
                    <img src={img1}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='img'>
                    <img src={img1}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='img'>
                    <img src={img1}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='img'>
                    <img src={img1}/>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default HomeSlider;