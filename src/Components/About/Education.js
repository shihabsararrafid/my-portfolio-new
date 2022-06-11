import React from "react";

const Education = () => {
  return (
    <div className="text-white">
      <h1 className="text-5xl text-[#08fdd8] font-mono font-bold">
        Educational Background:
      </h1>
      <ul class="steps mt-20 text-center block md:ml-32 ml-0 lg:ml-64 steps-vertical">
        <li class="step step-primary">
          <p>
            <h1 className="font-bold text-lg ">
              Bsc in Computer Science & Engineering
            </h1>
            <p>
              Rajshahi University of Engineering and Technology,
              <br /> Rajshahi,Bangladesh
            </p>

            <p>Time :(March,2022-present)</p>
          </p>
        </li>
        <li class="step py-2 ">
          <p>
            <h1 className="font-bold text-lg ">
              Higher Secondary Certificate(HSC)
            </h1>
            <p>Sherpur Govt. College,Sherpur ,Bangladesh</p>
            <p>Result: GPA-5.00</p>
            <p>Time :(2018-2020)</p>
          </p>
        </li>
        <li class="step ">
          {" "}
          <p>
            <h1 className="font-bold text-lg ">
              Secondary School Certificate(SSC)
            </h1>
            <p>Sherpur Govt Victoria Academy ,Sherpur,Bangladesh</p>
            <p>Result: GPA-5.00</p>
            <p>Time :(2016-2018)</p>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
