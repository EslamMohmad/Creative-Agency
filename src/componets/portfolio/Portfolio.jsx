import { useRef } from "react";
import ScrollTextFade from "../../reuseable components/ScrollTextFade";
import ScrollTextMove from "../../reuseable components/ScrollTextMove";
import { portfolioWorks } from "../../utls/constants";
import HoverCursor from "../../reuseable components/HoverCursor";
import StaticComponent from "../../reuseable components/StaticComponent";

const Portfolio = () => {
  const text =
    "Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.";

  const elementRef = useRef();

  const FrontHeaderText = () => {
    return (
      <div className="w-[80%] lg:w-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center leading-8 md:leading-10 text-base md:text-[3vw] lg:text-2xl tracking-wider">
          <ScrollTextMove element={elementRef}>
            <ScrollTextFade element={elementRef}>{text}</ScrollTextFade>
          </ScrollTextMove>
        </h1>
      </div>
    );
  };

  const PortfolioContent = () => {
    return (
      <div className="flex gap-5 md:gap-10 flex-col">
        {portfolioWorks.map((group, idx) => (
          <div
            key={"group" + idx + 1}
            className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20"
          >
            {group.map((img, i) => (
              <div key={"img" + i + 1} className="w-full md:w-1/3">
                <HoverCursor>
                  <img src={img} className="object-contain w-full" />
                </HoverCursor>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <StaticComponent
      ref={elementRef}
      backheaderComp={"works"}
      frontheaderComp={<FrontHeaderText />}
      compContent={<PortfolioContent />}
    />
  );
};

export default Portfolio;
