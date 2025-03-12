import { useState, useEffect } from "react";
import dp from "../assets/dp_cartoon.jpeg";
import AnimatedProfileImage from "./AnimateProfile";

export default function AboutProfile() {
  // Estado para almacenar el ancho de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Actualiza el estado al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Estilos para escritorio (pantallas grandes)
  const flexLeft = {
    container: {
      display: "block",
      padding: "2rem",
      flex: 1,
      backgroundColor: "black",
      maxWidth: "100%",
      height: "auto",
      background: "#000",
      borderRadius: "1.5rem 0 0 1.5rem",
    },
    imgContainer: {
      textAlign: "left",
      height: "auto",
      borderRadius: "50%",
    },
    dp: {
      marginLeft: "0em",
    },
    details: {
      display: "block",
      textAlign: "left",
      maxWidth: "100%",
      height: "auto",
      color: "white",
      background: "#000",
      borderRadius: "0 1.5rem 1.5rem 0",
    },
    greyFont: {
      color: "grey",
      fontSize: "1rem",
      margin: "0px",
    },
    name: {
      color: "white",
      fontSize: "25px",
      fontWeight: "bold",
      marginTop: "5em",
    },
    desc: {
      textAlign: "left",
      color: "white",
      fontSize: "1rem",
      marginTop: "5px",
    },
    buttonDiv: {
      textAlign: "left",
      width: "100%",
      marginTop: "1rem",
      height: "auto",
    },
    mainButton: {
      width: "100%",
      fontSize: "15px",
      color: "#b1aeae",
      fontWeight: "normal",
      borderRadius: "0.5rem",
      margin: "0.5rem 0",
    },
    extras: {
      textAlign: "left",
      color: "white",
      fontSize: "1rem",
      marginTop: "1rem",
    },
    url: {
      color: "wheat",
      textDecoration: "none",
      fontSize: "14px",
    },
    urlHover: {
      color: "wheat",
      textDecoration: "underline",
      fontSize: "14px",
    },
  };

  // Estilos para pantallas pequeñas (móviles)
  const smallScreen = {
    // Estilos específicos para la imagen (dp)
    // dp: {
    // //   textAlign: "center",
    // //   borderRadius: "100%",
    // //   border: "1px solid wheat",
    // //   width: "50vw",        // 50% del ancho del viewport
    // //   height: "50vw",       // Mantiene forma circular
    // //   maxWidth: "100px",    // Límite máximo para pantallas grandes
    // //   maxHeight: "100px",   // Límite máximo para pantallas grandes
    // //   margin: "0 auto",
    // //   objectFit: "cover",
    // //   background: "#ffffff",

    //         // Asegura que la imagen esté por encima de otros elementos
    // },
    imgContainer: {
      margin: 0,
    },
    container: {
      ...flexLeft.container,
      display: "flex",
      margin: "2px",
      padding: "10px",
      borderRadius: "1.5rem 1.5rem 0 0",
    },
    details: {
      ...flexLeft.details,
      padding: "1rem",
      paddingTop: "0",
      paddingBottom: "2px",
      borderRadius: "1.5rem",
    },
    buttonDiv: {
      ...flexLeft.buttonDiv,
      margin: "0",
    },
    extras: {
      ...flexLeft.extras,
      margin: "0",
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={windowWidth < 798 ? smallScreen.container : flexLeft.container}>
      <div
        style={
          windowWidth < 798 ? smallScreen.imgContainer : flexLeft.imgContainer
        }
      >
        <AnimatedProfileImage
          src={dp}
          style={windowWidth < 798 ? smallScreen.dp : flexLeft.dp}
          alt="display picture"
        />
      </div>
      <div>
        <div style={windowWidth < 798 ? smallScreen.details : flexLeft.details}>
          <div style={flexLeft.name}>Leonardo Gaona</div>
          <h3 style={flexLeft.greyFont}>Leoanaard-o</h3>
        </div>
        <div style={windowWidth < 798 ? smallScreen.details : flexLeft.desc}>
          Full-Stack Developer | MCA 25 @ Academia Desarrollo de Software
          <div
            style={
              windowWidth < 798 ? smallScreen.buttonDiv : flexLeft.buttonDiv
            }
          >
            <a href="https://github.com/leonaard-o">
              <button style={flexLeft.mainButton}>Github</button>
            </a>
          </div>
          <div style={windowWidth < 798 ? smallScreen.extras : flexLeft.extras}>
            <a
              href="https://github.com/leonaard-o"
              style={isHovered ? flexLeft.urlHover : flexLeft.url}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Leonarrd-o.github.io/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
