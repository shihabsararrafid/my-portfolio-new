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
  const tech = selectedItem?.tehnologies?.split(",");
  console.log(selectedItem);
  return (
    <div className="bg-[#1D1D1D]  text-white px-10 w-full min-h-screen lg:w-[90%]">
      <ShowBar open={open} setOpen={setOpen}></ShowBar>
      <h1 className="text-5xl text-[#08fdd8] my-7 font-bold">
        Project Details
      </h1>
      <h1 className="text-5xl font-bold font-mono text-white mx-auto md:w-[80%] w-full lg:w-[50%] my-5">
        {selectedItem?.name}
      </h1>
      <div class="h-96 mt-10 carousel mx-auto md:w-[80%] w-full lg:w-[50%] carousel-vertical rounded-box">
        <div class="carousel-item h-full">
          <img className=" w-full  object-cover" src={selectedItem?.shot1} />
        </div>
        <div class="carousel-item h-full">
          <img className=" w-full  object-cover" src={selectedItem?.shot2} />
        </div>
        <div class="carousel-item h-full">
          <img className=" w-full  object-cover" src={selectedItem?.shot3} />
        </div>
      </div>
      <div class="card w-full lg:w-[50%] mx-auto bg-gray-600 shadow-xl image-full">
        <figure>
          <img src={selectedItem?.img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <div>
            <h1 className="text-2xl text-[#08fdd8]">Project Overview:</h1>
            <p>{selectedItem?.details}</p>
          </div>
          <h2 class="card-title text-center text-[#08fdd8]">
            Used Technologies:
          </h2>
          <div className="flex flex-wrap w-[80%] ">
            {tech?.map((t) => (
              <div class="badge badge-outline mx-1 my-1">{t}</div>
            ))}
          </div>

          <div className="button flex md:flex-row flex-col gap-y-4 justify-center mx-auto  w-full  ">
            <a
              href={selectedItem?.liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn mx-2 btn-primary">Live Site</button>
            </a>
            <a
              href={selectedItem?.clientSide}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn mx-2 btn-primary">Client Code</button>
            </a>
            {selectedItem?.serverSide == " " ? (
              ""
            ) : (
              <a
                href={selectedItem?.serverSide}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn mx-2 btn-primary">Server Code</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
