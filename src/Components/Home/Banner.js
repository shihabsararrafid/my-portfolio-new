import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import useOpen from "../UseOpen";
const Banner = ({ open, setOpen }) => {
  //   const [open, setOpen] = useOpen();
  //console.log(open);
  return (
    <div>
      <button className="btn bg-[#1E72EE] hover:bg-white hover:text-[#1E72EE] lg:hidden">
        Download Resume
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
      <div className="text-white ml-9 mt-14 text-7xl w-full lg:w-[50%] font-semibold">
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
        <button className="btn px-8 text-xl  py-3 my-7 bg-[#1E72EE] block mx-auto">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
