import SectionTitle from "./SectionTitle";
import { EXPERIENCES } from "../data/constants";

export default function Experience({ visible }) {
  return (
    <section id="experience" style={{ padding: "6rem 5%", background: "#f8fafc" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <SectionTitle label="Work Experience" />

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "5px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #00d4ff, rgba(0,212,255,0.05))",
              borderRadius: "2px",
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: "2.5rem" }}>
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-1.9rem",
                  top: "6px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#00d4ff",
                  boxShadow: "0 0 0 4px rgba(0,212,255,0.15)",
                }}
              />

              {/* Card */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "1.8rem",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="timeline-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span
                    style={{
                      background: "#e0f2fe",
                      color: "#0284c7",
                      padding: "0.25rem 0.8rem",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
