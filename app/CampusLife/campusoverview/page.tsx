
import Link from "next/link";
import "./campus.css";

const facilities = [
  {
    icon: "🏛️",
    title: "Modern Infrastructure",
    description:
      "A welcoming campus environment designed to support academic excellence and student development.",
  },
  {
    icon: "📚",
    title: "Library",
    description:
      "A learning space that encourages reading, research and independent study.",
  },
  {
    icon: "💻",
    title: "Computer Labs",
    description:
      "Technology-enabled learning spaces for practical knowledge and digital skills.",
  },
  {
    icon: "⚽",
    title: "Sports & Recreation",
    description:
      "Opportunities to participate in sports, physical activities and recreational events.",
  },
  {
    icon: "🎭",
    title: "Cultural Activities",
    description:
      "A platform for students to showcase creativity, talent and cultural expression.",
  },
  {
    icon: "🌳",
    title: "Green Campus",
    description:
      "A pleasant campus atmosphere that supports learning and student well-being.",
  },
];

export default function CampusOverviewPage() {
  return (
    <main className="campus-page">
      <section className="campus-hero">
        <div className="campus-hero-overlay" />
        <div className="campus-hero-content">
          <span className="campus-eyebrow">DISCOVER DD COLLEGE</span>
          <h1>
            Our Campus, <span>Your Future</span>
          </h1>
          <p>
            Explore a vibrant learning environment where knowledge,
            opportunities and experiences come together to shape tomorrow.
          </p>
          <div className="campus-hero-buttons">
            <a href="#campus-facilities" className="campus-btn">
              Explore Campus <span>↗</span>
            </a>
            <Link href="/CampusLife/clubs" className="campus-btn-outline">
              Student Life
            </Link>
          </div>
        </div>
        <div className="campus-hero-bottom">
          <span>LEARN</span>
          <span>EXPLORE</span>
          <span>ACHIEVE</span>
          <span>GROW</span>
        </div>
      </section>

      <section className="campus-intro">
        <span className="campus-section-label">WELCOME TO DD COLLEGE</span>
        <h2>
          An Environment That Inspires <span>Excellence</span>
        </h2>
        <p>
          At DD College, campus life is an important part of the learning
          experience. Our campus provides spaces for academic learning,
          personal growth, creativity and student engagement.
        </p>
      </section>

      <section className="campus-facilities" id="campus-facilities">
        <div className="campus-section-heading">
          <div>
            <span className="campus-section-label">CAMPUS FACILITIES</span>
            <h2>Explore Our Campus</h2>
          </div>
          <p>
            Discover the facilities and opportunities that contribute to
            an engaging college experience.
          </p>
        </div>

        <div className="campus-facility-grid">
          {facilities.map((facility, index) => (
            <article className="campus-facility-card" key={facility.title}>
              <div className="campus-facility-top">
                <span className="campus-facility-icon">{facility.icon}</span>
                <span className="campus-facility-number">
                  0{index + 1}
                </span>
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
              <div className="campus-card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="campus-experience">
        <div className="campus-experience-image">
          <img
            src="/hero/college-hero.jpg"
            alt="DD College campus"
          />
        </div>
        <div className="campus-experience-content">
          <span className="campus-section-label">LIFE AT DD COLLEGE</span>
          <h2>
            Learn Beyond <span>Classrooms</span>
          </h2>
          <p>
            College is about discovering new interests, building friendships,
            developing confidence and preparing for the future. Students can
            explore different activities and make their college journey
            meaningful.
          </p>
          <Link href="/CampusLife/events" className="campus-btn">
            Explore Events <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="campus-cta">
        <span>YOUR JOURNEY STARTS HERE</span>
        <h2>Discover the DD College Experience</h2>
        <p>
          Explore academic opportunities, campus facilities and student
          activities.
        </p>
        <Link href="/admission" className="campus-cta-btn">
          Explore Admissions <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
