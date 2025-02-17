import {
  flutter,
  dart,
  postman,
  android,
  vsCode,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  ordhekdeen,
  zayanse,
  github,
  Upwork,
  Fletofix,
  AL,
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

export const services = [
  { title: "Flutter", icon: flutter },
  { title: "React", icon: reactjs },
  { title: "Dart", icon: dart },
  { title: "JavaScript", icon: javascript },
];

export const technologies = [
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },
  { name: "VS Code", icon: vsCode },
  { name: "Android", icon: android },
  { name: "Postman", icon: postman },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
  { name: "GitHub", icon: github },
];

export const experiences = [
  {
    title: "Flutter Developer Intern",
    company_name: "Fletofix.ltd",
    icon: Fletofix,
    iconBg: "#161329",
    date: "December 2023 -  March 2024",
    points: [
      "During my internship at Fletofix.com, I had the incredible opportunity to work as a Flutter Developer, where I was able to gain hands-on experience in constructing and optimizing mobile applications. This role allowed me to enhance my technical skills and apply my knowledge in a real-world setting",
    ],
  },
  {
    title: "Flutter Developer ",
    company_name: "Appartisans Lab",
    icon: AL,
    iconBg: "#161329",
    date: "january 2025 - Present ",
    points: [
      "As a Flutter Cross-Platform Developer at Appartisans Lab, I was responsible for designing, developing, and maintaining mobile applications for both iOS and Android platforms. This role challenged me to create seamless, performant apps and provided me with the opportunity to further hone my expertise in cross-platform development",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Upwork",
    icon: Upwork,
    iconBg: "#161329",
    date: "July 2024 - Present ",
    points: [
      "Hello! I'm a dedicated and skilled Flutter Developer with a passion for creating high-quality, cross-platform mobile applications. While I am new to Upwork, I bring 1+ years of experience in mobile app development, specializing in designing and optimizing user-friendly applications for both Android and iOS platforms",
    ],
  },
];

export const projects = [
  {
    name: "ordhek deen",
    description:
      "Ordhek Deen is a user-friendly mobile application designed to facilitate matchmaking within the Muslim community by offering personalized profiles and compatibility features. Developed using Flutter, the app ensures seamless functionality and an engaging user experience on Android platforms",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Dart", color: "green-text-gradient" },
      { name: "Getx", color: "pink-text-gradient" },
      { name: "Rest API", color: "yellow-text-gradient" },
    ],
    image: ordhekdeen,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Zayans",
    description:
      "Zayans is a feature-rich e-commerce application that provides users with a seamless shopping experience through an intuitive interface and secure payment options. Developed with a focus on performance, the app efficiently connects consumers to a diverse range of products on Android platforms",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Dart", color: "green-text-gradient" },
      { name: "Getx", color: "pink-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "API ", color: "yellow-text-gradient" },
    ],
    image: zayanse,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
];
