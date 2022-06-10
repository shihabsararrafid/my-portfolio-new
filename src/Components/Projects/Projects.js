import React, { useEffect, useState } from "react";
import SingProject from "./SingProject";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold text-[#1E72EE] my-20 ">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {project.map((p) => (
          <SingProject
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
