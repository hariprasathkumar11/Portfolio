import SectionTitle from "./SectionTitle";
import { PROJECTS } from "../data/constants";

export default function Projects({ visible }) {
  return (
    <section id="projects" style={{ padding: "6rem 5%", background: "#0f172a" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <SectionTitle label="Projects" light />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="project-card"
              style={{
                "--accent": project.color,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "transform 0.2s, border-color 0.2s",
              }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{project.icon}</div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: project.color, marginBottom: "0.8rem" }}>
                {project.title}
              </h3>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      border: `1px solid ${project.color}`,
                      color: project.color,
                      padding: "0.15rem 0.6rem",
                      borderRadius: "5px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7 }}>
                {project.desc}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "1.2rem",
                    padding: "0.4rem 1rem",
                    border: `1px solid ${project.color}`,
                    borderRadius: "8px",
                    color: project.color,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = project.color;
                    e.currentTarget.style.color = "#0f172a";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = project.color;
                  }}
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
