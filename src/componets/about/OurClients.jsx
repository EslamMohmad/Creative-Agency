import HoverCursor from "../../reuseable components/HoverCursor";
import HoverTransitionTxt from "../../reuseable components/HoverTransitionTxt";
import { brands } from "../../utls/constants";
import pattern from "./assets/pattern.png";
const OurClients = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="relative py-16 w-full flex flex-col xl:flex-row gap-10  items-center lg:justify-between">
          <div className="flex gap-4 flex-col w-full xl:w-[40%]">
            <h4 className="text-lightGreenColor tracking-[15px] text-sm uppercase">
              clients
            </h4>
            <h1 className="font-extrabold text-3xl md:text-7xl text-wrap md:leading-[7rem]">
              our clients.
            </h1>
          </div>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 w-full xl:w-auto lg:flex-grow`}
          >
            {brands.map((brand) => (
              <HoverCursor key={brand} className="relative group h-[150px]">
                <div className="border border-zinc-700 rounded-lg h-full flex justify-center items-center">
                  <img
                    src={brand}
                    className="object-cover w-[80px] md:w-[60px] lg:w-[80px] group-hover:opacity-0 group-hover:scale-0 transition-[transform,opacity] duration-200"
                  />
                </div>
                <HoverTransitionTxt className="text-sm lg:text-md flex lowercase overflow-hidden z-10 opacity-0 items-center justify-center group-hover:opacity-100 transition-opacity group-hover:delay-150 h-full w-full absolute top-0 left-0 ">
                  www.avo.com
                </HoverTransitionTxt>
              </HoverCursor>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-[300px]">
        <div className="absolute bg-lightMainColor w-full h-[inherit] left-0">
          <img src={pattern} className="h-[inherit] object- w-full" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:items-end relative">
          <div className="uppercase">
            <h4 className="text-lightGreenColor text-xs tracking-[5px] mb-5">
              let's talk
            </h4>
            <h1 className="text-xl md:text-5xl font-extrabold">
              <span
                style={{
                  WebkitTextStroke: "1px white",
                  color: "transparent",
                }}
              >
                about your{" "}
              </span>
              next project
            </h1>
          </div>
          <HoverCursor className="ml-auto md:ml-0">
            <button className="group relative z-10 border-2 border-white font-semibold text-md w-[200px] capitalize h-[fit-content] py-4 hover:text-black transition-colors overflow-hidden">
              <div className="absolute w-[calc(100%_+_10px)] h-full -top-20 -rotate-6 group-hover:rotate-0  bg-white origin-bottom z-0 group-hover:top-0 transition-all duration-300"></div>
              <span className="relative block z-10">get touch</span>
            </button>
          </HoverCursor>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
