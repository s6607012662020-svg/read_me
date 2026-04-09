import "./Yoga.css";

const postures = [
  {
    id: 1,
    icon: "🐕",
    name: "Downward Dog",
    description: "A foundational pose to stretch and strengthen the entire body, from heels to fingertips.",
    tag: "Foundation",
  },
  {
    id: 2,
    icon: "🌳",
    name: "Tree Pose",
    description: "A balancing pose to improve focus, stability, and inner calm. Root down to rise up.",
    tag: "Balance",
  },
  {
    id: 3,
    icon: "⚔️",
    name: "Warrior II",
    description: "A powerful standing pose that builds strength, endurance, and deep concentration.",
    tag: "Strength",
  },
  {
    id: 4,
    icon: "🌙",
    name: "Child's Pose",
    description: "A gentle resting pose to relax the body, restore energy, and release tension.",
    tag: "Restore",
  },
];

const benefits = [
  {
    icon: "🧘",
    title: "Mental Clarity",
    desc: "Breathwork and held poses reduce cortisol and sharpen focus.",
  },
  {
    icon: "🦴",
    title: "Flexibility & Mobility",
    desc: "Consistent practice lengthens fascia and increases joint range of motion.",
  },
  {
    icon: "💪",
    title: "Functional Strength",
    desc: "Bodyweight holds build deep stabilising muscles often missed in gym work.",
  },
];

function Yoga() {
  return (
    <div className="yoga-page">
      {/* ── HERO ── */}
      <div className="yoga-hero">
        <div className="yoga-hero-left">
          <p className="yoga-eyebrow">Mind & Body · Discipline</p>
          <h1>The Art of<br />Yoga</h1>
          <p className="yoga-hero-desc">
            Explore a curated selection of postures that enhance flexibility, build
            functional strength, and cultivate a deeper connection between body and mind.
          </p>
        </div>

        <div className="yoga-hero-meta">
          <div className="yoga-meta-item">
            <span className="yoga-meta-num">4</span>
            <span className="yoga-meta-label">Postures</span>
          </div>
          <div className="yoga-meta-divider" />
          <div className="yoga-meta-item">
            <span className="yoga-meta-num">60</span>
            <span className="yoga-meta-label">Min Session</span>
          </div>
          <div className="yoga-meta-divider" />
          <div className="yoga-meta-item">
            <span className="yoga-meta-num">All</span>
            <span className="yoga-meta-label">Levels</span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="yoga-body">

        {/* Section label */}
        <div className="yoga-section-label">
          <span>Postures</span>
          <div className="yoga-section-line" />
        </div>

        {/* Grid */}
        <div className="yoga-postures">
          {postures.map((posture) => (
            <div key={posture.id} className="yoga-posture-card">
              <span className="yoga-card-index">0{posture.id}</span>
              <div className="yoga-card-icon">{posture.icon}</div>
              <h3>{posture.name}</h3>
              <p>{posture.description}</p>
              <span className="yoga-card-tag">{posture.tag}</span>
              <span className="yoga-card-arrow">→</span>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="yoga-benefits">
          {benefits.map((b, i) => (
            <div key={i} className="yoga-benefit">
              <span className="yoga-benefit-icon">{b.icon}</span>
              <div className="yoga-benefit-text">
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Yoga;