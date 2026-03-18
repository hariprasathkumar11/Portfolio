import SectionTitle from "./SectionTitle";
import { SKILLS } from "../data/constants";

export default function Skills({ visible }) {
  return (
    <section id="skills" style={{ padding: "6rem 5%", background: "#0f172a" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <SectionTitle label="Technical Skills" light />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div
              key={category}
              className="skill-card"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "1.5rem",
                transition: "transform 0.2s, border-color 0.2s",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <h3
                style={{
                  color: "#00d4ff",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "#cbd5e1",
                      padding: "0.25rem 0.7rem",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
