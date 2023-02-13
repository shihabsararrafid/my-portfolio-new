import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="text-white  px-10 mb-0 lg:my-36 text-lg w-full ">
      <h1
        className="text-5xl font-bold mb-5 font-serif text-[#08fdd8] "
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        My Portfolio
      </h1>
      <div
        className="grid lg:grid-cols-2 justify-around items-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <p>
          A small collection of recent projects done by me . All of the projects
          were done by myself individually . It is just a starting for me .
          Interested to see more . Visit{" "}
          <span className="text-[#08fdd8] font-semibold font-mono">
            my project
          </span>{" "}
          page{" "}
        </p>
        <Link to="/projects">
          <button
            className="btn lg:w-[40%] mt-10 mx-auto block  md:w-[55%] w-[80%]  lg:ml-20 btn-primary "
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Explore more
          </button>
        </Link>
      </div>
      <Projects len={4}></Projects>
    </div>
  );
};

export default Portfolio;
