import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import t1 from "../assets/nam1.jpg";
import t2 from "../assets/nam2.jpg";
import t3 from "../assets/nam3.jpg";
import t4 from "../assets/nam4.jpg";
import t5 from "../assets/nam5.jpg";
import t6 from "../assets/nam6.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
const AutoSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="px-24 py-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Bizning ko'p qavatli uylarimiz
      </h1>
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        className="mySwiper mt-5 sm:mt-0 rounded-2xl"
      >
        <SwiperSlide
          onClick={() => {
            navigate(`/design`);
          }}
        >
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img
                className="w-[100%] rounded-2xl"
                src={t1}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            navigate(`/design`);
          }}
        >
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img
                className="w-[100%] rounded-2xl"
                src={t2}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            navigate(`/design`);
          }}
        >
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img
                className="w-[100%] rounded-2xl"
                src={t3}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            navigate(`/design`);
          }}
        >
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img
                className="w-[100%] rounded-2xl"
                src={t4}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            navigate(`/design`);
          }}
        >
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img
                className="w-[100%] rounded-xl"
                src={t5}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AutoSlider;
