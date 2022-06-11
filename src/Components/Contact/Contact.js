import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyovjbv");
  if (state.succeeded) {
    alert("Thanks For Your Interest!");
  }

  return (
    <div id="contact" className="lg:w-[50%] md:w-[75%] w-full mx-auto">
      <h1
        className="text-[#08fdd8] my-5 text-5xl font-bold text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Get in Touch{" "}
      </h1>
      <h1
        className="text-white font-mono font-semibold  text-xl text-justify"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        If you have any request or query don't hesitate to fill up the form .{" "}
      </h1>
      <form
        action="https://formspree.io/f/myyovjbv"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <label htmlFor="name">Name </label>

        <input
          placeholder="Your Name"
          className=" text-white p-2 outline-none bg-[#2B2B2B] focus:border-b-2 focus:border-b-[#08fdd8] h-[45px] rounded-lg w-full border-0"
          id="name"
          type="name"
          name="name"
        />

        <br />
        <br />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          placeholder="Your Email"
          className="  text-white p-2 outline-none bg-[#2B2B2B] focus:border-b-2 focus:border-b-[#08fdd8] h-[45px] rounded-lg w-full border-0"
          id="email"
          type="email"
          name="email"
        />
        <br />
        <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          placeholder="Your Message"
          className=" focus:border-b-2 p-2 text-white focus:border-b-[#08fdd8] bg-[#2B2B2B] outline-none h-[110px] rounded-lg w-full"
          id="message"
          name="message"
        />
        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex py-7 lg:justify-end">
          <button
            className="btn block mx-auto  text-sm md:w-[55%] lg:w-[35%] w-[75%] btn-primary"
            type="submit"
            disabled={state.submitting}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
