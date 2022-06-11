import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import ShowBar from "../Hooks/ShowBar";
import Courses from "./Courses";
import Education from "./Education";
const About = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D] px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <h1 className="text-[#08fdd8]   text-6xl my-10 font-bold font-mono">
        {" "}
        Me , Myself and I
      </h1>
      <div className="overView">
        <h1 className="text-[#08fdd8]   border-white text-3xl font-semibold ">
          Overview
        </h1>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <p className="text-white px-1 lg:px-5 text-justify py-5 text-2xl">
            I am{" "}
            <span className="font-bold text-[#08fdd8]">
              Shihab Sarar Islam Rafid
            </span>{" "}
            , from Netrakona,Bangladesh but I am now living in Rajshahi
            ,Bangladesh due to my study purposes.. I have been gathering
            knowledge related to front-end development since last year. . It was
            my passion to work as a web developer that eventually led me to
            start my undergrad studies in Computer Science. I am continuously
            trying to cope with the newer technologies and apply them to my
            work. I am now working with React js but I have strong self-belief
            that I can switch my technologies easily as I am a self-learner. I
            love to solve problems in different online judges. I want to compete
            in different programming contests. My ultimate goal is to be a
            full-stack developer who has a better design sense with much more
            problem-solving skills and a good understanding of data structures
            and algorithms.
          </p>
          <div class="avatar">
            <div class="lg:w-[90%] w-full py-5 rounded-2xl">
              <img
                src="https://i.ibb.co/QvN700T/DSC03867-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Education></Education>
      <Courses></Courses>
    </div>
  );
};

export default About;
