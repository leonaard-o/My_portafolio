import AboutMe from "./AboutMe";
import AboutCards from "./AboutCards";
import PropTypes from "prop-types";

export default function AboutDetails({ isExpanded, setExpanded }) {
  const container = {
    flex: 4,
    padding: "1rem",
    display: "block",
    backgroundColor: "black",
    maxWidth: "100%",
    height: "auto",
    background: "#000",
    borderRadius: "0 1.5rem 1.5rem 0",
    overflow: "hidden",
    zIndex: 2,
  };
  const smallScreen = {
    ...container,
    borderRadius: "0 0 1.5rem 1.5rem",
  };

  return (
    <>
      <div
        style={window.innerWidth < 798 ? smallScreen : container}
        onMouseLeave={() => setExpanded(false)}
      >
        <AboutMe isExpanded={isExpanded} />
        <AboutCards isExpanded={isExpanded} setExpanded={setExpanded} />
      </div>
    </>
  );
}

AboutDetails.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
};
