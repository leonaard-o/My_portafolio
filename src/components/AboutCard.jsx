import PropTypes from "prop-types";
import CircleIcon from "@mui/icons-material/Circle";
import "../styles/AboutCard.css";

export default function AboutCard(props) {
  const title = {
    color: "wheat",
    fontSize: "15px",
    fontWeight: "bold",
  };
  const desc = {
    color: "white",
    fontSize: "15px",
    marginTop: "5px",
    opacity: "0.8",
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Scroll to About section when clicked on a card (only on small screens)
  const handleClick = () => {
    if (window.innerWidth > 798) return;
    const div = document.getElementById("about");
    if (div) {
      div.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        style={props.isExpanded ? { display: "none" } : { display: "block" }}
        className={
          props.isActive ? "about-card-active" : "about-card-container"
        }
        onClick={() => {
          props.setExpanded(true);
          props.setHovering(props.title);
          handleClick();
        }}
      >
        <div style={title}>{props.title}</div>
        <div style={desc}>{props.description}</div>
        <div className="points">
          {props.points.map((point, index) => (
            <li className="card-item" key={index}>
              <CircleIcon
                style={{
                  display: "inline-flex",
                  width: "16px",
                  verticalAlign: "middle",
                  boxSizing: "inherit",
                  alignItems: "center",
                  color: getRandomColor(),
                  opacity: "0.6",
                }}
              />
              {point}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
  setHovering: PropTypes.func.isRequired,
};
