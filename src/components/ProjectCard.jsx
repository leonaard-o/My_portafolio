import { useEffect, useRef } from "react";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronDownIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  // Fade in animation when card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
      } else {
        entry.target.classList.remove("fadeIn");
      }
    });

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return index % 2 === 1 || window.innerWidth < 798 ? (
    <div className="project-cards project-card-div" ref={cardRef}>
      <div className="project-card left">
        <ProjectImage project={project} />
      </div>

      <div className="contenedorbotonright">
        <button className="button-negro1-7">
          <span className="mayor3-2">
            <ChevronRightIcon sx={{ fontSize: "20px" }} className="fa" />
          </span>
        </button>
        <button className="button-negro1-7-3">
          <span className="mayor3-2-down">
            <ChevronDownIcon sx={{ fontSize: "20px" }} className="fa" />
          </span>
        </button>
      </div>

      <div className="project-card right">
        <ProjectContent project={project} />
      </div>
    </div>
  ) : (
    <div className="project-cards project-card-div" ref={cardRef}>
      <div className="project-card left">
        <ProjectContent project={project} />
      </div>

      <div className="contenedorbotonleft">
        <button className="button-negro1-7">
          <span className="mayor3-2">
            <ChevronLeftIcon sx={{ fontSize: "20px" }} className="fa" />
          </span>
        </button>
        <button className="button-negro1-7-3">
          <span className="mayor3-2-down">
            <ChevronDownIcon sx={{ fontSize: "20px" }} className="fa" />
          </span>
        </button>
      </div>

      <div className="project-card right">
        <ProjectImage project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
