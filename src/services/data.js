import {
  Github,
  Linkedin,
  Code2,
  Layers,
  Terminal,
  Mail,
  Phone,
} from "lucide-react";

export const EXPERTISE = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Vue.js, Redux, Pinia, Tailwind CSS, Bootstrap, Ant Design, Figma",
  },
  {
    icon: Terminal,
    title: "Backend",
    desc: "Express.js, Node.js, NestJS, PostgreSQL, MySQL.",
  },
  {
    icon: Layers,
    title: "Other",
    desc: "Git, Jira, Agile/Scrum, REST API integration, Unit Testing, Docker, Team Collaboration, Problem Solving, Attention to Detail, Analytical Skill, Teamwork, Troubleshooting, Code Review & Refactoring.",
  },
];

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "agistriwahyuji",
    href: "https://linkedin.com/in/agistriwahyuji",
  },
  {
    name: "GitHub",
    icon: Github,
    handle: "masagis",
    href: "https://github.com/masagis",
  },
  {
    name: "Email",
    icon: Mail,
    handle: "wahyujiat@gmail.com",
    href: "mailto:wahyujiat@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    handle: "+6285608984255",
    href: "https://wa.me/6285608984255",
  },
];

export const EXPERIENCE = [
  {
    company: "PT Pegadaian / (Outsourced via PT Pesonna Optima Jasa)",
    role: "Frontend Engineer",
    type: "Contract",
    period: "Oct 2022 – Present",
    location: "DKI Jakarta, Indonesia",
    description:
      "Developed and maintained responsive web applications using Vue.js in a micro-frontend architecture. Collaborated closely with UI/UX designers, backend engineers, business analyst, and QA teams in an Agile/Scrum environment to deliver high-quality, scalable solutions. Created reusable components and design systems using Storybook and implemented unit tests using Vitest. Integrated RESTful APIs endpoints to build dynamic, data-driven user interfaces. Ensured cross-browser compatibility and responsive design across various screen sizes and devices. Conducted internal code reviews to ensure code quality and adherence to best practices.",
  },
  {
    company: "PT Dapur Rumah Sejahtera (Twiscode)",
    role: "Frontend Developer",
    type: "Full-time",
    period: "Aug 2021 – Sep 2022",
    location: "Remote",
    description:
      "Delivered 10+ responsive web projects using React.js, Next.js, and JavaScript. Refactored legacy components and reduced technical debt, improving developer onboarding speed. Reduced UI bug reports by 60% through proactive testing and QA collaboration. Participated in sprint ceremonies and maintained consistent code standards across projects.",
  },
  {
    company: "PT Solusi Teknologi Nusantara (Nusantech)",
    role: "Frontend Developer",
    type: "Internship",
    period: "May 2021 – Jul 2021",
    location: "Remote",
    description:
      "Redesigned and implemented UI for the SIBARU internal dashboard using React.js and TypeScript. Completed and deployed 2 full-stack projects including a company profile site and internship management dashboard using Next.js. Integrated RESTful APIs for dynamic form processing and user authentication.",
  },
  {
    company: "Synrgy Academy",
    role: "Full-stack Developer || Frontend Developer",
    type: "Apprenticeship",
    period: "Jan 2021 – Jul 2021",
    location: "Remote",
    description:
      "6-month intensive program with project-based learning covering React.js, Express.js, Node.js, teamwork, and software engineering best practices. Selected as scholarship awardee (Batch 2).",
  },
  {
    company: "PT Woolu Aksara Maya (Aksaramaya)",
    role: "Web Developer",
    type: "Internship",
    period: "Jun 2018 – Aug 2018",
    location: "DKI Jakarta, Indonesia",
    description:
      "Developed a company profile website using WordPress, ensuring mobile responsiveness and clean UI. Entered and managed structured data for the MOCO DLS platform used in digital library initiatives.",
  },
];

export const PROJECTS = [
  {
    title: "Kilas",
    description:
      "Kilas is a minimalist journaling app designed for the busy mind. No pressure, no long paragraphs—just one line a day to capture your most meaningful moments. Build a lifetime of memories, one sentence at a time.",
    tags: ["Vite", "React.js", "TypeScript", "Tailwind CSS"],
    link: "https://kilas-ku.vercel.app/",
  },
  {
    title: "DPR RI Website",
    description:
      "The DPR RI website was redesigned because there were several aspects that did not meet the standards such as the national demographic academies, no google analytics, no web content accessibility guidelines, the website was not disabled-friendly, and the loading page was too long.",
      tags: ["Next.js", "React", "Tailwind CSS",'Zustand', 'GraphQL'],
    link: "https://dpr.go.id/",
  },
  {
    title: "SILACAK KEMENKES",
    description:
      "SILACAK application is a program to strengthen tracing in handling the Covid 19 pandemic and has been implemented in 51 districts/cities in 10 provinces.",
      tags: ["Node.js", "Next.js", "Bootstrap CSS"],
    link: "https://training-silacak-v3.kemenkes.go.id/",
  },
  {
    title: "Pokelu TGC",
    description:
      "Pokélu-tgc is a modern and interactive digital Pokédex designed for Pokémon enthusiasts to explore and manage their favorite creatures. The interface features a clean and user-friendly layout.",
    tags: ["Vite", "React.js", "JavaScript", "Tailwind CSS"],
    link: "https://pokelu-tgc.vercel.app/",
  },
  {
    title: "Simple MCQ (Multiple Choice Questions)",
    description:
      "A streamlined MCQ (Multiple Choice Questions) quiz app featuring a countdown timer and a results screen that summarizes the user`s total correct answers.",
    tags: ["React.js", "JavaScript", "Bootstrap CSS"],
    link: "https://days-weather.vercel.app/",
  },
  {
    title: "Days Weather",
    description:
      "SkyCast, A comprehensive and responsive web application designed to provide real-time weather updates and granular forecasts. This project allows users to track current atmospheric conditions, 3-day summaries, and highly detailed hourly breakdowns for locations worldwide.",
    tags: ["Next.js", "JavaScript", "Bootstrap CSS", "Redux"],
    link: "https://days-weather.vercel.app/",
  },
  {
    title: "Anime List",
    description: "AnimeList A modern, responsive web application designed for anime enthusiasts to explore, search, and discover their favorite shows and movies. The platform provides a clean, grid-based interface with dynamic filtering to easily navigate through a vast collection of anime titles.",
    tags: ["Next.js", "JavaScript", "Bootstrap CSS", "Redux"],
    link: "https://jikan-anime-next.vercel.app/",
  },
];
