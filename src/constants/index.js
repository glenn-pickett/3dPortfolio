import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  php,
  clock,
  threejs,
  salon,
  nucamp,
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
} from "../assets";

const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Works",
    title: "Work",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "PHP Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Front End Programmer Consultant",
    company_name: "Potawatomi Training (contracted through Robert Half International)",
    icon: javascript,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Collaborated with Instructional Systems Designers (ISDs) to create SCORM compliant lessons delivered through a Learning Management System (LMS).",
      "Collaborated effectively with managers, artists, animators, and sound engineers to develop web applications, ensuring that all elements were integrated seamlessly and met project requirements.",
      "Flexibly work in a fast-paced, dynamic environment,.where priorities and deadlines may change.",
      "Problem-solved both independently and as part of a team, leveraging my knowledge of JavaScript, Github, JSON, and CSS to identify and resolve technical issues quickly and efficiently.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Francisca Ordega Foundation",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2018 - 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "House Of Hoops. Inc.",
    icon: php,
    iconBg: "#383E56",
    date: "2008 - 2014",
    points: [
      "Developing and maintaining web applications using Javascript, jQuery, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Ensured responsive design and cross-browser compatibility.",
      "Contributed to code reviews for continuous improvement",
    ],
  },
];

const projects = [
  {
    name: "Next Clock App",
    description:
      "A simple clock application made with React, Next.js and React-VFX",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "react-vfx",
        color: "pink-text-gradient",
      },
    ],
    image: clock,
    source_code_link: "https://github.com/gdpickett/simple-clock",
    view_link: "https://simple-clock-beryl.vercel.app/"
  },
  {
    name: "Salon 2 Bomb",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: salon,
    source_code_link: "https://github.com/gdpickett/s2b",
    view_link: "https://www.salon2bomb.com"
  },
  {
    name: "Campsite Directory",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "AMAZON EC2",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: nucamp,
    view_link: "http://3.138.189.31/home"
  },
];

const sampleVideos = [
  {
    name: "Work Sample 1",
    url: video1,
  },
  {
    name: "Work Sample 2",
    url: video2,
  },
  {
    name: "Work Sample 3",
    url: video3,
  },
  {
    name: "Work Sample 4",
    url: video4,
  },
  {
    name: "Work Sample 5",
    url: video5,
  },
  {
    name: "Work Sample 6",
    url: video6,
  },
  {
    name: "Work Sample 7",
    url: video7,
  },
  {
    name: "Work Sample 8",
    url: video8,
  },
]

export { navLinks, services, technologies, experiences, projects, sampleVideos };