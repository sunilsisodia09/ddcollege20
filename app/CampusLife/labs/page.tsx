import Link from "next/link";
import "./labs.css";

const labs = [
  {
    icon: "💻",
    number: "01",
    title: "Computer Lab",
    description:
      "A dedicated learning environment where students can develop computer knowledge and practical digital skills.",
    features: ["Computer Practice", "Programming Basics", "Digital Learning"],
  },
  {
    icon: "🌐",
    number: "02",
    title: "Internet & Networking",
    description:
      "Learn about internet technologies, connectivity and the fundamentals of computer networking.",
    features: ["Internet Access", "Networking Concepts", "Online Research"],
  },
  {
    icon: "⌨️",
    number: "03",
    title: "IT Skills & Applications",
    description:
      "Build confidence using essential computer applications and productivity tools.",
    features: ["Office Applications", "Data Handling", "Digital Skills"],
  },
  {
    icon: "🧪",
    number: "04",
    title: "Practical Learning",
    description:
      "Strengthen classroom learning through hands-on exercises, demonstrations and guided practice.",
    features: ["Practical Sessions", "Guided Exercises", "Skill Development"],
  },
];

const benefits = [
  "Hands-on computer learning",
  "Practical application of concepts",
  "Digital literacy and confidence",
  "Technology-focused skill development",
];

export default function LabsPage() {
  return (
    <main className="labs-page">
      <section className="labs-hero">
        <div className="labs-hero-overlay" />
        <div className="labs-hero-content">
          <span className="labs-eyebrow">LEARN • EXPLORE • INNOVATE</span>
          <h1>
            Computer Labs & <span>Technology</span>
          </h1>
          <p>
            Explore technology-enabled learning spaces that encourage
            practical knowledge, digital confidence and hands-on learning
            at DD College.
          </p>
          <div className="labs-hero-actions">
            <a href="#lab-facilities" className="labs-primary-btn">
              Explore Facilities <span>↗</span>
            </a>
            <Link href="/CampusLife/campusoverview" className="labs-outline-btn">
              Campus Overview
            </Link>
          </div>
        </div>
        <div className="labs-hero-bottom">
          <span>TECHNOLOGY</span>
          <span>KNOWLEDGE</span>
          <span>PRACTICE</span>
          <span>INNOVATION</span>
        </div>
      </section>

      <section className="labs-intro">
        <span className="labs-section-label">DIGITAL LEARNING AT DD COLLEGE</span>
        <h2>
          Learn Technology Through <span>Practice</span>
        </h2>
        <p>
          Computer education is an important part of modern learning.
          Practical exposure helps students understand technology, improve
          their digital skills and prepare for a changing professional world.
        </p>
      </section>

      <section className="labs-facilities" id="lab-facilities">
        <div className="labs-section-heading">
          <div>
            <span className="labs-section-label">OUR LEARNING SPACES</span>
            <h2>Explore Lab Facilities</h2>
          </div>
          <p>
            Discover learning areas designed to support computer education
            and practical skill development.
          </p>
        </div>

        <div className="labs-grid">
          {labs.map((lab) => (
            <article className="labs-card" key={lab.number}>
              <div className="labs-card-top">
                <span className="labs-icon">{lab.icon}</span>
                <span className="labs-number">{lab.number}</span>
              </div>
              <h3>{lab.title}</h3>
              <p>{lab.description}</p>
              <div className="labs-tags">
                {lab.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <div className="labs-card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="labs-practical">
        <div className="labs-practical-image">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1000&q=85"
            alt="Students learning and working with technology"
          />
        </div>
        <div className="labs-practical-content">
          <span className="labs-section-label">LEARNING BY DOING</span>
          <h2>
            From Classroom Concepts to <span>Practical Skills</span>
          </h2>
          <p>
            Practical computer learning helps students connect theoretical
            concepts with real-world applications. It encourages curiosity,
            problem-solving and independent learning.
          </p>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="labs-quote">
        <span className="labs-section-label">BUILD YOUR DIGITAL FUTURE</span>
        <h2>Technology Opens New Possibilities.</h2>
        <p>
          Learn new skills, explore ideas and prepare yourself for tomorrow.
        </p>
        <Link href="/CampusLife/clubs" className="labs-primary-btn">
          Explore Student Activities <span>↗</span>
        </Link>
      </section>

      <section className="labs-bottom">
        <div>
          <span className="labs-section-label">DISCOVER MORE</span>
          <h2>Explore Life at DD College</h2>
          <p>
            Discover campus facilities, student activities and college events.
          </p>
        </div>
        <div className="labs-bottom-links">
          <Link href="/CampusLife/campusoverview">Campus Overview ↗</Link>
          <Link href="/CampusLife/events">Events & Activities ↗</Link>
          <Link href="/CampusLife/clubs">Clubs & Societies ↗</Link>
        </div>
      </section>
    </main>
  );
}