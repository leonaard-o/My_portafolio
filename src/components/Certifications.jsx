import Certificate from "./Certificate";
import CloseIcon from "@mui/icons-material/Close";

import cs50 from "../assets/cs50x.png";
import ml from "../assets/acm_ml.png";
import PropTypes from "prop-types";

export default function Certifications(props) {
  const container = {
    display: "block",
    font: "`Times New Roman`, `serif`",
    position: "relative",
    width: "100%",
    margin: "10px",
    padding: "10px",
  };
  const title = {
    display: "flex",
    color: "white",
    fontSize: "30px",
    textAlign: "left",
    fontWeight: "bold",
  };
  const certificates =
    window.innerWidth < 798
      ? {
          display: "flex",
          flexWrap: "wrap",
          margin: "4px",
          padding: "0",
          paddingTop: "10px",
        }
      : {
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          padding: "0",
        };
  //   const closeButton = {
  //     position: 'absolute',
  //     top: '20',
  //     left: '90%',
  //     color: 'white',
  //     cursor: 'pointer',
  //   };

  const certifications = {
    title: "Certifications",
    description: "Proofs of sacrifices and dedication",
    points: ["Harvard", "Google", "IIT Madras", "ACM..."],
    content: [
      {
        certification: "React Developer Certificate",
        year: "2025",
        institution: "Academia Desarrollo de Software",
        image: ml,
      },
      {
        certification: "Full-Stack Development",
        year: "2025",
        institution: "Academia Desarrollo de Software",
        image: cs50,
      },
    ],
  };

  return (
    <>
      <div style={container}>
        <div style={title}>
          <div>Certifications</div>
          <div className="close-btn" onClick={() => props.setExpanded(false)}>
            <CloseIcon />
          </div>
        </div>
        <div style={certificates} className="certificates-div">
          {certifications.content.map((certification, index) => (
            <Certificate
              key={index}
              index={index}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Certifications.propTypes = { setExpanded: PropTypes.func };