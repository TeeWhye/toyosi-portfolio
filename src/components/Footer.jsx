function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="logo">
            Toyosi<span>.</span>
          </a>

          <p>
            Building practical, reliable, and user-focused web applications.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/TeeWhye"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/badmus-toyosi-b07417271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:badmustoyosi56@email.com">
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Toyosi. All rights reserved.</p>

        <a href="#" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
