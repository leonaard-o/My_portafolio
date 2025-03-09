import  PropTypes from 'prop-types';
export default function Certificate({ certification, index }) {
    return (
      <div className="card">
        <div className="card__side card__side--front-1">
          <div className="certification-card" key={index}><div>
            <div style={window.innerWidth < 798 ? {fontSize: "12px"} : {fontSize: "16px"}} className="card-content">
              {certification.certification}
            </div>
            <div className="card-content" style={{fontSize: '12px', color: "grey"}}>
              {certification.year}
            </div>
            <div style={window.innerWidth < 798 ? {fontSize: '10px', color: "grey"} : {fontSize: '12px', color: "grey"}}>
              {certification.institution}
            </div>
            </div>
          </div>
        </div>
        <div className="card-content card__side card__side--back card__side--back-1">
          <img src={certification.image} alt="certificate" style={{width: "100%", height: "100%"}} />
        </div>
      </div>
    );
  }
  
  Certificate.propTypes = {
    certification: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };
  