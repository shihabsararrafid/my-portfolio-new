import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
const ShowBar = ({ open, setOpen }) => {
  return (
    <div>
      <button
        className={`btn bg-[#1E72EE]  hover:text-[#1E72EE] ${
          open ? "bg-transparent" : ""
        } ${open ? "text-transparent" : ""} ${
          open ? "border-none" : ""
        } lg:hidden`}
      >
        <a
          href="https://drive.google.com/file/d/1rSp55Bsd2tjL2sCkrlQRXull1vN1bH3Z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Download Resume
        </a>
      </button>
      <h1
        onClick={() => setOpen(!open)}
        className="absolute lg:hidden cursor-pointer text-3xl font-bold text-white right-0 top-0"
      >
        {open ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineBars></AiOutlineBars>
        )}
      </h1>
    </div>
  );
};

export default ShowBar;
