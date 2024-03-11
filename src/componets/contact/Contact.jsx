import { useRef } from "react";
import StaticComponent from "../../reuseable components/StaticComponent";

const Contact = () => {
  const elementRef = useRef();

  return <StaticComponent ref={elementRef} backheaderComp={"contact"} />;
};

export default Contact;
