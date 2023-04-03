import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

function ProjectCard({
  projectLink,
  projectName,
  projectType,
  projectCoverSrc,
  projectCoverAltText,
}: {
  projectLink: string;
  projectName: string;
  projectType: string;
  projectCoverSrc: string;
  projectCoverAltText: string;
}) {
  return (
    <Link className={classes.project__card} to={projectLink}>
      <img src={projectCoverSrc} alt={projectCoverAltText} />
      <div className={classes.project__details}>
        <h3>{projectName}</h3>
        <h4>{projectType}</h4>
      </div>
    </Link>
  );
}

export default ProjectCard;
