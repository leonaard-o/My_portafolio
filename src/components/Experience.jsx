import  { useEffect } from 'react';

import "../styles/Experience.css";
import PropTypes from "prop-types";

export default function Experience() {
  useEffect(() => {
    const exp = document.querySelector("#experience");
    if (exp) {
      let jobTitles = exp.querySelectorAll(".job-title");
      exp.addEventListener("mouseover", () => {
        jobTitles.forEach((jobTitle) => {
          jobTitle.style.color = "wheat";
        }
      )});
      exp.addEventListener("mouseout", () => {
        jobTitles.forEach((jobTitle) => {
          jobTitle.style.color = "white";
        }
      )});
    }
  });

  return (
    <div className="exp" id="experience">
      <div className="exp-title">Experience</div>
      <ul className="exp-timeline">
        <li className="exp-timeline-event">
          <label className="exp-timeline-event-icon"></label>
          <div className="exp-timeline-event-copy">
            <p className="exp-timeline-event-thumbnail">May 2024 - Present</p>
            <h3 className="job-title">Lorem ipsum</h3>
            <h4>
            Lorem ipsum, Kochi, Kerala 
              <div className="xtra">
                (Remote)
              </div>
            </h4>
            <div>
              <strong>Smart Contracts: Internet Computer</strong><br/>
              <ul>
                <li>Developed 100% on-chain decentralized applications on the Internet Computer blockchain using Motoko and React.</li>
                <li>Designed scalable smart contracts and integrated them with Internet Identity, an on-chain authenticaiton service.</li>
                <li>Implemented the front-ends using React.</li>
              </ul>
            </div>
            <div>
              <strong>Smart Contracts: Solana</strong><br/>
              <ul>
                <li>Collaborated with team members to develop an application on the Solana blockchain.</li>
                <li>Used the Rust programming language along with the Anchor framework for the backend development.</li>
                <li>Wrote programs in TypeScript for testing Solana programs.</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>  
    </div>
  );
}

Experience.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
};
