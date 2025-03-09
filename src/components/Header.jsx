import  { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "../styles/Header.css";

import { Home, Info, Engineering, Work, Contacts } from '@mui/icons-material';
import Hamburger from './Hamburger';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // Handle hamburger menu toggle
  const toggleNavbar = () => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  // Change scroll offset for about section based on scroll position
  const [aboutOffset, setOffset] = useState(0);
  const updateOffset = () => {
    const newOffset = window.scrollY > 100 ? 20 : 0;
    setOffset(newOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateOffset);
    return () => {
      window.removeEventListener('scroll', updateOffset);
    };
  }, []);

  const iconStyle = { 
    verticalAlign: 'sub',
  };

  return (
    <div className="myheader" id="nav">

      <div className="head-container">
        <nav className="mynavbar" style={window.innerWidth < 798 ? {display: 'none'} : {}}>
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
                <div className="help">Home</div>
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
                <div className="help">About</div>
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
                <div className="help">Projects</div>
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
                <div className="help">Experience</div>
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
                <div className="help">Contact</div>
              </Link>
            </li>
          </ul>
        </nav>

        <span className="hamburger-icon">
          <Hamburger isOpen={isOpen} toggle={toggleNavbar} />
        </span>

        <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="" 
                smooth={true} 
                duration={800} 
                offset={-70}
                id="home-button"
                onClick={() => { scroll.scrollToTop(); toggleNavbar(); }}
              >
                <div className="help">Home</div>
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
                <div className="help">About</div>
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
                <div className="help">Projects</div>
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
                <div className="help">Experience</div>
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
                <div className="help">Contact</div>
                <Contacts style={iconStyle} />
              </Link>
            </li>
            <li className="resume-link-li">
              <a href="" className="nav-resume-link">
                <div>Resume</div> <AccountCircleIcon style={iconStyle} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
