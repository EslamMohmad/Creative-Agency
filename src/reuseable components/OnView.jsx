import { useEffect, useState } from "react";

const OnView = ({ children }) => {
  // const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const targetElement = children.props.elementRef.current;
      const windowHeight = this.innerHeight;
      if (
        targetElement.getBoundingClientRect().top < windowHeight / 2 &&
        targetElement.getBoundingClientRect().top > 0
      ) {
        targetElement.classList.remove("hidden");
      } else {
        targetElement.classList.remove("hidden");
      }
    });
  }, []);

  return children;
};

export default OnView;
