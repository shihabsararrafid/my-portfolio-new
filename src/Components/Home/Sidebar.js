import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaHackerrank, FaStackOverflow } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Link } from "react-router-dom";
import useOpen from "../UseOpen";
const Sidebar = ({ open, setOpen }) => {
  //console.log("from banner ", open);
  return (
    <div
      className={`lg:w-[250px] duration-500 absolute top-0 lg:sticky w-[300px] ${
        open === true ? "block" : "hidden"
      } lg:block   lg:mx-0 h-[100vh] text-white bg-[#181818]`}
    >
      <div className="upper-part  bg-black h-[39%]">
        <div class="avatar mt-4 mx-[70px]">
          <div class="w-24 ring ring-[#08fdd8] ring-offset-base-100 ring-offset-2  rounded-full">
            <img src="https://i.ibb.co/yR4HvZk/IMG20220211071945-removebg-preview-1-removebg-preview.png" />
          </div>
        </div>

        <img
          className="w-[20%] block mx-[89px]"
          src="https://i.ibb.co/31Mkm6X/rsz-newword-removebg-preview.png"
          alt=""
        />
        <h1 className="mx-[30px] text-xl">Shihab Sarar Islam</h1>
        <h1 className="text-4xl mx-[77px]">Rafid</h1>
        <h1 className="mx-[30px] text-[#08fdd8] font-serif font-semibold">
          Front end Developer
        </h1>
      </div>
      <div className="lower-part mt-2">
        <Link to="/home" onClick={() => setOpen(false)}>
          <h1 className="text-xl hover:text-[#08fdd8] my-4 mx-[81px]">Home</h1>
        </Link>
        <hr className="bg-[#777f8b]" />
        <Link to="/about" onClick={() => setOpen(false)}>
          <h1 className="text-xl hover:text-[#08fdd8] my-4 mx-[81px]">About</h1>
        </Link>
        <hr className="bg-[#777f8b]" />
        <Link to="/skills" onClick={() => setOpen(false)}>
          <h1 className="text-xl hover:text-[#08fdd8] my-4 mx-[70px]">
            My Skills
          </h1>
        </Link>
        <hr className="bg-[#777f8b]" />

        <Link to="/projects" onClick={() => setOpen(false)}>
          <h1 className="text-xl hover:text-[#08fdd8] my-4 mx-[81px]">
            Projects
          </h1>
        </Link>
        <hr className="bg-[#777f8b]" />
        <Link to="/blogs" onClick={() => setOpen(false)}>
          <h1 className="text-xl hover:text-[#08fdd8] my-4 mx-[81px]">Blogs</h1>
        </Link>
        <hr className="bg-[#777f8b]" />
        <h1 className="text-xl font-bold text-[#08fdd8] hover:text-[#08fdd8] my-4 mx-[30px]">
          <a
            onClick={() => setOpen(false)}
            href="https://drive.google.com/file/d/1rSp55Bsd2tjL2sCkrlQRXull1vN1bH3Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Download Resume
          </a>
        </h1>
        <hr className="bg-[#777f8b]" />
        <div className="social-part my-7 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/shihab-sarar-islam-rafid-71ba2022b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              title="Linkedin"
              className="hover:text-[#08fdd8] text-white"
            ></BsLinkedin>
          </a>
          <a
            href="https://github.com/shihabsararrafid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              title="Github"
              className="hover:text-[#08fdd8] "
            ></AiFillGithub>
          </a>
          <a
            href="https://www.hackerrank.com/shrafid_532"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank
              title="HackerRank"
              className="hover:text-[#08fdd8] "
            ></FaHackerrank>
          </a>
          <a
            href="https://codeforces.com/profile/sararRafid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces
              title="Codeforces"
              className="hover:text-[#08fdd8] "
            ></SiCodeforces>
          </a>
          <a
            href="https://stackoverflow.com/users/17802958/sarar-rafid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow
              title="Stackoverflow "
              className="hover:text-[#08fdd8]"
            ></FaStackOverflow>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
