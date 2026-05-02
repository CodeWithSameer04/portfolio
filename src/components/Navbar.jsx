import "./Navbar.css";
import logoImg from "../assets/sr1.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Image Logo wrapped in a home link */}
      <a href="#home" className="navbar-logo-link">
        <img src={logoImg} alt="SR Logo" className="navbar-logo-img" />
      </a>
      
      {/* Right-aligned outline buttons */}
      <div className="navbar-links-right">
        <a href="#work" className="nav-btn-outline">Work</a>
        <a 
          href="https://drive.google.com/file/d/1aYpt4BuZ7_8Gk__2gMy0WdkigSTaM8dK/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-btn-outline"
        >
          View Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;