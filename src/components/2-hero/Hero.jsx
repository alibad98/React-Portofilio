import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../public/animations/darker.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottiRef = useRef();
  return (
    <section className="hero flex">
      <div className="section-left">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 10, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt="picture"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title"
        >
          Full Stack Web Developer, Software Engineer.
        </motion.h1>
        <p className="sub-title">
          Dedicated and efficient full stack developer with 3+ years experience
          in application layers, presentation layers, and databases. Certified
          in both F/E and B/E technologies. Seeking to further improve HTML5 and
          CSS3 skills as the future full stack developer at Atmospheric
          Solutions.
        </p>

        <div className="all-icons flex">
          <a href="https://www.instagram.com/alibroid/">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://www.instagram.com/alibroid/">
            <div className="icon icon-twitter"></div>
          </a>
          <a href="https://www.instagram.com/alibroid/">
            <div className="icon icon-whatsapp"></div>
          </a>
          <a href="https://www.instagram.com/alibroid/">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.instagram.com/alibroid/">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="section-right animation">
        <div>
          <Lottie
            lottieRef={lottiRef}
            // https://lottiereact.com/ animation speed.
            onLoadedImages={() => {
              // @ts-ignore
              lottiRef.current.setSpeed(0.5);
            }}
            animationData={devAnimation}
          />
        </div>
      </div>
    </section>
  );
}
