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
    tags: ["Web", "Firebase", "Typescript", "Nextjs", "Tailwind"],
  },
  {
    slug: "smart-inventory",
    name: "Smart Inventory",
    techStack: ["Figma", "User Research", "UI/UX Design", "A/B Testing"],
    period: "April 2025",
    description: [
      "Developed a high-fidelity prototype of a visual, user-friendly mobile application to organize and locate household items.",
      "Designed features for voice and location-based tracking, item management (add, move, search), and usage reports.",
      "Conducted extensive user testing, heuristic evaluations, and A/B testing to refine UI/UX and enhance usability.",
      "Prioritized a clear and predictable navigation structure and standardized button placements for consistent user flow.",
    ],
    details: {
      overview:
        "The Smart Inventory app prototype addresses the common problem of misplaced household items, offering a visually intuitive solution for managing personal inventory. It aims to save time and reduce frustration by providing a centralized system to track items from passports to hoodies.",
      why: "Existing text-based inventory tools are often unintuitive, and people commonly rely on memory or notes to find things. This project aimed to design a simple, visual, and interactive system prototype that makes tracking household items effortless, preventing wasted time and enhancing organization.",
      learnings:
        "This project provided significant experience in user-centered design, from identifying core user problems to iteratively refining the interface based on feedback. I gained hands-on experience with Figma for high-fidelity prototyping, conducting task-based user testing, and applying heuristic evaluation principles to identify and resolve usability issues. The A/B testing process was crucial in making data-driven design decisions on interface components and user paths. It also highlighted the importance of clear navigation and accessible design.",
      achievements: [
        "Architected a high-fidelity mobile app prototype with key functionalities like simulated voice-activated and location-based tracking, enabling quick item retrieval.",
        "Significantly improved search functionality and button accessibility based on extensive user feedback and A/B testing, enhancing overall user experience and navigation consistency.",
        "Designed interactive charts for usage reports, providing visual insights into item management instead of text-based summaries.",
        "Developed a robust prototype in Figma, simulating core interactions for a realistic user testing environment, despite the lack of real backend functionality.",
      ],
      future:
        "Future plans include developing the application using native or cross-platform development, integrating with OpenAI API for enhanced intelligence, and implementing more customizable analytics for users.",
      extra:
        "This project was driven by a personal pain point of losing household items, which motivated the creation of a truly practical and user-friendly solution.",
    },
    links: {
      repo: "https://www.figma.com/design/k6Ot74P2mEYumVSXtourqA/Smart-Inventory?node-id=0-1&t=MRzHHGkw9aNwEpFk-1",
      demo: "https://www.figma.com/proto/k6Ot74P2mEYumVSXtourqA/Smart-Inventory?node-id=0-1&t=MRzHHGkw9aNwEpFk-1",
    },
    screenshots: [],
    tags: ["Design", "Figma", "UX", "UI"],
  },
  {
    slug: "graph-diameter-sssp-mapreduce",
    name: "Graph Diameter and SSSP Computation using MapReduce",
    techStack: [
      "Java",
      "Hadoop MapReduce",
      "AWS EMR",
      "BFS (Breadth-First Search)",
      "Distributed Systems",
      "Graph Algorithms",
      "Cluster Management",
    ],
    period: "December 2024",
    description: [
      "Implemented an efficient, scalable solution for computing graph diameter and Single-Source Shortest Path (SSSP) on large datasets using a dual-stage MapReduce BFS.",
      "Optimized cluster utilization, algorithmic performance, and I/O operations on AWS EMR, demonstrating significant speedup and scalability.",
      "Minimized network traffic through intermediate data compression and enhanced data shuffling efficiency for large clusters.",
      "Designed preprocessing filters and active node tracking to reduce unnecessary iterations and data volume, improving overall efficiency.",
    ],
    details: {
      overview:
        "This project focused on developing and optimizing a robust MapReduce-based solution to compute the diameter and Single-Source Shortest Path (SSSP) of large-scale graphs. These computations are critical for understanding network 'spread' in various fields like social science and biology. The implementation leveraged a dual-stage Breadth-First Search (BFS) process within a Hadoop environment, with significant efforts dedicated to optimizing performance for massive datasets.",
      why: "Computing graph diameter and SSSP efficiently on large graphs is a significant challenge due to the computational intensity and data volume involved. Traditional algorithms often struggle with scalability. This project aimed to address these limitations by designing and implementing a parallel computing approach using MapReduce, focusing on efficient resource utilization and algorithmic enhancements to handle real-world large-scale graphs effectively.",
      learnings:
        "I gained deep practical experience in distributed systems and large-scale data processing with Hadoop MapReduce. Key learnings included advanced cluster management techniques, tuning mappers/reducers and memory settings to prevent bottlenecks , and optimizing I/O by compressing intermediate data and using NullOutputFormat. I also learned to implement algorithmic enhancements such as preprocessing filters and active node tracking to reduce unnecessary computation, and improved data shuffling and load balancing for high-degree nodes. This project solidified my understanding of designing scalable algorithms for complex graph problems.",
      achievements: [
        "Successfully implemented a dual-stage MapReduce BFS algorithm for accurate graph diameter and SSSP computation on large datasets.",
        "Achieved significant performance improvements and near-linear speed-up (up to 1.22x for diameter and 1.8x for SSSP) by doubling cluster size on AWS EMR with 200K-1.5M nodes.",
        "Reduced output data volume by up to 95% for SSSP computation through effective optimization strategies.",
        "Implemented critical optimizations including custom partitioners, grouping comparators, and data compression, leading to minimized data shuffles and network overhead across BFS iterations.",
      ],
      future:
        "Future work could involve exploring alternative graph processing frameworks beyond MapReduce (e.g., Apache Flink, Apache Spark GraphX) for further performance gains, integrating real-time graph updates, and applying the algorithms to specific domain-driven large-scale network analysis problems.",
      extra:
        "This project provided invaluable hands-on experience in tackling the complexities of distributed graph processing, highlighting the importance of meticulous optimization for real-world scalability.",
    },
    links: {
      repo: "https://github.com/hkrish28/graph-diameter-sssp-mapreduce",
    },
    screenshots: [],
    tags: ["Mapreduce", "Hadoop", "AWS", "Java", "Distributed"],
  },
  {
    slug: "lyric-shuffle",
    name: "Lyric Shuffle - Android Song Game",
    techStack: [
      "Java",
      "Android SDK",
      "Gradle",
      "SQLite",
      "PostgreSQL",
      "AndroidX",
      "Material Components",
      "Supabase",
    ],
    period: "December 2024",
    description: [
      "Developed an engaging Android mobile game challenging players to unscramble and correctly arrange song lyrics.",
      "Features user authentication, multiple difficulty levels, a scoring system, and a global leaderboard for competitive play.",
      "Built natively for Android using Java, featuring a multi-activity architecture and local SQLite database for game content.",
      "Integrated PostgreSQL (Supabase) for backend data management and user profiles.",
    ],
    details: {
      overview:
        "Lyric Shuffle is an interactive Android game designed to test players' musical knowledge by having them arrange scrambled song lyrics. The application provides a comprehensive gaming experience, including user profiles, competitive leaderboards, and personalized game history tracking, all built with a focus on intuitive user interaction and robust data management.",
      why: "The goal was to create a fun, challenging, and competitive mobile game that leverages popular music. I aimed to build a full-featured Android application from the ground up, focusing on core mobile development principles like responsive UI, efficient data handling, and secure user management. This project was an excellent opportunity to deepen my expertise in native Android development and backend integration.",
      learnings:
        "I gained significant experience in native Android development using Java, including designing a multi-activity architecture and managing UI components with AndroidX and Material Components. Integrating a local SQLite database for game data and connecting to a remote PostgreSQL backend (Supabase) via SQL migration scripts provided practical insights into full-stack mobile development. Implementing secure user authentication and optimizing data flow for real-time leaderboards were also key learning areas.",
      achievements: [
        "Implemented a secure user authentication system for login and signup, ensuring robust user data privacy.",
        "Designed and developed an engaging drag-and-drop lyric unscrambling gameplay mechanic with dynamic difficulty levels.",
        "Created a global leaderboard and user profiles, fostering competition and allowing players to track personal progress.",
        "Optimized game performance and data handling using SQLite for local storage and PostgreSQL/Supabase for cloud-based data, ensuring a smooth user experience.",
      ],
      future:
        "Future enhancements could include expanding the song library dynamically, adding more diverse game modes, implementing real-time multiplayer challenges, and integrating with music streaming services for a richer content experience.",
      extra:
        "Building Lyric Shuffle allowed me to combine my passion for music with my technical skills, resulting in a highly interactive and enjoyable mobile application.",
    },
    links: {
      repo: "https://github.com/hkrish28/Lyric-Shuffle",
    },
    screenshots: [],
    tags: ["Android", "Java", "Mobile", "SQLite", "Supabase"],
  },
  {
    slug: "formula-1-result-analysis-prediction",
    name: "Formula 1 Result Analysis and Prediction",
    techStack: [
      "R",
      "Python",
      "Machine Learning",
      "Statistical Modeling",
      "Data Visualization",
      "FastF1 API",
      "Matplotlib",
      "Seaborn",
      "ggplot2",
    ],
    period: "April 2024",
    description: [
      "Analyzed historical and live Formula 1 data to identify correlations between practice, qualifying, and final race outcomes.",
      "Developed a predictive model to forecast race winners using machine learning algorithms and statistical methods.",
      "Utilized the FastF1 package for comprehensive data extraction, preprocessing, and aggregation of F1 telemetry.",
      "Employed extensive EDA and visualization techniques to uncover insights into driver performance and race dynamics.",
    ],
    details: {
      overview:
        "This project delved into the vast world of Formula 1 data to analyze and predict race outcomes. Leveraging a rich dataset of lap times, weather conditions, and session results, the goal was to understand the intricate factors influencing driver performance and develop a robust predictive model for race winners. The project highlights the power of data science in uncovering insights within complex sports analytics.",
      why: "Formula 1 teams heavily rely on data for optimizing performance and refining strategies. However, a comprehensive analysis linking various session data points (practice, qualifying) to final race results, combined with a predictive model for race winners, presented a significant opportunity. This project aimed to bridge that gap, providing a deeper understanding of race dynamics and offering predictive capabilities.",
      learnings:
        "I gained extensive experience in handling large-scale sports data, including data extraction from APIs (FastF1, Ergast), rigorous data cleaning, and preprocessing. Developing and fine-tuning machine learning models (linear regression, exploring RNNs/classifiers) for time-series and multi-class prediction was a key learning. Furthermore, the project deepened my understanding of statistical modeling, cross-validation, and effective data visualization to communicate complex findings.",
      achievements: [
        "Identified a strong correlation between qualifying success and higher probabilities of winning the race, a key insight for prediction.",
        "Developed a linear regression model demonstrating good homoscedasticity and uniform residual variance, indicating a reasonable fit for predicting race positions from qualifying data.",
        "Conducted thorough exploratory data analysis (EDA) revealing that Practice Session 2 lap times were more indicative of actual race results due to similar track and weather conditions.",
        "Successfully implemented a cross-validated predictive model for race positions, achieving an RMSE of 3.304097 and MAE of 2.516825.",
      ],
      future:
        "Future work includes incorporating additional factors such as engine mode, tire type, and real-time weather conditions into the prediction model. Further experimentation with advanced modeling techniques and real-time integration with live lap data for upcoming races are also planned.",
      extra:
        "The project underscored how crucial qualifying performance is in predicting race outcomes, a finding consistent across different tracks.",
    },
    links: {
      repo: "https://github.com/hkrish28/f1-track-specialists",
    },
    screenshots: [],
    tags: ["Data Science", "Machine Learning", "R", "Python"],
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
    tags: ["Java", "Java Swing", "Design Patterns", "MVC", "Junit"],
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
    tags: ["Web", "React", "Flask", "MySQL", "Docker"],
  },
  {
    slug: "attendance-management-image-processing",
    name: "Attendance Management System Using Image Processing",
    techStack: ["OpenCV", "FaceNet", "Python", "Django", "PostgreSQL", "Machine Learning", "Image Processing", "Neural Networks"],
    period: "April 2019",
    description: [
      "Developed an automated attendance management system leveraging image processing and facial recognition to reduce teacher's manual recording time by 10 minutes per class on average.",
      "Implemented a facial recognition pipeline using Viola-Jones for face detection and FaceNet (22-layer CNN with Inception architecture) for generating 128-D face embeddings.",
      "Built a web application with Django for role-based authentication (teacher, student, admin) and attendance tracking, accessible via a web admin interface.",
      "Achieved a statistical accuracy of 92.15% in recognizing individuals from group photos and handling varying numbers of people, with comparative analysis against HOG."
    ],
    details: {
      overview:
        "This project aimed to streamline the attendance recording process in classrooms by automating it through image processing and facial recognition. The system captures class photos, detects and identifies students, and then marks their attendance. It significantly reduces the manual effort and time traditionally spent by teachers on attendance management, while also providing students and administrators with functionalities to track and manage attendance.",
      why: "Manual attendance recording is time-consuming and prone to errors. This project addressed the need for an efficient, automated system to reduce administrative burden on teachers and provide a reliable method for tracking student attendance. It also served as an excellent opportunity to apply machine learning and image processing techniques to a practical, real-world problem.",
      learnings:
        "I gained hands-on experience with advanced image processing and deep learning techniques, specifically implementing and optimizing facial detection (Viola-Jones) and recognition (FaceNet with Triple Loss and one-shot learning). Building the full-stack web application with Django for user management, role-based authentication, and API development was crucial. I also learned about performance evaluation for computer vision models (True Positives, False Positives, accuracy) and the challenges of handling diverse real-world image data, including variations in ethnicity and cosmetic changes.",
      achievements: [
        "Successfully integrated Viola-Jones for robust face detection and FaceNet for accurate facial recognition, converting faces into 128-D embeddings for efficient database comparison.",
        "Developed a Django web application with secure role-based authentication, allowing teachers to upload photos, students to view attendance, and admins to manage classes and student rolls.",
        "Achieved a high statistical accuracy of 92.15% in automated attendance marking, demonstrating the system's effectiveness across various group sizes.",
        "Significantly reduced the average time taken for teachers to record class attendance by approximately 10 minutes per class through automation."
      ],
      future:
        "Future plans include enhancing the neural network's training dataset to better capture diverse features, incorporating more advanced Postgres array features for faster distance calculations, and expanding functionalities for students, such as providing class leaders access to upload photos for attendance marking.",
      extra:
        "A key finding during development was that careful pre-training and robust algorithms like FaceNet were essential for achieving high accuracy, especially when dealing with group photos and diverse facial features. Comparative analysis showed CNN's superior performance over HOG in various detection scenarios."
    },
    links: {
      repo: "https://github.com/hkrish28/AttendanceMgmtAI"
    },
    screenshots: [], 
    tags: ["Python", "Django", "OpenCV", "FaceNet", "PostgreSQL", "Machine Learning", "Image Processing", "AI"]
}
];
