import { useEffect, useState } from "react";
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      {/* <div className='devider' /> */}
      <Hero />
      <div className="devider" />
      <Main />
      <div className="devider" />
      <Contact />
      <div className="devider" />
      <Footer />
      <a style={{ opacity: scrolled ? 1 : 0, transition: ".4s" }} href="#up">
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
