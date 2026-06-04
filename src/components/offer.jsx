/* offer.jsx */
import '../styles/offer.css';

const OFFER_ITEMS = [
  {
    title: 'Collaborative & partnership',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    title: 'We put your growth first',
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    title: <>Piloting digital <span className="hl-green">confidence</span></>,
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
];

export default function Offer() {
  return (
    <section className="offer" id="offer">
      {/* Decorative squiggle */}
      <svg className="offer-squiggle" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 10 C20 30, 80 50, 50 80 C20 110, 80 130, 50 155"
          stroke="#bbb"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="offer-inner">

        <div className="offer-header">
          <h2>
            What we <span className="hl-green">can</span><br />
            <span className="underline-yellow">offer</span> you!
          </h2>
        </div>

        <div className="offer-grid">

          {/* Sidebar descriptions */}
          <div className="offer-sidebar">
            <p>Delivering value-driven solutions</p>
            <p>Creating powerful digital experiences through design</p>
            <p>Data-driven decisions that drive growth</p>
          </div>

          {/* Service rows */}
          <div className="offer-rows">
            {OFFER_ITEMS.map((item, i) => (
              <div className="offer-row" key={i}>
                <div className="offer-row-content">
                  <div className="offer-row-img">
                    <img src={item.img} alt={`Service ${i + 1}`} loading="lazy" />
                  </div>
                  <span className="offer-row-title">{item.title}</span>
                </div>
                <div className="offer-row-arrow">→</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
