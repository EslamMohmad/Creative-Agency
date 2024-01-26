import HoverCursor from "./../../reuseable components/HoverCursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import img from "./assets/1.jpg";
import ClientSliders from "./ClientSliders";
import { clients } from "../../utls/constants";

const Clients = () => {
  return (
    <section>
      <div className="h-[1000px] sm:h-[1000px] lg:h-[700px]">
        <div className="absolute w-full left-0 h-full lg:h-[700px]">
          <img
            src={img}
            className="h-[1000px] sm:h-[1000px] lg:h-[700px] w-full object-cover object-right"
          />
          <div className="absolute h-[1000px] sm:h-[1000px] lg:h-[700px] w-full top-0 left-0 bg-black/80 z-10"></div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-20 lg:gap-10 lg:translate-y-[250px] py-10 sm:py-20 lg:py-0">
          <div className="lg:w-[45%] h-[fit-content]">
            <HoverCursor className="w-[100px] h-[100px] rounded-full bg-white/20 p-[7.5px] cursor-pointer">
              <div className="w-[85px] h-[85px] rounded-full bg-white flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-lightGreenColor"
                  size="2x"
                />
              </div>
            </HoverCursor>
            <h1 className="mt-10 font-extrabold text-4xl leading-[1.5]">
              So that's us. There's no otherway to put it.
            </h1>
          </div>
          <ClientSliders />
        </div>
      </div>
      <div className="h-[200px]">
        <div className="absolute h-[200px] left-0 w-full bg-lightMainColor"></div>
        <div className="relative z-10 flex items-center gap-10 lg:gap-10 h-full mx-auto lg:mx-0 w-[fit-content]">
          {clients.circleProgress.map(({ value, heading, text }, i) => (
            <div key={value + i} className="flex gap-4 items-center">
              <div className="relative w-[100px] h-[100px]">
                <svg
                  className="progress-circle svg-content"
                  width="100%"
                  height="100%"
                  viewBox="-1 -1 102 102"
                >
                  <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                      fill: "transparent",
                      stroke: "#75dab4",
                      strokeWidth: "2",
                      strokeDasharray: "307",
                      strokeDashoffset: `${(-value / 100) * 307 - 307}`,
                      transition: "all 100ms linear",
                    }}
                  ></path>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {value}%
                </div>
              </div>
              <div>
                <h6 className="text-sm mb-2 text-slate-300">{heading}</h6>
                <p className="font-bold">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
