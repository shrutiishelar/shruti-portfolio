'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, ArrowUp, Code2, Sparkles, Layers3,
  BrainCircuit, Menu, X, Mail, Phone, MapPin, Github, Linkedin,
  ExternalLink, Cpu, Workflow, ChevronRight, Copy, Check
} from "lucide-react";

const EMAIL = "shelarshruti543@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const projects = [
  {
    number: "01",
    title: "Covan AI",
    subtitle: "Legal Document Assistant",
    description: "A secure legal agreement management platform featuring an integrated legal chatbot and a complex text simplifier for enhanced document clarity.",
    tags: ["Full-stack", "Legal chatbot", "Text simplifier"],
    link: "https://coven-ai.vercel.app",
    label: "Explore live project"
  },
  {
    number: "02",
    title: "Event Management System",
    subtitle: "Admin + User apps and website",
    description: "A dual-platform system for event bookings, announcements, schedules and registration, with one-time QR coupon check-in and automated confirmation emails.",
    tags: ["Admin & user", "QR workflow", "Email automation"],
    link: "https://dnyanthon-eight.vercel.app",
    label: "Explore live project"
  },
  {
    number: "03",
    title: "Ingrezy",
    subtitle: "Recipe-Based Grocery Delivery",
    description: "A Flutter and Node.js application to discover recipes, view ingredients and order groceries through a shopping cart, with serving-based quantities and REST APIs.",
    tags: ["Flutter", "Node.js", "MongoDB Atlas", "Prisma ORM"]
  },
  {
    number: "04",
    title: "Car Style Studio",
    subtitle: "Freelancing · Live Project",
    description: "Admin and user web apps for car care services, with service packages, booking, Google Maps location services, admin database management and WhatsApp/email notifications.",
    tags: ["Booking", "Google Maps", "Notifications"],
    link: "https://car-style-2.vercel.app",
    label: "Explore live project"
  }
];

const skillGroups = [
  { title: "Programming", items: ["Java", "JavaScript"] },
  { title: "Frontend", items: ["HTML", "CSS", "React", "Next.js"] },
  { title: "Backend & databases", items: ["Node.js", "MongoDB", "SQL", "Firebase", "Firestore"] },
  { title: "Mobile development", items: ["Flutter", "Dart"] },
  { title: "Tools & platforms", items: ["Git", "GitHub", "VS Code", "Docker", "Vercel", "Render", "Antigravity", "AWS", "CMD"] },
  { title: "Soft skills", items: ["Teamwork", "Problem-solving", "Adaptability", "Critical thinking"] }
];

const education = [
  {
    year: "2027",
    title: "Bachelor of Technology (B.Tech)",
    detail: "Computer Science and Engineering · Currently pursuing",
    school: "Dnyanshree Institute of Engineering and Technology, Satara, Maharashtra"
  },
  {
    year: "2023",
    title: "Higher Secondary Certificate (HSC) — 12th",
    detail: "",
    school: "Chatrapati Shahu Academy and Science Junior College, Satara, Maharashtra"
  },
  {
    year: "2021",
    title: "Secondary School Certificate (SSC) — 10th",
    detail: "",
    school: "Ajinkyatara Madhyamik Vidyamandir, Shahunagar, Shendre, Satara, Maharashtra"
  }
];

