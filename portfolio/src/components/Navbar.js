import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.2rem 5%",
        background: scrolled ? "rgba(15,23,42,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s ease",
      }}>
        {/* Logo */}
        <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.5px" }}>
          HARI<span style={{ color: "#00d4ff" }}>.</span>
        </div>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ display: "flex", gap: "0.2rem" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Sora', sans-serif", fontWeight: 500,
                fontSize: "0.9rem", padding: "0.4rem 0.9rem", borderRadius: "6px",
                transition: "all 0.2s",
                color: activeSection === link ? "#00d4ff" : "#94a3b8",
                background: activeSection === link ? "rgba(0,212,255,0.08)" : "transparent",
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Burger */}
        <button
          className="burger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", flexDirection: "column", gap: "5px",
            background: "none", border: "none", cursor: "pointer", padding: "4px",
          }}
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "#f1f5f9", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#f1f5f9", borderRadius: "2px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#f1f5f9", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(15,23,42,0.98)", backdropFilter: "blur(12px)",
          display: "flex", flexDirection: "column",
          padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Sora', sans-serif", fontWeight: 500,
                fontSize: "1rem", padding: "0.9rem 5%", textAlign: "left",
                color: activeSection === link ? "#00d4ff" : "#cbd5e1",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
