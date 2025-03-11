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
              {language === "en" ? "May 2024 - Present" : "Mayo 2024 - Actualidad"}
            </p>
            <h3 className="job-title">Lorem ipsum</h3>
            <h4>
              Lorem ipsum, Kochi, Kerala
              <div className="xtra">({language === "en" ? "Remote" : "Remoto"})</div>
            </h4>
            <div>
              <strong>{language === "en" ? "Smart Contracts: Internet Computer" : "Contratos Inteligentes: Internet Computer"}</strong>
              <br />
              <ul>
                <li>
                  {language === "en"
                    ? "Developed 100% on-chain decentralized applications on the Internet Computer blockchain using Motoko and React."
                    : "Desarrolló aplicaciones descentralizadas 100% en cadena en la blockchain de Internet Computer usando Motoko y React."}
                </li>
                <li>
                  {language === "en"
                    ? "Designed scalable smart contracts and integrated them with Internet Identity, an on-chain authentication service."
                    : "Diseñó contratos inteligentes escalables e integró Internet Identity, un servicio de autenticación en cadena."}
                </li>
                <li>
                  {language === "en"
                    ? "Implemented the front-ends using React."
                    : "Implementó las interfaces frontend usando React."}
                </li>
              </ul>
            </div>
            <div>
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
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}


