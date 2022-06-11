import React from "react";
import { useNavigate } from "react-router-dom";

const SingProject = ({ id, img, name, liveSite }) => {
  const navigate = useNavigate();
  console.log(id);
  return (
    <div
      class="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div class="text-center">
        <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-[#08fdd8] md:w-full w-9/12 mx-auto">
          {name}
        </h2>
      </div>
      <div class="mt-10  w-full mx-auto">
        <div class="relative group">
          {/* <a href="https://ibb.co/fG8v8WB"><img src="" alt="gym-guru" border="0"></a> */}
          <img
            src={img}
            alt="Photo by Sébastien Goldberg on Unsplash"
            class="w-full rounded shadow-xl hover:shadow-2xl"
          />
          <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
            <div class="flex-row text-center">
              <button
                onClick={() => navigate("/projectdetails", { state: { id } })}
                className="btn block mt-2 btn-primary"
              >
                See Details
              </button>
              <button
                className="btn block mt-2 btn-primary"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <a href={liveSite} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Live Preview
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingProject;
