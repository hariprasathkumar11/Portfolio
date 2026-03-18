import { useState } from "react";
import "./styles/global.css";
import Navbar      from "./components/Navbar";
import Footer      from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Home        from "./pages/Home";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div>
      {/* Fixed top navigation */}
      <Navbar activeSection={activeSection} />

      {/* Page content */}
      <Home setActiveSection={setActiveSection} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button — always visible */}
      <WhatsAppFAB />
    </div>
  );
}
