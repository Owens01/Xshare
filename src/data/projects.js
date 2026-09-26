const allProjects = [
  {
    id: "telemedicine-app",
    title: "Telemedicine App",
    description:
      "A secure, scalable telemedicine platform designed to bridge the gap between patients and healthcare providers through real-time digital care. The system enables patients to book consultations, communicate with licensed practitioners via video, chat, or voice, access digital prescriptions, and manage health records seamlessly. Built with modern cloud infrastructure and real-time communication technologies, the platform ensures accessibility, affordability, and continuity of care, especially in underserved and remote regions. Compared to a decade ago when telemedicine was limited to basic video calls and fragmented systems, this solution integrates intelligent triaging, secure data exchange, and mobile-first experiences to deliver a holistic digital healthcare ecosystem. Looking ahead, the platform is designed to evolve into an AI-assisted healthcare system with predictive diagnostics, remote monitoring, and personalized treatment pathways.",
    image: "/assets/toac.png",
    tech: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "React Router",
      "Axios",
      "React Context API",
      // "TypeScript",

      "React Hook Form",
    ],
    category: "frontend",
    live: "https://toac-main-n5bt.vercel.app/",
    code: "https://github.com/Toacintl/TOAC-_main",
    span: "col-span-2 row-span-1",
    challenge:
      "Managing complex state across multiple interactive components (real-time chat, video sessions, booking flows, and authentication) led to inconsistent UI updates and prop drilling as the application scaled.",
    solution:
      "I addressed this by leveraging React Context API with custom hooks to centralize shared state and logic, reducing prop drilling, improving component communication, and making the frontend more scalable and maintainable.",
    features: [
      "Secure authentication (JWT/OAuth)",
      "Profile management for both patients and doctors",
      "Real-time booking based on doctor availability",
      "Video and audio calls powered by WebRTC",
      "In-app chat for consultations and follow-ups",
      "Digital prescriptions and health record management",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my skills, projects, and services.",
    image: "/assets/portfolio.png",
    tech: ["React", "TailwindCSS", "Framer Motion", "React Router", "AOS", "React Helmet", "email.js", "react-simple-typewriter"],
    category: "frontend",
    live: "https://ebri-emmanuel-portfolio.vercel.app/",
    code: "https://github.com/emmybest19/portfolio",
    span: "col-span-2 row-span-1",
    challenge:
      "Creating a portfolio that stands out with professional design while effectively showcasing technical skills and projects.",
    solution:
      "Built a multi-page React app with smooth animations, dark mode support, and a clean component architecture that demonstrates modern frontend practices.",
    features: [
      "Dark/light mode with smooth transitions",
      "Animated page transitions between routes",
      "Project case study detail views",
      "Fully responsive across all breakpoints",
    ],
  },
  {
    id: "school-portal",
    title: "School Portal",
    description:
      "A full-stack student school portal designed to digitize and streamline academic and administrative processes within educational institutions. The platform enables students  and teacher to interact seamlessly through features such as course management, result tracking, assignment submission. Built with a scalable architecture and secure access controls, the system ensures efficient data management and accessibility across devices. Compared to a decade ago when school systems relied heavily on manual processes or fragmented desktop solutions, this platform delivers a centralized, cloud-based experience with real-time updates, automation, and role-based workflows. The system is future-ready, with the ability to integrate AI-driven performance analytics, remote learning tools, and smart academic recommendations.",
    image: "/assets/portal.png",
    tech: [
    "React",
    "TailwindCSS",
    "Framer Motion",
    "Express.js",
    "mongoose",
    "Axios",
    "Jsonwebtokenc",
    "claudinary",
    "bcryptjs"
  ],
    category: "full-stack",
    live: "https://school-portal-taupe.vercel.app/",
    code: "https://github.com/emmybest19/student-portal-frontend",
    span: "col-span-2 row-span-1",
    challenge:
      "Managing strict role-based access across students, teachers, and admins without exposing sensitive academic data or breaking user experience.",
    solution:
      "Implemented a secure role-based access control system using JWT authentication and protected routes, ensuring each user only accesses permitted resources while maintaining smooth navigation.",
    features: [
      "Role-based dashboards (Student, Admin)",
      "Secure authentication and authorization",
      "Student profile and academic record management",
      "Assignment upload and submission portal",
      "Responsive UI with smooth animations (Framer Motion)",
      "API-driven architecture for scalable data handling"
    ],
  },
  {
    id: "blingg-app",
    title: "Blingg App",
    description:
      "A modern, high-conversion product website built to present a multi-functional application that brings together real-time messaging, digital financial services, cryptocurrency conversion, and group contribution systems into one cohesive platform. The website is designed to clearly communicate the value of each feature through structured sections, interactive elements, and smooth user flows, allowing users to explore messaging, manage finances, convert crypto assets, and participate in collaborative savings seamlessly. With a strong focus on usability, performance, and visual storytelling, the platform simplifies complex financial and communication tools into an accessible, engaging experience that drives user trust and adoption.",
    image: "/assets/blingg.png",
    tech: ["React", "OS", "TailwindCSS", "Framer Motion", "react-router-dom", "react-icons"],
    category: "full-stack",
    live: "https://blinggapp.com/",
    code: "https://github.com/emmybest19/telemedicine-app",
    span: "col-span-2 row-span-1",
    challenge:
      "Balancing the presentation of multiple complex features (messaging, payments, crypto, and contributions) without overwhelming users or compromising clarity.",
    solution:
      "Designed a modular, intuitive UI with clear feature segmentation and smooth interactive flows, ensuring users can easily understand and navigate each core function.",
    features: [
      "Clean product showcase sections for each feature",
      "Interactive UI with smooth animations (e.g., Framer Motion)",
      "Responsive design for mobile and desktop",
      "Call-to-action sections optimized for user onboarding",
      "FAQ and support sections for user guidance",
    ],
  },
  {
    id: "e-briggs-app",
    title: "E-bringgs App",
    description:
      "A full-featured digital platform designed to combine e-learning, real-time communication, and service booking into a single seamless experience. The application enables users to enroll in courses, participate in live video and voice sessions, and track their learning progress through a dedicated student dashboard. At the same time, clients can explore services, book consultations for web or mobile app development, and manage their projects through a personalized client dashboard, while administrators oversee the entire system via a centralized admin panel. The platform is built with a strong focus on scalability, intuitive navigation, and real-time interaction, transforming how users learn, communicate, and access digital services in one integrated environment.",
    image: "/assets/ebrings.png",
    tech: ["React",
    "TypeScript",
    "TailwindCSS",
   
    "Express.js",
    "MongoDB",
    "WebRTC",
    "Zustand",
    "Socket.IO",
    ],
    category: "full-stack",
    live: "https://blinggapp.com/",
    code: "https://github.com/emmybest19/telemedicine-app",
    span: "col-span-2 row-span-1",
    challenge:
      "Coordinating real-time video/voice communication, course management, and service booking within a single platform without performance issues or user confusion.",
    solution:
      "Adopted a modular architecture with optimized API handling and real-time technologies, ensuring smooth communication, efficient data flow, and a clear separation of user roles and functionalities.",
    features: [
      "User authentication and secure access control",
      "Live video and voice call integration for classes and consultations",
      "Booking system for web and mobile development services",
      "Admin panel for managing users, courses, and bookings",
      "Scalable backend architecture for handling multiple user activities simultaneously",
      "Responsive and interactive UI for seamless user experience"
    ],
  },
];

export default allProjects;
