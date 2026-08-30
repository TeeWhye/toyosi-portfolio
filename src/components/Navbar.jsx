function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
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
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;