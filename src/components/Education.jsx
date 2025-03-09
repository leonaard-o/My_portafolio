import  { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import EduBlock from "./EduBlock";
import SvgComponent1 from "./SvgComponent1";
import SvgComponent2 from "./SvgComponent2";
import PropTypes from "prop-types";

export default function Education(props) {
  const container = {
    display: 'block',
    font: `monospace`,
    position: 'relative',
    width: '100%',
    margin: '10px',
    padding: '10px',
  };
  const title = {
    display: 'flex',
    font: `monospace`,
    color: 'white',
    fontSize: '30px',
    textAlign: 'left',
    fontWeight: 'bold',
  };
  const eduData = {
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    margin: '15px 35px 0 0',
    opacity: '0.8',
    textAlign: 'left',
    padding: '1rem',
    border: '0.1px solid rgb(100, 100, 100)',
    height: 'auto',
    borderRadius: '10px',
    backgroundColor: '#242424',
  };
  const rightAlign = {
    textAlign: 'right',
    float: 'right',
    marginRight: '0',
  };

  const [currentEdu, setCurrentEdu] = useState(-1);

  return (
    <>
      <div style={container}>
        <div style={title}>
          <div>Education</div>
          <div className="close-btn" onClick={() => props.setExpanded(false)}><CloseIcon /></div>
        </div>
        <div style={eduData}>
          
          <div className="svg-edu">
            <EduBlock content={props.content[0]} setCurrentEdu={setCurrentEdu} index={{index: 0}} />
          </div>

          <div className="svg-edu">
            <SvgComponent1 currentEdu={currentEdu} />
            <div style={rightAlign}>
              <EduBlock content={props.content[1]} setCurrentEdu={setCurrentEdu} index={{index: 1}} />
            </div>
          </div>
      
          <div className="svg-edu">
            {window.innerWidth < 798 && <SvgComponent2 currentEdu={currentEdu} />}
            <div>
              <EduBlock content={props.content[2]} setCurrentEdu={setCurrentEdu} index={{index: 2}} />
            </div>
            {window.innerWidth >= 798 && <SvgComponent2 currentEdu={currentEdu} />}
          </div>

        </div>
      </div>
    </>
  );
};

Education.propTypes = {
  content: PropTypes.array.isRequired,
  setExpanded: PropTypes.func.isRequired,
};