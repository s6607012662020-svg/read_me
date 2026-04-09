import { useEffect } from "react";
import "./AboutPopup.css";

export default function AboutPopup({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div className={`ab-backdrop ${isOpen ? "ab-backdrop--visible" : ""}`} onClick={onClose} />
      <div className={`ab-panel ${isOpen ? "ab-panel--open" : ""}`} role="dialog" aria-modal="true">
        <button className="ab-close" onClick={onClose} aria-label="Close about">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="ab-inner">
          {/* LEFT — Brand */}
          <div className="ab-brand">
            <div>
              <div className="ab-brand-logo">
                <div className="ab-brand-icon"><span>M</span></div>
                <span className="ab-brand-name">M Master</span>
              </div>
              <h2 className="ab-brand-headline">Who We<br/>Are.</h2>
              <p className="ab-brand-sub">An experience design agency partnering for the long run to build things that truly matter.</p>
              <div className="ab-brand-stats">
                <div className="ab-brand-stat">
                  <span className="ab-brand-stat-num">12+</span>
                  <span className="ab-brand-stat-label">Years</span>
                </div>
                <div className="ab-brand-stat-divider" />
                <div className="ab-brand-stat">
                  <span className="ab-brand-stat-num">340</span>
                  <span className="ab-brand-stat-label">Projects</span>
                </div>
                <div className="ab-brand-stat-divider" />
                <div className="ab-brand-stat">
                  <span className="ab-brand-stat-num">98%</span>
                  <span className="ab-brand-stat-label">Satisfied</span>
                </div>
              </div>
            </div>
            <div className="ab-deco">
              <div className="ab-deco-ring ab-deco-ring--1" />
              <div className="ab-deco-ring ab-deco-ring--2" />
              <div className="ab-deco-dot ab-deco-dot--1" />
              <div className="ab-deco-dot ab-deco-dot--2" />
              <div className="ab-deco-dot ab-deco-dot--3" />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="ab-content-side">
            <div className="ab-content-header">
              <p className="ab-eyebrow">About Us</p>
              <h3 className="ab-content-title">An Experience<br/>Design Agency</h3>
            </div>
            <div className="ab-content-body">
              <p className="ab-subtitle">Full service range</p>
              <p className="ab-desc">
                Ability to put themselves in the merchant's shoes. We partner for the long run, and work as an extension of the merchant's team to build things that truly matter.
              </p>
              <div className="ab-features">
                <div className="ab-feature">
                  <div className="ab-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <div>
                    <div className="ab-feature-label">Strategy & Design</div>
                    <div className="ab-feature-desc">End-to-end experience design</div>
                  </div>
                </div>
                <div className="ab-feature">
                  <div className="ab-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5l5-3-1.22-1.22C19.91 15.86 22 12.63 22 9c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.63 2.09 6.86 5.22 8.78L6 22l5 3v-5l-2.28 2.28C6.81 21 5 18.21 5 15c0-4.08 3.05-7.44 7-7.93V2.05z"/></svg>
                  </div>
                  <div>
                    <div className="ab-feature-label">Development</div>
                    <div className="ab-feature-desc">Performant, scalable builds</div>
                  </div>
                </div>
                <div className="ab-feature">
                  <div className="ab-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  </div>
                  <div>
                    <div className="ab-feature-label">Long-term Partnership</div>
                    <div className="ab-feature-desc">Your team, extended</div>
                  </div>
                </div>
              </div>
              <div className="ab-actions">
                <button className="ab-btn-primary">Our Work →</button>
                <button className="ab-btn-ghost">Meet the Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}