import { useEffect } from "react";

const Parallex = ({ children, element }) => {
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (children.ref) {
        children.ref.current.style.objectPosition = `right ${
          window.scrollY / 1.5
        }px`;
      }
    });
  }, []);

  return children;
};

export default Parallex;
