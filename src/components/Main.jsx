import { useEffect, useRef } from 'react';

import "../styles/Main.css";

import dp from "../assets/main.png";

const Main = () => {
  const imgRef = useRef(null);

  const adjustOpacity = () => {
    if (imgRef.current) {
      const distanceFromTop = window.scrollY;
      const startDistance = window.innerWidth < 798 ? 240 : 350;
      const maxDistance = 500;
      
      if (distanceFromTop > startDistance) {
        const adjustedDistance = distanceFromTop - startDistance;
        const opacity = Math.max(0, Math.min(1, 1 - adjustedDistance / (maxDistance - startDistance)));
        imgRef.current.style.opacity = opacity;
        
        if (opacity == 0) imgRef.current.style.zIndex = '-1';
        else imgRef.current.style.display = '2';
      } else {
        imgRef.current.style.opacity = 1;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", adjustOpacity);
    return () => window.removeEventListener("scroll", adjustOpacity);
  }, []);

  return (
    <div className="main" id="home">
      <div className="bg"></div>
      <div className="content first quarter">
        <div className="name-container">
          <div className="name-intro imgDiv">
            <img src={dp} alt="dp" className="main-img" ref={imgRef} />
          </div>
          <h1 className="name marquee">
            <span className="m1">FULL-STACK DEVELOPER </span>
          
            <span className="m2">FULL-STACK DEVELOPER </span>
          </h1>
        </div>
      </div>
    </div>
  )
};

export default Main;
