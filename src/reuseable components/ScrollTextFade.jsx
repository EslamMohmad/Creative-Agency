import { useEffect, useState } from "react";

const ScrollTextFade = ({ children, element }) => {
  const [scrollValue, setScrollValue] = useState(100);

  useEffect(() => {
    const parentELeHeight = element.current.clientHeight / 1.3;
    function onScrollHandler() {
      const scrolled = Math.round(100 - (this.scrollY / parentELeHeight) * 100);
      if (scrolled <= 100) setScrollValue(scrolled);
    }

    window.addEventListener("scroll", onScrollHandler);

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, [scrollValue]);

  return (
    <div
      style={{
        opacity: scrollValue + "%",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollTextFade;
