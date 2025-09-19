import Link from "next/link";

import { buttonVariants } from "@/components/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    image: "/images/project-2.png",
    title: "Streamify",
    description:
      "A video callling web application that allows users to connect with friends and family in real-time. Built with React, Tailwind CSS",
    technologies: ["React", "JavaScript", "Tailwind", "Mongoose"],
    links: {
      preview: "",
      github: "https://github.com/srinjoymahanti/streamify-video-calls-master",
      githubApi: "https://api.github.com/repos/srinjoymahanti/streamify-video-calls-master",
    },
  },
  {
    image: "/images/project-1.png",
    title: "Imagify",
    description:
      "An AI-powered image generation app that allows users to create unique images based on text prompts. Built with React, Tailwind CSS, and OpenAI API.",
    technologies: ["React", "TypeScript", "Tailwind", "OpenAI API"],
    links: {
      preview: "",
      github: "https://github.com/srinjoymahanti/TextToImageGenerator",
      githubApi: "https://api.github.com/repos/srinjoymahanti/TextToImageGenerator",
    },
  },
] as const;

export const experiencesData = [
  {
    title: "10th Board - 92.4%",
    company: "Khatra Sishu Niketan,Khatra,Bankura",
    description:
      "I completed my 10th board examinations with a score of 92.4% from Khatra Sishu Niketan. This achievement reflects my dedication and commitment to academic excellence during my early education.",
    period: "-2020",
    technologies: [],
  },
  {
    title: "12th Board - 92.3%",
    company: "Khatra High School,Khatra,Bankura",
    description:
      "I completed my 12th board examinations with a score of 92.3% from Khatra High School. This accomplishment highlights my continued dedication to academic excellence and my ability to excel in a competitive environment.",
    period: "2020 - 2022",
    technologies: [],
  },
  {
    title: "Information Technology Undergraduate",
    company: "Netaji Subhash Engineering College, Kolkata",
    description:
      "I am currently pursuing my undergraduate studies in Information Technology at Netaji Subhash Engineering College, Kolkata. This program is providing me with a strong foundation in computer science and practical experience in software development, algorithms, and problem-solving.",
    period: "2023-present",
    technologies: ["C", "Python", "Java", "HTML" ,"CSS","Javascript","React","Node.js","Express.js","MongoDB"],
  },
] as const;

export const skillsData = [
  { icon: <Icons.c className="size-12" /> },
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.java className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  
  // { icon: <Icons.redux className="size-12" /> },
  // { icon: <Icons.nextjs className="size-12" /> },
  // { icon: <Icons.nestjs className="size-12" /> },
  // { icon: <Icons.prisma className="size-12" /> },
  // { icon: <Icons.docker className="size-12" /> },
] as const;
