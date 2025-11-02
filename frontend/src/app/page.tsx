import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Design System",
      description: "Comprehensive UI component library for enterprise applications",
      tags: ["TypeScript", "Storybook", "CSS"],
      link: "#"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with real-time features",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "React & Next.js", "Node.js", 
    "Python", "UI/UX Design", "Git & CI/CD"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">YourName</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
            <a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Projects</a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">Hi, I'm HANDSOME</h2>
            </div>
          </div>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 mt-6 max-w-2xl">
            Full-Stack Developer & Designer crafting beautiful digital experiences
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mt-4 max-w-2xl leading-relaxed">
            I build modern web applications with a focus on user experience, performance, and clean code. 
            Passionate about creating solutions that make a difference.
          </p>
          <div className="flex gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">About Me</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                With over 5 years of experience in web development, I specialize in creating 
                responsive and intuitive applications that solve real-world problems.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm border border-zinc-200 dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Featured Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Code className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
                  <a 
                    href={project.link}
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mail className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Get In Touch</h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="mailto:sannyuntwin21@gmail.com"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Send Email
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/handsome1123" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/saw-san-nyunt-win-b06a1a227/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sannyuntwin21@gmail.com"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto text-center text-zinc-500 dark:text-zinc-500 text-sm">
          © 2025 HANDSOME. All rights reserved.
        </div>
      </footer>
    </div>
  );
}