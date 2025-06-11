import { Project } from "@/types/projectTypes";

export const projects: Project[] = [
  {
    slug: "ipl-fantasy-web-app",
    name: "IPL Fantasy Web App",
    techStack: [
      "Next.js",
      "Firebase",
      "TypeScript",
      "TailwindCSS",
      "Recharts",
      "Framer Motion",
    ],
    period: "June 2025",
    description: [
      "Built a responsive UI with Firebase Auth/Firestore for real-time competitions and player assignments.",
      "Automated data ingestion and leaderboard updates via Cloud Functions; deployed on Vercel.",
      "Created Admin Panel with sortable rosters, trade system, and Framer Motion animations.",
      "Implemented a mobile-friendly leaderboard and 7-day points trend chart using Recharts.",
    ],
    details: {
      overview:
        "Before the 18th season of the Indian Premier League, my friends and I wanted a fun way to compete by auctioning players and forming dream teams. To make this experience more engaging, I built this fantasy app that allowed us to manage teams, track points, and enjoy the season interactively.",
      why: "We wanted a dedicated platform tailored to our group’s needs to track live competition and player stats rather than relying on generic fantasy apps. This project gave me a chance to create a personalized, interactive experience.",
      learnings:
        "I gained hands-on experience with Firebase’s real-time database and authentication, cloud functions for backend automation, and visualizing data trends with Recharts. It also strengthened my skills in UI/UX design using TailwindCSS and animations with Framer Motion.",
      achievements: [
        "Developed a fully responsive app supporting live player trades and leaderboard updates.",
        "Built an admin panel with advanced controls like sortable rosters and trade management.",
        "Implemented dynamic charts showing player points trends enhancing the user experience.",
        "Deployed a scalable, serverless backend with Firebase Cloud Functions.",
      ],
      future:
        "Plan to add more interactive features like push notifications for match events, social sharing, and enhanced mobile UX.",
      extra:
        "Fun fact: I earned a free player in our league as a reward for building the app — proof that passion and effort pay off!",
    },
    links: {
      repo: "https://github.com/hkrish28/ipl-fantasy-app",
      demo: "https://ipl-fantasy-app.vercel.app/",
    },
    screenshots: [],
  },
  {
    slug: "image-processor-application",
    name: "Image Processor Application",
    techStack: ["Java", "Swing", "JUnit"],
    period: "Dec 2023",
    description: [
      "Used MVC and Command design patterns while adhering to DRY and SOLID principles.",
      "Created a GUI with Java Swing for seamless user interaction.",
      "Enabled image editing features like sepia, crop, split view, level adjust, and more.",
      "Ensured software reliability with extensive JUnit testing.",
    ],
    details: {
      overview:
        "This project, developed as part of my Programming Design Paradigms coursework, is an image processing application that demonstrates clean code architecture and robust design.",
      why: "I wanted to deepen my understanding of software design principles and patterns by creating a real-world app that strictly follows DRY and SOLID principles, leveraging design patterns like MVC, Command, and Facade.",
      learnings:
        "I reinforced my knowledge of design patterns and principles, practiced writing modular and maintainable code, and gained experience in GUI development using Java Swing. Writing comprehensive unit tests with JUnit also enhanced the software’s reliability.",
      achievements: [
        "Successfully implemented multiple design patterns ensuring a clean and extensible codebase.",
        "Built a user-friendly GUI enabling a wide range of image editing operations.",
        "Maintained high code quality by adhering to established software design principles.",
        "Achieved good test coverage with JUnit to ensure correctness and prevent regressions.",
      ],
      future:
        "Future plans include adding support for more image filters, performance optimizations, and expanding test coverage with integration tests.",
      extra:
        "This project is close to my heart due to the strong emphasis on code quality and architecture that I rigorously maintained throughout development.",
    },
    links: {
      repo: "https://github.com/hkrish28/image-manipulator",
    },
    screenshots: [],
  },
  {
    name: "DigiDine: Personal Chef and Nutritionist",
    slug: "digidine",
    techStack: ["ReactJS", "Flask", "MySQL", "Docker"],
    period: "November 2023",
    description: [
      "AI-powered culinary platform for personalized recipe suggestions.",
      "Users can filter recipes by dietary needs and ingredients.",
    ],
    links: {
      repo: "https://github.com/hkrish28/DigiDine",
    },
    screenshots: ["/DD1.png", "/DD2.png"],
    details: {
      overview:
        "DigiDine is an AI-driven culinary platform designed to revolutionize your meal planning experience. It offers personalized recipe suggestions based on your dietary preferences and available ingredients.",
      why: "This was a DBMS course project intended to explore real-world database integrations with web apps. We wanted to create something useful, extensible, and fun to build.",
      learnings:
        "I gained experience in full-stack development, writing stored procedures, and containerizing with Docker. Collaborating on a team project with schema design, version control, and sprint deadlines helped solidify project delivery skills.",
      achievements: [
        "Implemented intelligent dietary tagging using MySQL stored procedures.",
        "Successfully containerized frontend and backend for portability.",
        "Created clean, user-friendly UI in ReactJS with advanced filtering.",
      ],
      future:
        "We’d love to add voice input, dynamic nutrition tracking, and recipe auto-generation using LLMs.",
      extra:
        "Built with a team of 3; I focused on front-end, stored procedures and integration.",
    },
  },
];
