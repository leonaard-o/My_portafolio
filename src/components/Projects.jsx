import { useState } from "react";
import ProjectCard from "./ProjectCard";

import rentalcars from "../assets/rentalcars.png";
import Xtweeter from "../assets/Xtweeter.png";
import peliflexxx from "../assets/peliflex.png";
import metaverse from "../assets/metaverse.png";
import useStore from "../useStore/useStore"; // Asegúrate de que la ruta sea la correcta

const Projects = () => {
  const { language } = useStore();
  const [activeProject, setActiveProject] = useState(null);

  // Cada objeto incluye textos en inglés y en español
  const projects = [
    {
      id: 1,
      key: 1,
      title: "X: Social Media Platform",
      title_es: "X: Plataforma de Redes Sociales",
      image: Xtweeter,
      description: (
        <>
          A fully-featured social media platform inspired by X (formerly Twitter), built with Next.js and Tailwind CSS.
          The dynamic interface leverages TypeScript and Zustand to deliver a modern, responsive user experience.
          Key features include:
          - Secure payment processing via Stripe.
          - Efficient media uploads powered by Uploadcare.
          - Scalable data management using Prisma and Neon DB.
          - Robust authentication through NextAuth.
          <br /><br />
          This project highlights my ability to seamlessly integrate cutting-edge technologies into a polished and interactive digital experience.
        </>
      ),
      description_es: (
        <>
          Una plataforma de redes sociales completa inspirada en X (anteriormente Twitter), construida con Next.js y Tailwind CSS.
          La interfaz dinámica utiliza TypeScript y Zustand para ofrecer una experiencia moderna y responsiva.
          Entre sus características destacan:
          - Procesamiento seguro de pagos a través de Stripe.
          - Cargas de medios eficientes con Uploadcare.
          - Gestión escalable de datos usando Prisma y Neon DB.
          - Autenticación robusta mediante NextAuth.
          <br /><br />
          Este proyecto resalta mi capacidad para integrar tecnologías de vanguardia en una experiencia digital pulida e interactiva.
        </>
      ),
      techStack: [
        "https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/a57a4dc79978ad9e141972054ce9f71e/nextjs3.webp",
        "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
        "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
        "https://media.licdn.com/dms/image/v2/D4E0BAQGvrlykNx9Xaw/company-logo_200_200/company-logo_200_200/0/1684762073756/neondatabase_logo?e=2147483647&v=beta&t=pjpaL_-tBQPhI4Jr9cNceBx7tV8drTsa5yG30NZfVm4",
        "https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=3840&q=90&fm=webp",
        "https://miro.medium.com/v2/resize:fit:866/0*VRlI0n8V_zvnoKpB.jpg",
        "https://camo.githubusercontent.com/243909f00e726430f4d7e31c0f5e5c87e3abde526714482c806445852907d319/68747470733a2f2f6e6578742d617574682e6a732e6f72672f696d672f6c6f676f2f6c6f676f2d736d2e706e67",
      ],
      github: "https://github.com/leonaard-o/SocialX-tweeter-",
      live: 'https://social-x-tweeter.vercel.app/',
    },
    {
      id: 2,
      key: 2,
      title: "Rental Vehicles: Vehicle Rental Platform",
      title_es: "Vehículos de Alquiler: Plataforma de Alquiler de Vehículos",
      image: rentalcars,
      description:
        "A full-featured vehicle rental platform built with Next.js and TypeScript, delivering a seamless experience for browsing, booking, and managing rentals. Robust authentication is provided by Clerk, while state management is efficiently handled with Zustand. The user interface comes to life with smooth animations powered by Framer Motion and modern components from Shadcn UI, and scalable data storage is achieved with Neon DB. This project exemplifies modern web development practices by integrating cutting-edge technologies for an intuitive and reliable rental service.",
      description_es:
        "Una plataforma de alquiler de vehículos completa construida con Next.js y TypeScript, que ofrece una experiencia fluida para explorar, reservar y gestionar alquileres. La autenticación robusta es proporcionada por Clerk, mientras que el manejo del estado se realiza eficientemente con Zustand. La interfaz de usuario se anima con transiciones suaves gracias a Framer Motion y componentes modernos de Shadcn UI, y el almacenamiento de datos escalable se logra con Neon DB. Este proyecto ejemplifica las prácticas modernas de desarrollo web al integrar tecnologías de vanguardia para un servicio de alquiler intuitivo y confiable.",
      techStack: [
        "https://www.digitality.es/img-articulos/ampliadas/que-es-nextjs-y-para-que-sirve-1-1697560678.jpg",
        "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
        "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
        "https://media.licdn.com/dms/image/v2/D4E0BAQGvrlykNx9Xaw/company-logo_200_200/company-logo_200_200/0/1684762073756/neondatabase_logo?e=2147483647&v=beta&t=pjpaL_-tBQPhI4Jr9cNceBx7tV8drTsa5yG30NZfVm4",
        "https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=3840&q=90&fm=webp",
        "https://miro.medium.com/v2/resize:fit:866/0*VRlI0n8V_zvnoKpB.jpg",
        "https://media.licdn.com/dms/image/v2/D5612AQHJKVf2i9XXzw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697159715452?e=2147483647&v=beta&t=tUo-unXI10uaTYlxsE9Vhyo61FHww88zvRvz-hKCb_g",
      ],
      github: "https://github.com/leonaard-o/vehiculos_rent",
      live: 'https://vehiculos-rent-dkqx.vercel.app/',
    },
    {
      id: 3,
      key: 3,
      title: "Peliflex: A Netflix-Inspired",
      title_es: "Peliflex: Inspirado en Netflix",
      image: peliflexxx,
      description:
        "A comprehensive Netflix clone built with Next.js and TypeScript that offers a sleek and immersive streaming experience. The modern UI leverages Shadcn UI components. State management is efficiently handled with Zustand, while scalable data storage is achieved through Neon DB. Robust user authentication is implemented using NextAuth, ensuring secure access and personalized experiences. This project highlights the integration of advanced web technologies to deliver a dynamic, media-focused platform.",
      description_es:
        "Un clon completo de Netflix construido con Next.js y TypeScript que ofrece una experiencia de streaming elegante e inmersiva. La interfaz moderna utiliza componentes de Shadcn UI. El manejo del estado se realiza eficientemente con Zustand, mientras que el almacenamiento escalable de datos se logra a través de Neon DB. La autenticación robusta se implementa usando NextAuth, garantizando un acceso seguro y experiencias personalizadas. Este proyecto destaca la integración de tecnologías web avanzadas para ofrecer una plataforma dinámica centrada en los medios.",
      techStack: [
        "https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/a57a4dc79978ad9e141972054ce9f71e/nextjs3.webp",
        "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
        "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
        "https://media.licdn.com/dms/image/v2/D4E0BAQGvrlykNx9Xaw/company-logo_200_200/company-logo_200_200/0/1684762073756/neondatabase_logo?e=2147483647&v=beta&t=pjpaL_-tBQPhI4Jr9cNceBx7tV8drTsa5yG30NZfVm4",
        "https://miro.medium.com/v2/resize:fit:866/0*VRlI0n8V_zvnoKpB.jpg",
        "https://camo.githubusercontent.com/243909f00e726430f4d7e31c0f5e5c87e3abde526714482c806445852907d319/68747470733a2f2f6e6578742d617574682e6a732e6f72672f696d672f6c6f676f2f6c6f676f2d736d2e706e67",
      ],
      github: "https://github.com/leonaard-o/peliflex_Next.js_neon",
    },
    {
      id: 4,
      key: 4,
      title: "Metaverse: A Pure HTML5 & CSS Experiment",
      title_es: "Metaverse: Un Experimento Puro de HTML5 y CSS",
      image: metaverse,
      description:
        "A hands-on project where I explored the full potential of HTML5 and pure CSS to create engaging, responsive web experiences. This project served as a playground for testing advanced layouts, animations, and transitions without relying on external frameworks. It showcases my foundational skills in crafting interactive user interfaces with core web technologies.",
      description_es:
        "Un proyecto práctico donde exploré el potencial completo de HTML5 y CSS puro para crear experiencias web atractivas y responsivas. Este proyecto sirvió como un laboratorio para probar diseños avanzados, animaciones y transiciones sin depender de frameworks externos. Demuestra mis habilidades fundamentales para crear interfaces interactivas utilizando tecnologías web básicas.",
      techStack: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      ],
      github: "",
    },
  ];

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const styles =
    window.innerWidth < 798
      ? {
          cardContainer: {
            display: "block",
            width: "100%",
            height: "auto",
            zIndex: "1",
          },
        }
      : {
          cardContainer: {
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "auto",
            zIndex: "1",
          },
        };

  return (
    <div className="project-wrapper" id="projects">
      <div className="project-header">
        <h1 className="project-header__title">
          {language === "en" ? "Recent Projects" : "Proyectos Recientes"}
        </h1>
      </div>

      <div className="project-cards" style={styles.cardContainer}>
        {projects.map((project) => {
          // Creamos un objeto "projectTranslated" con los textos en función del idioma
          const projectTranslated = {
            ...project,
            title: language === "en" ? project.title : project.title_es,
            description: language === "en" ? project.description : project.description_es,
          };

          return (
            <div key={project.key}>
              <ProjectCard
                index={project.id}
                project={projectTranslated}
                isActive={activeProject === project.id}
                toggleProject={toggleProject}
              />
            </div>
          );
        })}
      </div>
        {/* <button onClick={toggleLanguage}>
            {language === "en" ? "Switch to Spanish" : "Switch to English"}
          </button>  */}
    </div>
  );
};

export default Projects;
