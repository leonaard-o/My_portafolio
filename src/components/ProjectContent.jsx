import PropTypes from "prop-types";

export default function ProjectContent({ project }) {
    return (
      <div className="project-content">
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
        <div className="project-btns">
          <a href={project.github} target="_blank" rel="noreferrer">
              <button className="project-button">GitHub</button>
          </a>
         
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <button className="project-button">Vercel</button>
            </a>
          )}
        </div>
      </div>
      );
  }
  
  ProjectContent.propTypes = {
    project: PropTypes.object.isRequired,
  };