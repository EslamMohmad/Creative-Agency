import { forwardRef } from "react";

const StaticComponent = forwardRef(function StaticComponent(
  { backheaderComp, frontheaderComp, compContent },
  ref
) {
  return (
    <main>
      <header className="fixed top-0 w-full h-[80vh]" ref={ref}>
        <div className="flex justify-center items-center h-full">
          <h1
            style={{
              WebkitTextStroke: "1px #2b2b2b",
            }}
            className="text-[25vw] font-bold tracking-tight text-transparent"
          >
            {backheaderComp}
          </h1>
        </div>
        {frontheaderComp}
      </header>
      <section className="relative mt-[80vh] bg-mainColor">
        <main className="mx-auto max-w-7xl px-10 py-20">{compContent}</main>
        <footer className="bg-lightMainColor">
          <p className="text-center py-7 text-xs sm:text-sm">
            © 2024, Avo Template. Made with passion by{" "}
            <a
              className="text-lightGreenColor"
              href="https://github.com/EslamMohmad"
              target="_blank"
            >
              Eslam
            </a>
            .
          </p>
        </footer>
      </section>
    </main>
  );
});

export default StaticComponent;
