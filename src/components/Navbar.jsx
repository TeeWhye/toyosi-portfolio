function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#" className="logo" aria-label="Toyosi home">
          Toyosi<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's Connect
          <span className="nav-cta-arrow">↗</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;