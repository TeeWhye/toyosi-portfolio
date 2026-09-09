function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> working products.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Toyosi, a full-stack developer who enjoys turning ideas
              into practical, responsive, and reliable web applications.
            </p>

            <p>
              My journey started with the fundamentals of HTML, CSS, and
              JavaScript before expanding into Python, Flask, Django, React,
              and Next.js. Most of what I've learned has come through
              building real projects, solving problems, and continuously
              improving the way I approach development.
            </p>

            <p>
              I enjoy working across both frontend and backend development,
              from creating intuitive user experiences to building the
              systems that power them. My goal is simple: build software
              that works well, looks good, and solves a genuine problem.
            </p>
          </div>

          <div className="about-highlight">
            <div className="highlight-item">
              <span className="highlight-number">03</span>
              <span className="highlight-label">
                Featured Projects
              </span>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">FULL</span>
              <span className="highlight-label">
                Stack Development
              </span>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">∞</span>
              <span className="highlight-label">
                Curiosity to Learn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;