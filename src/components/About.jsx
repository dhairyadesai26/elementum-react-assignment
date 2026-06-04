/* About.jsx */
import '../styles/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">

        {/* Left: Text */}
        <div className="about-text fade-up">
          <h2>
            Tomorrow should<br />
            be <span className="underline-yellow">better</span> than <span className="hl-green">today</span>
          </h2>
          <p>
            We are a team of strategists, designers and communicators.
            The future belongs to those who believe in the beauty of their
            dreams — and we build those dreams one collaboration at a time.
          </p>
          <div className="about-play-btn" role="button" aria-label="Play video">
            <div className="play-circle">
              <div className="play-triangle"></div>
            </div>
            <span>Read more</span>
          </div>
        </div>

        {/* Right: Image */}
        <div className="about-image-wrap">
          <div className="about-img-blob"></div>
          <div className="about-triangle"></div>
          <div className="about-img-circle">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
              alt="Team collaboration meeting"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
