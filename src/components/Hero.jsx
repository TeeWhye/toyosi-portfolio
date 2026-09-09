function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">FULL-STACK DEVELOPER</p>

          <h1>
            Building web
            <span> applications </span>
            that solve real problems.
          </h1>

          <p className="hero-description">
            I’m Toyosi, a developer focused on building practical,
            responsive, and reliable web applications — from polished
            user interfaces to powerful backend systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Work
              <span className="button-arrow">↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <span className="meta-dot"></span>
              Available for opportunities
            </span>

            <span className="meta-divider"></span>

            <span>Based in Nigeria</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <div className="hero-ring hero-ring-one"></div>
            <div className="hero-ring hero-ring-two"></div>

            <div className="hero-core">
              <span>&lt;/&gt;</span>
            </div>

            <div className="tech-orbit tech-react">
              React
            </div>

            <div className="tech-orbit tech-python">
              Python
            </div>

            <div className="tech-orbit tech-django">
              Django
            </div>

            <div className="tech-orbit tech-next">
              Next.js
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;