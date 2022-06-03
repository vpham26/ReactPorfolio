import notetaker from "./assets/images/notetaker.png"
import pwa from "./assets/images/pwa.png"
import shasha from "./assets/images/shasha.PNG"
import cuisine from "./assets/images/cuisine.png"
import techblog from "./assets/images/techblog.PNG"
import weatherapi from "./assets/images/weatherapi.png"
import plume from "./assets/images/plume.PNG"
import mernBook from "./assets/images/mernBook.PNG"


const logotext = "KP";
const meta = {
    title: "Kevin Pham",
    description: "I’m Kevin _ Full stack developer, currently seeking job",
};

const introdata = {
    title: "Hi, I’m Kevin",
    animated: {
        first: "I started recently",
        second: "I learned new technologies",
        third: "I used them to create",
    },
    description: "",
    your_img_url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const dataabout = {
    title: "Recently came into the Matrix",
    aboutme: "Learned many new { skills } to fight against the machines.",
};

const worktimeline = [{
    jobtitle: "Lotus Acpuncture, Office Manager",
    where: "Orlando, Florida, United States",
    date: "2012-2016",
},
{
    jobtitle: "Chung Dahm Academy, English Teacher",
    where: "Yuseung-Gu, Daejeon, South Korea",
    date: "2017-2020",
},
{
    jobtitle: "GPCCert, Information Specialist",
    where: "Winter Park, Florida, United States",
    date: "2021-Present",
},
];

const skills = [{
        name: "JavaScript",
        value: 85,
    },
    {
        name: "Express/NodeJS",
        value: 80,
    },
    {
        name: "ReactJS",
        value: 85,
    },
    {
        name: "MongoDB/NoSQL/MySQL",
        value: 75,
    },
    {
        name: "Bootstrap/Bulma/Tailwind",
        value: 70,
    },
    {
        name: "HTML/CSS",
        value: 80,
    },
    {
        name: "GitBash",
        value: 75,
    },
    {
        name: "GitHub",
        value: 85,
    },
];

const services = [{
        title: "Front End Development",
        description: "HTML, CSS, SaSS, Style Libraries: BootStrap, Bulma, etc.",
    },
    {
        title: "Back End Development",
        description: "JavaScript, MongoDB, GraphQL, Apollo-Server, Express",
    },
    {
        title: "Full Stack Development",
        description: "Build functional website",
    },
];

const dataportfolio = [
    {
        img: plume,
        heading: "Plume - Pharmaceutical CBD ECommerce",
        desctiption: "Find the right store to purchase CBD oils and related items SPA Ecommerce website done with JavaScript, MongoDB, Express, Bcrypt, ApolloServer, GraphQL, Css, SaSS and HTML",
        link1: "https://github.com/vpham26/Plume_App",
        link2: "https://github.com/vpham26/Plume_App/tree/main/client",
        link3: "https://github.com/vpham26/Plume_App/tree/main/server"
    },
    {
        img: cuisine,
        heading: "Cross Country Cuisine",
        desctiption: "Find great restaurants all across the county with this interactive restaurant search engine done with JavaScript, Bulma, CSS and HTML",
        link1: "https://github.com/vpham26/CrossCountryCusine",
        link2: "https://github.com/vpham26/CrossCountryCusine/blob/main/README.md",
        link3: "https://github.com/vpham26/CrossCountryCusine/tree/main/assets"
    },
    {
        img: notetaker,
        heading: "ExpressJS Note Taker",
        desctiption: "A portal write down note built using JavaScript, NodeJs, HTML, CSS, and Express.",
        link1: "https://express-js-notetaker42.herokuapp.com/",
        link2: "https://github.com/vpham26/Express.JS.NoteTAKER/blob/main/README.md",
        link3: "https://github.com/"
    },
    {
        img: weatherapi,
        heading: "Server Side Weather API",
        desctiption: "A portal write down note built using JavaScript, HTML, CSS, and Weather API.",
        link1: "https://vpham26.github.io/ServersideAPIsWeatherDB/",
        link2: "https://github.com/vpham26/ServersideAPIsWeatherDB/blob/main/README.md",
        link3: "https://github.com/vpham26/ServersideAPIsWeatherDB"
    },
    {
        img: mernBook,
        heading: "MERN - Book Search Engine",
        desctiption: "Find the right book to read, a book search engine that come with a description website done with JavaScript, , CSS and HTML",
        link1: "https://github.com/vpham26/MERN-BookSearchEngine",
        link2: "https://github.com/vpham26/MERN-BookSearchEngine#readme",
        link3: "https://github.com/vpham26/MERN-BookSearchEngine/tree/main/client"
    },
    {
        img: techblog,
        heading: "",
        desctiption: "A Tech Blog built using JavaScript, NodeJs, HTML, CSS, and Express, JawsDB.",
        link1: "https://mvc-tech-blog21.herokuapp.com/",
        link2: "https://github.com/vpham26/MVC-TechBlog/blob/main/README.md",
        link3: "https://github.com/vpham26/MVC-TechBlog"
    },
    {
        img: pwa,
        heading: "Budget Tracker",
        desctiption: "A PWA that keeps track of your spending can be use offline built with JavaScript, Express, Moment, NodeJs and MongoDB.",
        link1: "https://pwa-bt.herokuapp.com/",
        link2: "https://github.com/vpham26/PWA-BudgetTracker/blob/main/README.md",
        link3: "https://github.com/vpham26/PWA-BudgetTracker/tree/main/public"
    },
    {
        img: shasha,
        heading: "Self-Help Chat-Bot",
        desctiption: "A mental-help app built with NodeJS, MySQL, JavaScript, Express, Sequelize, Node-NLP, and Handlebars.",
        link1: "https://shielded-bayou-08776.herokuapp.com/",
        link2: "https://github.com/vpham26/shasha-1/tree/main/public",
        link3: "https://github.com/vpham26/shasha-1"
    },
];

const contactConfig = {
    YOUR_EMAIL: "vulong.pham26@gmail.com",
    YOUR_FONE: "(321)948-5737",
    head: "Need Collaborator? Junior Web Developer? ",
    description: "Drop a message.",
    YOUR_SERVICE_ID: "service_ocsp1mw",
    YOUR_TEMPLATE_ID: "template_rqbf12s",
    YOUR_USER_ID: "VszU8Y7l1n73rXPPM",
};

const socialprofils = {
    github: "https://github.com/vpham26",
    // facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com/in/vulong-pham-a86305127/",
    // twitter: "https://twitter.com/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};

