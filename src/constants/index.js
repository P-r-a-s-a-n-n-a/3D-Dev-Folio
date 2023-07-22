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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Embedded Systems Intern",
    company_name: "Emertxe Information Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2021 - Jan 2022",
    points: [
      "Simulating the microwave oven using PICSimlab and MPLAB software.",
      "Setting the cooking time and power level using the keypad. Display selected settings on the LCD display.",
      "Simulate heating process based on input parameters and updating display to show remaining time. Trigger alarm when cooking time elapses.",
      "Ensure accuracy and reliability of simulation results through thorough testing.",
    ],
  },
  {
    title: "Junior Software Developer and Community Leader",
    company_name: "Spacescan",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Feb 2023",
    points: [
      "I honed my programming skills in JavaScript, ReactJS, NextJS, and API dB management.",
      "I have hands-on experience working with Object Oriented JavaScript (OOJS), JavaScript libraries, and ReactJS, NextJS, enabling me to build complex and interactive web applications.",
      "As a Community Leader, I have been responsible for creating content and search engine optimization(SEO) of website, overseeing the development of the company’s online community.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Embedded IoT Trainee",
    company_name: "Tessolve",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Designed hardware kit for prenatal care. Integrated sensors, to collect vital signs data including heart rate,body temperature, fetal movements and kickcounts.",
      "Implemented a secure data transmission to transmit the collected health data from sensors to a cloud server for storage and analysis.",
      "Developed a user-friendly mobile interface using Blynk IoT for pregnant women to view their health data, receive personalized insights,and track their progress throughout the pregnancy.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Bharat Intern",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jun 2023",
    points: [
      "Demonstrated Long Short-Term Memory (LSTM) neural networks to predict stock prices. The data is loaded from a CSV file, preprocessed, split into training and testing sets, and an LSTM model is created using theTensorFlow library.",
      "Predicted the survival outcome of passengers aboard the Titanic using machine learning techniques.Model selection is made using a Decision Tree classifier and Random Forest and XGBoost algorithms.",
      "Implemented of a neural network-based system for recognizing handwritten digits. It is trained on the MNIST dataset and evaluated on a test dataset.",
    ],
  },
];

const inspirations = [
  {
    inspiration:
      "Turning Entreprenurs into Authority. You're not what you are, you're what you going to become. Believe your ideas.",
    name: "Kennet Alphy",
    designation: "Founder",
    company: "Brandocx",
    image: "https://media.licdn.com/dms/image/D5603AQEooiPN9x9n0g/profile-displayphoto-shrink_800_800/0/1683457330708?e=2147483647&v=beta&t=3QJ7ovrDz09pGFNbierVbFsMMPM1rLXu0iu6RqPxB1M",
  },
  {
    inspiration:
      "Content Creator turned Entreprenur. If you’re succeeding at a job you hate, imagine how good you would be at a job you loved.",
    name: "Rahul M",
    designation: "CEO",
    company: "My English Friend",
    image: "https://media.licdn.com/dms/image/D5603AQENxRxiBbwPWQ/profile-displayphoto-shrink_400_400/0/1686658473434?e=1694044800&v=beta&t=JtxtTWIQpjpGV9Hzcu9DDFja1alx987p0J--oJwwSq8",
  },
  {
    inspiration:
      "Build Websites Designed for sales, completed more than 480 projects and have clients from over 41+ countries.",
    name: "Aditya",
    designation: "Website Designer",
    company: "Freelancer",
    image: "https://framerusercontent.com/images/kCzKSJrXQLLbzjawclzKyR70v4.jpg?scale-down-to=1024",
  },
];

const projects = [
  {
    name: "Real time Covid-19 Website",
    description:
    "Builted a web-based platform that allows users to see the Covid-19 stats including statistics like death,cases,recovered. Fetch API can be employed to retrieve data from the API endpoints. Used jQuery, Chart.js for data manipulation and visualization provides accurate and up-to-date information.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/P-r-a-s-a-n-n-a/COVID-19_TRACKER_HTML_CSS_JAVASCRIPT",
  },
  {
    name: "Web Phishing Detection",
    description:
    "A demo website was developed using python & flask, integrating a machine learning predictive model to detect given site whether phishing or not. It was deployed as a real-time web application, with an API endpoint created for making predictions through the IBM Watson Cloud platform.The predictive model achieved an impressive accuracy of 96.77%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ibm cloud",
        color: "green-text-gradient",
      },
      {
        name: "data science",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/P-r-a-s-a-n-n-a/IBM-Project-42431-1660662531",
  },
  {
    name: "Web3 Discord Chat Decentralized App",
    description:
    "Building a Web 3.0 app with NextJS for server side rendering and styling app using Modular CSS. Setup and run a decentralized database node with gun.js and adding Web 3.0 using MetaMask for user authentication. Storing the tweets and users data in Sanity.io, deploy and host the app on Vercel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "gun.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/P-r-a-s-a-n-n-a/discord-web3",
  },
];

export { services, technologies, experiences, inspirations, projects };
