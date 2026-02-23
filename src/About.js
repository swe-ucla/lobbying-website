import React from "react";
import NavigationBar from "./components/NavigationBar";
import "./About.css";

function About() {
  return (
    <div>
      <NavigationBar />

      <div className="about-hero">
        <img
          src="/assets/background_image.png"
          alt="SWE Lobbying Committee at the Capitol"
          className="about-hero-image"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-text">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <main className="about-content">
        <section className="about-section mission-section">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              The Society of Women Engineers (SWE) Lobbying Committee engages
              annually in advocacy efforts in Washington, D.C., lobbying for
              legislation related to STEM, education, artificial intelligence,
              the environment, and related policy areas.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="/assets/background_image.png"
              alt="SWE members on the Capitol steps"
              className="about-section-image"
            />
          </div>
        </section>

        <section className="about-section members-section">
          <h2 className="about-section-title">
            Committee Leadership &amp; Members
          </h2>

          <div className="members-grid">
            {[
              { name: "Priya Soneji", role: "Director" },
              { name: "Medha Prasad", role: "Assistant Director" },
              { name: "Priya Soneji", role: "Cross-Campus Coalition Lead" },
              { name: "Medha Prasad", role: "Cross-Campus Coalition Lead" },
              { name: "Diya Desai", role: "Campus Events" },
              { name: "Diya Desai", role: "Campus Events" },
              { name: "Diya Desai", role: "Finance Chair" },
              { name: "Diya Desai", role: "Finance Chair" },
              { name: "Diya Desai", role: "Trip Planning Committee Lead" },
              { name: "Diya Desai", role: "Trip Planning Committee Lead" },
              { name: "Diya Desai", role: "General Member" },
              { name: "Diya Desai", role: "General Member" },
            ].map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-photo-placeholder" />
                <p className="member-name">{member.name}</p>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section history-section">
          <div className="about-text">
            <h2>A History of Our Advocacy</h2>
            <p>
              The Society of Women Engineers (SWE) Lobbying Committee engages
              annually in advocacy efforts in Washington, D.C., lobbying for
              legislation related to STEM, education, artificial intelligence,
              the environment, and related policy areas.
            </p>
            <p>
              The Society of Women Engineers (SWE) Lobbying Committee engages
              annually in advocacy efforts in Washington, D.C., lobbying for
              legislation related to STEM, education, artificial intelligence,
              the environment, and related policy areas.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="/assets/background_image.png"
              alt="SWE advocacy history"
              className="about-section-image"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
