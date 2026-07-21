import { Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <Award size={23} />
            </div>

            <span>CertifyPro</span>
          </Link>

          <p>
            Create, download, and verify professional certificates with a
            simple and modern experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/create">Create Certificate</Link>
          <Link to="/verify">Verify Certificate</Link>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-links">
            <a
              href="https://github.com/perfectcse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-mis-9623luck/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} CertifyPro. Built with React for creating professional
          certificates.
        </p>
      </div>
    </footer>
  );
}

export default Footer;