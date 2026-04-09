import "./Cardio.css";

const workouts = [
  {
    id: 1,
    icon: "🏃",
    name: "Running",
    description: "The most accessible cardio discipline. Builds aerobic base, burns calories, and strengthens the cardiovascular system with every stride.",
    tag: "Outdoor",
    intensity: "high",
    intensityLabel: "High Intensity",
  },
  {
    id: 2,
    icon: "🚴",
    name: "Cycling",
    description: "An effective low-impact alternative that protects joints while still delivering a powerful aerobic workout for legs and lungs.",
    tag: "Low Impact",
    intensity: "medium",
    intensityLabel: "Medium Intensity",
  },
  {
    id: 3,
    icon: "🪢",
    name: "Jump Rope",
    description: "A compact, efficient full-body cardio tool. Improves coordination, timing, and conditioning in just minutes a day.",
    tag: "Full Body",
    intensity: "high",
    intensityLabel: "High Intensity",
  },
  {
    id: 4,
    icon: "🚣",
    name: "Rowing",
    description: "The rare workout that truly earns the 'full-body' label — legs, back, core, and arms all engage in every single pull.",
    tag: "Full Body",
    intensity: "medium",
    intensityLabel: "Medium Intensity",
  },
];

const tips = [
  {
    icon: "💧",
    title: "Hydration First",
    desc: "Drink 500ml 30 min before any cardio session.",
  },
  {
    icon: "❤️",
    title: "Target Zone",
    desc: "Stay at 65–85% of max heart rate for fat burn.",
  },
  {
    icon: "📈",
    title: "Progressive Overload",
    desc: "Add 10% more duration or pace each week.",
  },
];

function Cardio() {
  return (
    <div className="cardio-page">
      {/* ── HERO ── */}
      <div className="cardio-hero">
        <div className="cardio-hero-left">
          <p className="cardio-eyebrow">Fat Burn · Cardio</p>
          <h1>Cardio<br />Training</h1>
          <p className="cardio-hero-desc">
            Discover workouts that push your heart rate, build endurance, and
            transform your cardiovascular health — indoors or out.
          </p>
        </div>

        <div className="cardio-hero-meta">
          <div className="cardio-meta-item">
            <span className="cardio-meta-num">4</span>
            <span className="cardio-meta-label">Workouts</span>
          </div>
          <div className="cardio-meta-divider" />
          <div className="cardio-meta-item">
            <span className="cardio-meta-num">30</span>
            <span className="cardio-meta-label">Min Session</span>
          </div>
          <div className="cardio-meta-divider" />
          <div className="cardio-meta-item">
            <span className="cardio-meta-num">All</span>
            <span className="cardio-meta-label">Levels</span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="cardio-body">

        {/* Section label */}
        <div className="cardio-section-label">
          <span>Workouts</span>
          <div className="cardio-section-line" />
        </div>

        {/* Grid */}
        <div className="cardio-workouts">
          {workouts.map((w) => (
            <div key={w.id} className="cardio-workout-card">
              <div className={`cardio-card-bar ${w.intensity}`} />
              <div className="cardio-card-header">
                <span className="cardio-card-icon">{w.icon}</span>
                <span className="cardio-card-index">0{w.id}</span>
              </div>
              <h3>{w.name}</h3>
              <p>{w.description}</p>
              <div className="cardio-card-footer">
                <span className="cardio-card-tag">{w.tag}</span>
                <span className={`cardio-card-intensity ${w.intensity}`}>{w.intensityLabel}</span>
              </div>
              <span className="cardio-card-arrow">→</span>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="cardio-tips">
          <div className="cardio-tips-header">
            <span>Training Tips</span>
          </div>
          <div className="cardio-tips-grid">
            {tips.map((t, i) => (
              <div key={i} className="cardio-tip">
                <div className="cardio-tip-icon">{t.icon}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cardio;