function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All work");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filters = ["All work", "Academic", "Freelancing"];

  const shownProjects = projects.filter(
    (p, i) =>
      activeFilter === "All work" ||
      (activeFilter === "Academic" ? i < 3 : i === 3)
  );

  const closeMenu = () => setMenuOpen(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(EMAIL);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2400);
      }
    } catch (error) {
      console.error("Could not copy email address:", error);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {/* Sticky Header */}
      <header className="nav-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            Shruti Shelar<span>.</span>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#work" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let&apos;s connect <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <Reveal>
            <div className="availability">
              <span className="pulse-dot" /> OPEN TO FRESHER OPPORTUNITIES
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Building thoughtful<br />
              <span className="gradient-text">digital experiences.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-description">
              I&apos;m <strong>Shruti Kishor Shelar</strong> — an aspiring software developer exploring frontend technologies, databases, and hands-on product development.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <ArrowDownRight size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="hero-foot">
              <span><MapPin size={15} /> Satara, Maharashtra</span>
              <span className="tiny-divider" />
              <span>Computer Science & Engineering</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="hero-visual">
          <div className="visual-grid" />

          <motion.div
            className="orb orb-large"
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          >
            <span />
          </motion.div>

          <motion.div
            className="orb orb-small"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            <span />
          </motion.div>

          <motion.div
            className="monogram-card"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="monogram-top">
              <span className="status-light" /> PERSONAL DEV SPACE <span className="mini-dots">•••</span>
            </div>

            <div className="profile-photo-wrap">
              <Image
                src="/images/shruti.jpeg"
                alt="Shruti Shelar"
                width={220}
                height={220}
                className="profile-photo"
              />
            </div>

            <div className="monogram-caption">SHRUTI SHELAR <span>✦</span></div>
            <div className="monogram-role">SOFTWARE DEVELOPER</div>
          </motion.div>

          <motion.div
            className="float-chip chip-ai"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <BrainCircuit size={16} /> AI-minded builder
          </motion.div>

          <motion.div
            className="float-chip chip-code"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <Code2 size={16} /> Code · Create · Iterate
          </motion.div>

          <div className="visual-caption">
            <span className="caption-line" /> A little curiosity. A lot of building.
          </div>
        </Reveal>
      </section>

      {/* About Section */}
      <section className="section-shell about-section" id="about">
        <Reveal>
          <div className="section-label"><span>01</span> / A LITTLE ABOUT ME</div>

          <div className="section-heading-row">
            <h2>
              Curious by nature.<br />
              <span className="muted-heading">Developer by passion.</span>
            </h2>

            <p>
              Aspiring Software Developer with knowledge of Java, frontend technologies, databases, and hands-on project development experience in freelancing live projects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="objective-panel">
            <div className="objective-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <span className="micro-label">CAREER OBJECTIVE</span>
              <p>
                Seeking a fresher role in Software Development to leverage technical skills, gain practical experience, and contribute to organizational growth through innovation.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Skills Section */}
      <section className="section-shell skills-section" id="skills">
        <Reveal>
          <div className="section-label"><span>02</span> / MY TOOLKIT</div>

          <div className="section-heading-row">
            <h2>
              Skills that help me<br />
              <span className="muted-heading">turn ideas into code.</span>
            </h2>

            <p>
              Technologies and tools listed in my resume — growing through practice and projects.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal delay={i * 0.05} key={group.title}>
              <article className="skill-card">
                <div className="skill-card-top">
                  <span className="skill-index">0{i + 1}</span>
                  <ArrowUpRight size={16} />
                </div>

                <h3>{group.title}</h3>

                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="section-shell work-section" id="work">
        <Reveal>
          <div className="section-label"><span>03</span> / SELECTED WORK</div>

          <div className="section-heading-row">
            <h2>
              Projects with<br />
              <span className="muted-heading">purpose & personality.</span>
            </h2>

            <p>
              Academic builds and a freelancing live project, as described in my resume.
            </p>
          </div>
        </Reveal>

        <div className="filter-row">
          {filters.map((f) => (
            <button
              className={activeFilter === f ? "filter active" : "filter"}
              key={f}
              onClick={() => setActiveFilter(f)}
              type="button"
            >
              {f}
              {activeFilter === f && <span className="filter-dot" />}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {shownProjects.map((project, i) => (
            <Reveal delay={i * 0.08} key={project.number}>
              <article className="project-card">
                <div className="project-topline">
                  <span className="project-number">{project.number} / PROJECT</span>
                  <span className="project-arrow"><ArrowUpRight size={17} /></span>
                </div>

                <div className="project-art">
                  <div className="art-glow" />

                  <div className="art-symbol">
                    {i === 0 ? <BrainCircuit /> : i === 1 ? <Workflow /> : i === 2 ? <Layers3 /> : <Cpu />}
                  </div>

                  <span className="art-label">
                    {i === 0
                      ? "INTELLIGENCE / DOCUMENTS"
                      : i === 1
                        ? "EVENTS / AUTOMATION"
                        : i === 2
                          ? "RECIPES / COMMERCE"
                          : "SERVICES / BOOKING"}
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-subtitle">{project.subtitle}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.label} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section-shell education-section" id="education">
        <Reveal>
          <div className="section-label"><span>04</span> / LEARNING JOURNEY</div>

          <div className="section-heading-row">
            <h2>
              Education &<br />
              <span className="muted-heading">foundations.</span>
            </h2>

            <p>
              Building a strong foundation in computer science while gaining practical experience.
            </p>
          </div>
        </Reveal>

        <div className="education-list">
          {education.map((item, i) => (
            <Reveal delay={i * 0.08} key={item.year}>
              <article className="education-item">
                <div className="education-year">{item.year}</div>

                <div className="education-detail">
                  <h3>{item.title}</h3>
                  {item.detail && <p>{item.detail}</p>}
                  <span>{item.school}</span>
                </div>

                <ChevronRight className="education-chevron" size={18} />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-shell contact-section" id="contact">
        <Reveal>
          <div className="section-label"><span>05</span> / GET IN TOUCH</div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="contact-banner">
            <div className="contact-banner-glow" />
            <div className="contact-banner-grid" />
            <div className="contact-banner-orbit" />
            <div className="contact-banner-orbit-inner" />

            <div className="contact-banner-content">
              <div className="contact-eyebrow">
                <span className="pulse-dot" />
                <Sparkles size={14} />
                <span>NEXT CHAPTER · OPEN TO COLLABORATE</span>
              </div>

              <h2 className="contact-headline">
                Let&apos;s make something<br />
                <span className="gradient-text">meaningful.</span>
              </h2>

              <p className="contact-subtitle">
                Seeking a fresher role in Software Development. Whether you have an open opportunity,
                a project in mind, or simply want to connect — I&apos;d love to hear from you.
              </p>

              <div className="contact-cta-group">
                <motion.a
                  className="button button-primary contact-main-btn"
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={17} />
                  <span>Say hello</span>
                  <ArrowUpRight size={17} className="btn-arrow" />
                </motion.a>

                <button
                  className={`button button-ghost copy-email-btn ${copiedEmail ? "copied" : ""}`}
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} />
                      <span>Copied email!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact Cards */}
        <div className="contact-cards-grid">
          <Reveal delay={0.1}>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-contact-card"
              aria-label={`Send email to ${EMAIL}`}
            >
              <div>
                <div className="card-top">
                  <div className="card-icon-wrap purple">
                    <Mail size={22} />
                  </div>
                  <ArrowUpRight size={18} className="card-action-arrow" />
                </div>

                <span className="card-kicker">DIRECT EMAIL</span>
                <h3 className="card-value">{EMAIL}</h3>
              </div>

              <p className="card-hint">Click to open Gmail and send me a message</p>
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href="tel:+918766053655"
              className="glass-contact-card"
              aria-label="Call or WhatsApp Shruti Shelar"
            >
              <div>
                <div className="card-top">
                  <div className="card-icon-wrap cyan">
                    <Phone size={22} />
                  </div>
                  <ArrowUpRight size={18} className="card-action-arrow" />
                </div>

                <span className="card-kicker">PHONE / WHATSAPP</span>
                <h3 className="card-value">+91 8766053655</h3>
              </div>

              <p className="card-hint">Available for calls and messaging</p>
            </a>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="glass-contact-card">
              <div>
                <div className="card-top">
                  <div className="card-icon-wrap purple">
                    <MapPin size={22} />
                  </div>
                </div>

                <span className="card-kicker">CURRENT LOCATION</span>
                <h3 className="card-value">At. Post. Dolegaon, Satara</h3>
              </div>

              <p className="card-hint">Maharashtra, India · Open to relocate & remote</p>
            </div>
          </Reveal>
        </div>

        {/* Social Links & Spoken Languages */}
        <div className="contact-meta-row">
          <Reveal delay={0.26} className="meta-panel">
            <span className="micro-label">CONNECT SOCIALLY</span>

            <div className="social-pills">
              <a
                href="https://www.linkedin.com/in/shruti-shelar-a4781a2b1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill linkedin"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://github.com/shrutiishelar?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill github"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="meta-panel">
            <span className="micro-label">SPOKEN LANGUAGES</span>

            <div className="lang-chips">
              <span className="lang-chip"><span className="lang-dot" />English</span>
              <span className="lang-chip"><span className="lang-dot" />Marathi</span>
              <span className="lang-chip"><span className="lang-dot" />Hindi</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="resume-content">
          <span className="resume-label">MY RESUME</span>

          <h2>
            Explore My <span>Resume</span>
          </h2>

          <p>
            Learn more about my education, technical skills, projects,
            and professional journey.
          </p>

          <div className="resume-buttons">
            <a
              href="/Shruti%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn view-btn"
            >
              View Resume ↗
            </a>

            <a
              href="/Shruti%20Resume.pdf"
              download="Shruti_Shelar_Resume.pdf"
              className="resume-btn download-btn"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrap">
        <div className="footer-inner section-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="wordmark" href="#home" onClick={scrollToTop}>
                Shruti Shelar<span>.</span>
              </a>

              <p className="footer-tagline">
                Aspiring Software Developer passionate about building intuitive frontend applications,
                reliable databases, and hands-on digital products.
              </p>
            </div>

            <div className="footer-nav-groups">
              <div className="footer-col">
                <span className="footer-col-title">NAVIGATION</span>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#work">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="footer-col">
                <span className="footer-col-title">CONNECT</span>

                <a
                  href="https://www.linkedin.com/in/shruti-shelar-a4781a2b1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>

                <a
                  href="https://github.com/shrutiishelar?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} /> GitHub
                </a>

                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Shruti Kishor Shelar. All rights reserved.
            </p>

            <p className="footer-note">
              Designed with curiosity · Built with code
            </p>

            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              type="button"
              aria-label="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="top-arrow" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}