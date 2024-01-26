import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../utls/constants";
import { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HoverCursor from "../../reuseable components/HoverCursor";
const NavList = ({ state }) => {
  const [hoverState, setHoverState] = useState(0);

  const { pathname } = useLocation();

  const { main } = menuItems;

  return (
    <div className="flex-grow pt-40">
      <ul className="w-1/2 mx-auto">
        {main.map(({ txt, route }, i) => (
          <HoverCursor
            key={route}
            className={`outline-none py-3 sm:py-4 first:pt-0 last:pb-0 text-white cursor-pointer w-[max-content] overflow-hidden ${
              hoverState === i + 1 ||
              pathname === ("/Creative-Agency" + route).trim()
                ? "opacity-100"
                : "opacity-30"
            }`}
          >
            <li
              onMouseEnter={() => state && setHoverState(i + 1)}
              onMouseLeave={() => state && setHoverState(0)}
            >
              <Link to={`/Creative-Agency${route}`}>
                <h1
                  className={`pl-2 capitalize text-2xl sm:text-3xl md:text-4xl font-bold ${
                    state
                      ? "translate-y-0 delay-[800ms]"
                      : "-translate-y-[100px]"
                  } duration-700 transition-transform`}
                >
                  <span className="text-sm mr-2">0{i + 1}.</span>
                  {txt}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-base ml-3"
                  />
                </h1>
              </Link>
            </li>
          </HoverCursor>
        ))}
      </ul>
    </div>
  );
};

export default memo(NavList);
