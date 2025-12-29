import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X, ExternalLink, Code, Database, Smartphone, Network, ChevronRight, Star, GitFork } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    backend: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'Angel Dart', 'RESTful APIs', 'Authentication & Security'],
    frontend: ['Flutter', 'Dart', 'React.js', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
    tools: ['Git & GitHub', 'Postman', 'ThunderClient', 'API Testing'],
    network: ['Network Troubleshooting', 'Routers & Switches', 'Firewalls', 'CRM Systems']
  };

  const experience = [
    {
      title: 'Flutter Developer & Customer Support',
      company: 'DUKAKIT',
    //   period: 'April 2025 – Present',
      highlights: [
        'Built and maintained Dukakit\'s POS mobile app using Flutter',
        'Handled customer support, resolving user issues and guiding clients',
        'Gathered user feedback to improve app functionality',
        'Trained small business owners on POS system usage'
      ]
    },
    {
      title: 'Junior Developer & Digital Marketer',
      company: 'WEBINC TECHNOLOGIES',
    //   period: 'December 2024 - Present',
      highlights: [
        'Developed and maintained backend services using Node.js & Express.js',
        'Built and tested RESTful APIs to streamline business operations',
        'Implemented SEO strategies to improve digital presence',
        'Assisted in digital marketing campaigns and social media management'
      ]
    },
    {
      title: 'Junior Mobile Developer & System Support',
      company: 'VIEWTECH LIMITED',
    //   period: 'January 2024 - November 2024',
      highlights: [
        'Built Flutter mobile applications with API integration',
        'Assisted in network troubleshooting and system integration',
        'Integrated SasaPay API for digital payment solutions',
        'Implemented basic authentication and security measures'
      ]
    },
      {
      title: 'Freelance Developer',
      highlights: [
        'As a freelance developer, I design, develop, and deploy digital solutions for individuals, startups, and small businesses. My work focuses on building user-friendly websites, API-powered applications, and mobile apps that improve business operations and customer engagement. I manage full project cycles from requirements gathering and UI/UX planning to development, testing, deployment, and basic client training.'
      ]
    }
  ];

  const projects = [
    {
      title: 'WebInc Website',
      description: 'A professional Node.js backend for handling contact form submissions with email functionality, built with Express.js and structured for scalability.',
      tech: ['HTML', 'CSS', 'JavaScript' ],
      category: 'Website',
      github: 'https://github.com/Nimmoh/webInc',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience. Built with responsive design and modern web technologies.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      github: 'https://github.com/Nimmoh/joy-porfolio_site',
      featured: true
    },
      {
      title: 'Construction Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience. Built with responsive design and modern web technologies.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      github: 'https://github.com/Nimmoh/construction-website',
      featured: true
    },
  
      {
      title: 'CarWash Management System',
      description: 'A comprehensive React-based management system for car wash businesses with real-time tracking of services, payments, and expenses.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      github: 'https://github.com/Nimmoh/carwash-management',
      featured: true
    },
     {
      title: 'E-commerce Website',
      description: 'A complete e-commerce platform for tiles, terrazzo, and hardware products with advanced features including product visualization, tile calculator, order tracking, and customer account management.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      github: 'https://github.com/Nimmoh/spearmode',
      featured: true
    },
    // {
    //   title: 'Dukakit POS System',
    //   description: 'A comprehensive Point of Sale mobile application for small businesses, featuring inventory management, sales tracking, and customer management.',
    //   tech: ['Flutter', 'Dart', 'API Integration'],
    //   category: 'Mobile',
    //   featured: true
    // },
    // {
    //   title: 'RESTful API Services',
    //   description: 'Backend services and APIs built for various business operations including authentication, data management, and payment processing.',
    //   tech: ['Node.js', 'Express.js', 'MongoDB'],
    //   category: 'Backend'
    // },
    {
      title: 'API Integration',
      description: 'Digital payment solution integration enabling secure mobile money transactions for business applications.',
      tech: ['Flutter', 'API Integration', 'Security'],
      category: 'Mobile'
    },
    // {
    //   title: 'Business Web Applications',
    //   description: 'Full-stack web applications featuring responsive design, API integration, and database management for client business needs.',
    //   tech: ['React.js', 'Node.js', 'MongoDB'],
    //   category: 'Full-Stack'
    // }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Jomo Kenyatta University of Agriculture and Technology',
    //   period: '2019 - 2023'
    },
   
    {
      degree: 'Mobile Software Development',
      institution: 'EMobilis Mobile Technology Institute',
    //   period: 'February - June 2018'
    },
    
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        .orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .syne {
          font-family: 'Syne', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-card {
          position: relative;
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          transition: all 0.3s ease;
        }
        
        .glow-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 165, 250, 0.3);
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
        }
        
        .skill-tag {
          background: rgba(96, 165, 250, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }
        
        .skill-tag:hover {
          background: rgba(96, 165, 250, 0.2);
          border-color: rgba(96, 165, 250, 0.5);
          transform: scale(1.05);
        }
        
        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .project-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.4));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .project-card:hover::before {
          left: 100%;
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(96, 165, 250, 0.4);
          box-shadow: 0 20px 40px rgba(96, 165, 250, 0.15);
        }
        
        .bg-grid {
          background-image: 
            linear-gradient(rgba(96, 165, 250, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .contact-btn {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
        }
        
        .contact-btn:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="orbitron text-2xl font-bold gradient-text">
              JOY NDABARI
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize text-sm font-medium ${activeSection === section ? 'text-blue-400 active' : 'text-slate-300 hover:text-blue-400'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 fade-in">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 capitalize text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition-all"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center fade-in">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 floating">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Code size={48} className="text-blue-400" />
                </div>
              </div>
            </div>
            
            <h1 className="syne text-6xl md:text-7xl font-black mb-4">
              <span className="gradient-text">JOY NDABARI</span>
              <br />
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-4 font-medium">
              Full-Stack Developer & IT Specialist
            </p>
            
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
              Passionate about building scalable applications with expertise in mobile development, 
              backend systems, and network administration.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a href="mailto:ndabari79@gmail.com" className="contact-btn px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </a>
              <a href="https://github.com/Nimmoh" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-semibold border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
              <a href="www.linkedin.com/in/joy-ndabari-36897a165"
               target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-semibold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-slate-400">
              <div>
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-slate-700"></div>
              <div>
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="h-12 w-px bg-slate-700"></div>
              <div>
                <div className="text-3xl font-bold text-pink-400">4</div>
                <div className="text-sm">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title gradient-text text-center slide-in-left">About Me</h2>
          
          <div className="glow-card rounded-2xl p-8 md:p-12 fade-in">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Results-driven Information Technology professional with experience in designing, developing, and optimizing 
              scalable applications. I specialize in creating user-friendly solutions that bridge the gap between technical 
              excellence and business needs.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My expertise spans across <span className="text-blue-400 font-semibold">mobile development with Flutter</span>, 
              <span className="text-purple-400 font-semibold"> backend services with Node.js</span>, and 
              <span className="text-pink-400 font-semibold"> network administration</span>. I'm passionate about delivering 
              high-quality code, maintaining system performance, and creating seamless API integrations.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently working at multiple tech companies, I'm continuously expanding my knowledge in advanced IT infrastructure 
              and system optimization. I believe in writing clean, maintainable code and providing exceptional technical support 
              to ensure smooth business operations.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail size={20} className="text-blue-400" />
                <span>ndabari79@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-blue-400">📱</span>
                <span>+254 706 025 696</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title gradient-text text-center slide-in-left">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Backend Development */}
            <div className="glow-card rounded-2xl p-8 fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Database size={28} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold syne text-blue-400">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frontend & Mobile */}
            <div className="glow-card rounded-2xl p-8 fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Smartphone size={28} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold syne text-purple-400">Frontend & Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Network & System Admin */}
            <div className="glow-card rounded-2xl p-8 fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-500/10 rounded-lg">
                  <Network size={28} className="text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold syne text-pink-400">Network & System Admin</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.network.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools & Version Control */}
            <div className="glow-card rounded-2xl p-8 fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Code size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold syne text-cyan-400">Tools & Version Control</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title gradient-text text-center slide-in-left">Professional Experience</h2>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="glow-card rounded-2xl p-8 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold syne text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-xl text-slate-300 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 mt-2 md:mt-0 font-medium">{exp.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-slate-300">
                      <ChevronRight size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title gradient-text text-center slide-in-left">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card rounded-2xl p-8" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold syne text-slate-100">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-xs font-semibold border border-yellow-500/30 flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all group"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                    <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-slate-500 font-semibold cursor-default">
                    <Code size={18} />
                    <span>Private Repository</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title gradient-text text-center slide-in-left">Education & Certification</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glow-card rounded-2xl p-8 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <h3 className="text-xl font-bold syne text-blue-400 mb-2">{edu.degree}</h3>
                <p className="text-lg text-slate-300 font-semibold mb-1">{edu.institution}</p>
                <p className="text-slate-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title gradient-text slide-in-left">Let's Work Together</h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:ndabari79@gmail.com" className="contact-btn px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-lg">
              <Mail size={24} />
              ndabari79@gmail.com
            </a>
            <a href="https://github.com/Nimmoh" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-3 text-lg">
              <Github size={24} />
              GitHub
            </a>
            <a href="www.linkedin.com/in/joy-ndabari-36897a165" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all flex items-center gap-3 text-lg">
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <span></span>
              <span>+254 706 025 696</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <span></span>
              <span>+254 727 834 901</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          <p className="orbitron">© 2025  Joy Ndabari . </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;