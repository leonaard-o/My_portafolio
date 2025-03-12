import "../styles/Contact.css";

import ContactForm from "./ContactForm";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactLinks from "./ContactLinks";
// import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStore from "../useStore/useStore";

const Contact = () => {
  const { language } = useStore();

  return (
    <div className="contact" id="contact">
      <ContactLinks />

      <div className="contact-container">
        <div className="contact-title">
          {language === "es" ? "Contacto" : "Contact"}
        </div>

        <div className="contact-row">
          <div className="contact-col-1"></div>
          <div className="contact-col-2"></div>
          <address className="contact-info">
            <div>
              <a href="https://www.linkedin.com/in/leo-ar%C3%A9valo-0b4822199/">
                <LinkedInIcon />
              </a>
            </div>
            <div>
              <a href="mailto:jordiplus110@gmail.com">
                <EmailIcon />
              </a>
            </div>
            <div>
              <a href="https://www.google.com/maps/place/Plaza+Alfonso+Lopez/@10.4677529,-73.2717477,14z/data=!4m15!1m8!3m7!1s0x8e8ab9b5d6cf71d7:0x84a43625b14c234a!2sValledupar,+Cesar!3b1!8m2!3d10.4742449!4d-73.2436335!16zL20vMDMxNWJx!3m5!1s0x8e8ab9b3ca245405:0x7792b2f1f2d255d7!8m2!3d10.4775918!4d-73.2445363!16s%2Fg%2F11bw51r_l3?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D">
                <LocationOnIcon />
              </a>
            </div>
            {window.innerWidth < 798 && (
              <>
                <div>
                  <a href="https://github.com/leonaard-o">
                    <GitHubIcon />
                  </a>
                </div>
                {/* <div>
                  <a href="https://leetcode.com/u/akshayrajan/" >
                    <CodeIcon />
                  </a>
                </div> */}
              </>
            )}
          </address>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
