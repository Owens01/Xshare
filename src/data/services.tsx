import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiMysql, SiTypescript } from "react-icons/si";

export const services = [
  {
    title: "Frontend Development",
    description:
      "Designing and building responsive, user centered interfaces using React.js, Next.js, TanStack Start, and Tailwind CSS, with a focus on performance, accessibility, and seamless user experiences across devices.",
    icon: <FaReact className="text-blue-500 text-4xl" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Designing and building responsive, user centered mobile applications using React Native and Expo, with a focus on performance, accessibility, intuitive interactions, and seamless user experiences across iOS and Android devices.",
    icon: <FaReact className="text-blue-500 text-4xl" />,
  },
];

export const techStack = [
 
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-xl md:text-4xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-xl md:text-4xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-xl md:text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-xl md:text-4xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-xl md:text-4xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 text-xl md:text-4xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-xl md:text-4xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-500 text-xl md:text-4xl" />,
  },
];
