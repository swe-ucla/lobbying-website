import React from "react";
import "./About.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function About() {
  return (
    <div className="about-page">
      <NavigationBar />

      <section className="about-hero-image-only">
        <img
          src="/assets/About Us Hero.svg"
          alt="About us hero"
          className="about-hero-image"
        />
      </section>

      <main className="about-content">
        <section className="about-section mission-section">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              The mission of the Society of Women Engineers (SWE) Lobbying
              Committee is to ensure that the voices of women engineers are
              heard and respected within the halls of Congress.
            </p> <br />
            <p>
              We work tirelessly to bridge the gap between technical expertise
              and public policy, advocating for legislation that promotes
              diversity, equity, and innovation. By championing these values, we
              aim to shape a legislative landscape that empowers the next
              generation of STEM leaders.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="/assets/group_pic_2.jpg"
              alt="SWE lobbying committee members in front of the Washington Monument"
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
              { name: "Savannah Alanis", role: "Assistant Director" },
              { name: "Diya Desai", role: "Cross-Campus Coalition Lead" },
              { name: "Issabela Medina", role: "Cross-Campus Coalition Lead" },
              { name: "Medha Prasad", role: "Campus Events Lead" },
              { name: "Duru Ibisagaoglu", role: "Campus Events Lead" },
              { name: "Rachel Lee", role: "Financial Chair" },
              { name: "Ava Soh", role: "Financial Chair" },
              { name: "Chloe Cheng", role: "Trip Planning Lead" },
              { name: "Annan Dai", role: "Trip Planning Lead" },
              { name: "Nyla Zia", role: "General (Cross-Campus Advisor)" },
              { name: "Jocelyn Barrera", role: "General (Financial Advisor)" },
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
          <div className="about-image-wrapper">
            <img
              src="/assets/group_pic_1.jpg"
              alt="SWE lobbying committee members with the Washington Monument"
              className="about-section-image"
            />
          </div>
          <div className="about-text">
            <h2>A History of Our Advocacy</h2>
            <p>
              The Society of Women Engineers (SWE) Lobbying Committee engages
              in a sustained, annual effort to influence federal policy in
              Washington, D.C. Our advocacy has historically focused on driving
              legislative progress in critical sectors, including STEM
              education, artificial intelligence, and environmental protection.
            </p>  <br />
            <p>
              Through these yearly lobbying trips, we have established a
              consistent presence at the Capitol, fighting for policy areas that
              directly impact the engineering community and the broader public.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
