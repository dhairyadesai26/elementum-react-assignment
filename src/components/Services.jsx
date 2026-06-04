/* Services.jsx */
import '../styles/services.css';

export default function Services() {
  return (
    <section className="services">
      <div className="services-inner">

        {/* Left: Image with triangle decorations */}
        <div className="services-image-wrap">
          <div className="services-tri-small"></div>
          <div className="services-img-circle">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
              alt="Team working together"
            />
          </div>
          <div className="services-tri-big"></div>
        </div>

        {/* Right: Text */}
        <div className="services-text fade-up">
          <h2>
            <span className="underline-green">See</span> how we can<br />
            help you <span className="hl-yellow">progress</span>
          </h2>
          <p>
            We work with the most ambitious and forward-thinking
            brands to create strategies that generate tangible
            results. Our approach combines data-driven insights
            with creative excellence.
          </p>
          <a href="#offer" className="services-link">
            Learn more →
          </a>
        </div>

      </div>
    </section>
  );
}
