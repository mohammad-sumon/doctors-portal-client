import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="py-16"
      style={{
        background: `url(${appointment})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="text-center">
        <h4 className="text-lg text-primary font-bold">Contact Us</h4>
        <h1 className="text-white text-4xl font-bold">
          Stay connected with us
        </h1>
      </div>
      <div className="grid grid-flow-row text-center mt-10 gap-4">

        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-sm w-1/4 mx-auto"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-sm w-1/4 mx-auto"
        />
        <input
          type="text"
          placeholder="Your Message"
          className="input input-bordered input-lg w-1/4 mx-auto"
        />
      </div>
      <div className="text-center mt-10">
      <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
