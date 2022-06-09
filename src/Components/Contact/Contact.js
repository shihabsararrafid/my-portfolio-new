import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyovjbv");
  if (state.succeeded) {
    alert("Thanks For Your Interest!");
  }
  return (
    <div className="w-[50%] mx-auto">
      <h1 className="text-white">This is Contact </h1>
      <form action="https://formspree.io/f/myyovjbv" onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          placeholder="Your Name"
          className="border-2 h-[35px] w-full border-blue-500"
          id="name"
          type="name"
          name="name"
        />
        <br />
        <br />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          placeholder="Your Email"
          className="border-2 h-[35px] w-full border-blue-500"
          id="email"
          type="email"
          name="email"
        />
        <br />
        <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          placeholder="Your Message"
          className="border-2 h-[70px] w-full border-blue-500"
          id="message"
          name="message"
        />
        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
