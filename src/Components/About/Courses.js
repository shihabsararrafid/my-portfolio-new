import React from "react";

const Courses = () => {
  return (
    <div className="text-white my-10">
      <h1
        className="text-5xl font-bold text-[#08fdd8] my-10"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Courses & Certifications
      </h1>
      <ul
        class="steps mt-20 text-center block md:ml-32 ml-0 lg:ml-64 steps-vertical"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <li class="step step-primary">
          <p>
            <h1 className="text-2xl font-bold">
              Complete Web Development By Jhankar Mahbub{" "}
            </h1>
            <p>Company / Institution: Programming Hero</p>
            <p>Status : Completed</p>
            <button disabled className="btn btn-primary">
              Show Certificate
            </button>
          </p>
        </li>
        <li class="step step-info py-4">
          <p>
            <h1 className="text-2xl font-bold">
              JavaScript Algorithms and Data Structures{" "}
            </h1>
            <p>Company / Institution: FreeCodeCamp.org</p>
            <p>Status : Ongoing</p>
            <button disabled className="btn btn-primary ">
              Show Certificate
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Courses;
