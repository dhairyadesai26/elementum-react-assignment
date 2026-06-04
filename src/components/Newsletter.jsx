import '../styles/newsletter.css';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter">
      
      <div className="newsletter-deco"></div>

      <div className="newsletter-inner">
        <h2>Subscribe to<br />our newsletter</h2>
        <p>
          Join our growing community and get the latest insights,<br />
          news and project announcements.
        </p>

        {submitted ? (
          <p style={{ fontWeight: 600, color: '#2d6a2d', fontSize: '16px' }}>
            🎉 Thank you for subscribing!
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              id="newsletter-email"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}