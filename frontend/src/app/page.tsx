"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Contact,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  Menu,
  Orbit,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import SpacekitScene from "./components/SpacekitScene";
import PortraitCube from "./components/PortraitCube";
import AntigravityField from "./components/AntigravityField";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "Web" | "IoT" | "AI";
  tech: string[];
  link: string;
  image: string;
}

const WorldGlobe = dynamic(() => import("./components/WorldGlobe"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[560px] animate-pulse rounded-2xl border border-lime-300/20 bg-white/5" />
  ),
});

const projects: Project[] = [
  {
    id: 8,
    title: "Handsome Mini Chat",
    description:
      "Real-time chat app with WebSockets and a lightweight Python backend.",
    category: "Web",
    tech: ["Python", "WebSocket", "JavaScript"],
    link: "https://handsome-chat.vercel.app/",
    image: "/img/minichat.png",
  },
  {
    id: 4,
    title: "Camp Booking System",
    description:
      "Booking experience with authentication, availability, and payment flow.",
    category: "Web",
    tech: ["React", "TypeScript", "Next.js"],
    link: "https://icampjp.vercel.app/",
    image: "/img/icamp.png",
  },
  {
    id: 2,
    title: "University Marketplace",
    description:
      "Campus marketplace for buying and selling with a full-stack foundation.",
    category: "Web",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://mfu-2ndhand.vercel.app/",
    image: "/img/2nd-mfu.png",
  },
  {
    id: 1,
    title: "ESP32 IoT Car",
    description:
      "Connected car controlled through a mobile hotspot with live sensor feedback.",
    category: "IoT",
    tech: ["ESP32", "Arduino", "React Native"],
    link: "https://github.com/sannyuntwin/esp32-wifi-controll-car",
    image: "/img/iot-car.jpg",
  },
  {
    id: 6,
    title: "Smart Home Automation",
    description:
      "ESP32 system for controlling lights and fans from a web interface.",
    category: "IoT",
    tech: ["ESP32", "MQTT", "Arduino"],
    link: "https://www.youtube.com/watch?v=aTisVD-V10I&t=61s",
    image: "/img/smart-home.jpg",
  },
  {
    id: 3,
    title: "Hand Gesture Recognition",
    description:
      "Computer vision experiment that recognizes gestures in real time.",
    category: "AI",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/sannyuntwin/hand-gesture-recognition-with-python-opencv",
    image: "/img/hand-gesture.png",
  },
  {
    id: 9,
    title: "Password Strength Analyzer",
    description:
      "Security tool that gives immediate password feedback and suggestions.",
    category: "AI",
    tech: ["Python", "TypeScript", "Docker"],
    link: "https://handsome-checker.vercel.app/",
    image: "/img/ps-check.png",
  },
  {
    id: 7,
    title: "Network Scanner",
    description:
      "Educational tool for visualizing local devices and network exposure.",
    category: "AI",
    tech: ["Python", "HTML", "CSS"],
    link: "https://github.com/sannyuntwin",
    image: "/img/net-scan.png",
  },
  {
    id: 5,
    title: "Travel Vlog Website",
    description:
      "Travel publishing platform for stories, videos, and community comments.",
    category: "Web",
    tech: ["MongoDB", "Express", "React"],
    link: "https://www.cantwait2say.com/",
    image: "/img/cantwait2say.png",
  },
];

const filters = ["All", "Web", "IoT", "AI"] as const;
const spotlightFilters = ["Web", "IoT", "AI"] as const;
const navItems = [
  { id: "about", label: "About", icon: UserRound },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Focus", icon: Orbit },
];

const skillGroups = [
  {
    title: "Web development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "IoT & embedded",
    skills: ["ESP32", "Arduino", "React Native", "MQTT", "Sensors"],
  },
  {
    title: "Data & AI",
    skills: ["Python", "OpenCV", "Machine Learning", "Pandas", "NumPy"],
  },
  {
    title: "Tools & platforms",
    skills: ["PostgreSQL", "MongoDB", "Docker", "Git", "Vercel"],
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Software development",
    text: "Building responsive interfaces and full-stack applications from idea to deployment.",
  },
  {
    number: "02",
    title: "Embedded systems",
    text: "Connecting hardware, sensors, and interfaces through practical IoT prototypes.",
  },
  {
    number: "03",
    title: "Applied AI",
    text: "Exploring computer vision, machine learning, and useful security tools.",
  },
];

