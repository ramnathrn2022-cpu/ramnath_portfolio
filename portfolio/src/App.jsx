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
      {/* Navigation */}
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

      {/* Hero Section */}
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
              Exploring machine learning, data-driven applications, and modern web technologies.
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
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/ramnathrn2022-cpu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ramnathr13" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:ramnathrn2022@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+916360759659" aria-label="Phone">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <p>🎓 AI/DS Student at NMAMIT</p>
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
            <div className="blob"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate AI and Data Science undergraduate at NMAM Institute of Technology with a strong foundation in programming and machine learning. With hands-on experience in building full-stack web applications and ML models, I'm driven to create data-driven solutions that make a real impact.
              </p>
              <p>
                I thrive at the intersection of data science and web development, combining analytical skills with modern web technologies to build intelligent applications. My goal is to leverage technology to solve complex problems and contribute to innovative projects.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>8.15/10</h3>
                  <p>CGPA</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h3>3</h3>
                  <p>Certifications</p>
                </div>
              </div>
            </div>
            <div className="about-details">
              <div className="detail-group">
                <h3>📱 Contact</h3>
                <p><strong>Phone:</strong> +91-6360759659</p>
                <p><strong>Email:</strong> ramnathrn2022@gmail.com</p>
                <p><strong>GitHub:</strong> ramnathrn2022-cpu</p>
                <p><strong>LinkedIn:</strong> ramnathr13</p>
              </div>
              <div className="detail-group">
                <h3>🌍 Languages</h3>
                <p>English, Hindi, Kannada, Tulu</p>
              </div>
              <div className="detail-group">
                <h3>🎯 Interests</h3>
                <p>Machine Learning, Data Science, Web Development, AI Applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web & Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Prisma</span>
                <span className="skill-tag">Vite</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Machine Learning</h3>
              <div className="skill-tags">
                <span className="skill-tag">Supervised Learning</span>
                <span className="skill-tag">Classification</span>
                <span className="skill-tag">Feature Engineering</span>
                <span className="skill-tag">Model Evaluation</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Libraries & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Jupyter</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Core Concepts</h3>
              <div className="skill-tags">
                <span className="skill-tag">Data Structures</span>
                <span className="skill-tag">Algorithms</span>
                <span className="skill-tag">Database Design</span>
                <span className="skill-tag">RESTful APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Time Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Phishing Website Detection</h3>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">ML</span>
                  <span className="tag">Scikit-learn</span>
                </div>
              </div>
              <p className="project-description">
                Developed a machine learning model to detect phishing websites using URL and domain-based features.
              </p>
              <ul className="project-features">
                <li>Data preprocessing and feature extraction using Pandas and NumPy</li>
                <li>Trained classification models with performance evaluation</li>
                <li>Achieved high accuracy in phishing detection</li>
              </ul>
              <div className="project-tech">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Scikit-learn</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Hotel Management System</h3>
                <div className="project-tags">
                  <span className="tag">Full Stack</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">PostgreSQL</span>
                </div>
              </div>
              <p className="project-description">
                Full-stack web application supporting hotel room bookings and administrative workflows.
              </p>
              <ul className="project-features">
                <li>Backend APIs using Node.js with PostgreSQL integration</li>
                <li>Database optimization with normalization and indexing</li>
                <li>Prisma ORM for efficient database operations</li>
              </ul>
              <div className="project-tech">
                <span>Next.js</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Flight Tracking System</h3>
                <div className="project-tags">
                  <span className="tag">Frontend</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
              <p className="project-description">
                Front-end web application for displaying and tracking flight information with real-time updates.
              </p>
              <ul className="project-features">
                <li>Responsive user interface design with HTML and CSS</li>
                <li>Interactive features using JavaScript</li>
                <li>Enhanced user experience with modern design patterns</li>
              </ul>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>B.E. in Artificial Intelligence and Data Science</h3>
                <p className="institution">NMAM Institute of Technology (NMAMIT), Nitte</p>
                <div className="education-details">
                  <span className="year">2023 – 2027</span>
                  <span className="gpa">CGPA: 8.15 / 10</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Pre-University (PCMB)</h3>
                <p className="institution">Vagdevi PU College</p>
                <div className="education-details">
                  <span className="year">2021 – 2023</span>
                  <span className="percentage">Score: 82.16%</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>SSLC</h3>
                <p className="institution">Vagdevi Eng Med High School</p>
                <div className="education-details">
                  <span className="year">2021</span>
                  <span className="percentage">Score: 72.64%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h3>HTML, CSS, JavaScript</h3>
              <p>Comprehensive web development certification</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">☁️</div>
              <h3>Microsoft Azure</h3>
              <p>Azure Learning (Fundamentals)</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🔥</div>
              <h3>PySpark</h3>
              <p>Infosys Springboard Certification</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📊</div>
              <h3>Data Visualization with R</h3>
              <p>Infosys Springboard Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ramnathrn2022@gmail.com">ramnathrn2022@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+916360759659">+91-6360759659</a>
                </div>
              </div>

              <div className="contact-method">
                <i className="fab fa-github"></i>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/ramnathrn2022-cpu" target="_blank" rel="noopener noreferrer">
                    github.com/ramnathrn2022-cpu
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/ramnathr13" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/ramnathr13
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ramnath R Nayak. All rights reserved.</p>
          <p>Designed & Built with <span className="heart">❤️</span> by Ramnath</p>
        </div>
      </footer>
    </div>
  )
}

export default App
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
