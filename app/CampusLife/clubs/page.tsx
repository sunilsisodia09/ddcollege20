
import Link from "next/link";
import "./clubs.css";

const clubs = [
  {
    number: "01",
    icon: "🎭",
    title: "Cultural Club",
    description:
      "Celebrate creativity, traditions and diversity through cultural programmes, festivals and student performances.",
    activities: ["Cultural Fest", "Traditional Day", "Stage Performances"],
  },
  {
    number: "02",
    icon: "🎵",
    title: "Music & Dance Club",
    description:
      "Discover your talent in music and dance through performances, practice sessions and campus celebrations.",
    activities: ["Singing", "Dance", "Live Performances"],
  },
  {
    number: "03",
    icon: "📚",
    title: "Literary Club",
    description:
      "Develop communication, reading, writing and public speaking skills in an engaging environment.",
    activities: ["Debates", "Creative Writing", "Poetry"],
  },
  {
    number: "04",
    icon: "📸",
    title: "Photography Club",
    description:
      "Capture campus moments, explore visual storytelling and develop creative photography skills.",
    activities: ["Photography", "Videography", "Photo Walks"],
  },
  {
    number: "05",
    icon: "⚽",
    title: "Sports Club",
    description:
      "Encourage teamwork, fitness and sportsmanship through indoor and outdoor sporting activities.",
    activities: ["Sports Events", "Team Games", "Fitness"],
  },
  {
    number: "06",
    icon: "🌱",
    title: "Environment Club",
    description:
      "Promote environmental awareness and responsible habits through green initiatives and activities.",
    activities: ["Tree Plantation", "Cleanliness Drives", "Awareness"],
  },
  {
    number: "07",
    icon: "🤝",
    title: "Social Service Club",
    description:
      "Encourage students to contribute to society through volunteering and community engagement.",
    activities: ["Community Service", "Social Awareness", "Volunteering"],
  },
  {
    number: "08",
    icon: "💻",
    title: "Technology Club",
    description:
      "Explore technology, innovation and digital skills through collaborative learning activities.",
    activities: ["Digital Skills", "Workshops", "Innovation"],
  },
];

export default function ClubsPage() {
  return (
    <main className="clubs-page">
      <section className="clubs-hero">
        <div className="clubs-hero-overlay" />
        <div className="clubs-hero-content">
          <span className="clubs-eyebrow">LIFE AT DD COLLEGE</span>
          <h1>
            Clubs & <span>Societies</span>
          </h1>
          <p>
            Discover your passion, develop your talents and make your college
            journey memorable through student clubs and activities.
          </p>
          <div className="clubs-hero-actions">
            <a href="#our-clubs" className="clubs-primary-btn">
              Explore Our Clubs <span>↗</span>
            </a>
            <Link href="/CampusLife/events" className="clubs-outline-btn">
              College Events
            </Link>
          </div>
        </div>
        <div className="clubs-hero-bottom">
          <span>LEARN</span>
          <span>CREATE</span>
          <span>CONNECT</span>
          <span>GROW</span>
        </div>
      </section>

      <section className="clubs-intro">
        <div className="clubs-intro-label">BEYOND THE CLASSROOM</div>
        <h2>
          Find Your <span>Community</span>
        </h2>
        <p>
          College life is about more than academics. Our clubs and societies
          provide opportunities to explore interests, build confidence,
          collaborate with others and discover new skills.
        </p>
      </section>

      <section className="clubs-list-section" id="our-clubs">
        <div className="clubs-section-heading">
          <div>
            <span className="clubs-eyebrow-dark">EXPLORE & PARTICIPATE</span>
            <h2>Our Clubs & Societies</h2>
          </div>
          <p>
            A space for every interest. Find what inspires you and take part
            in campus life.
          </p>
        </div>

        <div className="clubs-grid">
          {clubs.map((club) => (
            <article className="club-card" key={club.number}>
              <div className="club-card-top">
                <span className="club-icon">{club.icon}</span>
                <span className="club-number">{club.number}</span>
              </div>
              <h3>{club.title}</h3>
              <p>{club.description}</p>
              <div className="club-tags">
                {club.activities.map((activity) => (
                  <span key={activity}>{activity}</span>
                ))}
              </div>
              <div className="club-card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="clubs-benefits">
        <div className="clubs-benefits-content">
          <span className="clubs-eyebrow">YOUR COLLEGE JOURNEY</span>
          <h2>
            More Than a Club.
            <br />
            A Place to <span>Belong.</span>
          </h2>
          <p>
            Participate in activities, meet like-minded students, share ideas
            and create experiences that stay with you beyond college.
          </p>
          <Link href="/CampusLife/events" className="clubs-primary-btn">
            Explore Campus Events <span>↗</span>
          </Link>
        </div>
        <div className="clubs-benefits-points">
          <div><span>01</span><p>Discover your interests</p></div>
          <div><span>02</span><p>Build confidence and leadership</p></div>
          <div><span>03</span><p>Connect with fellow students</p></div>
          <div><span>04</span><p>Create memorable experiences</p></div>
        </div>
      </section>

      <section className="clubs-footer-cta">
        <span>MAKE THE MOST OF YOUR COLLEGE LIFE</span>
        <h2>Explore. Participate. Grow.</h2>
        <p>
          Be a part of campus activities and make every college moment count.
        </p>
        <Link href="/admission" className="clubs-cta-btn">
          Explore DD College <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
