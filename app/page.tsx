import ProjectsSection from "@/app/components/ProjectsSection";
import CoursesSection from "@/app/components/CoursesSection";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <a href="#" className="nav-logo">JL<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#learning">Learning</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      <div className="container">

        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-tag">CS Student @ Trinity College Dublin</div>
          <h1>Hi, I&apos;m Jiaming Liu</h1>
          <p className="hero-desc">
            Computer Science undergraduate building projects in software engineering,
            systems, and AI. Always learning, always shipping.
          </p>
          <div className="hero-links">
            <a href="mailto:liu20@tcd.ie" className="btn btn-primary">
              <svg className="icon-svg" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email me
            </a>
            <a href="https://github.com/JMLal250209" target="_blank" rel="noreferrer" className="btn btn-outline">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="section-label">About</div>
          <h2>Background</h2>
          <p>
            I&apos;m currently studying Computer Science at Trinity College Dublin.
            I enjoy working across the full stack — from low-level systems in C/C++
            to building backend services and exploring AI applications.
          </p>
          <p>
            I&apos;m building my portfolio step by step, and I&apos;m always looking for
            opportunities to learn and contribute to interesting projects.
          </p>
        </section>

        {/* Learning */}
        <section id="learning">
          <div className="section-label">Currently Learning</div>
          <h2>Courses</h2>
          <CoursesSection />
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="section-label">Work</div>
          <h2>Projects</h2>
          <ProjectsSection />
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="section-label">Skills</div>
          <h2>Technologies</h2>

          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skills-grid">
              <span className="skill-badge"><span className="icon">☕</span> Java</span>
              <span className="skill-badge"><span className="icon">🐍</span> Python</span>
              <span className="skill-badge"><span className="icon">⚙️</span> C</span>
              <span className="skill-badge"><span className="icon">⚙️</span> C++</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>Web & Cloud</h3>
            <div className="skills-grid">
              <span className="skill-badge"><span className="icon">⚛️</span> React</span>
              <span className="skill-badge"><span className="icon">🟩</span> Node.js</span>
              <span className="skill-badge"><span className="icon">🐳</span> Docker</span>
              <span className="skill-badge"><span className="icon">☁️</span> Kubernetes</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>AI / ML</h3>
            <div className="skills-grid">
              <span className="skill-badge"><span className="icon">🦜</span> LangChain</span>
              <span className="skill-badge"><span className="icon">🔍</span> RAG</span>
              <span className="skill-badge"><span className="icon">🤖</span> AI Agents</span>
              <span className="skill-badge"><span className="icon">🧠</span> LLMs</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Platforms</h3>
            <div className="skills-grid">
              <span className="skill-badge"><span className="icon">🔧</span> Git</span>
              <span className="skill-badge"><span className="icon">💻</span> VS Code</span>
              <span className="skill-badge"><span className="icon">🐧</span> Linux</span>
            </div>
          </div>
        </section>

      </div>

      <footer>
        © 2026 Jiaming Liu &nbsp;·&nbsp;
        <a href="mailto:liu20@tcd.ie" style={{ color: 'inherit', textDecoration: 'none' }}>liu20@tcd.ie</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/JMLal250209" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
      </footer>
    </>
  )
}
