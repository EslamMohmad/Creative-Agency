import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HoverCursor from "../../reuseable components/HoverCursor";
import { teams } from "../../utls/constants";

import "swiper/css";
import "swiper/css/navigation";

const OurTeam = () => {
  const slideBreakpoints = {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  };

  return (
    <section className="h-[900px] lg:h-[600px] flex items-center">
      <div className="absolute left-0 w-full h-[900px] lg:h-[600px] bg-gradient-to-r from-mainColor from-50% to-white/5 to-10%"></div>
      <div className="relative lg:absolute lg:grid items-center grid-rows-2 lg:grid-rows-none grid-cols-none lg:grid-cols-7 gap-5 lg:mr-10 w-full lg:w-auto">
        <div className="relatvie z-10 lg:col-start-1 lg:col-end-3 lg:w-[max-content]">
          <p className="tracking-[15px] uppercase text-md text-lightGreenColor">
            employees
          </p>
          <h1 className="4xl uppercase text-6xl font-bold my-7">our team.</h1>
          <div className="flex gap-3">
            <HoverCursor>
              <button className="w-[60px] h-[60px] text-center border border-white rounded-full prevSlide">
                <FontAwesomeIcon icon={faChevronLeft} />{" "}
              </button>
            </HoverCursor>
            <HoverCursor>
              <button className="w-[60px] h-[60px] text-center border border-white rounded-full nextSlide">
                <FontAwesomeIcon icon={faChevronRight} />{" "}
              </button>
            </HoverCursor>
          </div>
        </div>
        <div className="lg:col-start-4 xl:col-start-3 lg:col-end-8 mt-16 lg:mt-0">
          <Swiper
            spaceBetween={20}
            modules={[Navigation, Autoplay]}
            breakpoints={slideBreakpoints}
            loop
            autoplay={{
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".nextSlide",
              prevEl: ".prevSlide",
            }}
          >
            {teams.slider.map(({ img, name, jop }) => (
              <SwiperSlide key={name} className="group">
                <div className="h-[350px] relative">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden bg-lightMainColor">
                  <div className="p-4 text-center transition-opacity duration-300 group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-200">
                    <h4 className="font-bold text-xl">{name}</h4>
                    <p className="text-zinc-500 text-sm">{jop}</p>
                  </div>
                  <div className="absolute -bottom-full left-0 w-full h-full opacity-0 group-hover:opacity-100 group-hover:-bottom-0 transition-all duration-300 group-hover:delay-150">
                    <ul className="flex gap-4 h-full items-center justify-center">
                      {teams.icons.map((icon, idx) => (
                        <li key={idx}>
                          <HoverCursor>
                            <FontAwesomeIcon
                              size="sm"
                              icon={icon}
                              className="text-lightGreenColor"
                            />
                          </HoverCursor>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
