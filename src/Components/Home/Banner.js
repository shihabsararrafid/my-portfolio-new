import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import useOpen from "../UseOpen";
import "./button.css";
const Banner = ({ open, setOpen }) => {
  //   const [open, setOpen] = useOpen();
  //console.log(open);
  return (
    <div>
      <button
        className={`btn bg-[#08fdd8]  hover:text-[#08fdd8] ${
          open ? "bg-transparent" : ""
        } ${open ? "text-transparent" : ""} ${
          open ? "border-none" : ""
        }  lg:hidden`}
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
      <div className="text-white  ml-0 md:mx-10  lg:ml-9 mt-14 text-5xl lg:text-7xl w-full md:w-[55%] lg:w-[50%] font-semibold">
        <div className="">
          <span className="banner-text">H</span>
          <span className="banner-text">i</span>
          <span className="banner-text">,</span>
        </div>

        <span className="banner-text">I</span>
        <span className="banner-text"> a</span>
        <span className="banner-text">m</span>
        <span className="banner-text"> R</span>
        <span className="banner-text">a</span>
        <span className="banner-text">f</span>
        <span className="banner-text">i</span>
        <span className="banner-text">d</span>
        <span className="banner-text">,</span>
        <br />
        <span className="banner-text">W</span>
        <span className="banner-text">e</span>
        <span className="banner-text">b</span>
        <span className="banner-text"> d</span>
        <span className="banner-text">e</span>
        <span className="banner-text">v</span>
        <span className="banner-text">e</span>
        <span className="banner-text">l</span>
        <span className="banner-text">o</span>
        <span className="banner-text">p</span>
        <span className="banner-text">e</span>
        <span className="banner-text">r</span>
        <br />
        <p className="text-gray-400 text-lg font-mono">
          Front End Developer / React developer /Javascript Developer/Problem
          Solver{" "}
        </p>
        <p className="text-[#08FDD8] text-2xl lg:w-[70%] w-[90%] lg:text-3xl">
          {" "}
          I think ,I code and I make beautifully simple things, and I love what
          I do.
        </p>
        <div className="flex justify-end w-full">
          <button
            className={`btn px-8  text-xl text-black  py-3 my-7 bg-[#08FDD8] ${
              open ? "hidden" : "block"
            }  mx-auto`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
