import { useState, useEffect } from "react";
import "./ContactPopup.css";

const SUBJECTS = ["General Inquiry", "Personal Training", "Membership", "Partnership", "Other"];

export default function ContactPopup({ isOpen, onClose }) {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) setTimeout(() => { setForm({ email: "", subject: "", message: "" }); setSubmitted(false); }, 400);
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <div className={`cp-backdrop ${isOpen ? "cp-backdrop--visible" : ""}`} onClick={onClose} />
      <div className={`cp-panel ${isOpen ? "cp-panel--open" : ""}`} role="dialog" aria-modal="true">
        <button className="cp-close" onClick={onClose} aria-label="Close contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="cp-inner">
          {/* LEFT — Brand */}
          <div className="cp-brand">
            <div>
              <div className="cp-brand-logo">
                <div className="cp-brand-icon"><span>M</span></div>
                <span className="cp-brand-name">M Master</span>
              </div>
              <h2 className="cp-brand-headline">Get in<br/>Touch.</h2>
              <p className="cp-brand-sub">Have questions about our programs, membership, or anything else? We're here.</p>
              <div className="cp-brand-details">
                <div className="cp-brand-detail">
                  <div className="cp-brand-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <span className="cp-brand-detail-text">+1 (234) 567-89-00</span>
                </div>
                <div className="cp-brand-detail">
                  <div className="cp-brand-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <span className="cp-brand-detail-text">info@mmaster.com</span>
                </div>
                <div className="cp-brand-detail">
                  <div className="cp-brand-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <span className="cp-brand-detail-text">2247 Lunetta St, TX</span>
                </div>
              </div>
            </div>
            <div className="cp-deco">
              <div className="cp-deco-ring cp-deco-ring--1" />
              <div className="cp-deco-ring cp-deco-ring--2" />
              <div className="cp-deco-dot cp-deco-dot--1" />
              <div className="cp-deco-dot cp-deco-dot--2" />
              <div className="cp-deco-dot cp-deco-dot--3" />
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="cp-form-side">
            <div className="cp-form-header">
              <p className="cp-eyebrow">Contact</p>
              <h3 className="cp-form-title">Send us a message</h3>
            </div>

            {submitted ? (
              <div className="cp-success">
                <div className="cp-success-icon">✓</div>
                <h3>Message Sent</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button className="cp-btn-submit" style={{ marginTop: 12, width: 'auto', padding: '10px 24px' }}
                  onClick={() => { setForm({ email: "", subject: "", message: "" }); setSubmitted(false); }}>
                  Send Another →
                </button>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="cp-field">
                  <label className="cp-label">Email address</label>
                  <input type="email" className="cp-input" placeholder="you@example.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="cp-field">
                  <label className="cp-label">Subject</label>
                  <div className="cp-select-wrap">
                    <select className="cp-input cp-select" value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                      <option value="" disabled>Choose a subject…</option>
                      {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <span className="cp-select-arrow">▾</span>
                  </div>
                </div>
                <div className="cp-field">
                  <label className="cp-label">Message</label>
                  <textarea className="cp-input cp-textarea" placeholder="Tell us what's on your mind…"
                    rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="cp-btn-submit">Submit Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}