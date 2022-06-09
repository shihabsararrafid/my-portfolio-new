import React from "react";
import Banner from "./Banner";
import Sidebar from "./Sidebar";

const Home = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D] w-[100%] min-h-screen lg:w-[90%]">
      <Banner open={open} setOpen={setOpen}></Banner>
    </div>
  );
};

export default Home;
