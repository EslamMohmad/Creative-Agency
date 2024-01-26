import { memo } from "react";
import { menuItems } from "../../utls/constants";

const DevDetails = ({ state }) => {
  const { aside } = menuItems;

  return (
    <div
      className={`hidden sm:flex w-1/2 lg:w-1/3 pt-40 pl-10 flex-col gap-8 ${
        state
          ? "translate-y-0 opacity-100 delay-[800ms]"
          : "translate-y-20 opacity-0"
      } transition-[transform, opacity] duration-700 ease`}
    >
      {Object.keys(aside).map((key) => (
        <div key={key}>
          <h4 className="text-white uppercase font-semibold text-xs md:text-base mb-2">
            {key}
          </h4>
          <p className="text-gray-400 capitalize text-sm md:text-base select-text">
            {aside[key]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default memo(DevDetails);
