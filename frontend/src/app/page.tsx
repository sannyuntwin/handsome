"use client";
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  Award,
  Download,
  ArrowUp,
  Moon,
  Sun,
  Check,
  Calendar,
  Star,
  Heart,
  Zap,
  Palette,
  Database,
  Cloud,
  Terminal,
  GitBranch,
  Cpu,
  Smartphone,
  Activity
} from 'lucide-react';
import Link from 'next/link';


interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  metrics?: string;
}

interface Skill {
  name: string;
  level: number;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 50);
      setShowBackToTop(scrollTop > 500);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "ESP32 IoT Car",
      description: "A smart IoT car controlled via mobile hotspot with real-time sensor feedback and autonomous navigation features.",
      tech: ["ESP32", "Arduino", "React Native", "IoT"],
      link: "https://github.com/sannyuntwin/esp32-wifi-controll-car",
      image: "/img/iot-car.jpg",
      metrics: "50% faster response time"
    },
    {
      id: 2,
      title: "Full-Stack University Marketplace",
      description: "Developing modern e-commerce platforms with seamless payment integration, inventory management, and responsive design.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://mfu-2ndhand.vercel.app/",
      image: "/img/2nd-mfu.png",
      metrics: "10K+ monthly users"
    },
    {
      id: 3,
      title: "Hand Gesture Recognition",
      description: "Python OpenCV project to recognize hand gestures in real-time, used for automation and smart interfaces.",
      tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      link: "https://github.com/sannyuntwin/hand-gesture-recognition-with-python-opencv",
      image: "/img/hand-gesture.png",
      metrics: "Real-time sync < 100ms"
    },
    {
      id: 4,
      title: "Camp Booking System ",
      description: "Web application for booking camping sites with user authentication, availability calendar, and payment processing.",
      tech: ["React", "TypeScript", "NextJs"],
      link: "https://icampjp.vercel.app/",
      image: "/img/icamp.png",
      metrics: "Real-time sync < 100ms"
    },
    {
      id: 5,
      title: "Travel Vlog Website",
      description: "Travel vlog and blog web app to share thai travel experiences with integrated video content and user comments.",
      tech: ["MongoDb", "Express", "React", "Node.js"],
      link: "https://www.cantwait2say.com/",
      image: "/img/cantwait2say.png",
      metrics: "Real-time sync < 100ms"
    },
    {
      id: 6,
      title: "Smart Home Automation",
      description: "ESP32-based smart home system to control LED lights and fans via mobile or web interface.",
      tech: ["ESP32", "Arduino", "IoT", "MQTT"],
      link: "https://www.youtube.com/watch?v=aTisVD-V10I&t=61s",
      image: "/img/smart-home.jpg",
      metrics: "Latency < 200ms"
  },
  ];

  const skills: Skill[] = [
    { name: "Frontend Development (Web & Mobile)", level: 95 },
    { name: "Backend & API Architecture", level: 90 },
    { name: "IoT & Embedded Systems", level: 85 },
    { name: "Database & Data Analytics", level: 88 },
    { name: "Machine Learning & AI", level: 80 },
    { name: "Cloud & DevOps", level: 82 }
  ];

  const technologies = [
    // Frontend
    { name: "React", icon: <Code className="w-8 h-8" /> },
    { name: "Next.js", icon: <Zap className="w-8 h-8" /> },
    { name: "React Native", icon: <Smartphone className="w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-8 h-8" /> },
    { name: "Vue.js", icon: <Code className="w-8 h-8" /> },

    // Backend & API
    { name: "Node.js", icon: <Terminal className="w-8 h-8" /> },
    { name: "Express", icon: <Terminal className="w-8 h-8" /> },
    { name: "Python", icon: <Code className="w-8 h-8" /> },
    { name: "FastAPI", icon: <Code className="w-8 h-8" /> },
    { name: "Django", icon: <Code className="w-8 h-8" /> },

    // Databases
    { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
    { name: "Firebase", icon: <Cloud className="w-8 h-8" /> },
    // { name: "Redis", icon: <Database className="w-8 h-8" /> },

    // Cloud & DevOps
    // { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
    { name: "Docker", icon: <Cpu className="w-8 h-8" /> },
    // { name: "Kubernetes", icon: <Cpu className="w-8 h-8" /> },
    // { name: "Terraform", icon: <Activity className="w-8 h-8" /> },
    { name: "Git", icon: <GitBranch className="w-8 h-8" /> },

    // IoT & Embedded
    { name: "ESP32 / Arduino", icon: <Cpu className="w-8 h-8" /> },
    { name: "Raspberry Pi", icon: <Cpu className="w-8 h-8" /> },
    { name: "MQTT & Sensors", icon: <Activity className="w-8 h-8" /> },

    // Data & ML
    { name: "TensorFlow", icon: <Code className="w-8 h-8" /> },
    { name: "PyTorch", icon: <Code className="w-8 h-8" /> },
    { name: "OpenCV", icon: <Code className="w-8 h-8" /> },
    { name: "Pandas / NumPy", icon: <Code className="w-8 h-8" /> }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: <Code className="w-8 h-8" />,
      features: ["Responsive Design", "Fast Performance", "SEO Optimized"]
    },
    {
      title: "AI Integration",
      description: "Integrate AI capabilities into your applications with Claude API",
      icon: <Zap className="w-8 h-8" />,
      features: ["Natural Language Processing", "Smart Automation", "Custom AI Solutions"]
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end development from database to user interface",
      icon: <Database className="w-8 h-8" />,
      features: ["Database Design", "API Development", "Cloud Deployment"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "John Smith",
      role: "Product Manager",
      company: "Tech Solutions Inc",
      text: "Outstanding work! Delivered a complex e-commerce platform that exceeded our expectations. Professional, communicative, and technically excellent.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "StartupXYZ",
      text: "Saw San brought our vision to life with beautiful code and amazing attention to detail. The AI integration was seamless and powerful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "Digital Innovations",
      text: "A talented developer who truly understands modern web technologies. Fast turnaround and excellent communication throughout the project.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2024",
      title: "AI Integration Specialist",
      description: "Focused on building AI-powered applications using Claude API and other cutting-edge technologies"
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      description: "Deepened expertise in React, Next.js, and backend development with Node.js"
    },
    {
      year: "2022",
      title: "Professional Freelancer",
      description: "Started taking on client projects and delivering production-ready applications"
    },
    {
      year: "2021",
      title: "The Beginning",
      description: "Started my coding journey with HTML, CSS, and JavaScript. Fell in love with web development"
    }
  ];

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 text-gray-900'}`}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-purple-900/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/95' : 'bg-white/95') + ' backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              HANDSOME
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-purple-600/20 transition-all"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-purple-600/20 transition-all"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-sm font-medium text-purple-300 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for freelance IoT, Web, AI/ML & Data Projects projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">HANDSOME</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Junior Full-Stack & IoT Developer<br />Data Scientist & Machine Learning Engineer</p>
          <p className="text-lg text-gray-400 mb-8">Based in Mae Chan, Chiang Rai, Thailand 🇹🇭</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => scrollToSection('projects')} className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Briefcase size={20} />
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-purple-600 hover:bg-purple-600 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <Mail size={20} />
              Contact Me
            </button>
            <a 
              href="/resume.pdf" 
              download="Saw_San_Nyunt_Win_Resume-2025.pdf"
              className="border-2 border-purple-600 hover:bg-purple-600 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">30+</div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
              <div className="text-sm text-gray-400">Years Coding</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Award className="inline mr-3" /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate self-taught developer who fell in love with coding and never looked back. My journey started with curiosity and grew into a passion for creating beautiful, functional web applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I specialize in modern JavaScript frameworks, with a particular focus on React and Next.js. Recently, I've been exploring AI integration, building applications powered by Claude API.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I'm learning new technologies, contributing to open-source projects, or exploring Northern Thailand. I believe in clean, maintainable code and creating experiences that users love.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Fun Facts About Me</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Love solving complex problems with elegant solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Committed to writing clean, documented code</p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Active GitHub contributor with multiple open-source projects</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Fast learner who embraces new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/30" />
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-5 w-6 h-6 bg-purple-600 rounded-full border-4 border-slate-900" />
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <div className="text-purple-400 font-bold mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center gap-3"
              >
                <div className="text-purple-400">{tech.icon}</div>
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline mr-3" /> Technical Skills
          </h2>
          <div className="grid gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Services I Offer</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive development services tailored to your needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <Check className="text-purple-400" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <Briefcase className="inline mr-3" /> Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A showcase of projects demonstrating my technical expertise and problem-solving abilities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:-translate-y-2"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Code className="text-purple-400" />
                    <a href={project.link} className="text-purple-400 hover:text-purple-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {project.metrics && (
                    <div className="text-sm text-purple-400 mb-2">⚡ {project.metrics}</div>
                  )}
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Client Testimonials</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients say about working with me
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section with Form */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8 text-center">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Have a project in mind? Let's discuss how I can help bring your vision to life
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-700 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-700 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-700 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500"
                  >
                    <option value="">Select a type</option>
                    <option value="web">Web Development</option>
                    <option value="ai">AI Integration</option>
                    <option value="fullstack">Full-Stack Application</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-700 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {formSubmitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:sannyuntwin21@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="text-purple-400" />
                    sannyuntwin21@gmail.com
                  </a>
                  <a href="https://github.com/handsome1123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Github className="text-purple-400" />
                    github.com/handsome1123
                  </a>
                  <a href="https://www.linkedin.com/in/saw-san-nyunt-win-b06a1a227/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin className="text-purple-400" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-gray-300 mb-4">
                  Prefer to discuss your project over a call? Book a free 30-minute consultation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-purple-600 hover:bg-purple-600 px-6 py-2 rounded-lg font-semibold transition-all"
                >
                  <Calendar size={20} />
                  Book a Call
                </a>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond within 24 hours. For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/handsome1123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/20 transition-all transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saw-san-nyunt-win-b06a1a227/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/20 transition-all transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sannyuntwin21@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/20 transition-all transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                <Link href={'mfu-journey'}>Saw San Nyunt Win</Link>
              </h3>
              <p className="text-gray-400 text-sm">
                Full-Stack Developer passionate about creating innovative web solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'about', 'projects', 'services', 'contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className="block text-gray-400 hover:text-purple-400 transition-colors capitalize"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/handsome1123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/saw-san-nyunt-win-b06a1a227/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:sannyuntwin21@gmail.com" className="text-gray-400 hover:text-purple-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Saw San Nyunt Win. Built with React & TypeScript.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Made with <Heart className="inline w-4 h-4 text-red-500" /> in Thailand
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;