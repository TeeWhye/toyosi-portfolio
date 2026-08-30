function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            FULL-STACK DEVELOPER
          </p>

          <h1>
            Building web
            <span> applications </span>
            that solve real problems.
          </h1>

          <p className="hero-description">
            I build practical, responsive web applications using
            modern technologies, from intuitive frontends to
            reliable backend systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <span>&lt;/&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
