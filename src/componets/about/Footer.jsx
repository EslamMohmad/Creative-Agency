import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverCursor from "../../reuseable components/HoverCursor";
import { instagramPosts, menuItems, teams } from "../../utls/constants";
import logo from "../home/assets/Home/logo.png";

const Text = ({ children }) => {
  return (
    <div className="relative w-[fit-content] py-1">
      <span className="relative z-10 uppercase tracking-[5px] text-xs">
        {children}
      </span>
      <div className="absolute left-0 top-0 w-1/2 z-0 h-full bg-zinc-500/15"></div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="lg:h-[600px]">
        <div className="h-[-webkit-fill-available] lg:h-[inherit] absolute left-0 w-full bg-gradient-to-b lg:bg-gradient-to-l from-lightMainColor from-50% to-white/5 to-10%"></div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-center h-[inherit] relative py-10 lg:py-0">
          <div className="flex flex-col gap-9 w-auto lg:w-auto">
            <img src={logo} className="w-[50px]" />
            <ul>
              {Object.keys(menuItems.aside).map((key) => (
                <li
                  key={key}
                  className="mb-2 last:mb-0 flex items-center text-sm"
                >
                  <span className="font-bold">{key} :</span>
                  <div className="flex-grow ml-5 inline-block"></div>
                  <span className="text-zinc-300">{menuItems.aside[key]}</span>
                </li>
              ))}
            </ul>
            <Text>follow us</Text>
            <ul className="flex gap-2">
              {teams.icons.map((icon, i) => (
                <HoverCursor
                  key={i}
                  className="w-[40px] h-[40px] leading-[40px] text-center rounded-full bg-lightMainColor/60"
                >
                  <FontAwesomeIcon icon={icon} size="sm" />
                </HoverCursor>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-9 lg:w-[400px]">
            <Text>newsletters</Text>
            <form onSubmit={(e) => e.preventDefault()}>
              <p className="pb-5 text-xs text-zinc-400">
                sign up for subscribe out newsletter!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your email"
                  className="p-4 bg-mainColor flex-grow capitalize border border-zinc-600"
                />
                <HoverCursor>
                  <button
                    type="submit"
                    className="uppercase text-lightGreenColor px-5 bg-mainColor/60 h-full text-xs"
                  >
                    subscribe
                  </button>
                </HoverCursor>
              </div>
            </form>
            <Text>instagram post</Text>
            <ul className="flex gap-4">
              {instagramPosts.map((post) => (
                <HoverCursor key={post}>
                  <img
                    src={post}
                    className="w-[50px] h-[50px] object-cover rounded-full"
                  />
                </HoverCursor>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-12 py-8 lg:absolute z-20 text-center text-sm text-zinc-400 bottom-0 lg:left-1/2 lg:-translate-x-1/2 bg-mainColor mx-auto lg:w-1/2">
        © 2020, Avo Template. Made with passion by{" "}
        <span className="text-lightGreenColor">UI-ThemeZ.</span>
      </div>
    </footer>
  );
};

export default Footer;
