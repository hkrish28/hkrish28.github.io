export const siteConfig = {
    hero: {
      name: "Harikrishnan U",
      tagline: "Software Engineer | Full-Stack Developer",
    },
    projects: [
        {
          name: "IPL Fantasy Web App",
          techStack: ["Next.js", "Firebase", "TypeScript", "TailwindCSS", "Recharts", "Framer Motion"],
          period: "June 2025",
          description: [
            "Built a responsive UI with Firebase Auth/Firestore for real-time competitions and player assignments.",
            "Automated data ingestion and leaderboard updates via Cloud Functions; deployed on Vercel.",
            "Created Admin Panel with sortable rosters, trade system, and Framer Motion animations.",
            "Implemented a mobile-friendly leaderboard and 7-day points trend chart using Recharts."
          ],
          links: {
            repo: "https://github.com/hkrish28/ipl-fantasy-app", 
            demo: "https://ipl-fantasy-app.vercel.app/" 
          }
        },
        {
          name: "Image Processor Application",
          techStack: ["Java", "Swing", "JUnit"],
          period: "Dec 2023",
          description: [
            "Used MVC and Command design patterns while adhering to DRY and SOLID principles.",
            "Created a GUI with Java Swing for seamless user interaction.",
            "Enabled image editing features like sepia, crop, split view, level adjust, and more.",
            "Ensured software reliability with extensive JUnit testing."
          ],
          links: {
            repo: "https://github.com/hkrish28/image-manipulator", 
          }
        },
        {
          name: "DigiDine: Personal Chef and Nutritionist",
          techStack: ["ReactJS", "Flask", "MySQL", "Docker"],
          period: "Nov 2023",
          description: [
            "Built a React frontend with a Flask backend, containerized via Docker.",
            "Users can filter recipes by dietary tags, flavor, and ingredients.",
            "Chefs can create recipes with automated dietary-tag assignment using stored procedures."
          ],
          links: {
            repo: "https://github.com/hkrish28/DigiDine", 
          }
        }
      ],
    about: {
      content:
        "I am an experienced Full-Stack Software Engineer with four years of hands-on experience at JPMorgan Chase & Co., where I developed scalable web applications and cloud-integrated systems. I specialize in technologies such as React.js, Spring Boot, TypeScript, Python, Node.js, and Hadoop, and I have a strong foundation in data structures and algorithms. \nIn May 2025, I completed my Master of Science in Computer Science at Northeastern University, with a focus on distributed systems, cloud computing, and large-scale application design. I also hold a Bachelor of Technology in Computer Science from the National Institute of Technology Calicut.\nMy skills cover the entire development lifecycle, including user interface design, backend API development, and cloud deployment using AWS. I am passionate about building efficient, maintainable software and enjoy tackling challenging technical problems.",
    },
    experience: [
        {
          role: "Associate",
          company: "JPMorgan Chase & Co",
          location: "Bengaluru, India",
          period: "Jan 2022 – Aug 2023",
          bullets: [
            "Managed REST APIs and web services with an SLA of 150ms to improve employee workflows globally.",
            "Built data pipelines from 4 sources, transforming millions of records into Elasticsearch-backed APIs, saving 10+ hours per onboarding.",
            "Architected a scalable micro front-end for user settings across 6 internal apps.",
            "Deployed AWS-based APIs with MongoDB for personalized recommendations, increasing engagement by 15%."
          ]
        },
        {
          role: "Software Engineer",
          company: "JPMorgan Chase & Co",
          location: "Bengaluru, India",
          period: "Jul 2019 – Jan 2022",
          bullets: [
            "Trained into a full-stack developer role in 2 months; developed robust React + Spring Boot microservices.",
            "Monitored 10+ production applications with 99.9% availability as an SRE team member.",
            "Built a private cloud-hosted portal for managing product roadmaps across 30+ clients."
          ]
        }
      ],
      education: [
        {
          school: "Northeastern University",
          location: "Boston, MA",
          degree: "MS in Computer Science",
          gpa: "4.0",
          period: "May 2025",
          details: [
            "Khoury College of Computer Sciences",
            "Courses: Programming Design Paradigm, Algorithms, Distributed Systems, Large-Scale Parallel Data Processing",
            "TA for Fundamentals of Software Engineering: SDLC, CI/CD, OAuth, GitHub Actions, and mentoring."
          ]
        },
        {
          school: "National Institute of Technology, Calicut",
          location: "India",
          degree: "BTech in Computer Science & Engineering",
          gpa: "8.13",
          period: "April 2019",
          details: [
            "Courses: Principles of Programming Language, OOP, Data Structures & Algorithms"
          ]
        }
      ],
      skills: [
        {
          category: "Languages & Web Technologies",
          items: ["React", "Java", "Python", "SQL", "NoSQL", "Node", "HTML", "CSS", "JavaScript", "Scala", "C/C++"]
        },
        {
          category: "Frameworks & Databases",
          items: ["Hadoop", "Spark", "TypeScript", "JUnit", "Jest", "MySQL", "MariaDB", "MongoDB", "Next.js", "TailwindCSS"]
        },
        {
          category: "Cloud & Tools",
          items: ["AWS", "PCF", "Linux", "Kubernetes", "Git", "Bitbucket", "JIRA", "Docker", "Postman", "JMeter", "Terraform", "Figma"]
        }
      ],
      certifications: [
        {
          name:"AWS Educate Introduction to Generative AI",
          provider: "Amazon Web Services Training and Certification",
          date: "June 2025",
          link: "https://www.credly.com/badges/23980d71-1582-4653-a69a-f81d34671370"
        },
        {
          name: "Automating Real-World Tasks with Python",
          provider: "Google via Coursera",
          date: "Novemeber 2020",
          link: "https://coursera.org/share/f103e7564253be99bb424abcd6e22b5b"
        }
      ]
      
  }
  