import PropTypes from "prop-types";
export default function Badge(props) {
  const container = {
    display: "flex",
    font: `monospace`,
    color: "white",
    fontSize: "15px",
    margin: "15px 35px 0 0",
    opacity: "0.8",
    textAlign: "left",
    padding: "1rem",
    border: "none",
    height: "auto",
    borderRadius: "10px",
  };
  const logo = {
    width: "100px",
    height: "100px",
    margin: "0 10px 0 0",
  };
  const title = {
    display: "flex",
    font: `monospace`,
    fontSize: "20px",
    textAlign: "left",
    fontWeight: "bold",
  };
  const additional = {
    display: "flex",
    font: `monospace`,
    color: "white",
    fontSize: "15px",
    textAlign: "left",
    fontWeight: "bold",
  };

  return (
    <div className="achievement-card" style={container}>
      <img src={props.logo} alt="badge" style={logo} />
      <div>
        <div style={title}>{props.content.achievement}</div>
        <div style={additional}>{props.content.additional}</div>
        <div style={{ color: "grey" }}>{props.content.year}</div>
      </div>
    </div>
  );
}
Badge.propTypes = {
  logo: PropTypes.string,
  content: PropTypes.object,
};
