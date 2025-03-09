import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Badge from "./Badge";

import badge1 from "../assets/badge.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";


export default function Achievements(props) {
  const container = {
    display: 'block',
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
  const logo = [badge1, badge2, badge3];
    
  return (
    <>
      <div style={container}>
        <div style={title}>
          <div>Achievements</div>
          <div className="close-btn" onClick={() => props.setExpanded(false)}><CloseIcon /></div>
        </div>
        <div className="achievements-list">
          {props.content.map((achievement, index) => {
            return <Badge key={index} logo={logo[index]} content={achievement} />
          })}
        </div>
      </div>
    </>
  );
};

Achievements.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
};