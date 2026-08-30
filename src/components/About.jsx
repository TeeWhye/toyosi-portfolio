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
              I'm Toyosi, a full-stack developer focused on building
              practical and responsive web applications.
            </p>

            <p>
              My development journey started with the fundamentals
              of HTML, CSS, and JavaScript before expanding into
              Python, Flask, Django, React, and Next.js. I've learned
              primarily by building real projects and solving the
              problems that come with turning an idea into a working
              application.
            </p>

            <p>
              I enjoy working across both frontend and backend
              development, with a particular interest in building
              applications that are useful, reliable, and easy to
              use.
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
              <span className="highlight-number">02</span>

              <span className="highlight-label">
                Development Areas
              </span>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">∞</span>

              <span className="highlight-label">
                Things to Learn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
