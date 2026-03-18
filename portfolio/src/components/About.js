import SectionTitle from "./SectionTitle";
import { PERSONAL } from "../data/constants";

function MetaRow({ icon, text }) {
  return (
    <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
      <span style={{ fontSize: "0.9rem", marginTop: "2px", flexShrink: 0 }}>{icon}</span>
      <span style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

export default function About({ visible }) {
  return (
    <section id="about" style={{ padding: "6rem 5%", background: "#f8fafc" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <SectionTitle label="About Me" />

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }}
        >
          {/* Left card */}
          <div style={{ background: "#f1f5f9", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
            {/* Avatar */}
            <div
              style={{
                width: "100px", height: "100px", borderRadius: "50%",
                background: "linear-gradient(135deg, #00d4ff, #a78bfa)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <div
                style={{
                  width: "88px", height: "88px", borderRadius: "50%",
                  background: "#0f172a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.6rem", fontWeight: 800, color: "#00d4ff",
                }}
              >
                {PERSONAL.initials}
              </div>
            </div>

            {/* Meta info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", textAlign: "left" }}>
              <MetaRow icon="📍" text={PERSONAL.location} />
              <MetaRow icon="📧" text={PERSONAL.email} />
              <MetaRow icon="📞" text={PERSONAL.phone} />
              <MetaRow icon="🎓" text={PERSONAL.education} />
            </div>

            {/* Social links inside card */}
            <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", marginTop: "1.5rem" }}>
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.78rem", color: "#0077b5", fontWeight: 600, textDecoration: "none", background: "#e0f2fe", padding: "0.3rem 0.8rem", borderRadius: "999px" }}>
                LinkedIn ↗
              </a>
              <a href={PERSONAL.github} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.78rem", color: "#334155", fontWeight: 600, textDecoration: "none", background: "#e2e8f0", padding: "0.3rem 0.8rem", borderRadius: "999px" }}>
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right text */}
          <div>
            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              I'm a <strong style={{ color: "#0ea5e9", fontWeight: 700 }}>Data Annotation Specialist</strong> with 2+ years of experience in AI/ML projects — working on data labeling and annotation for image, video, text, LiDAR, and LLM training datasets.
            </p>
            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              I bring strong skills in <strong style={{ color: "#0ea5e9", fontWeight: 700 }}>keypoint annotation, segmentation, quality assurance</strong>, and data validation for computer vision and NLP workflows.
            </p>
            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Beyond AI data, I'm also a <strong style={{ color: "#0ea5e9", fontWeight: 700 }}>MERN Full Stack Developer</strong> — building robust web applications using React.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* Soft skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
              {["Detail-Oriented", "Team Collaborator", "Quick Learner", "Adaptable"].map((s) => (
                <span key={s} style={{ background: "#e0f2fe", color: "#0284c7", padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
