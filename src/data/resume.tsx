import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";

export const DATA = {
  name: "Gabriel",
  initials: "G",
  url: "https://gabriel.design",
  location: "Remote",
  locationLink: "https://www.google.com/maps/search/remote",
  description:
    "Crafting digital experiences that blend aesthetics with purpose.",
  summary:
    "Web designer passionate about clean interfaces, thoughtful typography, and motion design. I turn ideas into polished digital products.",
  avatarUrl: "/avatar.jpg",
  skills: [
    { name: "Figma", icon: null as any },
    { name: "Framer", icon: null as any },
    { name: "Adobe XD", icon: null as any },
    { name: "Webflow", icon: null as any },
    { name: "Tailwind CSS", icon: null as any },
    { name: "HTML/CSS", icon: null as any },
    { name: "React", icon: ReactLight },
    { name: "Spline", icon: null as any },
    { name: "After Effects", icon: null as any },
    { name: "Lottie", icon: null as any },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gabriel@gabriel.design",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gabriel",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/gabriel",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/gabriel",
        icon: Icons.x,
        navbar: true,
      },
      Dribbble: {
        name: "Dribbble",
        url: "https://dribbble.com/gabriel",
        icon: Icons.globe,
        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://behance.net/gabriel",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:gabriel@gabriel.design",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Pixel Studio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Senior Web Designer",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "Led design for 20+ client projects. Built design systems, motion prototypes, and responsive web experiences.",
    },
    {
      company: "Bloom Agency",
      href: "#",
      badges: [],
      location: "Remote",
      title: "UI Designer",
      logoUrl: "",
      start: "2020",
      end: "2023",
      description:
        "Designed marketing websites and product dashboards for SaaS startups.",
    },
  ],
  education: [
    {
      school: "Design & Technology Institute",
      href: "#",
      degree: "B.A. Visual Communication Design",
      logoUrl: "",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Lumina Design System",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A comprehensive design system built in Figma with 200+ components, dark/light modes, and full developer handoff documentation.",
      technologies: ["Figma", "Tokens Studio", "Storybook"],
      links: [
        {
          type: "Live",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Zephyr Landing Page",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "High-converting SaaS landing page with custom animations, Lottie illustrations, and a 94% Lighthouse score.",
      technologies: ["Framer", "Lottie", "Tailwind CSS"],
      links: [
        {
          type: "Live",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Nova Dashboard",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Admin dashboard UI for a fintech startup featuring 50+ chart components, dark mode, and WCAG 2.1 AA accessibility.",
      technologies: ["Figma", "React", "Recharts"],
      links: [
        {
          type: "Live",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Aria Mobile App",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "End-to-end mobile app design for a wellness startup — from wireframes to polished Figma prototype with custom micro-interactions.",
      technologies: ["Figma", "Principle", "Protopie"],
      links: [
        {
          type: "Live",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as { title: string; dates: string; location: string; description: string; image?: string; mlh?: string; links: { title: string; href: string; icon: React.ReactNode }[] }[],
} as const;