const translations = {
  en: {
    software: "Software & systems",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    focus: "Focus",
    contact: "Contact",
    resume: "Resume",
    downloadResume: "Download resume",
    welcome: "Hi, Welcome to Handsome World!",
    label: "LIFE IN SPACE / SOFTWARE & SYSTEMS",
    heroTitle: "Useful things,",
    heroTitleLine: "carefully built.",
    heroCopy:
      "I'm Saw San Nyunt Win, a developer from Chiang Rai building useful software, connected devices, and applied AI experiments.",
    explore: "See my work",
    talk: "Let's talk",
    mission: "Current mission",
    missionCopy:
      "Interfaces that connect people, software, and the physical world.",
    projectsStat: "projects",
    years: "years building",
    start: "Start here",
    exploreQuestion: "What would you like to explore?",
    tour: "A quick tour of my work",
    featured: "Featured",
    build: "build",
    aboutLabel: "01 / About",
    aboutTitle: "A practical",
    aboutTitleLine: "point of view.",
    aboutAside:
      "From first sketch to deployed product, I like understanding how every part fits together.",
    aboutCopy:
      "I enjoy turning unclear problems into clear, useful experiences. My work moves between frontend interfaces, backend systems, and hardware prototypes.",
    location: "Based in Mae Chan, Chiang Rai, Thailand.",
    aboutEnd:
      "Focused on thoughtful products, honest engineering, and learning by making.",
    skillsLabel: "02 / Skills",
    skillsTitle: "Tools I use",
    skillsTitleLine: "to make things.",
    projectsLabel: "03 / Selected work",
    projectsTitle: "Things I've built.",
    projectNote: "Read project note",
    focusLabel: "04 / Technical focus",
    focusTitle: "Learning by",
    focusTitleLine: "building.",
    academic: "Academic & technical projects",
    openTo: "Open to internships, engineering roles, and freelance work",
    contactLabel: "05 / Contact",
    contactTitle: "Have a good problem?",
    contactCopy:
      "Tell me what you're working on. I'll get back to you by email.",
    name: "Your name",
    email: "Your email",
    message: "A little about the project",
    emailDraft: "Open email draft",
    builtWith: "Built with Next.js / TypeScript",
    language: "ภาษาไทย",
    project: "project",
    technology: "Technology",
    openProject: "Open project",
    close: "Close project details",
  },
  th: {
    software: "ซอฟต์แวร์และระบบ",
    about: "เกี่ยวกับฉัน",
    skills: "ทักษะ",
    projects: "ผลงาน",
    focus: "ความสนใจ",
    contact: "ติดต่อ",
    resume: "เรซูเม่",
    downloadResume: "ดาวน์โหลดเรซูเม่",
    welcome: "สวัสดี ยินดีต้อนรับสู่โลกของ Handsome!",
    label: "LIFE IN SPACE / ซอฟต์แวร์และระบบ",
    heroTitle: "สร้างสิ่งที่มีประโยชน์",
    heroTitleLine: "อย่างตั้งใจ",
    heroCopy:
      "ผม Saw San Nyunt Win นักพัฒนาจากเชียงราย ผู้สร้างซอฟต์แวร์ อุปกรณ์เชื่อมต่อ และโปรเจกต์ AI ที่ใช้งานได้จริง",
    explore: "ดูผลงาน",
    talk: "พูดคุยกัน",
    mission: "ภารกิจปัจจุบัน",
    missionCopy:
      "สร้างอินเทอร์เฟซที่เชื่อมผู้คน ซอฟต์แวร์ และโลกจริงเข้าด้วยกัน",
    projectsStat: "โปรเจกต์",
    years: "ปีที่สร้างผลงาน",
    start: "เริ่มต้นที่นี่",
    exploreQuestion: "คุณอยากสำรวจอะไร?",
    tour: "เลือกดูผลงานอย่างรวดเร็ว",
    featured: "ผลงานเด่นด้าน",
    build: "",
    aboutLabel: "01 / เกี่ยวกับฉัน",
    aboutTitle: "มุมมองที่เน้น",
    aboutTitleLine: "การใช้งานจริง",
    aboutAside:
      "ตั้งแต่แนวคิดแรกจนถึงการนำไปใช้งาน ผมชอบทำความเข้าใจว่าทุกส่วนทำงานร่วมกันอย่างไร",
    aboutCopy:
      "ผมสนุกกับการเปลี่ยนปัญหาที่ไม่ชัดเจนให้เป็นประสบการณ์ที่เข้าใจง่ายและมีประโยชน์ โดยทำงานทั้งอินเทอร์เฟซ ระบบหลังบ้าน และฮาร์ดแวร์ต้นแบบ",
    location: "อยู่ที่แม่จัน เชียงราย ประเทศไทย",
    aboutEnd:
      "ตั้งใจสร้างผลงานที่ดี เรียนรู้อย่างต่อเนื่อง และเขียนโค้ดอย่างรับผิดชอบ",
    skillsLabel: "02 / ทักษะ",
    skillsTitle: "เครื่องมือที่ใช้",
    skillsTitleLine: "เพื่อสร้างผลงาน",
    projectsLabel: "03 / ผลงานที่คัดเลือก",
    projectsTitle: "สิ่งที่ผมสร้าง",
    projectNote: "ดูรายละเอียดโปรเจกต์",
    focusLabel: "04 / ความสนใจด้านเทคนิค",
    focusTitle: "เรียนรู้ผ่านการ",
    focusTitleLine: "ลงมือสร้าง",
    academic: "โปรเจกต์ด้านการเรียนและเทคนิค",
    openTo: "เปิดรับโอกาสฝึกงาน งานวิศวกรรม และงานฟรีแลนซ์",
    contactLabel: "05 / ติดต่อ",
    contactTitle: "มีปัญหาที่น่าสนใจไหม?",
    contactCopy: "เล่าเกี่ยวกับสิ่งที่คุณกำลังทำ ผมจะติดต่อกลับทางอีเมล",
    name: "ชื่อของคุณ",
    email: "อีเมลของคุณ",
    message: "เล่าเกี่ยวกับโปรเจกต์เล็กน้อย",
    emailDraft: "เปิดร่างอีเมล",
    builtWith: "สร้างด้วย Next.js / TypeScript",
    language: "English",
    project: "โปรเจกต์",
    technology: "เทคโนโลยี",
    openProject: "เปิดโปรเจกต์",
    close: "ปิดรายละเอียดโปรเจกต์",
  },
} as const;

