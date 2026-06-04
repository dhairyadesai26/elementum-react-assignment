/* Footer.jsx */
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top separator line */}
      <hr className="footer-top-line" />

      <div className="footer-inner">
        <div className="footer-grid">

          {/* Column 1: Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>Studio</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div className="footer-col">
            <h4>Terms &amp; Policies</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Column 4: Contact / Address */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-address">
              <p>1498w Fluton ste, STE<br />2D Chicago, IL 63867.</p>
              <p>(123) 456789000</p>
              <p>info@elementum.com</p>
            </div>
          </div>

        </div>

        {/* Bottom: centered copyright */}
        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>

      </div>
    </footer>
  );
}
