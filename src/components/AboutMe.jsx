import PropTopyes from "prop-types";
export default function AboutMe({ isExpanded }) {
    const content = {
      container: {
        font: `monospace`,
        fontSize: "15px",
        color: "white",
        padding: "1rem",
        marginLeft: "0",
        marginBottom: "1rem",
        textAlign: "left",
        display: "block",
        backgroundColor: "black",
        maxWidth: "100%",
        height: "auto",
        aspectRatio: "attr(width) / attr(height)",
        background: "#000",
        border: "0.1px solid rgb(100, 100, 100)",
        borderRadius: "10px",
      },
      heading: {
        font: `monospace`,
        fontSize: "25px",
        fontWeight: "bold",
      },
    };
  
    return (
      <>
        <div style={isExpanded ? { display: "none" } : content.container}>
          <div style={content.heading}>About Me</div>
          <div>
            <br />
            I graduated from the Software Development Academy as a Full-Stack
            Developer , and I am currently deepening my expertise in Nest.js while
            reinforcing all the skills I have acquired. The software development
            industry is highly complex and demands dedication, discipline, and
            continuous learning to stay ahead. My passion for programming is
            indescribable, and I believe my greatest strengths lie in my patience,
            dedication, and responsibility. I am fully committed to expanding my
            knowledge and solving real-world problems efficiently. Whether working
            independently or collaboratively in a team, I consistently deliver
            high-quality results. I pride myself on being an excellent problem
            solver with strong analytical skills and a proactive mindset. <br />
            <br />I am highly adaptable and thrive in both team environments and
            independent projects. My ability to learn quickly and apply new
            concepts allows me to tackle challenges effectively. I am currently
            available full-time and eager to contribute to innovative projects
            that align with my skills and aspirations.
          </div>
        </div>
      </>
    );
  }
  
  AboutMe.propTypes = {
    isExpanded: PropTopyes.bool,
  };