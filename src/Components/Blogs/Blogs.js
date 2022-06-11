import React from "react";
import ShowBar from "../Hooks/ShowBar";

const Blogs = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D]   text-white px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-5xl font-bold">Coming Soon In sha Allah</h1>
        <p className="text-3xl ">Thanks your Patience</p>
      </div>
    </div>
  );
};

export default Blogs;
