import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servicesArr } from "../../utls/constants";

import OnViewEffect from "../../reuseable components/OnViewEffect";
// import OnView from "../../reuseable components/OnView";

const Services = () => {
  const { loadingCompState } = useContext(AppContext);
  const textRef = useRef();

  const text =
    "We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.";

  return (
    <section className="my-16 lg:my-28">
      <article className="flex gap-10 sm:gap-16 justify-between lg:flex-row flex-col mb-16">
        <h1 className="min-w-[max-content] text-4xl font-bold">who we are ?</h1>
        {/* <OnView> */}
        {/* <OnViewEffect
          elementRef={textRef}
          speed={150}
          type="letters"
          delay={0.009}
        > */}
        <p
          ref={textRef}
          className={`flex flex-wrap gap-x-[2.5px] normal-case leading-relaxed sm:leading-loose text-gray-400 text-sm sm:text-base`}
        >
          {text}
        </p>
        {/* </OnViewEffect> */}
        {/* </OnView> */}
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesArr.map(({ icon, heading, text }, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 items-center text-center bg-lightMainColor py-14 px-8"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-lightGreenColor"
              size="3x"
            />
            <h1 className="text-xl font-bold">{heading}</h1>
            <p className="leading-loose text-gray-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
