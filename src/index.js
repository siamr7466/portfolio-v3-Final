import project1 from "../assets/project-1.png";
import spendifyImage from "../assets/Spendify_Logo.png";
import luminarImage from "../assets/luminar-weddings.jpg";
import vmsImage from "../assets/vms.svg";

/*--------------------------- Experiences ------------------------*/

export const EXPERIENCES = [
  {
    year: "2025 - 2026",
    role: "Foreign Communicator",
    company: "Softvence Agency",
    description: `Acted as the primary technical liaison for international clients, translating complex business requirements into actionable development strategies. Bridged the gap between non-technical stakeholders and the engineering team to ensure seamless project delivery. Guided clients through technical evaluations and helped transform raw business ideas into scalable digital products.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2025 ",
    role: "Telesales And Marketing Executive",
    company: "Offshore Staffing Solution",
    description: `Reached out to international clients to help grow our IT business. I was the first person they talked to, so my job was to explain our services simply and book meetings for our sales team. I also kept an eye on market trends to understand exactly what clients were looking for.`,
    technologies: [
      "English",
      "IT Service Sales",
      "Sales & Marketing",
      "Telemarketing",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Web Developer",
    company: "Scorpius Multimedia Solutions",
    description: `Built the agency's main website and developed custom web applications for their clients. Served as the primary technical problem-solver, fixing bugs, resolving client technical issues, and making sure all web projects ran smoothly.`,
    technologies: ["React.js", "Tailwind", "WordPress", "Technical Expert"],
  },
];

/*--------------------------- Projects ------------------------*/

export const PROJECTS = [
  {
    title: "VehiclePro • Vehicle Management System (VMS)",
    image: vmsImage,
    description:
      "A complete, production-grade full-stack web application designed for enterprise fleet management. Built with a responsive Flutter Web frontend for mobile and desktop viewports, integrated with a Spring Boot REST API featuring Bearer token authentication, CORS configuration, and comprehensive error handling, backed by a PostgreSQL relational database.",
    technologies: [
      "Flutter Web",
      "Dart",
      "Spring Boot",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/siamr7466/Vehiche_Management_System",
    liveUrl: "https://vms-enterprise.netlify.app",
    liveLabel: "Live Demo",
    isWeb: true,
  },
  {
    title: "Luminar Weddings",
    image: luminarImage,
    description:
      "A production-grade, live commercial website delivered for Luminar Weddings, a premier wedding and documentary photography studio. Crafted with React and Tailwind CSS for high visual performance, aesthetic typography, and responsive layouts, backed by a Node.js server. Features curated portfolios, service pricing tiers, client testimonials, and full search engine optimization.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "SEO",
    ],
    liveUrl: "https://luminarweddings.com/",
    liveLabel: "Visit Website",
    isWeb: true,
  },
  {
    title: "Spendify - Expense Tracker",
    image: spendifyImage,
    description: "A functional Flutter expense tracking mobile app with real-time balance calculation, local data persistence using SharedPreferences, and a complete Light/Dark theme system.",
    technologies: ["Flutter", "Dart",],
    githubUrl: "https://github.com/siamr7466/Spendify",
    liveUrl: "https://github.com/siamr7466/Spendify/releases",
  },
  {
    title: "Scorpius Agency Website",
    image: project1,
    description:
      "Designed and developed the official website for Scorpius Agency to showcase their digital services and portfolio. Built a fast, responsive platform focused on a clean user experience to help convert visitors into potential clients.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "GSAP",
    ],
    // githubUrl: "https://github.com/siamr7466",
    liveUrl: "https://scorpiusmultimedia.vercel.app",
  },
];

/*--------------------------- Contacts ------------------------*/

export const CONTACT = {
  address: "554 Begum Rokeya Avenue, West Kazipara, Dhaka - 1216",
  phoneNo: "+880 1725 963 600",
  email: "siamrahmanoffice@gmail.com",
};

/*--------------------------- Educations ------------------------*/

export const EDUCATIONS = [
  {
    year: "2026 - Present",
    role: "Bachelor of Science in Computer Science and Engineering",
    company: "Bangladesh University of Business and Technology, BUBT",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2021 - 2024",
    role: "Diploma in Survey Engineering",
    company: "Rajshahi Govt. Survey Institute, Rajshahi",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];
