import React from "react";
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../Helpers/ProjectList";
import { motion } from "framer-motion";
import "../Styles/Projects.css";

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      exit={{}}
    >
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
