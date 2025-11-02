import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Award, Download } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "Real-time analytics platform serving 10K+ daily active users with advanced data visualization and reporting capabilities.",
      tags: ["React", "TypeScript", "D3.js", "AWS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable microservices architecture handling 1M+ transactions monthly with integrated payment processing.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Mobile Banking App",
      description: "Secure cross-platform financial application with biometric authentication and real-time notifications.",
      tags: ["React Native", "Firebase", "Security"],
      link: "#",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      title: "AI Content Platform",
      description: "Machine learning-powered content generation system with natural language processing capabilities.",
      tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
      link: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient management system with telemedicine integration and secure data handling.",
      tags: ["Vue.js", "Django", "Redis", "WebRTC"],
      link: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      title: "DevOps Automation",
      description: "CI/CD pipeline orchestration tool reducing deployment time by 70% with automated testing and monitoring.",
      tags: ["Kubernetes", "Jenkins", "Terraform", "Go"],
      link: "#",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Architecture", level: 90 },
    { name: "Cloud Infrastructure", level: 85 },
    { name: "Database Design", level: 88 },
    { name: "DevOps & CI/CD", level: 82 },
    { name: "System Architecture", level: 90 }
  ];

  const achievements = [
    { number: "50+", label: "Projects Delivered" },
    { number: "8+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">SAW SAN NYUNT WIN - HANDSOME</h1>
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a href="#about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
            <a href="#expertise" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Expertise</a>
            <a href="#projects" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Portfolio</a>
            <a href="#contact" className="px-4 lg:px-5 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="md:hidden px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg text-sm font-medium">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4 sm:mb-6">
                Available for new opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6 leading-tight">
                Junior Developer <br />Engineer & Architect
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 leading-relaxed">
                Transforming complex business challenges into elegant, scalable solutions through innovative technology and strategic architecture.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-zinc-500 dark:text-zinc-500 mb-6 sm:mb-8 leading-relaxed">
                Specialized in building enterprise-grade applications, leading cross-functional teams, and delivering measurable business impact through cutting-edge software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <a 
                  href="#contact" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all hover:scale-105 text-center"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="#projects" 
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {achievements.map((item, index) => (
                  <div key={index}>
                    <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">{item.number}</div>
                    <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <img 
                  src="/img/IMG_2432.JPG"
                  alt="Professional headshot"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Award className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50">AWS Certified</div>
                    <div className="text-xs sm:text-sm text-zinc-500">Solutions Architect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                alt="Working on projects"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">
                Building Tomorrow's<br />Solutions Today
              </h3>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 sm:mb-4">
                With over 8 years of experience in software engineering, I've led the development of mission-critical applications for Fortune 500 companies and innovative startups alike. My expertise spans full-stack development, cloud architecture, and team leadership.
              </p>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                I believe in writing clean, maintainable code and building systems that scale. My approach combines technical excellence with business acumen to deliver solutions that drive real value.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  <Code className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 mb-2 sm:mb-3" />
                  <h4 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-1 sm:mb-2">Technical Leadership</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Leading engineering teams and establishing best practices</p>
                </div>
                <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500 mb-2 sm:mb-3" />
                  <h4 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-1 sm:mb-2">Solution Architecture</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Designing scalable systems for complex business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 sm:mb-4">Core Expertise</h3>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
              A comprehensive skill set built through years of hands-on experience and continuous learning
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between mb-3">
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50">{skill.name}</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 sm:mb-4">Featured Projects</h3>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
              A selection of impactful projects demonstrating technical excellence and business value
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h4 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h4>
                    <a 
                      href={project.link}
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                    </a>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 sm:px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">Let's Work Together</h3>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I'm currently available for consulting opportunities, contract work, and full-time positions. Let's discuss how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <a 
              href="mailto:sannyuntwin21@gmail.com"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              Email Me
            </a>
            <a 
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Schedule Call
            </a>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a 
              href="https://github.com/handsome1123" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
            >
              <Github className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/saw-san-nyunt-win-b06a1a227/"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
            >
              <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a 
              href="mailto:sannyuntwin21@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
            >
              <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
          <div>© 2025 John Anderson. All rights reserved.</div>
          <div className="text-center">Built with Next.js, TypeScript & Tailwind CSS</div>
        </div>
      </footer>
    </div>
  );
}