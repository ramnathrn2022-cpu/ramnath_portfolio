import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>RN</h2>
          </div>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ramnath R Nayak</span>
            </h1>

            <p className="hero-subtitle">
              AI & Data Science Student | Full Stack Developer | ML Enthusiast
            </p>

            <p className="hero-description">
              Passionate about building intelligent solutions and web applications.
              Exploring machine learning, data-driven applications and modern web technologies.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ramnathrn2022-cpu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/ramnathr13"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="mailto:ramnathrn2022@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="blob"></div>

            <div className="floating-card">
              <div className="card-content">
                <p>🎓 AI & DS Student</p>
              </div>
            </div>

            <div className="floating-card delay-1">
              <div className="card-content">
                <p>💻 Full Stack Developer</p>
              </div>
            </div>

            <div className="floating-card delay-2">
              <div className="card-content">
                <p>🤖 ML Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                Artificial Intelligence and Data Science undergraduate at
                NMAM Institute of Technology with knowledge of Python, Java,
                C, Machine Learning and Full Stack Development.
              </p>

              <p>
                Interested in building intelligent applications,
                machine learning solutions and scalable web applications.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h3>8.15</h3>
                  <p>CGPA</p>
                </div>

                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Projects</p>
                </div>

                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Certificates</p>
                </div>
              </div>
            </div>

            <div className="about-details">
              <div className="detail-group">
                <h3>Contact</h3>
                <p>Email: ramnathrn2022@gmail.com</p>
                <p>Phone: +91 6360759659</p>
              </div>

              <div className="detail-group">
                <h3>Languages</h3>
                <p>English, Hindi, Kannada, Tulu</p>
              </div>

              <div className="detail-group">
                <h3>Hobbies</h3>
                <p>Driving, Music, Visiting Temples</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Prisma</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Machine Learning</h3>
              <div className="skill-tags">
                <span className="skill-tag">Scikit-Learn</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Phishing Website Detection</h3>
              <p>
                Machine learning model to detect phishing websites using URL features.
              </p>
            </div>

            <div className="project-card">
              <h3>Hotel Management System</h3>
              <p>
                Full-stack hotel booking application using Next.js,
                Node.js and PostgreSQL.
              </p>
            </div>

            <div className="project-card">
              <h3>Flight Tracking System</h3>
              <p>
                Front-end application for tracking and displaying flight information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>B.E AI & Data Science</h3>
                <p>NMAMIT Nitte</p>
                <p>2023 - 2027 | CGPA 8.15</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>PUC</h3>
                <p>Vagdevi PU College</p>
                <p>82.16%</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>SSLC</h3>
                <p>72.64%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Email</h3>
              <p>ramnathrn2022@gmail.com</p>

              <h3>Phone</h3>
              <p>+91 6360759659</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Ramnath R Nayak</p>
      </footer>
    </div>
  )
}

export default App