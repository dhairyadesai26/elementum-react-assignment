import '../styles/hero.css';

const TEAM_PHOTOS = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
  'https://randomuser.me/api/portraits/men/67.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/15.jpg',
  'https://randomuser.me/api/portraits/women/21.jpg',
];

export default function Hero() {
  return (
    <section className="hero">
      
      <svg className="hero-squiggle" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60 10 C20 40, 100 60, 60 90 C20 120, 100 140, 60 170 C30 195, 80 200, 60 200"
          stroke="#111"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="60" cy="10" r="5" fill="#111" />
      </svg>

      <div className="hero-content">
        <h1>
          The <span className="underline-yellow">thinkers</span> and<br />
          doers were <span className="hl-pink">changing</span><br />
          the <span className="hl-green">status</span> Quo with
        </h1>

        <p>
          We are a team of strategists, designers, communicators,<br />
          researchers. Together, we believe that progress only<br />
          happens when you refuse to play things safe.
        </p>
      </div>

      <div className="team-row">
        {TEAM_PHOTOS.map((url, i) => (
          <div className="member" key={i}>
            <img src={url} alt={`Team member ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}