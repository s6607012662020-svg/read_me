import "./Gym.css";
import { Link } from "react-router-dom";

const exercises = [
  {
    id: 1,
    icon: "🏋️",
    name: "Dumbbells",
    description: "Unilateral pressing and isolation movements to build balanced chest and shoulder strength.",
    tag: "Upper Body",
    link: "/gym/dumbbells",
  },
  {
    id: 2,
    icon: "💪",
    name: "Body Weight",
    description: "A compound movement using your own mass — push-ups, dips, and holds for total-body control.",
    tag: "Full Body",
    link: null,
  },
  {
    id: 3,
    icon: "🦵",
    name: "Squat",
    description: "The king of lower-body exercises. Builds quad, glute, and core strength in a single movement.",
    tag: "Lower Body",
    link: null,
  },
  {
    id: 4,
    icon: "🔝",
    name: "Pull-Up",
    description: "An excellent vertical pull for back width, bicep development, and grip strength.",
    tag: "Back & Arms",
    link: null,
  },
];

const stats = [
  {
    num: "4",
    label: "Exercise Groups",
    desc: "Covering upper, lower, and full-body movement patterns.",
  },
  {
    num: "3×",
    label: "Sets per exercise",
    desc: "General hypertrophy range — 8 to 12 reps per set.",
  },
  {
    num: "60s",
    label: "Rest interval",
    desc: "Keep rest tight to maximise metabolic demand.",
  },
];

function Gym() {
  return (
    <div className="gym-page">
      {/* ── HERO — dark to contrast with the rest ── */}
      <div className="gym-hero">
        <div className="gym-hero-left">
          <p className="gym-eyebrow">Strength · Discipline</p>
          <h1>Gym<br />Training</h1>
          <p className="gym-hero-desc">
            Explore the core movements that build raw strength, functional mass,
            and the mental discipline to keep showing up.
          </p>
        </div>

        <div className="gym-hero-meta">
          <div className="gym-meta-item">
            <span className="gym-meta-num">4</span>
            <span className="gym-meta-label">Movements</span>
          </div>
          <div className="gym-meta-divider" />
          <div className="gym-meta-item">
            <span className="gym-meta-num">45</span>
            <span className="gym-meta-label">Min Session</span>
          </div>
          <div className="gym-meta-divider" />
          <div className="gym-meta-item">
            <span className="gym-meta-num">All</span>
            <span className="gym-meta-label">Levels</span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="gym-body">

        {/* Section label */}
        <div className="gym-section-label">
          <span>Exercises</span>
          <div className="gym-section-line" />
        </div>

        {/* Exercise list */}
        <div className="gym-exercises">
          {exercises.map((ex) =>
            ex.link ? (
              <Link key={ex.id} to={ex.link} className="gym-exercise-card is-link">
                <span className="gym-card-num">0{ex.id}</span>
                <div className="gym-card-icon">{ex.icon}</div>
                <div className="gym-card-content">
                  <h3>{ex.name}</h3>
                  <p>{ex.description}</p>
                </div>
                <span className="gym-card-link-badge">Explore →</span>
                <span className="gym-card-arrow">→</span>
              </Link>
            ) : (
              <div key={ex.id} className="gym-exercise-card">
                <span className="gym-card-num">0{ex.id}</span>
                <div className="gym-card-icon">{ex.icon}</div>
                <div className="gym-card-content">
                  <h3>{ex.name}</h3>
                  <p>{ex.description}</p>
                </div>
                <span className="gym-card-tag">{ex.tag}</span>
                <span className="gym-card-arrow">→</span>
              </div>
            )
          )}
        </div>

        {/* Stats */}
        <div className="gym-stats">
          {stats.map((s, i) => (
            <div key={i} className="gym-stat">
              <span className="gym-stat-num">{s.num}</span>
              <span className="gym-stat-label">{s.label}</span>
              <p className="gym-stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Gym;