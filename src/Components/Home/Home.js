import React from "react";
import Contact from "../Contact/Contact";
import Services from "../MySkills/Services";
import SkillOverView from "../MySkills/SkillOverView";
import Portfolio from "../Projects/Portfolio";
import Banner from "./Banner";
import Sidebar from "./Sidebar";

const Home = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D] w-full min-h-screen lg:w-[90%]">
      <Banner open={open} setOpen={setOpen}></Banner>
      <SkillOverView></SkillOverView>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
