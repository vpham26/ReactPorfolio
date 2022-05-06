import notetaker from "./assets/images/notetaker.png"
import pwa from "./assets/images/pwa.png"
import shasha from "./assets/images/shasha.PNG"
import cuisine from "./assets/images/cuisine.png"


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
    jobtitle: "Badminton Amateur Athlete / Coach",
    where: "Orlando, FL, USA",
    date: "2012-Present",
},
{
    jobtitle: "English Second Language Teacher",
    where: "Yuseung-Gu, Daejeon, South Korea",
    date: "2017-2020",
},
    {
        jobtitle: "Home Remodeling",
        where: "Philadelphia, PA, USA",
        date: "2020-2021",
    },
];

const skills = [{
        name: "Javascript",
        value: 85,
    },
    {
        name: "NodeJs",
        value: 80,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "MongoDB & MySql",
        value: 75,
    },
    {
        name: "Bootstrap",
        value: 70,
    },
    {
        name: "HTML",
        value: 80,
    },
    {
        name: "CSS",
        value: 75,
    },
    {
        name: "GitHub",
        value: 75,
    },
];

const services = [{
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
];

const dataportfolio = [
    {
        img: cuisine,
        heading: "Cross Country Cuisine",
        desctiption: "Find great restaurants all across the county with this interactive restaurant search engine done with JavaScript, Bulma, CSS and HTML",
        link1: "https://dai2119555.github.io/CrossCountryCusine/",
        link2: "https://github.com/dai2119555/CrossCountryCusine/blob/main/README.md",
        link3: "https://github.com/dai2119555/CrossCountryCusine/tree/main/assets"
    },
    {
        img: notetaker,
        heading: "Student Task Submission Portal",
        desctiption: "A portal write down note built using JavaScript, NodeJs, HTML, CSS, and Express.",
        link1: "https://express-js-notetaker42.herokuapp.com/",
        link2: "https://github.com/vpham26/Express.JS.NoteTAKER/blob/main/README.md",
        link3: "https://github.com/Taufiq4045/student-task-server.git"
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
        link2: "https://github.com/Johnnyboy7781/shasha/blob/main/README.md",
        link3: "https://github.com/Johnnyboy7781/shasha"
    },
];

const contactConfig = {
    YOUR_EMAIL: "vulong.pham26@gmail.com",
    YOUR_FONE: "(321)948-5737",
    head: "Need Collaborator? Junior Developer? ",
    description: "Drop a message.",
    YOUR_SERVICE_ID: "service_ocsp1mw",
    YOUR_TEMPLATE_ID: "ttemplate_rqbf12s",
    YOUR_USER_ID: "user_VszU8Y7l1n73rXPPM",
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

