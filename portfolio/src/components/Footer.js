import { PERSONAL } from "../data/constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        padding: "2rem 5%",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <p style={{ color: "#475569", fontSize: "0.85rem" }}>
        Designed & Built by{" "}
        <span style={{ color: "#00d4ff", fontWeight: 700 }}>{PERSONAL.name}</span>{" "}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
