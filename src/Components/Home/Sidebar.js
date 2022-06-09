import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
const Sidebar = () => {
  return (
    <div className="w-[20%] h-[100vh] text-white bg-[#181818]">
      <div className="upper-part  bg-black h-[39%]">
        <div class="avatar mt-4 mx-[70px]">
          <div class="w-24 ring ring-[#1E72EE] ring-offset-base-100 ring-offset-2  rounded-full">
            <img src="https://i.ibb.co/yR4HvZk/IMG20220211071945-removebg-preview-1-removebg-preview.png" />
          </div>
        </div>

        <img
          className="w-[20%] block mx-[89px]"
          src="https://i.ibb.co/31Mkm6X/rsz-newword-removebg-preview.png"
          alt=""
        />
        <h1 className="mx-[45px] text-xl">Shihab Sarar Islam</h1>
        <h1 className="text-4xl mx-[77px]">Rafid</h1>
        <h1 className="mx-[40px] text-[#1E72EE] font-serif font-semibold">
          Front end Developer
        </h1>
      </div>
      <div className="lower-part mt-10">
        <h1 className="text-xl hover:text-[#1E72EE] my-4 mx-[81px]">About</h1>
        <hr className="bg-[#777f8b]" />
        <h1 className="text-xl hover:text-[#1E72EE] my-4 mx-[81px]">
          My Skills
        </h1>
        <hr className="bg-[#777f8b]" />

        <h1 className="text-xl hover:text-[#1E72EE] my-4 mx-[81px]">
          Projects
        </h1>
        <hr className="bg-[#777f8b]" />
        <h1 className="text-xl hover:text-[#1E72EE] my-4 mx-[81px]">Contact</h1>
        <hr className="bg-[#777f8b]" />
        <div className="social-part my-7 flex justify-center gap-4">
          <BsLinkedin className="text-white"></BsLinkedin>
          <AiFillGithub></AiFillGithub>
          <FaHackerrank></FaHackerrank>
          <SiCodeforces></SiCodeforces>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
