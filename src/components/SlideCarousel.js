import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import "./SlideCarousel.css";

import { EffectCoverflow, Pagination, Scrollbar, Navigation, Mousewheel, A11y } from "swiper";

function SlideCarousel() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState("");

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_sort=id&_order=desc&_limit=7')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setPosts(result);
        //console.log(result);
        
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

  return (
    <>
    <div className='swiper-main-container'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar, Mousewheel, A11y]}
        className="swiper-container"
      >

          {posts.map((post) => (  
            <SwiperSlide>
              <div className="slide slide-container" key={post.id}> 
                <h3 className='slide-title'>{post.title}</h3>  
                <p className='slide-body'>{post.body}</p>  
              </div>  
            </SwiperSlide>
          ))} 

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>

      </Swiper>
    </div>
    </>
  );
  }
}

export default SlideCarousel;