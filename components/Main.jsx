import Skills from "../features/Skills";
import About from "../features/About";
import Cv from "../features/Cv";
import Works from "../features/Works";
import Contact from "../features/Contact";

function Main() {
  return (
    <div className="text-center px-4 py-3  overflow-y-auto h-screen text-stone-800  mt-16">
      <section id="About">
        <About />
      </section>
      <section id="Cv">
        <Cv />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Works">
        <Works />
      </section>
      <section id="Contact">
        <Contact />
      </section>

      <h1 className="mt-4 mb-4 font-extrabold text-3xl justify-center">
        Designed and built by Winsa Daniel
      </h1>
    </div>
  );
}

export default Main;
