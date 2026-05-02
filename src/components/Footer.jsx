import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Social Links */}
        <div className="footer-links">
          <a href="mailto:sameerraj9922@gmail.com" target="_blank" rel="noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/sameer-raj-991792188/" target="_blank" rel="noreferrer">Linkedin</a>
          <a href="https://wa.me/9311782014" target="_blank" rel="noreferrer">Whatsapp</a>
        </div>

        {/* Center: Credits */}
        <div className="footer-credits">
          <span>&copy; Made with ❤️ by Sameer</span>
        </div>

        {/* Right Side: Back to top */}
        <div className="footer-top">
          <button onClick={scrollToTop}>Back to top</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;