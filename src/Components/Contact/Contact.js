import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyovjbv");
  if (state.succeeded) {
    alert("Thanks For Your Interest!");
  }

  return (
    <div id="contact" className="lg:w-[50%] md:w-[75%] w-full mx-auto">
      <h1 className="text-[#1E72EE] my-5 text-5xl font-bold text-center">
        Get in Touch{" "}
      </h1>
      <h1 className="text-white font-mono font-semibold  text-xl text-justify">
        If you have any request or query don't hesitate to fill up the form .{" "}
      </h1>
      <form action="https://formspree.io/f/myyovjbv" onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>

        <input
          placeholder="Your Name"
          className=" text-white outline-none bg-[#2B2B2B] focus:border-b-2 focus:border-b-[#1E72EE] h-[45px] rounded-lg w-full border-0"
          id="name"
          type="name"
          name="name"
        />

        <br />
        <br />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          placeholder="Your Email"
          className="  text-white outline-none bg-[#2B2B2B] focus:border-b-2 focus:border-b-[#1E72EE] h-[45px] rounded-lg w-full border-0"
          id="email"
          type="email"
          name="email"
        />
        <br />
        <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          placeholder="Your Message"
          className=" focus:border-b-2 text-white focus:border-b-[#1E72EE] bg-[#2B2B2B] outline-none h-[110px] rounded-lg w-full"
          id="message"
          name="message"
        />
        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex my-7 justify-end">
          <button
            className="btn block  text-sm md:w-[50%] lg:w-[35%] w-full btn-primary"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
