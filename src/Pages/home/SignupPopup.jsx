import { useState, useEffect } from "react";
import "./SignupPopup.css";

export default function SignupPopup({ isOpen, onClose, onSwitchToLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) setTimeout(() => { setForm({ name: "", email: "", password: "", confirm: "" }); setSubmitted(false); }, 400);
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const switchToLogin = () => { onClose(); setTimeout(onSwitchToLogin, 300); };

  return (
    <>
      <div className={`sp-backdrop ${isOpen ? "sp-backdrop--visible" : ""}`} onClick={onClose} />

      <div className={`sp-panel ${isOpen ? "sp-panel--open" : ""}`} role="dialog" aria-modal="true">
        <button className="sp-close" onClick={onClose} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="sp-inner">
          {/* LEFT — Brand */}
          <div className="sp-brand">
            <div>
              <div className="sp-brand-logo">
                <div className="sp-brand-icon"><span>M</span></div>
                <span className="sp-brand-name">M Master</span>
              </div>
              <h2 className="sp-brand-headline">Start Your<br/>Journey.</h2>
              <p className="sp-brand-sub">Join thousands already training smarter every single day.</p>

              <div className="sp-brand-stats">
                <div className="sp-brand-stat">
                  <span className="sp-brand-stat-num">12K+</span>
                  <span className="sp-brand-stat-label">Members</span>
                </div>
                <div className="sp-brand-stat-divider" />
                <div className="sp-brand-stat">
                  <span className="sp-brand-stat-num">12</span>
                  <span className="sp-brand-stat-label">Disciplines</span>
                </div>
                <div className="sp-brand-stat-divider" />
                <div className="sp-brand-stat">
                  <span className="sp-brand-stat-num">Free</span>
                  <span className="sp-brand-stat-label">To Start</span>
                </div>
              </div>
            </div>

            <div className="sp-deco">
              <div className="sp-deco-ring sp-deco-ring--1" />
              <div className="sp-deco-ring sp-deco-ring--2" />
              <div className="sp-deco-dot sp-deco-dot--1" />
              <div className="sp-deco-dot sp-deco-dot--2" />
              <div className="sp-deco-dot sp-deco-dot--3" />
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="sp-form-side">
            <div className="sp-form-header">
              <p className="sp-eyebrow">Sign Up</p>
              <h3 className="sp-form-title">Create your account</h3>
            </div>

            {submitted ? (
              <div className="sp-success">
                <div className="sp-success-icon">✓</div>
                <h3>You're in!</h3>
                <p>Your account is ready. Let's get moving.</p>
                <button className="sp-btn-primary" style={{ marginTop: 12 }}
                  onClick={() => { setSubmitted(false); onClose(); }}>Start Training →</button>
              </div>
            ) : (
              <form className="sp-form" onSubmit={handleSubmit}>
                <div className="sp-row">
                  <div className="sp-field">
                    <label className="sp-label">Full name</label>
                    <div className="sp-input-wrap">
                      <span className="sp-input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/>
                        </svg>
                      </span>
                      <input type="text" className="sp-input" placeholder="Your full name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">Email address</label>
                    <div className="sp-input-wrap">
                      <span className="sp-input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </span>
                      <input type="email" className="sp-input" placeholder="you@example.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                </div>

                <div className="sp-row">
                  <div className="sp-field">
                    <label className="sp-label">Password</label>
                    <div className="sp-input-wrap">
                      <span className="sp-input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                        </svg>
                      </span>
                      <input type={showPass ? "text" : "password"} className="sp-input sp-input--padded-right"
                        placeholder="Min. 8 characters" value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={8} />
                      <button type="button" className="sp-eye" onClick={() => setShowPass(!showPass)}>
                        {showPass ? "🙈" : "👁"}
                      </button>
                    </div>
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">Confirm password</label>
                    <div className="sp-input-wrap">
                      <span className="sp-input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                        </svg>
                      </span>
                      <input type={showPass ? "text" : "password"} className="sp-input"
                        placeholder="Repeat your password" value={form.confirm}
                        onChange={(e) => setForm({ ...form, confirm: e.target.value })} required />
                    </div>
                  </div>
                </div>

                <button type="submit" className="sp-btn-primary">Create Account →</button>

                <div className="sp-divider"><span>or sign up with</span></div>

                <div className="sp-social">
                  <button type="button" className="sp-social-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 7.1 29.5 4.6 24 4.6 16.3 4.6 9.7 8.7 6.3 14.7z"/>
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.3 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.1C9.5 38.6 16.3 44 24 44z"/>
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
                    </svg>
                    Google
                  </button>
                  <button type="button" className="sp-social-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    GitHub
                  </button>
                  <button type="button" className="sp-social-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                    </svg>
                    TikTok
                  </button>
                </div>

                <p className="sp-terms">
                  By signing up you agree to our{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a> and{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
                </p>

                <p className="sp-switch">
                  Already have an account?{" "}
                  <button type="button" className="sp-switch-link" onClick={switchToLogin}>Login instead</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}