import React, { useEffect, useState } from "react";
import SingProject from "./SingProject";

const Projects = ({ len, open, setOpen }) => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold text-[#08fdd8] my-20 ">Projects</h1>

      <div
        className={` ${
          open ? "hidden" : "grid"
        } grid-cols-1 lg:grid-cols-2 gap-2 `}
      >
        {project.slice(0, len).map((p) => (
          <SingProject
            id={p.id}
            img={p.img}
            name={p.name}
            liveSite={p.liveSite}
          ></SingProject>
        ))}
      </div>
    </div>
  );
};

export default Projects;
