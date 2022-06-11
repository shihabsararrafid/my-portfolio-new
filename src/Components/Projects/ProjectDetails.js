import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShowBar from "../Hooks/ShowBar";

const ProjectDetails = ({ open, setOpen }) => {
  const { state } = useLocation();
  const id = state?.id;
  console.log(id);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const navigate = useNavigate();
  const selectedItem = services.find((service) => service?.id === id);
  console.log(selectedItem);
  return (
    <div className="bg-[#1D1D1D]  text-white px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <h1 className="text-5xl text-blue-500 my-7 font-bold">Project Details</h1>
      <h1 className="text-5xl font-bold font-mono text-white mx-auto md:w-[80%] w-full lg:w-[50%] my-5">
        {selectedItem?.name}
      </h1>
      <div class="h-96 my-10 carousel mx-auto md:w-[80%] w-full lg:w-[50%] carousel-vertical rounded-box">
        <div class="carousel-item h-full">
          <img
            className="md:w-[80%] w-full lg:w-[50%] object-cover"
            src={selectedItem?.shot1}
          />
        </div>
        <div class="carousel-item h-full">
          <img
            className="md:w-[80%] w-full lg:w-[50%] object-cover"
            src={selectedItem?.shot2}
          />
        </div>
        <div class="carousel-item h-full">
          <img
            className="md:w-[80%] w-full lg:w-[50%] object-cover"
            src={selectedItem?.shot3}
          />
        </div>
      </div>
      <div className="button flex lg:flex-row flex-col gap-y-4 justify-center mx-auto md:w-[80%] w-full lg:w-[50%] ">
        <a
          href={selectedItem?.liveSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn mx-5 btn-primary">Live Site</button>
        </a>
        <a
          href={selectedItem?.clientSide}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn mx-5 btn-primary">Client Code</button>
        </a>
        {selectedItem?.serverSide == " " ? (
          ""
        ) : (
          <a
            href={selectedItem?.serverSide}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn mx-5 btn-primary">Server Code</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
