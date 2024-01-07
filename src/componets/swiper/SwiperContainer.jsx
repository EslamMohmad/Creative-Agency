import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "swiper/css";

const SwiperContainer = ({ children }) => {
  const { setCurrImgIdx } = useContext(AppContext);

  return (
    <Swiper
      modules={[Navigation, Parallax]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={({ activeIndex }) => setCurrImgIdx(activeIndex)}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      speed="1000"
      parallax
    >
      {children.map(({ img, text }, i) => (
        <SwiperSlide key={i} className="overflow-hidden">
          <div
            data-swiper-parallax="1440"
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

export default SwiperContainer;
