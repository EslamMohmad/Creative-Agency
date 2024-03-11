import img from "./assets/1.jpg";
import HoverCursor from "./../../reuseable components/HoverCursor";
import Services from "./Services";
import Parallex from "../../reuseable components/Parallex";
import { useRef } from "react";
import { menuItems } from "../../utls/constants";
import { useLocation } from "react-router-dom";
import Clients from "./Clients";
import OurTeam from "./OurTeam";
import AboutUs from "./AboutUs";
import OurClients from "./OurClients";
import Footer from "./Footer";

const About = () => {
  const imgRef = useRef();

  const navList = menuItems.main.filter(
    ({ _, route }) => route === " " || route === "/about"
  );

  const { pathname } = useLocation();

  return (
    <div className="capitalize text-white min-h-full">
      <header className="relative h-[80vh]">
        <div className="w-full h-full absolute bg-black/50 top-0 left-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="font-bold text-[4.5vw] mb-4">about us</h1>
            <ul className="list-none flex [&>li]:font-bold mx-auto w-[max-content]">
              {navList.map(({ txt, route }, i) => (
                <HoverCursor key={`about ${txt}`}>
                  <li
                    className={`${
                      pathname.includes(route) ? "text-emerald-400/90" : ""
                    }`}
                  >
                    {txt}
                    {i == 0 ? <span className="mx-2">/</span> : ""}
                  </li>
                </HoverCursor>
              ))}
            </ul>
          </div>
        </div>
        {/* <Parallex> */}
        <img
          ref={imgRef}
          src={img}
          className="w-full h-full object-cover object-right"
          // style={{ objectPosition: `right ${window.scrollY / 1.5}px` }}
        />
        {/* </Parallex> */}
      </header>
      <main className="mx-auto max-w-7xl px-10">
        <Services />
        <Clients />
        <OurTeam />
        <AboutUs />
        <OurClients />
        <Footer />
      </main>
    </div>
  );
};

export default About;
