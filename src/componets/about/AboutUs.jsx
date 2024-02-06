import img from "./assets/aboutUs.jpg";

const AboutUs = () => {
  const arr = ["our mission", "our goals", " why us?"];

  return (
    <section className="relative h-[-webkit-fill-available] flex items-center justify-center">
      <div className="absolute z-0 left-auto w-[100vw] h-[-webkit-fill-available] bg-gradient-to-b lg:bg-gradient-to-l from-mainColor from-50% to-white/5 to-10%"></div>
      <div className="relative w-full flex flex-col lg:flex-row gap-20 px-0 lg:px-20 py-20">
        <div className="h-[fit-content] md:h-[80vh] lg:h-[fit-content]">
          <img src={img} className="object-cover w-full h-full" />
        </div>
        <div className="relative flex flex-col gap-7 md:gap-10 md:min-w-[400px] ml-auto">
          <h5 className="font-bold text-4xl normal-case first-letter:uppercase">
            about us
          </h5>
          <p className="font-semibold leading-6 text-zinc-300 text-md">
            Our creative Ad agency is ranked among the finest in the US. We
            cultivate smart ideas for start-ups and seasoned players.
          </p>
          {arr.map((ele, idx) => (
            <div
              key={ele}
              className="relative flex gap-5 justify-between last:border-b-0 border-b border-zinc-800 pb-4 sm:pb-8 last:pb-0"
            >
              <div className="w-[30px] h-[30px] leading-[30px] text-xs rounded-full border border-lightGreenColor text-lightGreenColor text-center">
                {idx + 1}
              </div>
              <div className="w-[90%]">
                <h6 className="font-semibold text-xl mb-4">{ele}</h6>
                <p className="text-xs font-bold text-zinc-400">
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
