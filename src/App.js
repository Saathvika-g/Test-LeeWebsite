import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <section className="vision-section">
          <h2>Visions</h2>
          <p style={{ marginTop: "15px" }}>
            We aim to revolutionize sustainable innovation through interdisciplinary collaboration,
            focusing on AI, nanotechnology, and clean materials.
          </p>
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          <p>
            Our upcoming research projects will showcase innovative approaches in
            material analysis, IoT-driven solutions, and energy-efficient systems.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
