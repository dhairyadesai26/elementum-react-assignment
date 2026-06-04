/* Navbar.jsx */
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Elementum</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <div className="nav-menu-icon">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}