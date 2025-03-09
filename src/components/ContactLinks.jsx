

import { Tooltip } from "@nextui-org/tooltip";
// import dpIcon from '../assets/dp_icon.jpg';

export default function ContactLinks() {
  return window.innerWidth >= 798 && (
    <div className='link-container'>
      <div className="mylinks">
        <div className="icon linkedin-icon">
          <Tooltip content="LinkedIn" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="https://www.linkedin.com/in/leo-ar%C3%A9valo-0b4822199/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
            </a>
          </Tooltip>
        </div>
        <div className="icon github-icon">
          <Tooltip content="Github" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="https://github.com/leonaard-o" >
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github" />
            </a>
          </Tooltip>
        </div>
        <div className="icon leetcode-icon">
          <Tooltip content="Whatsapp" placement="bottom" color="success" style={{color: 'white'}}>
          <a href="https://wa.me/573142197803?text=Hola%20👋%20Quiero%20contactarte%20por%20tu%20portafolio.">
              <img src="https://images.dwncdn.net/images/t_app-icon-l/p/fc5dcf8c-49a8-4170-8f81-0946216205fc/2981464528/2150_4-77521533-imgingest-4102996789490452134.png" alt="leetcode" />
            </a>
          </Tooltip>
         </div>
        {/* <div className="icon myicon">
          <Tooltip content="Resume" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="">
              <img src={dpIcon} alt="DP" />
            </a>
          </Tooltip>
        </div> */}
      </div>  
    </div>
  );
}