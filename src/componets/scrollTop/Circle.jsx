import { useEffect, useState } from "react";

const Circle = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      const winScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = Math.round((winScroll / height) * 100);

      setScrollValue(scrolled);
    }

    window.addEventListener("scroll", scrollHandler);
    //clean up
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
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
          strokeWidth: "4",
          strokeDasharray: "307",
          strokeDashoffset: `${307 - (scrollValue / 100) * 307}`,
          transition: "all 100ms linear",
        }}
      ></path>
    </svg>
  );
};

export default Circle;
