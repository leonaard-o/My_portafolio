import PropTypes from "prop-types";

import  { useRef, useEffect } from "react";


export default function ProjectImage({ project }) {
  const circleRef = useRef(null);
  const smallCircleRef = useRef(null);
  const yearRef = useRef(null);
  const cardRef = useRef(null);
  const cardOrangeShineRef = useRef(null);
  const cardThankYouRef = useRef(null);
  const cardCometRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 798) return;
    const generateTranslate = (el, e, value) => {
      if (el && el.current) {
        el.current.style.transform = `translate(${e.clientX * value}px, ${e.clientY * value}px)`;
      }
    };

    const cumulativeOffset = (element) => {
      let top = 0, left = 0;
      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        top: top,
        left: left
      };
    };

    const handleMouseMove = (event) => {
      const e = event || window.event;
      const x = (e.pageX - cumulativeOffset(cardRef.current).left - (350 / 2)) * -1 / 100;
      const y = (e.pageY - cumulativeOffset(cardRef.current).top - (350 / 2)) * -1 / 100;

      const matrix = [
        [1, 0, 0, -x * 0.00005],
        [0, 1, 0, -y * 0.00005],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ];

      generateTranslate(smallCircleRef, e, 0.03);
      generateTranslate(cardThankYouRef, e, 0.03);
      generateTranslate(cardOrangeShineRef, e, 0.09);
      generateTranslate(circleRef, e, 0.05);
      generateTranslate(yearRef, e, 0.03);
      generateTranslate(cardCometRef, e, 0.05);

      if (cardRef && cardRef.current) {
        cardRef.current.style.transform = `matrix3d(${matrix.toString()})`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stackStyle = window.innerWidth < 798 ? {
    maxWidth: '30px', 
    maxHeight: '30px',
  } : {
    maxWidth: '50px', 
    maxHeight: '50px',
  };

  return (
    <div className="wrapper">
      <div className="project-card" ref={cardRef}>
        <div className="card__greenShine" ref={circleRef}></div>
        <div className="card__thankyou" ref={cardThankYouRef}>
          <div className="project-stack">
            {project.techStack.map((url, index) => (
              <img key={index} src={url} alt={ url } style={stackStyle} />
            ))}
          </div>
        </div>
        <img src={project.image} className="project-image" alt={project.title} />
      </div>
    </div>
  );
}

ProjectImage.propTypes = {
  project: PropTypes.object.isRequired,
};