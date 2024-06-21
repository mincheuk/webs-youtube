import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

//웹스토리보이(HOME)에 있는 추천 개발자
const Developer = ({ videos, title, id })  => { // developerTEXT를 직접 사용하는 대신 videos라는 props를 받아서 컴포넌트가 
                                                // 동적으로 데이터 처리할 수 있도록 함
    const [loading, setLoading] = useState(true); //로딩 상태를 관리한다 13~19

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const developerClass = loading ? 'isLoading' : 'isLoaded'; //21~25 동적 CSS클래스를 할당한다

    return (
        <section id={id} className={developerClass}>
            <h2>{title}</h2>
            <div className='developer_inner'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                        1640: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    {videos.map((developer, key) => (
                        <SwiperSlide key={key}>
                            <div className='developer' key={key}>
                                <div className='developer_img play_icon'>
                                    <Link to={`/channel/${developer.channelId}`}>
                                        <img src={developer.img} alt={developer.name} />
                                    </Link>
                                </div>
                                <div className='develpoer_info'>
                                    <Link to={`/channel/${developer.channelId}`}>
                                        {developer.name}
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Developer