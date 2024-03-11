import { useEffect, useState } from "react";

const ScrollTextMove = ({ children, element }) => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const parentELeHeight = element.current.clientHeight / 2;
    function onScrollHandler() {
      const scrolled = Math.round((this.scrollY / parentELeHeight) * 100);
      setScrollValue(scrolled);
    }

    window.addEventListener("scroll", onScrollHandler);

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, [scrollValue]);

  return (
    <div
      style={{
        transform: `translateY(-${scrollValue}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollTextMove;
