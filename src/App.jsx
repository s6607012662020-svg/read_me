import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home   from "./Pages/home/Home.jsx";
import Yoga   from "./Pages/yoga/Yoga.jsx";
import Gym    from "./Pages/gym/Gym.jsx";
import Cardio from "./Pages/cardio/Cardio.jsx";

// ── Back bar shown on all discipline pages ─────────────────────────────────
function BackBar() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  const pageName = location.pathname.replace("/", "");

  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(247, 245, 242, 0.96)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid #E2DDD8",
      padding: "0 48px",
      height: 48,
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "'Geist', sans-serif",
    }}>
      <button
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "0.78rem",
          fontWeight: 500,
          color: "#6B6560",
          padding: 0,
          transition: "color 0.18s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#1A1714")}
        onMouseLeave={e => (e.currentTarget.style.color = "#6B6560")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Disciplines
      </button>
      <span style={{ color: "#C8C0B8", fontSize: "0.72rem" }}>/</span>
      <span style={{
        fontSize: "0.78rem",
        fontWeight: 600,
        color: "#1A1714",
        textTransform: "capitalize",
      }}>
        {pageName}
      </span>
    </div>
  );
}

// ── Routes wrapper (BackBar must live inside BrowserRouter) ────────────────
function AppRoutes() {
  return (
    <>
      <BackBar />
      <Routes>
        <Route path="/"       element={<Home />}   />
        <Route path="/yoga"   element={<Yoga />}   />
        <Route path="/gym"    element={<Gym />}    />
        <Route path="/cardio" element={<Cardio />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}