export default function SectionTitle({ label, light = false }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 800,
          letterSpacing: "-1px",
          marginBottom: "0.6rem",
          color: light ? "#f1f5f9" : "#0f172a",
        }}
      >
        {label}
      </h2>
      <div
        style={{
          width: "50px",
          height: "3px",
          background: "#00d4ff",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
