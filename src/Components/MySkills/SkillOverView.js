import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SkillOverview.css";
const SkillOverView = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white  px-10">
      <h1 className="text-5xl my-10 text-[#1E72EE] font-bold">
        My Skills & Experience
      </h1>
      <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
        <div>
          <p className="text-xl">
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps and coding interactive layouts.I also have full-stack developer
            experience with Node and Mongo Db.
          </p>
          <p>
            Visit my{" "}
            <a
              className="text-[#1E72EE] font-bold text-lg"
              href="https://www.linkedin.com/in/shihab-sarar-islam-rafid-71ba2022b/"
              target="_blank"
            >
              LinkedIn profile
            </a>{" "}
            for more details or just{" "}
            <span navigate="/home" className="font-bold text-[#1E72EE] text-lg">
              <Link to="/contact">contact me</Link>
            </span>
            .
          </p>
        </div>
        <div>
          <div className="progress-bar-container">
            <h2>Front-end</h2>
            <div className="progress-bar w-[90%] lg:w-[90%]">
              <span className="percentage Front-end"></span>
            </div>
          </div>

          <div className="progress-bar-container">
            <h2>Back-end</h2>
            <div className="progress-bar w-[90%] lg:w-[90%]">
              <span className="percentage Back-end"></span>
            </div>
          </div>

          <div className="progress-bar-container">
            <h2>Database</h2>
            <div className="progress-bar w-[90%] lg:w-[90%]">
              <span className="percentage Database"></span>
            </div>
          </div>

          <div className="progress-bar-container">
            <h2>Problem-solving</h2>
            <div className="progress-bar w-[90%] lg:w-[90%]">
              <span className="percentage Problem-solving"></span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/skills">
        <button className="btn btn-primary block mx-auto my-7">
          See My Details Skill
        </button>
      </Link>
    </div>
  );
};

export default SkillOverView;
