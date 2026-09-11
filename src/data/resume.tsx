import React from "react";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";
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
    email: "witxdth@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GabrielPedro35",
        icon: FaGithub,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/gblecev/",
        icon: FaInstagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:witxdth@gmail.com",
        icon: FaEnvelope,
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
      title: "Kiwimi Studios",
      href: "https://kiwimi.co/",
      dates: "",
      active: true,
      description: "Been working for this company for 7 months.",
      technologies: [],
      links: [],
      image: "/kiwimi.png",
      video: "",
    },
    {
      title: "Turkish Airlines",
      href: "https://turkish-airlines-mocha.vercel.app/",
      dates: "",
      active: true,
      description: "A demo site for Turkish Airlines.",
      technologies: [],
      links: [],
      image: "/turkish-airlines.png",
      video: "",
    },
    {
      title: "McLaren P1 Showcase",
      href: "https://mclaren-p1-showcase-beta.vercel.app/",
      dates: "",
      active: true,
      description: "A project to learn scroll animations.",
      technologies: [],
      links: [],
      image: "/mclaren-p1.png",
      video: "",
    },
    {
      title: "Virello",
      href: "https://virello-smoky.vercel.app/",
      dates: "",
      active: true,
      description: "A site made for the product Virello.",
      technologies: [],
      links: [],
      image: "/virello.png",
      video: "",
    },
  ],
  hackathons: [] as { title: string; dates: string; location: string; description: string; image?: string; mlh?: string; links: { title: string; href: string; icon: React.ReactNode }[] }[],
} as const;
