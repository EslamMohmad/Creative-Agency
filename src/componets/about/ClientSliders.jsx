import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { clients } from "../../utls/constants";
import "swiper/css";
import "swiper/css/pagination";

const ClientSliders = () => {
  return (
    <div className="lg:max-w-[480px] h-[fit-content] lg:ml-auto bg-lightGreenColor text-black px-10 py-20">
      <p className="uppercase tracking-[3px] text-xs">our happy clients</p>
      <h3 className="mt-3 mb-12 text-3xl font-bold">what client's say?</h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination
        speed="700"
        autoplay
        loop
        className="[&>.swiper-pagination]:static [&>.swiper-pagination]:flex [&>.swiper-pagination]:justify-end [&>.swiper-pagination]:mt-5 [&>.swiper-pagination>span]:bg-black"
      >
        {clients.slider.map(({ name, img, jop }, i) => (
          <SwiperSlide
            key={name + i}
            className="cursor-grab active:cursor-grabbing"
          >
            <p className="text-slate-800 leading-9 text-lg normal-case border-b pb-8 border-black/15">
              Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
              volutpat velit class aptent taciti sociosqu ad litora.
            </p>
            <div className="pt-10 flex items-center">
              <img
                src={img}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />
              <div className="ml-4 text-sm">
                <h6 className="font-bold mb-2 uppercase tracking-wider">
                  {name}
                </h6>
                <p className="text-slate-800 text-md">{jop}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSliders;
