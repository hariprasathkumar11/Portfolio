import { PERSONAL } from "../data/constants";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "#0f172a",
        overflow: "hidden",
      }}
    >
      {/* Radial glow bg */}
      <div style={{
        position: "absolute", inset: 0,
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 70%)," +
          "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(167,139,250,0.1) 0%, transparent 60%)",
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 5%", maxWidth: "780px" }}>
        <p className="fade-up" style={{ color: "#00d4ff", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Hello, I'm
        </p>

        <h1 className="fade-up delay1" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.05, marginBottom: "1.2rem", letterSpacing: "-2px" }}>
          {PERSONAL.name}
        </h1>

        <div className="fade-up delay2" style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.4rem", alignItems: "center" }}>
          <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 1rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 600 }}>
            {PERSONAL.title1}
          </span>
          <span style={{ color: "#475569", fontSize: "1rem" }}>×</span>
          <span style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.3)", color: "#a78bfa", padding: "0.3rem 1rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 600 }}>
            {PERSONAL.title2}
          </span>
        </div>

        <p className="fade-up delay3" style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2.4rem" }}>
          {PERSONAL.summary}
        </p>

        {/* Social icons row */}
        <div className="fade-up delay3" style={{ display: "flex", gap: "0.8rem", justifyContent: "center", marginBottom: "2rem" }}>
          {/* LinkedIn */}
          <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="social-btn linkedin" title="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#0077b5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="social-btn github" title="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#f0f6fc">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${PERSONAL.whatsapp}`} target="_blank" rel="noreferrer" className="social-btn" style={{ borderColor: "rgba(37,211,102,0.3)" }} title="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        {/* CTA buttons */}
        <div className="fade-up delay4" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("projects")}
            style={{ background: "#00d4ff", color: "#0f172a", border: "none", padding: "0.85rem 2rem", borderRadius: "10px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", letterSpacing: "0.02em", transition: "all 0.2s" }}
            onMouseOver={(e) => { e.target.style.background = "#38bdf8"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { e.target.style.background = "#00d4ff"; e.target.style.transform = "none"; }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{ background: "transparent", color: "#f1f5f9", border: "1px solid rgba(241,245,249,0.2)", padding: "0.85rem 2rem", borderRadius: "10px", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif", transition: "all 0.2s" }}
            onMouseOver={(e) => { e.target.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseOut={(e) => { e.target.style.background = "transparent"; }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fade-up delay5" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00d4ff", animation: "scrollBounce 2s infinite" }} />
      </div>
    </section>
  );
}
