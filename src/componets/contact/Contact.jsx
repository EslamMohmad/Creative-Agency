import HoverButton from "../../reuseable components/HoverButton";
import StaticComponent from "../../reuseable components/StaticComponent";

const Contact = () => {
  const FrontHeaderText = () => {
    return (
      <div className="flex gap-4 flex-col capitalize">
        <p className="text-lightGreenColor text-xl">let's</p>
        <h1 className="uppercase text-3xl md:text-5xl font-bold tracking-wide">
          talk about your project.
        </h1>
        <p className="text-gray-400">
          Feel free to ask me any question or let’s do to talk about our future
          collaboration.
        </p>
      </div>
    );
  };

  const ContactContent = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-28 capitalize">
          <div className="md:w-[60%] lg:w-[50%]">
            <h3 className="font-bold text-3xl mb-8">get in touch.</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="[&>input]:py-4 [&>input]:border-b [&>input]:border-b-gray-600 flex flex-col gap-7 [&>input]:bg-transparent [&>input]:capitalize focus:[&>input]:outline-0"
            >
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <textarea
                className="resize-none bg-transparent p-4 border focus:outline-0 h-[150px]  border-gray-600 capitalize"
                placeholder="message"
              ></textarea>
              <HoverButton>send message</HoverButton>
            </form>
          </div>
          <div className="flex flex-col gap-5 md:gap-10">
            <h3 className="font-bold text-3xl mb-8">contact info.</h3>
            <div className="flex flex-col gap-2">
              <h5 className="uppercase text-md tracking-widest">let's talk.</h5>
              <a className=" text-gray-500" target="_blank" type="gmail">
                eslammohmad998@gmail.com
              </a>
              <span className="text-gray-500">01002623871</span>
            </div>
            <div>
              <h5 className="uppercase text-md tracking-widest mb-2">
                vist us.
              </h5>
              <p className="text-gray-500">
                295 Witting Streets Suite 666, Melbourne, Australia
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] relative left-auto mt-10">
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cairo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </>
    );
  };

  return (
    <StaticComponent
      frontheaderComp={<FrontHeaderText />}
      backheaderComp={"contact"}
      compContent={<ContactContent />}
    />
  );
};

export default Contact;
