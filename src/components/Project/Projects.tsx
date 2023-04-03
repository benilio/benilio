import ProjectCard from "./ProjectCard";
import classes from "./Projects.module.css";

import coverGeological from "../../assets/projects/01/cover.webp";
import coverGeomechanical from "../../assets/projects/02/cover.webp";

function Projects() {
  return (
    <section>
      <div className={classes.projects}>
        <ProjectCard
          projectLink="/projects/geological/"
          projectName="Restoration and Simulation of Geological Models Software"
          projectType="UI/UX Design"
          projectCoverSrc={coverGeological}
          projectCoverAltText="imagem"
        />
        <ProjectCard
          projectLink="/projects/geomechanical/"
          projectName="Integrated Geomechanical Analysis Software"
          projectType="UI/UX Design"
          projectCoverSrc={coverGeomechanical}
          projectCoverAltText="imagem"
        />
      </div>
    </section>
  );
}

export default Projects;
