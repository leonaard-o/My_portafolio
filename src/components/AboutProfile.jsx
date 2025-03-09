
import { useState } from "react";
import dp from "../assets/dp_cartoon.jpeg";
import { Tooltip } from "@nextui-org/tooltip";

export default function AboutProfile() {
  const flexLeft = {
    container: {
      display: 'block',
      padding: '2rem',
      flex: 1,
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '1.5rem 0 0 1.5rem',
    },
    imgContainer: {
      textAlign: 'left',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '50%',
      
    },
    dp: {
        textAlign: 'center',
        borderRadius: '100%',
        border: '1px solid wheat',
        width: '50vw', // Ancho relativo al viewport (50% del ancho de la pantalla)
        height: '50vw', // Altura igual al ancho para mantener la forma circular
        maxWidth: '200px', // Límite máximo para pantallas grandes
        maxHeight: '200px', // Límite máximo para pantallas grandes
        margin: '0 auto',
       
        objectFit: 'cover',
      
       
        background: '#ffffff',
       
    },
    details: {
      display: 'block',
      textAlign: 'left',
      maxWidth: '100%',
      height: 'auto',
      color: 'white',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '0 1.5rem 1.5rem 0',
    },
    greyFont: {
      color: 'grey',
      fontSize: '1rem',
      margin: '0px',
    },
    name: {
      color: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
    },
    desc: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1rem',
      marginTop: '5px',
    },
    buttonDiv: {
      textAlign: 'left',
      width: '100%',
      marginTop: '1rem',
      height: 'auto',
    },
    mainButton: {
      width: '100%',
      fontSize: '15px',
      color: '#b1aeae',
      fontWeight: 'normal',
      borderRadius: '0.5rem',
      margin: '0.5rem 0',
    },
    extras: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1rem',
      marginTop: '1rem',
    },
    url: {
      color: 'wheat',
      textDecoration: 'none',
      fontSize: '14px',
    },
    urlHover: {
      color: 'wheat',
      textDecoration: 'underline',
      fontSize: '14px',
    },
  }

  const smallScreen = {
    ...flexLeft,
    dp: {
        textAlign: 'center',
        borderRadius: '100%',
        border: '1px solid wheat',
        width: '50vw', // Ancho relativo al viewport (50% del ancho de la pantalla)
        height: '50vw', // Altura igual al ancho para mantener la forma circular
        maxWidth: '100px', // Límite máximo para pantallas grandes
        maxHeight: '100px', // Límite máximo para pantallas grandes
        margin: '0 auto',
       
        objectFit: 'contain',
       
        background: '#ffffff',
    },
    imgContainer: {
      margin: 0,
    },
    container: {
      ...flexLeft.container,
      display: 'flex',
      margin: '2px',
      padding: '10px',
      borderRadius: '1.5rem 1.5rem 0 0',
    },
    details: {
      ...flexLeft.details,
      padding: '1rem',
      paddingTop: '0',
      paddingBottom: '2px',
      borderRadius: '1.5rem 1.5rem 1.5rem 1.5rem',
    },
    buttonDiv: {
      ...flexLeft.buttonDiv,
      margin: '0',
    },
    extras: {
      ...flexLeft.extras,
      margin: '0',
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div style={window.innerWidth < 798 ? smallScreen.container : flexLeft.container}>
        <div style={window.innerWidth < 798 ? smallScreen.imgContainer : flexLeft.imgContainer}>
          <Tooltip content="👽️" showArrow={true} placement="right-end" color="foreground" offset={-100} >
            <img src={dp} style={window.innerWidth < 798 ? smallScreen.dp : flexLeft.dp} alt="display picture" />
          </Tooltip>
        </div>
        <div>
          <div style={window.innerWidth < 798 ? smallScreen.details : flexLeft.details}>
            <div style={flexLeft.name}>Leonardo Gaona</div>
            <h3 style={flexLeft.greyFont}>Leoanaard-o</h3>
          </div>
        
          <div style={window.innerWidth < 798 ? smallScreen.details : flexLeft.desc}>
            
            Full-Stack Developer | MCA 25 @ Academia Desarrollo de Software
            <div style={window.innerWidth ? smallScreen.buttonDiv : flexLeft.buttonDiv}>
              <a href="https://github.com/leonaard-o">
                <button style={flexLeft.mainButton}>Github</button>
              </a>
            </div>
            <div style={window.innerHeight ? smallScreen.extras : flexLeft.extras}>
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
    </>
  );
};
