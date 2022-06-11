import React from "react";

const Services = ({ open }) => {
  return (
    <div className=" text-black my-20">
      <h1 className="text-[#08fdd8] my-10 font-bold text-4xl">
        What Services I can Provide:
      </h1>
      {open ? (
        ""
      ) : (
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <figure>
                <img
                  className="w-[80%]"
                  src="https://i.ibb.co/1r0DKsR/hcj.jpg"
                  alt=""
                />
              </figure>
              <h2 class="card-title  flex justify-between">
                Plain Website with Html5,CSS3 & Javascript
                <div class="badge badge-secondary">Expert</div>
              </h2>

              <div class="card-actions justify-center">
                <div class="badge badge-outline">Html5</div>
                <div class="badge badge-outline">Css3</div>
                <div class="badge badge-outline">Javascript</div>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <figure>
                <img
                  className="w-[80%]"
                  src="https://i.ibb.co/W6GzNWx/Tailwind-vs-bootstrap.jpg"
                  alt=""
                />
              </figure>
              <h2 class="card-title  flex justify-between">
                Website with famous Css frameworks Bootstrap and Tailwind Css
                <div class="badge badge-secondary">Expert</div>
              </h2>

              <div class="card-actions justify-center">
                <div class="badge badge-outline">Html5</div>
                <div class="badge badge-outline">Javascript</div>

                <div class="badge badge-outline">Bootstrap</div>
                <div class="badge badge-outline">Tailwind Css</div>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <figure>
                <img
                  className="w-[80%]"
                  src="https://i.ibb.co/NLbt4DG/react-logo.webp"
                  alt=""
                />
              </figure>
              <h2 class="card-title  flex justify-between">
                Website with React
                <div class="badge badge-secondary">Comfortable</div>
              </h2>

              <div class="card-actions justify-center">
                <div class="badge badge-outline">React</div>
                <div class="badge badge-outline">Jsx</div>

                <div class="badge badge-outline">React-tailwind</div>

                <div class="badge badge-outline">Css3</div>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <figure>
                <img
                  className="w-[80%]"
                  src="https://i.ibb.co/8NfTnBM/firebase.png"
                  alt=""
                />
              </figure>
              <h2 class="card-title  flex justify-between">
                Website with firebase Authentication
                <div class="badge badge-secondary">Comfortable</div>
              </h2>

              <div class="card-actions justify-center">
                <div class="badge badge-outline">React JS</div>
                <div class="badge badge-outline">Firebase</div>
                <div class="badge badge-outline">React Router</div>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <figure>
                <img
                  className="w-[80%]"
                  src="https://i.ibb.co/80C767b/mern-stack.png"
                  alt=""
                />
              </figure>
              <h2 class="card-title flex justify-between">
                MERN stack website
                <div class="badge badge-secondary justify-end">Comfortable</div>
              </h2>

              <div class="card-actions justify-end">
                <div class="badge badge-outline">React JS</div>
                <div class="badge badge-outline">Firebase</div>
                <div class="badge badge-outline">Node js</div>
                <div class="badge badge-outline">Express Js</div>
                <div class="badge badge-outline">Mongo Db</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
