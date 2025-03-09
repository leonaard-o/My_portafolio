import PropTypes from "prop-types";


export default function SvgComponent2(props) {
  
  const svgStyle = {
    stroke: (props.currentEdu == 0 || props.currentEdu == 1) ? "#4493f8" : "grey",
    strokeWidth: "4px",
    fill: "transparent",
  };
  
  if (window.innerWidth < 798)  {
    return (
      <>
        <svg height="100" width="300" xmlns="http://www.w3.org/2000/svg">
          <line x1="150" y1="0" x2="150" y2="200" style={svgStyle} />
        </svg>
      </>
    )
  };


  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" >
        <path d="M0,50 C100,50 100,162 150,0" style={svgStyle} />
      </svg>
    </>
  );
}

SvgComponent2.propTypes = {
  currentEdu: PropTypes.number.isRequired,
};
