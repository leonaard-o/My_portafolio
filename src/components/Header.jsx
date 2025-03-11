import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Home, Info, Engineering, Work, Contacts } from "@mui/icons-material";
import Hamburger from "./Hamburger";
import useStore from "../useStore/useStore";

import "../styles/Header.css";

export default function Header() {
  const { language, toggleLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOffset, setOffset] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Manejar el estado del navbar colapsado por scroll
  const handleScroll = () => {
    setIsCollapsed(window.scrollY > 550);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Manejar apertura/cierre del navbar
  const toggleNavbar = () => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    setIsOpen(!isOpen);
  };

  // Ajustar el offset de la sección "about" basado en el scroll
  const updateOffset = () => {
    const newOffset = window.scrollY > 100 ? 20 : 0;
    setOffset(newOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
    };
  }, []);

  const iconStyle = {
    verticalAlign: "sub",
  };

  return (
    <div className="myheader" id="nav">
      <div className="head-container">
        <nav
          className="mynavbar"
          style={window.innerWidth < 798 ? { display: "none" } : {}}
        >
          <ul className="navigation-links">
            <li>
              <Link
                to=""
                smooth={true}
                duration={800}
                offset={-70}
                id="home-button"
                onClick={() => scroll.scrollToTop()}
              >
                <Home style={iconStyle} />
                <div className="help">
                  {language === "es" ? "Inicio" : "Home"}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={aboutOffset}
                id="about-button"
              >
                <Info style={iconStyle} />
                <div className="help">
                  {language === "es" ? "Acerca de" : "About"}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={20}
                id="projects-button"
              >
                <Engineering style={iconStyle} />
                <div className="help">
                  {language === "es" ? "Proyectos" : "Projects"}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={800}
                offset={20}
                id="experience-button"
              >
                <Work style={iconStyle} />
                <div className="help">
                  {language === "es" ? "Experiencia" : "Experience"}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={20}
                id="contact-button"
              >
                <Contacts style={iconStyle} />
                <div className="help">
                  {language === "es" ? "Contacto" : "Contact"}
                </div>
              </Link>
            </li>

            <li className="es-en">
              <button
                onClick={toggleLanguage}
                id="language-button"
                className={
                  isCollapsed ? "small-language-button" : "full-language-button"
                }
              >
                {isCollapsed
                  ? language === "en"
                    ? "ES"
                    : "EN"
                  : language === "en"
                  ? "Español"
                  : "English"}
              </button>
            </li>
          </ul>
        </nav>

        <span className="hamburger-icon">
          <Hamburger isOpen={isOpen} toggle={toggleNavbar} />
        </span>

        <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to=""
                smooth={true}
                duration={800}
                offset={-70}
                id="home-button"
                onClick={() => {
                  scroll.scrollToTop();
                  toggleNavbar();
                }}
              >
                <div className="help">
                  {language === "es" ? "Inicio" : "Home"}
                </div>
                <Home style={iconStyle} />
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={10}
                id="about-button"
                onClick={toggleNavbar}
              >
                <div className="help">
                  {language === "es" ? "Acerca de" : "About"}
                </div>
                <Info style={iconStyle} />
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={20}
                id="projects-button"
                onClick={toggleNavbar}
              >
                <div className="help">
                  {language === "es" ? "Proyectos" : "Projects"}
                </div>
                <Engineering style={iconStyle} />
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={800}
                offset={20}
                id="experience-button"
                onClick={toggleNavbar}
              >
                <div className="help">
                  {language === "es" ? "Experiencia" : "Experience"}
                </div>
                <Work style={iconStyle} />
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={20}
                id="contact-button"
                onClick={toggleNavbar}
              >
                <div className="help">
                  {language === "es" ? "Contacto" : "Contact"}
                </div>
                <Contacts style={iconStyle} />
              </Link>
            </li>
            <li className="resume-link-li">
              <a href="" className="nav-resume-link">
                <div>{language === "es" ? "CV" : "Resume"}</div>{" "}
                <AccountCircleIcon style={iconStyle} />
              </a>
            </li>
            <li className="español">
              <button onClick={toggleLanguage} id="language-boton">
                {language === "en" ? "Es" : "En"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
