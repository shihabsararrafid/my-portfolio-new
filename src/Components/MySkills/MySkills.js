import React from "react";
import ShowBar from "../Hooks/ShowBar";
import Services from "./Services";

const MySkills = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D]  text-white px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <h1 className="text-5xl my-20 text-[#08fdd8] font-bold ">Skills</h1>
      <h1 className="text-white text-lg">
        As a developer, My skill is not a constant thing for me rather I am
        learning new things every day. I believe that adaptability to newer
        technologies is the most important thing for a developer to be
        successful in his career. Here are some of my skills given below:{" "}
      </h1>
      {open ? (
        ""
      ) : (
        <div className="mx-auto">
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">Html</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="80"
              max="100"
            ></progress>
            <p>90%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">Css</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="80"
              max="100"
            ></progress>
            <p>80%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">JavaScript</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="80"
              max="100"
            ></progress>
            <p>80%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">C</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="80"
              max="100"
            ></progress>
            <p>80%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">React Js</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="60"
              max="100"
            ></progress>
            <p>60%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">Firebase Auth</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="70"
              max="100"
            ></progress>
            <p>70%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2  lg:w-[10%]">Node Js</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="50"
              max="100"
            ></progress>
            <p>50%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">Mongo db</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="50"
              max="100"
            ></progress>
            <p>50%</p>
          </div>
          <div
            className="flex  items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mr-2 w-[10%]">Express JS</p>
            <progress
              className="block progress progress-primary border-2 border-[#08fdd8] h-[10px] w-full lg:w-[50%] my-5"
              value="50"
              max="100"
            ></progress>
            <p>50%</p>
          </div>

          {/* <progress
          className="block progress progress-primary border-2 border-white h-[20px] w-[50%] my-5"
          value="10"
          max="100"
        ></progress>
        <progress
          className="block progress progress-primary border-2 text-white border-white h-[20px] w-[50%] my-5"
          value="40"
          max="100"
        ></progress>
        <progress
          className="block progress progress-primary border-2 border-white h-[20px] w-[50%] my-5"
          value="70"
          max="100"
        ></progress>
        <progress
          className="block progress progress-primary border-2 border-white h-[20px] w-[50%] my-5"
          value="100"
          max="100"
        ></progress> */}
        </div>
      )}
      <Services open={open}></Services>
    </div>
  );
};

export default MySkills;