function LanguageFlag({ language }: { language: "en" | "th" }) {
  return <span aria-hidden="true" className={`language-flag ${language === "th" ? "language-flag-th" : "language-flag-gb"}`} />;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<keyof typeof translations>("en");
  const [activeSection, setActiveSection] = useState("home");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [spotlightCategory, setSpotlightCategory] =
    useState<(typeof spotlightFilters)[number]>("Web");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const t = translations[language];

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);
  const spotlightProject =
    projects.find((project) => project.category === spotlightCategory) ??
    projects[0];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:sannyuntwin21@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="portfolio-shell portfolio-grid min-h-screen overflow-hidden">
      <SpacekitScene language={language} background />
      <AntigravityField />
      <nav className="fixed top-0 z-40 w-full border-b border-cyan-100/10 bg-[#080414]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 lg:px-8">
          <button
            onClick={() => goTo("home")}
            className="group flex items-center gap-3 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/40 text-sm font-bold text-cyan-100 transition-colors group-hover:bg-cyan-100 group-hover:text-[#120927]">
              HI
            </span>
            <span>
              <span className="block text-sm font-bold tracking-[0.16em] text-white">
                HANDSOME<span className="portfolio-accent">.</span>
              </span>
              <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-gray-500">
                {t.software}
              </span>
            </span>
          </button>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs transition-colors ${activeSection === id ? "bg-white/10 text-cyan-100" : "text-gray-400 hover:text-white"}`}
              >
                <Icon size={14} />
                {id === "about"
                  ? t.about
                  : id === "skills"
                    ? t.skills
                    : id === "projects"
                      ? t.projects
                      : t.focus}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => goTo("contact")}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white"
            >
              <Contact size={15} />
              {t.contact}
            </button>
            <div className="flex items-center gap-1 rounded-full border border-violet-300/40 p-1" aria-label="Choose language">
              <button type="button" onClick={() => setLanguage("en")} aria-label="English" title="English" className={`rounded-full p-2 ${language === "en" ? "bg-violet-400/30" : "opacity-45 hover:opacity-100"}`}><LanguageFlag language="en" /></button>
              <button type="button" onClick={() => setLanguage("th")} aria-label="ไทย" title="ไทย" className={`rounded-full p-2 ${language === "th" ? "bg-violet-400/30" : "opacity-45 hover:opacity-100"}`}><LanguageFlag language="th" /></button>
            </div>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 rounded-full border border-cyan-200/50 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-100 hover:text-slate-950"
            >
              <ArrowUpRight size={15} />
              {t.resume}
            </a>
          </div>
          <button
            className="rounded-full border border-white/10 p-2 text-gray-300 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0d0620] px-5 py-4 md:hidden">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm ${activeSection === id ? "bg-white/10 text-cyan-100" : "text-gray-300"}`}
              >
                <Icon size={17} />
                {id === "about"
                  ? t.about
                  : id === "skills"
                    ? t.skills
                    : id === "projects"
                      ? t.projects
                        : t.focus}
              </button>
            ))}
            <button
              onClick={() => goTo("contact")}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-gray-300"
            >
              <Contact size={17} />
              {t.contact}
            </button>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-violet-300/40 px-3 py-2" aria-label="Choose language">
              <button type="button" onClick={() => setLanguage("en")} aria-label="English" title="English" className={`rounded-full p-2 ${language === "en" ? "bg-violet-400/30" : "opacity-45"}`}><LanguageFlag language="en" /></button>
              <button type="button" onClick={() => setLanguage("th")} aria-label="ไทย" title="ไทย" className={`rounded-full p-2 ${language === "th" ? "bg-violet-400/30" : "opacity-45"}`}><LanguageFlag language="th" /></button>
            </div>
            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center gap-3 rounded-lg border border-cyan-200/40 px-3 py-3 text-sm font-semibold text-cyan-100"
            >
              <ArrowUpRight size={17} />
              {t.downloadResume}
            </a>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative flex min-h-[90vh] items-center px-5 pb-16 pt-32 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="space-orbit absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-cyan-200" />
          <div className="space-orbit absolute right-[14%] top-[18%] h-1.5 w-1.5 rounded-full bg-violet-300" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="welcome-banner writing-text mb-6 text-xl font-bold tracking-[0.08em] text-cyan-100 sm:text-2xl md:text-3xl">
              {t.welcome}
            </p>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] portfolio-accent">
              {t.label}
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
              {t.heroTitle}
              <br />
              <span className="portfolio-accent">{t.heroTitleLine}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              {t.heroCopy}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => goTo("projects")}
                className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-slate-950 hover:bg-lime-200"
              >
                {t.explore} <ArrowUpRight className="ml-2 inline" size={18} />
              </button>
              <button
                onClick={() => goTo("contact")}
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-lime-300/70 hover:text-lime-200"
              >
                {t.talk}
              </button>
            </div>
          </div>
          <div className="lg:mb-3">
            <div className="relative mb-8 max-w-xs">
              <PortraitCube />
              <span className="portrait-tag absolute bottom-4 left-4 z-10 border border-cyan-100/30 bg-[#03030a]/80 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur-sm">
                Bangkok / TH
              </span>
            </div>
            <div className="border-l border-lime-300/40 pl-6">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {t.mission}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                {t.missionCopy}
              </p>
              <div className="mt-8 flex gap-6 text-sm text-gray-500">
                <span>
                  <strong className="block text-2xl text-white">09</strong>
                  {t.projectsStat}
                </span>
                <span>
                  <strong className="block text-2xl text-white">03+</strong>
                  {t.years}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] portfolio-accent">
                {t.start}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {t.exploreQuestion}
              </h2>
            </div>
            <span className="hidden text-sm text-gray-600 md:block">
              {t.tour}
            </span>
          </div>
          <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:grid-cols-[0.8fr_1.2fr] md:p-6">
            <div className="flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {spotlightFilters.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSpotlightCategory(item)}
                    aria-pressed={spotlightCategory === item}
                    className={`rounded-full border px-4 py-2 text-sm ${spotlightCategory === item ? "border-lime-300 bg-lime-300 text-slate-950" : "border-white/15 text-gray-400 hover:border-lime-300/60 hover:text-white"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest portfolio-accent">
                  {t.featured} {spotlightProject.category} {t.build}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  {spotlightProject.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-gray-400">
                  {spotlightProject.description}
                </p>
                <button
                  onClick={() => setSelectedProject(spotlightProject)}
                  className="mt-6 font-semibold text-lime-200 hover:text-lime-100"
                >
                  {t.projectNote}{" "}
                  <ArrowUpRight className="ml-1 inline" size={17} />
                </button>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-xl">
              <Image
                src={spotlightProject.image}
                alt={spotlightProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] portfolio-accent">
                {t.aboutLabel}
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                {t.aboutTitle}
                <br />
                {t.aboutTitleLine}
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-gray-500 md:block">
              {t.aboutAside}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="max-w-2xl text-2xl leading-relaxed text-gray-200">
                {t.aboutCopy}
              </p>
            </div>
            <div className="text-sm leading-relaxed text-gray-400">
              <p>{t.location}</p>
              <p className="mt-4">
                {t.aboutEnd}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-white/10 bg-black/10 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] portfolio-accent">
              {t.skillsLabel}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {t.skillsTitle}
              <br />
              {t.skillsTitleLine}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-[#15191b] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white">
                  {language === "th"
                    ? group.title === "Web development" ? "การพัฒนาเว็บ" : group.title === "IoT & embedded" ? "IoT และระบบฝังตัว" : group.title === "Data & AI" ? "ข้อมูลและ AI" : "เครื่องมือและแพลตฟอร์ม"
                    : group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <WorldGlobe language={language} />
        </div>
      </section>

      <section id="projects" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] portfolio-accent">
                {t.projectsLabel}
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                {t.projectsTitle}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={`rounded-full border px-4 py-2 text-sm ${filter === item ? "border-lime-300 bg-lime-300 text-slate-950" : "border-white/15 text-gray-400 hover:border-lime-300/60 hover:text-white"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-lime-300/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest portfolio-accent">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-gray-500 hover:text-lime-300"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-5 text-sm font-semibold text-lime-200 hover:text-lime-100"
                  >
                    {t.projectNote} <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-black/10 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] portfolio-accent">
              {t.focusLabel}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {t.focusTitle}
              <br />
              {t.focusTitleLine}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.number} className="bg-[#15191b] p-6 md:p-8">
                <span className="text-sm portfolio-accent">{area.number}</span>
                <h3 className="mt-10 text-xl font-semibold text-white">
                  {language === "th"
                    ? area.number === "01" ? "การพัฒนาซอฟต์แวร์" : area.number === "02" ? "ระบบฝังตัว" : "AI ประยุกต์"
                    : area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {language === "th"
                    ? area.number === "01" ? "สร้างอินเทอร์เฟซแบบตอบสนองและแอปพลิเคชันฟูลสแตกตั้งแต่แนวคิดจนถึงการใช้งานจริง" : area.number === "02" ? "เชื่อมต่อฮาร์ดแวร์ เซนเซอร์ และอินเทอร์เฟซผ่านต้นแบบ IoT ที่ใช้งานได้จริง" : "สำรวจคอมพิวเตอร์วิทัศน์ แมชชีนเลิร์นนิง และเครื่องมือด้านความปลอดภัยที่มีประโยชน์"
                    : area.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
            <span>{t.academic}</span>
            <span>
              {t.openTo}
            </span>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 border-t border-white/10 pt-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] portfolio-accent">
              {t.contactLabel}
            </p>
            <h2 className="max-w-xl text-5xl font-bold leading-none tracking-tight text-white md:text-7xl">
              {t.contactTitle}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
              {t.contactCopy}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/sannyuntwin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-lime-300"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/saw-san-nyunt-win-b06a1a227/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-lime-300"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:sannyuntwin21@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-lime-300"
              >
                <Mail />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              placeholder={t.name}
              className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-gray-600 focus:border-lime-300 focus:outline-none"
            />
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              placeholder={t.email}
              className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-gray-600 focus:border-lime-300 focus:outline-none"
            />
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(event) =>
                setFormData({ ...formData, message: event.target.value })
              }
              placeholder={t.message}
              className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-gray-600 focus:border-lime-300 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-slate-950 hover:bg-lime-200"
            >
              {t.emailDraft}{" "}
              <ArrowUpRight className="ml-2 inline" size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="px-5 pb-8 pt-4 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-widest text-gray-600 md:flex-row">
          <span>© 2026 Saw San Nyunt Win</span>
          <span>{t.builtWith}</span>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-lime-300/20 bg-[#171b1d] p-7 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest portfolio-accent">
                  {selectedProject.category}
                </p>
                <h2
                  id="project-title"
                  className="text-2xl font-bold text-white"
                >
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="text-gray-500 hover:text-white"
              >
                <X />
              </button>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {t.projectNote}
                </p>
                <p className="mt-2 leading-relaxed text-gray-300">
                  {selectedProject.description}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {t.technology}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-lime-300/10 px-3 py-1 text-sm text-lime-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-lime-300 px-5 py-3 font-semibold text-slate-950 hover:bg-lime-200"
            >
                {t.openProject} <ArrowUpRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
