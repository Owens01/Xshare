import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiExpo,
  SiTanstack,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

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
    icon: <SiExpo className="text-black dark:text-white text-xl md:text-2xl" />,
  },
];

export const techStack = [
 
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-xl md:text-3xl" />,
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="text-black dark:text-white text-xl md:text-3xl" />
    ),
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-xl md:text-3xl" />,
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="text-green-500 text-xl md:text-3xl" />,
  },
  {
    name: "React Native",
    icon: (
      <TbBrandReactNative className="text-blue-500 text-xl md:text-3xl" />
    ),
  },
  {
    name: "Expo",
    icon: <SiExpo className="text-black dark:text-white text-xl md:text-3xl" />,
  },
  {
    name: "TanStack Start",
    icon: <SiTanstack className="text-orange-500 text-xl md:text-3xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-xl md:text-3xl" />,
  },
  
];
