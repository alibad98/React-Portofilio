import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/done.json";
import contactAnimation from "../../../public/animations/brown.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjvqqeeo");

  return (
    <div className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and get ntified when we add a new
        project.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "34px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
              className="sub-title flex"
            >
              <Lottie
                loop={false}
                style={{ height: 40, marginRight: ".4rem" }}
                animationData={doneAnimation}
              />
              Thank you, Your message has been sent successfuly!
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            style={{ height: 350 }}
            className="contact-animation"
            loop={true}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </div>
  );
}
