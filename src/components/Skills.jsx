import PropTypes from "prop-types";

import  { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import "../styles/Skills.css";

import Pie from "./Pie";
import useStore from "../useStore/useStore";



export default function Skills(props) {
    const { language } = useStore();
  const title = {
    display: 'flex',
    font: `monospace`,
    color: 'white',
    fontSize: '30px',
    textAlign: 'end',
    fontWeight: 'bold',
    width: '100%',
    marginLeft: '1em', // Aquí agregas el margen izquierdo

  

  };
  const skillData = {
    display: 'flex',
    textAlign: 'left',
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    opacity: '0.8',
    padding: '1rem',
    border: '0.2px solid rgb(100, 100, 100)',
    height: 'auto',
    borderRadius: '10px',
    overflow: 'visible', 
    zIndex: '-1',
    marginRight: '35px',
    gap: '20px'
  };
  const skillsList = {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '0px',
    padding: '0',
    margin: '0',
  };
  const skillStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '8px',
    fontWeight: 'bold',
    width: 'auto',
    height: '1em',
  };

  const small = {
    skillData: {
      display: 'block',
      textAlign: 'center',
      font: `monospace`,
      color: 'white',
      fontSize: '15px',
      margin: '15px 35px 0 0',
      opacity: '0.8',
      padding: '1rem',
      border: '0.1px solid rgb(100, 100, 100)',
      height: 'auto',
      borderRadius: '10px',
    },
  }
  
  const [info, setInfo] = useState([]);

  return (
    <>
      <div className="skill-container">
        <div style={title}>{language === 'en' ? 'Skills' : 'Habilidades'}
          <div></div>
          <div className="close-btn" onClick={() => props.setExpanded(false)}><CloseIcon /></div>
        </div>
        <div style={window.innerWidth < 798 ? small.skillData : skillData}>

          <Pie setInfo={setInfo}></Pie>

          <div className="pie-info">
            <div style={skillsList}>
              {info.map((item, index) => (
                <div style={skillStyle} key={index}>
                  
                  {item.logo && <img src={item.logo} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />}
                  {item.name}
                  
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

Skills.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
};