import React from "react";
import ShowBar from "../Hooks/ShowBar";
import Projects from "./Projects";

const Allprojects = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D]  text-white px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <Projects open={open} setOpen={setOpen} len={8}></Projects>
    </div>
  );
};

export default Allprojects;
