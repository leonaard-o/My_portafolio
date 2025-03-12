import PropTypes from "prop-types"; // Corrige el error tipográfico aquí
import useStore from "../useStore/useStore";

// Importar el hook Zustand

export default function AboutMe({ isExpanded }) {
  const { language } = useStore(); // Obtener el idioma y la función para cambiarlo

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
    textContent: {
      en: (
        <>
          I graduated from the Software Development Academy as a Full-Stack
          Developer, and I am currently deepening my expertise in Nest.js while
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
        </>
      ),
      es: (
        <>
          Me gradué de la Academia de Desarrollo de Software como Desarrollador
          Full-Stack, y actualmente estoy profundizando mi experiencia en
          Nest.js mientras refuerzo todas las habilidades que he adquirido. La
          industria del desarrollo de software es altamente compleja y exige
          dedicación, disciplina y aprendizaje continuo para mantenerse a la
          vanguardia. Mi pasión por la programación es indescriptible, y creo
          que mis mayores fortalezas radican en mi paciencia, dedicación y
          responsabilidad. Estoy completamente comprometido con expandir mis
          conocimientos y resolver problemas del mundo real de manera eficiente.
          Ya sea trabajando de forma independiente o en colaboración en un
          equipo, siempre entrego resultados de alta calidad. Me enorgullece ser
          un excelente solucionador de problemas con fuertes habilidades
          analíticas y una mentalidad proactiva. <br />
          <br />
          Soy altamente adaptable y prospero tanto en entornos de equipo como en
          proyectos independientes. Mi capacidad para aprender rápidamente y
          aplicar nuevos conceptos me permite abordar desafíos de manera
          efectiva. Actualmente estoy disponible a tiempo completo y estoy
          ansioso por contribuir a proyectos innovadores que estén alineados con
          mis habilidades y aspiraciones.
        </>
      ),
    },
  };

  return (
    <>
      <div style={isExpanded ? { display: "none" } : content.container}>
        <div style={content.heading}>
          {language === "en" ? "About Me" : "Acerca de mí"}
        </div>
        <div>
          <br />
          {language === "en" ? content.textContent.en : content.textContent.es}
        </div>

        {/* <button onClick={toggleLanguage}>
            {language === "en" ? "Switch to Spanish" : "Switch to English"}
          </button> */}
      </div>
    </>
  );
}

AboutMe.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};
