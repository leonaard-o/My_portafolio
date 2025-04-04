import { useState, useEffect } from "react";

import "../styles/About.css";

import AboutDetails from "./AboutDetails";
import AboutProfile from "./AboutProfile";

export default function About() {
  const styles = {
    laptopStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      margin: "auto",
      width: "100%",
      maxWidth: "80rem",
      overflow: "hidden",
    },
    laptopScreenStyle: {
      display: "flex",
      position: "relative",
      zIndex: 1,
      padding: "10px",
      minHeight: "80vh",
      width: "90vw",
      borderRadius: "2rem",
      background: "#ecf1f7",
      backgroundImage: "linear-gradient(to bottom, #333, #111)",
      boxShadow: "0 0.1rem 0 #cfcfcf",
      border: "1px solid wheat",
    },
    laptopShadowStyle: {
      position: "absolute",
      right: "-10%",
      bottom: "-2.5rem",
      left: "-10%",
      zIndex: 0,
      height: "2rem",
      background: "radial-gradient(ellipse closest-side,#000,transparent)",
      opacity: 0.5,
    },
  };
  const bigScreen = {
    ...styles,
  };

  const smallScreen = {
    ...styles,
    laptopStyle: {
      position: "relative",
      maxWidth: "80rem",
      overflow: "hidden",
      width: "100%",
    },
    laptopScreenStyle: {
      ...styles.laptopScreenStyle,
      flexDirection: "column",
      width: "auto",
      margin: "0",
      padding: "4px",
      minHeight: "90vh",
    },
  };

  // State to hold the current styles
  const [currentStyles, setCurrentStyles] = useState(bigScreen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentStyles(smallScreen);
      } else {
        setCurrentStyles(bigScreen);
      }
    };

    // Set the initial style based on the current window width
    handleResize();
    // Update styles on window resize
    window.addEventListener("resize", handleResize);
    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isExpanded, setExpanded] = useState(false);

  // * Change the background color to white and move the navbar
  // * when the about section is at the top of the viewport
  useEffect(() => {

    
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const body = document.body;
      const nav = document.querySelector("#nav");
      const project = document.querySelector("#projects");
      const rect = aboutSection.getBoundingClientRect();

      if (window.innerWidth >= 798) {
        if (rect.top < 100 && rect.bottom > 100) {
          body.style.backgroundColor = "white";
          body.style.color = "black";
          nav.classList.add("scrolled");
          nav.classList.remove("light");
          project.classList.remove("focused");
          aboutSection.style.paddingTop = "75px";
        } else if (rect.top >= 100) {
          body.style.backgroundColor = "transparent";
          nav.classList.remove("scrolled");
          nav.classList.remove("light");
          project.classList.remove("focused");

          // let percentage = (rect.top - 128) / (500 - 0);
          // console.log(percentage < 100 || 100);
          // nav.style.opacity = percentage;

          aboutSection.style.paddingTop = "0px";
        } else {
          body.style.backgroundColor = "transparent";
          project.classList.add("focused");
          nav.classList.add("light");
          nav.classList.add("scrolled");
          aboutSection.style.paddingTop = "75px";
        }
      } else {
        if (rect.top < 100 && rect.bottom > 100) {
          body.style.backgroundColor = "white";
          body.style.color = "black";
          project.classList.remove("focused");
        } else if (rect.top >= 100) {
          body.style.backgroundColor = "transparent";
          project.classList.remove("focused");
        } else {
          body.style.backgroundColor = "transparent";
          project.classList.add("focused");
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="container" id="about">
        <div className="laptop" style={currentStyles.laptopStyle}>
          <div
            className="laptop__screen"
            style={currentStyles.laptopScreenStyle}
          >
            <AboutProfile />
            <AboutDetails isExpanded={isExpanded} setExpanded={setExpanded} />
          </div>
          <div
            className="laptop__shadow"
            style={currentStyles.laptopShadowStyle}
          ></div>
        </div>
      </div>
    </main>
  );
}
