import '../styles/testimonial.css';

const FLOATERS = [
  { cls: 'tf1', src: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { cls: 'tf2', src: 'https://randomuser.me/api/portraits/women/33.jpg' },
  { cls: 'tf3', src: 'https://randomuser.me/api/portraits/men/77.jpg' },
  { cls: 'tf4', src: 'https://randomuser.me/api/portraits/women/88.jpg' },
  { cls: 'tf5', src: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { cls: 'tf6', src: 'https://randomuser.me/api/portraits/women/11.jpg' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">

<div className="testimonials-header">
          <h2>
            What our customer<br />
            <span className="hl-green">says</span> About <span className="underline-yellow">Us</span>
          </h2>
        </div>

<div className="testi-floaters">
          {FLOATERS.map((f, i) => (
            <div className={`testi-floater ${f.cls}`} key={i}>
              <img src={f.src} alt={`Customer ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

<div className="testi-card">
          <span className="testi-quote-mark">{'\u201C'}</span>
          <div className="testi-stars">★★★★★</div>
          <p>
            Elementum delivered the results that the company had always
            dreamed of. Relevant, the client's ROI increased 140% after
            just 3 months of working with them. The way that the team
            focused on truly understanding the management of the company
            they had hired, which has also proven to be a solid and
            immovable reliable.
          </p>
          <div className="testi-author">
            <div className="testi-author-img">
              <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Author" />
            </div>
            <div className="testi-author-info">
              <strong>Ramesh Sharma</strong>
              <span>CEO, TechNova Inc.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}