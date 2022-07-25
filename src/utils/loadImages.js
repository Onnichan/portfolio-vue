import IconBootstrap from "../assets/icons/IconBootstrap.svg";
import IconCss3 from "../assets/icons/IconCss3.svg";
import IconGit from "../assets/icons/IconGit.svg";
import IconGithub from "../assets/icons/IconGithub.svg";
import IconHtml5 from "../assets/icons/IconHtml5.svg";
import IconJs from "../assets/icons/IconJs.svg";
import IconNodejs from "../assets/icons/IconNodejs.svg";
import IconPhp from "../assets/icons/IconPhp.svg";
import IconReactjs from "../assets/icons/IconReactjs.svg";
import IconSass from "../assets/icons/IconSass.svg";
import IconVuejs from "../assets/icons/IconVuejs.svg";
import IconMysql from "../assets/icons/IconMysql.svg";
import IconMongo from "../assets/icons/IconMongo.svg";
import IconExpress from "../assets/icons/IconExpressjs.svg";
import IconVscode from "../assets/icons/IconVscode.svg";
import Iconlinkedin from "../assets/icons/IconLinkedin.svg";
import IconSequelize from "../assets/icons/IconSequelize.svg";

import youtube from "../assets/images/sections/projects/cloneyoutube.png";
import fractals from "../assets/images/sections/projects/fractals.png";
import giphy from "../assets/images/sections/projects/gifexpert.png";
import pokeapi from "../assets/images/sections/projects/pokeapi.png";
import portfolio from "../assets/images/sections/projects/portfolio.png";

console.log(IconBootstrap);

export function loadImages(filter) {
  const images = {
    frontend: [
      {
        name: "html5",
        value: IconHtml5,
      },
      {
        name: "css3",
        value: IconCss3,
      },
      {
        name: "javascript",
        value: IconJs,
      },
      {
        name: "bootstrap",
        value: IconBootstrap,
      },
      {
        name: "react",
        value: IconReactjs,
      },
      {
        name: "sass",
        value: IconSass,
      },
      {
        name: "vue",
        value: IconVuejs,
      },
    ],
    backend: [
      {
        name: "php",
        value: IconPhp,
      },
      {
        name: "nodejs",
        value: IconNodejs,
      },
      {
        name: "expressjs",
        value: IconExpress,
      },
      {
        name: "mysql",
        value: IconMysql,
      },
      {
        name: "sequelize",
        value: IconSequelize,
      },
    ],
    tools: [
      {
        name: "git",
        value: IconGit,
      },
      {
        name: "github",
        value: IconGithub,
      },
      {
        name: "vscode",
        value: IconVscode,
      },
    ],
    socials: [
      {
        name: "linkedin",
        value: Iconlinkedin,
      },
      {
        name: "github",
        value: IconGithub,
      },
    ],
  };

  return images[filter];
}

export function loadProjects() {
  const projects = [
    {
      name: "Clone Youtube",
      url: youtube,
      github: "https://github.com/DanielDesign/clone-youtube-design",
      web: "https://danieldesign.github.io/clone-youtube-design/",
    },
    {
      name: "Fractals app",
      url: fractals,
      github: "https://github.com/Onnichan/fractals-js",
      web: "https://onnichan.github.io/fractals-js/",
    },
    {
      name: "Giphy app",
      url: giphy,
      github: "https://github.com/Onnichan/pokeapi-react",
      web: "https://onnichan.github.io/react-giftApi/",
    },
    {
      name: "Pokeapi app",
      url: pokeapi,
      github: "https://github.com/Onnichan/pokeapi-react",
      web: "https://onnichan.github.io/pokeapi-react/",
    },
    {
      name: "Portfolio",
      url: portfolio,
      github: "https://github.com/Onnichan/portfolio-vue",
      web: "https://onnichan.github.io/portfolio-vue/",
    },
  ];

  return projects;
}

export function socialIcons() {
  const icons = [
    {
      name: "linkedin",
      value: Iconlinkedin,
      url: "https://www.linkedin.com/in/walter-daniel-huaynapata-aguilar-391041197/",
    },
    {
      name: "github",
      value: IconGithub,
      url: "https://github.com/Onnichan",
    },
  ];

  return icons;
}