import { useEffect, useRef } from "react";
import "../styles/Experience.css";

import useStore from "../useStore/useStore";

export default function Experience() {
  const { language } = useStore(); // Obtenemos el idioma actual
  const expRef = useRef(null);

  useEffect(() => {
    const exp = expRef.current;
    if (!exp) return;

    const jobTitles = exp.querySelectorAll(".job-title");

    const handleMouseOver = () => {
      jobTitles.forEach((jobTitle) => (jobTitle.style.color = "wheat"));
    };

    const handleMouseOut = () => {
      jobTitles.forEach((jobTitle) => (jobTitle.style.color = "white"));
    };

    exp.addEventListener("mouseover", handleMouseOver);
    exp.addEventListener("mouseout", handleMouseOut);

    return () => {
      exp.removeEventListener("mouseover", handleMouseOver);
      exp.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="exp" id="experience" ref={expRef}>
      <div className="exp-title">
        {language === "en" ? "Experience" : "Experiencia"}
      </div>
      <ul className="exp-timeline">
        <li className="exp-timeline-event">
          <label className="exp-timeline-event-icon"></label>
          <div className="exp-timeline-event-copy">
            <p className="exp-timeline-event-thumbnail">
              {language === "en"
                ? "Feb 2025 - Present"
                : "Feb 2025 - Actualidad"}
            </p>
            {/* <h3 className="job-title"></h3>
            <h4>
              Lorem ipsum, Kochi, Kerala
              <div className="xtra">({language === "en" ? "Remote" : "Remoto"})</div>
            </h4>
            <div>
              <strong>{language === "en" ? "Smart Contracts: Internet Computer" : "Contratos Inteligentes: Internet Computer"}</strong> */}
            <br />
            <ul>
              <li>
                {language === "en"
                  ? "My professional experience has been shaped by my work on challenging projects where I have consistently demonstrated dedication and commitment. Through these initiatives, I have acquired a broad range of technical expertise and practical skills that enable me to tackle complex challenges with efficiency and innovation. I am highly motivated and eager to contribute my experience and continuous learning ability to an organization that offers me the opportunity to make a significant impact on its growth and success."
                  : "Mi experiencia profesional se ha forjado a través del desarrollo de proyectos desafiantes, en los cuales he puesto toda mi dedicación y compromiso. Gracias a estas iniciativas, he adquirido un amplio abanico de conocimientos técnicos y habilidades prácticas que me permiten abordar problemas complejos con eficacia e innovación. Estoy profundamente motivado y entusiasmado por la posibilidad de aportar mi experiencia y capacidad de aprendizaje a una compañía que me brinde la oportunidad, contribuyendo de manera significativa al crecimiento y éxito de la organización."}
              </li>
              {/* <li>
                  {language === "en"
                    ? "Designed scalable smart contracts and integrated them with Internet Identity, an on-chain authentication service."
                    : "Diseñó contratos inteligentes escalables e integró Internet Identity, un servicio de autenticación en cadena."}
                </li>
                <li>
                  {language === "en"
                    ? "Implemented the front-ends using React."
                    : "Implementó las interfaces frontend usando React."}
                </li> */}
            </ul>
          </div>
          {/* <div>
              <strong>{language === "en" ? "Smart Contracts: Solana" : "Contratos Inteligentes: Solana"}</strong>
              <br />
              <ul>
                <li>
                  {language === "en"
                    ? "Collaborated with team members to develop an application on the Solana blockchain."
                    : "Colaboró con el equipo en el desarrollo de una aplicación en la blockchain de Solana."}
                </li>
                <li>
                  {language === "en"
                    ? "Used the Rust programming language along with the Anchor framework for the backend development."
                    : "Usó el lenguaje Rust junto con el framework Anchor para el desarrollo backend."}
                </li>
                <li>
                  {language === "en"
                    ? "Wrote programs in TypeScript for testing Solana programs."
                    : "Escribió programas en TypeScript para probar aplicaciones en Solana."}
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        </li>
      </ul>
    </div>
  );
}
