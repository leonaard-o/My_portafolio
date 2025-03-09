import PropTypes from 'prop-types';


export default function SvgComponent1(props) {

  let svgStyle = {
    stroke: (props.currentEdu == 0) ? "#4493f8" : "grey",
    strokeWidth: "10px",
    fill: "transparent",
  };
  
  if (window.innerWidth < 798)  {
    svgStyle = {
      ...svgStyle,
      strokeWidth: "4px",
    }
    return (
      <>
        <svg height="100" width="300" xmlns="http://www.w3.org/2000/svg">
          <line x1="150" y1="0" x2="150" y2="200" style={svgStyle} />
        </svg>
      </>
    )
  };

  const svgDivStyle = {
    width: '100%',
    height: '120px',
  }
  
  return (
    <>
      <svg style={svgDivStyle} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
        {/*
          Moveto(265, 0) and draw a cubic Beizer curve CurveTo(1050, 605)
          The cubic Beizer curve is defined by two control points and an end point
          The first control point is (250, 250) and the second control point is (400, 100)
        */}
        <path d="M240,0 C250,250,400,100 1000,250" style={svgStyle} />
      </svg>
    </>
  );
}

SvgComponent1.propTypes = {
  currentEdu: PropTypes.number.isRequired,
};
