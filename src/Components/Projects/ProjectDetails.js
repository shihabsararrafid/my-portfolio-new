import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
      <h1 className="text-5xl font-bold font-mono text-white text-center my-5">
        {selectedItem.name}
      </h1>
      <div class="h-96 carousel mx-auto md:w-[80%] w-full lg:w-[50%] carousel-vertical rounded-box">
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
    </div>
  );
};

export default ProjectDetails;
