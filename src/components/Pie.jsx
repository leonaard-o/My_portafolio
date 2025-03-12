import PropTypes from "prop-types";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

export default function Pie({ setInfo }) {
  const data = [
    {
      id: 0,
      value: 33,
      name: "Software",
      skills: [
        {
          name: "Python",
          logo: "https://i.pinimg.com/originals/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg",
        },

        {
          name: "React",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s",
        },
        {
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },

        {
          name: "TypeScript",
          logo: "https://cdn-icons-png.flaticon.com/256/919/919832.png",
        },
        {
          name: "Postman",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowDT91ghO_vuqqVDvHDhktDW6Gj3LN5sq6Q&s",
        },
        {
          name: "SQL",
          logo: "https://icons.veryicon.com/png/o/application/designer-icon/sql-5.png",
        },
        {
          name: "MongoDB",
          logo: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
        },
        {
          name: "MySQL",
          logo: "https://w7.pngwing.com/pngs/841/331/png-transparent-mysql-database-phpmyadmin-postgresql-innodb-mysql-orange-logo-area-thumbnail.png",
        },

        {
          name: "Laragon",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOFdvSMFGIcIlIhqKU2AYPv5m3WDP3gCvxw&s",
        },
        {
          name: "Tailwind",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
        },
        {
          name: "NestJS",
          logo: "https://i.namu.wiki/i/X7RPRZJiL_bDk-b5yfaeCqEaINp3iwm7ngVhzN9LDg4hNjz0Bs3QTo7pgbCfGW3xp_sQZxMGUfnxBAXGNFwGKw.svg",
        },
        {
          name: "NextJS",
          logo: "https://avatars.githubusercontent.com/u/126103961?s=200&v=4",
        },
      ],
    },
    {
      id: 1,
      value: 33,
      name: "AI",
      skills: [
        {
          name: "Machine Learning",
          logo: "https://cdn-icons-png.freepik.com/512/8365/8365406.png",
        },
        {
          name: "Data Visualization",
          logo: "https://static.vecteezy.com/system/resources/thumbnails/001/187/079/small/chart.png",
        },
        {
          name: "Deep Learning",
          logo: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png",
        },
        {
          name: "Algorithms",
          logo: "https://cdn-icons-png.flaticon.com/512/10061/10061724.png",
        },
        {
          name: "numpy",
          logo: "https://user-images.githubusercontent.com/50221806/86498208-af4bfe00-bd39-11ea-88fa-c747ae0ddd85.png",
        },
        {
          name: "pandas",
          logo: "https://pandas.pydata.org/static/img/favicon_white.ico",
        },
        {
          name: "matplotlib",
          logo: "https://pydata.org/wp-content/uploads/2016/07/matplotlib-logo-300.png",
        },
        {
          name: "seaborn",
          logo: "https://user-images.githubusercontent.com/315810/92159303-30d41100-edfb-11ea-8107-1c5352202571.png",
        },
        {
          name: "scikit-learn",
          logo: "https://avatars.githubusercontent.com/u/17349883?s=280&v=4",
        },
        {
          name: "Jupyter",
          logo: "https://raw.githubusercontent.com/jithurjacob/vscode-nbpreviewer/master/images/jupyter.png",
        },
      ],
    },
    {
      id: 2,
      value: 33,
      name: "DevOps",
      skills: [
        {
          name: "Linux",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png",
        },

        {
          name: "Docker",
          logo: "https://www.docker.com/app/uploads/2023/05/symbol_blue-docker-logo.png",
        },
        {
          name: "Git",
          logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        },
        {
          name: "VirtualBox",
          logo: "https://styles.redditmedia.com/t5_7sqfde/styles/communityIcon_ix7q9wstcxna1.png",
        },

        {
          name: "Ansible",
          logo: "https://docs.ansible.com/ansible/2.9/_static/images/logo_invert.png",
        },
      ],
    },
  ];

  return (
    <div className="pie-div">
      <PieChart
        colors={["wheat", "#ffccff", "#ccffff"]}
        series={[
          {
            data,
            paddingAngle: 5,
            innerRadius: 50,

            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
            arcLabel: (item) => `${item.name}`,
            highlightScope: {
              faded: "global",
              highlighted: "item",
            },
            faded: {
              innerRadius: 30,
              additionalRadius: -30,
              color: "grey",
            },
            highlighted: {
              innerRadius: 50,
              additionalRadius: 10,
            },
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "blue",
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
        tooltip={{ enabled: false }}
        height={330}
        onHighlightChange={(item) => {
          if (item) {
            setInfo(data[item.dataIndex].skills);
          }
        }}
      />
    </div>
  );
}
Pie.propTypes = {
  data: PropTypes.array,
  setInfo: PropTypes.func,
};
