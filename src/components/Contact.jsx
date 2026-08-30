function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-text">
            <p>
              Have a project in mind, need a developer, or just want to
              connect? I'd be happy to hear from you.
            </p>

           <a
  href="mailto:badmustoyosi56@email.com"
  className="contact-email"
>
  badmustoyosi56@email.com ↗
</a>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/TeeWhye"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
  href="https://www.linkedin.com/in/badmus-toyosi-b07417271/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
  <span>LinkedIn</span>
  <span>↗</span>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
