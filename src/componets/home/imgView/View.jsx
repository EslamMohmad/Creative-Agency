import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import { useLocation } from "react-router-dom";
import { imgsArr } from "../../../utls/constants";

import "swiper/css";

const View = () => {
  const { setCurrImgIdx } = useContext(AppContext);

  const { pathname } = useLocation();

  useEffect(() => {
    setCurrImgIdx(0);
  }, [pathname]);

  return (
    <Swiper
      modules={[Navigation, Parallax]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={({ activeIndex }) => setCurrImgIdx(activeIndex)}
      navigation={{
        nextEl: ".home-swiper-button-next",
        prevEl: ".home-swiper-button-prev",
      }}
      speed="1000"
      parallax
    >
      {imgsArr.map(({ img, text }, i) => (
        <SwiperSlide key={i} className="overflow-hidden">
          <div
            data-swiper-parallax="50%"
            className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-10"
          >
            <h1 className="text-white capitalize text-[9vw] font-extrabold leading-none">
              <div
                data-swiper-parallax="-2000"
                style={{ WebkitTextStroke: "1px white" }}
                className="text -ml-[12vw] text-transparent"
              >
                {text[0]}
              </div>
              <div data-swiper-parallax-x="-5000">{text[1]}</div>
            </h1>
          </div>
          <img
            data-swiper-parallax="1440"
            className="h-[100vh] w-[100vw] object-cover"
            src={img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default View;
