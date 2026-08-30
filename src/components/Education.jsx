function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">
            EDUCATION & CERTIFICATIONS
          </p>

          <h2>
            Learning with
            <span> purpose.</span>
          </h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <p className="education-label">EDUCATION</p>

            <h3>Bachelor of Science in Computer Science</h3>

            <p className="education-school">
              Crawford University
            </p>

            <p className="education-date">
              Expected 2027
            </p>
          </div>

          <div className="education-card">
            <p className="education-label">CERTIFICATIONS</p>

            <div className="certification-item">
              <h3>Legacy Responsive Web Design V8</h3>

              <p>freeCodeCamp</p>
            </div>

            <div className="certification-item">
              <h3>Career Essentials in Generative AI</h3>

              <p>Microsoft & LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

