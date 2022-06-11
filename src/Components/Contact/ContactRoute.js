import React from "react";
import ShowBar from "../Hooks/ShowBar";
import Contact from "./Contact";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaHackerrank, FaStackOverflow } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Link } from "react-router-dom";
const ContactRoute = ({ open, setOpen }) => {
  return (
    <div className="bg-[#1D1D1D] flex flex-col justify-center items-center  text-white px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <Contact></Contact>
      <div>
        <h1 className="text-2xl">
          Or <br /> Connect Me With Social Media
        </h1>
        <div className="social-part my-7 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/shihab-sarar-islam-rafid-71ba2022b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              title="Linkedin"
              className="text-3xl hover:text-[#08fdd8] text-white"
            ></BsLinkedin>
          </a>
          <a
            href="https://github.com/shihabsararrafid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              title="Github"
              className="text-3xl hover:text-[#08fdd8] "
            ></AiFillGithub>
          </a>
          <a
            href="https://www.hackerrank.com/shrafid_532"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank
              title="HackerRank"
              className="text-3xl hover:text-[#08fdd8] "
            ></FaHackerrank>
          </a>
          <a
            href="https://codeforces.com/profile/sararRafid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces
              title="Codeforces"
              className="text-3xl hover:text-[#08fdd8] "
            ></SiCodeforces>
          </a>
          <a
            href="https://stackoverflow.com/users/17802958/sarar-rafid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow
              title="Stackoverflow "
              className="text-3xl hover:text-[#08fdd8]"
            ></FaStackOverflow>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactRoute;
