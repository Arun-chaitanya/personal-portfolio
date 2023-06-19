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
  docker,
  fancraze,
  zestmoney,
  trinkerr,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Content Creator",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "ZestMoney",
    icon: zestmoney,
    iconBg: "#FFFFFF",
    date: "March 2020 - May 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile/Web Developer",
    company_name: "Trinkerr",
    icon: trinkerr,
    iconBg: "#383E56",
    date: "May 2021 - April 2022",
    points: [
      "Built whole mobile application from scratch and launched which helped the company to get a great deal in series A funding and reach 500K+ downloads in just 2 weeks.",
      "Solely developed whole Watchlist module with CRUD functionality of the trading app implemented with Web Sockets for real-time price data of assets.",
      "Lead the Pod team of 5 junior developers and 3 Interns by creating the project roadmap for them, giving frequent feedbacks and reviewing the code."
    ],
  },
  {
    title: "Senior Front-End Engineer",
    company_name: "FanCraze",
    icon: fancraze,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Developed internal design system consisting of highly reusable UI components with high visual consistency across Web and mobile platforms.",
      "Built an easy-to-manage content management tool for the marketing team to maintain the website’s homepage with JSON objects.",
      "Migrated the codebase from Angular5 to ReactJS with full redesigns of the existing website to improve navigation, enhance visuals and boost performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Impressed by the seamless execution of intricate animations, showcasing exceptional frontend development skills.",
    name: "Gautam Paul",
    designation: "Engineering Head",
    company: "ZestMoney",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Exceptional work on developing our website and mobile app MVP, delivering robust and reliable code from start to finish.",
    name: "Manvendra Singh",
    designation: "CEO",
    company: "Trinkerr",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Hats off to this dev! His frontend skills are off the charts! He crafted my website with an insanely strong architecture.",
    name: "Anshum Bhambri",
    designation: "Co-Founder",
    company: "FanCraze",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
