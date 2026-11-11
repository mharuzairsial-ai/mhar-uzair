function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>✦</span>
        Nova
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </div>

      <button className="nav-button">Get Started</button>
    </nav>
  );
}

export default Navbar;
