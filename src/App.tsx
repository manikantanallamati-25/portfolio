import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Braces, Database, Github, Linkedin, Mail, Menu, X,
  Layers3, Server, Sparkles, BrainCircuit, Wrench, MapPin
} from 'lucide-react';

const skills = [
  { title: 'Programming', items: ['Core Java', 'Python', 'Java DSA'], icon: Braces },
  { title: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], icon: Layers3 },
  { title: 'Backend', items: ['Spring Boot'], icon: Server },
  { title: 'Database', items: ['MySQL', 'SQL'], icon: Database },
  { title: 'AI & Machine Learning', items: ['NumPy', 'Pandas', 'Scikit-learn'], icon: BrainCircuit },
  { title: 'Tools', items: ['VS Code', 'Eclipse', 'Git', 'GitHub', 'Streamlit'], icon: Wrench },
];

const studentPredictionProject = 'https://github.com/manikantanallamati-25/student-performance-prediction';
const employeePayrollProject = 'https://github.com/manikantanallamati-25/Employee-Payroll-Management-System';
const linkedin = 'https://www.linkedin.com/in/manikanta-nallamati-2514053a1';
const github = 'https://github.com/manikantanallamati-25';

const projects = [
  {
    n: '01', type: 'PYTHON · MACHINE LEARNING · STREAMLIT', title: 'Student Performance Prediction System',
    text: 'A Streamlit application that predicts Mathematics scores with a Random Forest regressor. Explore student data, review model metrics and feature importance, compare actual and predicted scores, and view prediction history stored in MySQL.',
    tags: ['Python', 'Random Forest', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'MySQL', 'Streamlit'],
    link: studentPredictionProject,
  },
  {
    n: '03', type: 'JAVA · SPRING BOOT · MYSQL', title: 'E-Commerce Website — ShopNow',
    text: 'An e-commerce website built with Java and Spring Boot, with a MySQL-backed application and a responsive interface using HTML, CSS, JavaScript and Bootstrap.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: null,
  },
  {
    n: '04', type: 'JAVA · CONSOLE APPLICATION · PAYROLL', title: 'Employee Payroll Management System',
    text: 'A menu-driven Java application for managing employee records and generating payslips. Calculates HRA, DA, allowances, deductions, gross salary and net salary from basic pay.',
    tags: ['Java', 'Employee Management', 'Payroll', 'Salary Calculation', 'Console App'],
    link: employeePayrollProject,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Overview');
  const nav = [
    { label: 'Overview', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.scrollY + 180;
      let nextActive = 'Overview';

      for (const item of nav) {
        const section = document.getElementById(item.id);
        if (section && offset >= section.offsetTop) {
          nextActive = item.label;
        }
      }

      setActive(nextActive);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const go = (item: string) => {
    const target = nav.find(navItem => navItem.label === item)?.id ?? item.toLowerCase();
    setActive(item);
    setMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <span>NAGA SIVA MANIKANTA NALLAMATI / PORTFOLIO</span>
        <span>FULL-STACK SOFTWARE ENGINEER <i>●</i> BHIMAVARAM, INDIA</span>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Naga Siva Manikanta Nallamati home">
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-name">NAGA SIVA MANIKANTA NALLAMATI <small>PORTFOLIO</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(item => (
            <button key={item.label} className={active === item.label ? 'nav-item active' : 'nav-item'} onClick={() => go(item.label)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="nav-cta" onClick={() => go('Contact')}>LET'S CONNECT <ArrowUpRight size={15} /></button>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> OPEN TO IT OPPORTUNITIES <span className="eyebrow-line" /></div>
              <p className="hero-kicker">HELLO, I'M NAGA SIVA MANIKANTA NALLAMATI —</p>
              <h1>FULL-STACK<br /><em>SOFTWARE</em><br />ENGINEER<span className="period">.</span></h1>
              <div className="hero-bottom">
                <p className="hero-intro">Computer Science and Engineering graduate from Bhimavaram, building skills in Java, Python, web development and machine learning. Seeking an entry-level opportunity to learn and contribute.</p>
                <div className="hero-actions">
                  <button className="button-primary" onClick={() => go('Projects')}>EXPLORE MY WORK <ArrowUpRight size={16} /></button>
                  <button className="button-text" onClick={() => go('About')}>MORE ABOUT ME <ArrowDownRight size={16} /></button>
                </div>
              </div>
            </div>
            <div className="hero-aside">
              <div className="portrait-panel">
                <img className="profile-portrait" src="/resources/manikanta-nallamati-profile.webp" alt="Naga Siva Manikanta Nallamati — Full-Stack Software Engineer" loading="eager" fetchPriority="high" decoding="async" />
              </div>
            </div>
          </div>
          <div className="hero-meta">
            <span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span>
            <span>CSE GRADUATE · RECENT GRADUATE</span><span>© 2026</span>
          </div>
        </section>

        <section className="intro-strip">
          <span className="strip-label">MY APPROACH</span>
          <p>Curious by nature. <strong>Developer by practice.</strong><br />Learning from fundamentals, building projects and enjoying volleyball.</p>
          <Sparkles size={25} />
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><span className="section-rule" /></div>
          <div className="about-layout">
            <h2>BUILDING<br />MY NEXT <em>CHAPTER.</em></h2>
            <div className="about-copy">
              <p className="lead">I’m Naga Siva Manikanta Nallamati, a recent Computer Science and Engineering graduate from Bhimavaram, Andhra Pradesh.</p>
              <p>I’m starting my career in the IT industry and exploring opportunities as a software developer or junior engineer. I’m learning Core Java, Python, Spring Boot, databases and AI/ML through practical projects.</p>
              <p>I enjoy learning from the fundamentals, following step-by-step examples and turning what I learn into working projects. Outside my studies, I enjoy playing volleyball.</p>
              <div className="about-signoff">NAGA SIVA MANIKANTA NALLAMATI <span>— FULL-STACK SOFTWARE ENGINEER</span></div>
            </div>
          </div>
          <div className="about-facts">
            <div><span>01</span><strong>BHIMAVARAM</strong><small>Andhra Pradesh, India</small></div>
            <div><span>02</span><strong>CSE GRADUATE</strong><small>Recent B.Tech graduate</small></div>
            <div><span>03</span><strong>JOB SEEKER</strong><small>Open to entry-level IT roles</small></div>
          </div>
          <div className="career-objective">
            <span className="section-index">CAREER OBJECTIVE</span>
            <p>Motivated Computer Science and Engineering graduate seeking an entry-level opportunity in the IT industry. Interested in software development, Java, Python, and Artificial Intelligence. Eager to apply technical knowledge, develop practical solutions, learn emerging technologies, and contribute to organizational growth.</p>
          </div>
          <div className="learning-goals">
            <h3>WHAT I'M WORKING TOWARD</h3>
            <ol>
              <li>Build confidence in Core Java, OOP and Java DSA.</li>
              <li>Improve Python programming and AI/ML skills.</li>
              <li>Learn Spring Boot and full-stack development.</li>
              <li>Strengthen MySQL and SQL knowledge.</li>
              <li>Improve spoken English and communication.</li>
              <li>Build professional projects for my resume.</li>
              <li>Prepare for technical interviews and my first IT role.</li>
            </ol>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><span className="section-index">02 / TECHNICAL SKILLS</span><span className="section-rule" /></div>
          <div className="section-title-row">
            <h2>TOOLS OF<br /><em>THE TRADE.</em></h2>
            <p>Developing practical skills across programming, web technologies, databases and machine learning.</p>
          </div>
          <div className="skill-grid">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return <article className="skill-card" key={s.title}>
                <div className="skill-card-top"><span>{String(i + 1).padStart(2, '0')}</span><Icon size={23} /></div>
                <h3>{s.title}</h3>
                <div className="skill-tags">{s.items.map(x => <span key={x}>{x}</span>)}</div>
              </article>;
            })}
          </div>
          <p className="skill-note">Learning step by step through practical examples, projects and consistent practice.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><span className="section-index">03 / SELECTED PROJECTS</span><span className="section-rule" /></div>
          <div className="section-title-row">
            <h2>BUILT TO<br /><em>LEARN.</em></h2>
            <p>Projects where I’m applying what I learn in machine learning, Java applications and web development.</p>
          </div>
          <div className="project-list">
            {projects.map(p => <article className={p.n === '01' ? 'project-row featured-project' : 'project-row'} key={p.n}>
              <div className="project-number">{p.n}</div>
              <div className="project-main">
                <span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p>
                <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                {p.link && <a className="project-repo-link" href={p.link} target="_blank" rel="noreferrer">VIEW PROJECT ON GITHUB <ArrowUpRight size={14} /></a>}
              </div>
              {p.link && <div className="project-arrow"><a href={p.link} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}><ArrowUpRight size={22} /></a></div>}
            </article>)}
          </div>
          <p className="project-disclaimer">A GitHub link is included where one was provided.</p>
        </section>

        <section className="education-band" id="education">
          <div className="education-inner">
            <div><span className="section-index light">04 / EDUCATION</span><h2>FOUNDATION<br />IN <em>ENGINEERING.</em></h2></div>
            <div className="education-detail">
              <span>B.TECH · CSE</span><h3>B.Tech — Computer Science and Engineering</h3>
              <p>Recent graduate, building a foundation in software development, programming and machine learning.</p>
              <div className="edu-status"><span className="status-dot" /> RECENT GRADUATE · OPEN TO ENTRY-LEVEL ROLES</div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading"><span className="section-index">05 / CONTACT</span><span className="section-rule" /></div>
          <div className="contact-content">
            <div>
              <span className="eyebrow">HAVE AN OPPORTUNITY?</span>
              <h2>LET'S BUILD<br /><em>SOMETHING.</em></h2>
              <p>I’m looking for my first opportunity in software development or as a junior engineer. I’m based in Bhimavaram, Andhra Pradesh.</p>
            </div>
            <div className="contact-card">
              <span>CAREER STATUS</span><h3>Fresher.<br />Job seeker.</h3>
              <p>Interested in entry-level software developer and junior engineer opportunities.</p>
              <a className="contact-link" href="mailto:manikantanallamati25@gmail.com"><span><Mail size={15} /> EMAIL ME</span><ArrowUpRight size={17} /></a>
              <div className="contact-socials">
                <a href={studentPredictionProject} target="_blank" rel="noreferrer"><Github size={15} /> STUDENT PERFORMANCE PROJECT <ArrowUpRight size={13} /></a>
                <a href={github} target="_blank" rel="noreferrer"><Github size={15} /> GITHUB PROFILE <ArrowUpRight size={13} /></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LINKEDIN PROFILE <ArrowUpRight size={13} /></a>
                <span><MapPin size={15} /> BHIMAVARAM, ANDHRA PRADESH</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#home">NAGA SIVA MANIKANTA NALLAMATI<span>.</span></a>
        <span>DESIGNED WITH CLARITY. BUILT WITH CURIOSITY.</span>
        <div className="footer-socials">
          <a href={studentPredictionProject} target="_blank" rel="noreferrer" aria-label="Student Performance Prediction project on GitHub"><Github size={15} /></a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={15} /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={15} /></a>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</button>
        <small>© 2026 NAGA SIVA MANIKANTA NALLAMATI · PERSONAL IT PORTFOLIO</small>
      </footer>
    </div>
  );
}

export default App;
