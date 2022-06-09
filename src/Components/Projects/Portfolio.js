import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="text-white  px-10 mb-0 lg:my-36 text-lg w-full ">
      <h1 className="text-5xl font-bold mb-5 font-serif text-[#1E72EE] ">
        My Portfolio
      </h1>
      <div className="grid lg:grid-cols-2 justify-around items-center">
        <p>
          A small collection of recent projects done by me . All of the projects
          were done by myself individually . It is just a starting for me .
          Interested to see more . Visit{" "}
          <span className="text-[#1E72EE] font-semibold font-mono">
            my project
          </span>{" "}
          page{" "}
        </p>
        <button className="btn w-[40%] ml-20 btn-primary ">Explore more</button>
      </div>
      <Projects></Projects>
    </div>
  );
};

export default Portfolio;
