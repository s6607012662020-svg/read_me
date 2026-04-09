import { useState, useEffect } from "react";
import "./LoginPopup.css";

export default function LoginPopup({ isOpen, onClose, onSwitchToSignup }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) setTimeout(() => { setForm({ email: "", password: "" }); setSubmitted(false); }, 400);
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const switchToSignup = () => { onClose(); setTimeout(onSwitchToSignup, 300); };

  return (
    <>
      <div className={`lp-backdrop ${isOpen ? "lp-backdrop--visible" : ""}`} onClick={onClose} />
      <div className={`lp-panel ${isOpen ? "lp-panel--open" : ""}`} role="dialog" aria-modal="true">
        <button className="lp-close" onClick={onClose} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="lp-inner">
          {/* LEFT — Brand */}
          <div className="lp-brand">
            <div>
              <div className="lp-brand-logo">
                <div className="lp-brand-icon"><span>M</span></div>
                <span className="lp-brand-name">M Master</span>
              </div>
              <h2 className="lp-brand-headline">Welcome<br/>Back.</h2>
              <p className="lp-brand-sub">Log back in and keep pushing your limits every single day.</p>
              <div className="lp-brand-stats">
                <div className="lp-brand-stat">
                  <span className="lp-brand-stat-num">12K+</span>
                  <span className="lp-brand-stat-label">Members</span>
                </div>
                <div className="lp-brand-stat-divider" />
                <div className="lp-brand-stat">
                  <span className="lp-brand-stat-num">12</span>
                  <span className="lp-brand-stat-label">Disciplines</span>
                </div>
                <div className="lp-brand-stat-divider" />
                <div className="lp-brand-stat">
                  <span className="lp-brand-stat-num">Free</span>
                  <span className="lp-brand-stat-label">To Join</span>
                </div>
              </div>
            </div>
            <div className="lp-deco">
              <div className="lp-deco-ring lp-deco-ring--1" />
              <div className="lp-deco-ring lp-deco-ring--2" />
              <div className="lp-deco-dot lp-deco-dot--1" />
              <div className="lp-deco-dot lp-deco-dot--2" />
              <div className="lp-deco-dot lp-deco-dot--3" />
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lp-form-side">
            <div className="lp-form-header">
              <p className="lp-eyebrow">Login</p>
              <h3 className="lp-form-title">Sign in to your account</h3>
            </div>

            {submitted ? (
              <div className="lp-success">
                <div className="lp-success-icon">✓</div>
                <h3>Welcome back!</h3>
                <p>You've been logged in successfully.</p>
                <button className="lp-btn-primary" style={{ marginTop: 12 }}
                  onClick={() => { setSubmitted(false); onClose(); }}>Continue →</button>
              </div>
            ) : (
              <form className="lp-form" onSubmit={handleSubmit}>
                <div className="lp-field">
                  <label className="lp-label">Email address</label>
                  <div className="lp-input-wrap">
                    <span className="lp-input-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </span>
                    <input type="email" className="lp-input" placeholder="you@example.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="lp-field">
                  <div className="lp-label-row">
                    <label className="lp-label">Password</label>
                    <a href="#" className="lp-forgot" onClick={(e) => e.preventDefault()}>Forgot password?</a>
                  </div>
                  <div className="lp-input-wrap">
                    <span className="lp-input-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    </span>
                    <input type={showPass ? "text" : "password"} className="lp-input lp-input--padded-right"
                      placeholder="••••••••" value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                    <button type="button" className="lp-eye" onClick={() => setShowPass(!showPass)}>
                      {showPass ? "🙈" : "👁"}
                    </button>
                  </div>
                </div>
                <button type="submit" className="lp-btn-primary">Login →</button>
                <div className="lp-divider"><span>or continue with</span></div>
                <div className="lp-social">
                  <button type="button" className="lp-social-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 7.1 29.5 4.6 24 4.6 16.3 4.6 9.7 8.7 6.3 14.7z"/>
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.3 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.1C9.5 38.6 16.3 44 24 44z"/>
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
                    </svg>
                    Google
                  </button>
                  <button type="button" className="lp-social-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    GitHub
                  </button>
                </div>
                <p className="lp-switch">
                  Don't have an account?{" "}
                  <button type="button" className="lp-switch-link" onClick={switchToSignup}>Sign up free</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}