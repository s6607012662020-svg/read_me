import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import ContactPopup from "./ContactPopup";
import AboutPopup   from "./AboutPopup";
import LoginPopup   from "./LoginPopup";
import SignupPopup  from "./SignupPopup";

const CATEGORIES = [
  { id: 1,  name: "Yoga",           icon: "🧘", description: "Flexibility, balance & mindfulness for every level.",         tag: "Mind & Body", date: "25 Oct, 2021", route: "/yoga"   },
  { id: 2,  name: "Cardio",         icon: "🏃", description: "High-energy routines designed to torch calories fast.",        tag: "Fat Burn",   date: "19 Oct, 2021", route: "/cardio" },
  { id: 3,  name: "Gym",            icon: "🏋️", description: "Compound lifts and progressive overload for raw power.",      tag: "Strength",   date: "14 Oct, 2021", route: "/gym"    },
  { id: 4,  name: "HIIT",           icon: "⚡", description: "Explosive interval training for peak performance.",            tag: "Intense",    date: "7 Oct, 2021",  route: null      },
  { id: 5,  name: "Pilates",        icon: "🤸", description: "Core strength, alignment, and controlled movement.",           tag: "Core",       date: "3 Oct, 2021",  route: null      },
  { id: 6,  name: "Boxing",         icon: "🥊", description: "Combat-inspired conditioning for full-body power.",            tag: "Combat",     date: "28 Sep, 2021", route: null      },
  { id: 7,  name: "Swimming",       icon: "🏊", description: "Full-body low-impact workout for endurance and agility.",      tag: "Cardio",     date: "20 Sep, 2021", route: null      },
  { id: 8,  name: "Cycling",        icon: "🚴", description: "Build leg power and aerobic capacity on the bike.",            tag: "Cardio",     date: "15 Sep, 2021", route: null      },
  { id: 9,  name: "Meditation",     icon: "🧠", description: "Mental clarity, stress relief, and deep focus practice.",     tag: "Mind & Body", date: "10 Sep, 2021", route: null     },
  { id: 10, name: "Calisthenics",   icon: "💪", description: "Bodyweight mastery — strength and control anywhere.",          tag: "Strength",   date: "5 Sep, 2021",  route: null      },
  { id: 11, name: "Kickboxing",     icon: "🦵", description: "High-octane strikes combining martial arts and cardio.",       tag: "Combat",     date: "1 Sep, 2021",  route: null      },
  { id: 12, name: "Dance Fitness",  icon: "💃", description: "Rhythm-driven movement that burns calories while you groove.", tag: "Fat Burn",   date: "26 Aug, 2021", route: null      },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const [aboutOpen,   setAboutOpen]   = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [loginOpen,   setLoginOpen]   = useState(false);
  const [signupOpen,  setSignupOpen]  = useState(false);

  const navigate = useNavigate();

  const filtered = CATEGORIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <AboutPopup   isOpen={aboutOpen}   onClose={() => setAboutOpen(false)} />
      <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <LoginPopup
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToSignup={() => setSignupOpen(true)}
      />
      <SignupPopup
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSwitchToLogin={() => setLoginOpen(true)}
      />

      <header>
        <a href="#" className="logo">
          <div className="logo-icon"><span>M</span></div>
          <span className="logo-text">M Master</span>
        </a>

        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); setAboutOpen(true); }}>About</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setContactOpen(true); }}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="btn-ghost" onClick={() => setLoginOpen(true)}>Login</button>
          <button className="btn-solid" onClick={() => setSignupOpen(true)}>Sign Up</button>
        </div>
      </header>

      <main className="main-content">
        <div className="toolbar">
          <div className="search-wrapper">
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6" />
              </svg>
            </span>
            <input
              type="text" className="search-input" placeholder="Search disciplines…"
              value={search} onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="table-container">
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Last Update</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? filtered.map((cat) => (
                  <tr
                    key={cat.id}
                    onClick={() => cat.route && navigate(cat.route)}
                    style={{ cursor: cat.route ? "pointer" : "default" }}
                  >
                    <td>
                      <div className="cell-about">
                        <div className="cell-icon">{cat.icon}</div>
                        <div>
                          <div className="cell-name">{cat.name}</div>
                          <div className="cell-desc">{cat.description}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="cell-date">{cat.date}</span></td>
                    <td><span className="cell-tag">{cat.tag}</span></td>
                    <td>
                      <div className="cell-action">
                        {cat.route ? (
                          <Link to={cat.route} className="btn-row btn-row--link">Explore →</Link>
                        ) : (
                          <span className="btn-row btn-row--soon">Soon</span>
                        )}
                        {cat.route && <span className="row-arrow">→</span>}
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4}>
                      <div className="empty-state">
                        <div className="empty-icon">○</div>
                        <div className="empty-text">No disciplines match "{search}"</div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <span className="table-count">
              Showing <strong>{filtered.length}</strong> of {CATEGORIES.length} disciplines
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}