
import Link from "next/link";
import "./student-portal.css";

const services = [
  {
    icon: "👤",
    title: "Student Profile",
    description: "View your personal and academic information.",
    href: "#profile",
  },
  {
    icon: "📅",
    title: "Attendance",
    description: "Check your attendance and academic progress.",
    href: "#attendance",
  },
  {
    icon: "🕒",
    title: "Time Table",
    description: "View your class schedule and timings.",
    href: "#timetable",
  },
  {
    icon: "📚",
    title: "Study Material",
    description: "Access syllabus, notes and learning resources.",
    href: "/studentconer/syllabus",
  },
  {
    icon: "📝",
    title: "Examination",
    description: "Get examination information and updates.",
    href: "#examination",
  },
  {
    icon: "🏆",
    title: "Results",
    description: "Check examination results and academic records.",
    href: "#results",
  },
  {
    icon: "💳",
    title: "Fee Details",
    description: "View fee information and payment details.",
    href: "#fees",
  },
  {
    icon: "📢",
    title: "Notice Board",
    description: "Read important college announcements.",
    href: "#notices",
  },
];

const notices = [
  {
    date: "Important",
    title: "Check the college notice board for latest announcements.",
  },
  {
    date: "Academic",
    title: "Students should regularly check their syllabus and study material.",
  },
  {
    date: "Examination",
    title: "Examination schedules will be shared through official notices.",
  },
];

export default function StudentPortalPage() {
  return (
    <main className="student-portal">
      <section className="portal-hero">
        <div className="portal-hero-content">
          <span className="portal-tag">DD COLLEGE • STUDENT SERVICES</span>
          <h1>Student Portal</h1>
          <p>
            Your academic journey, all in one place. Access student services,
            academic resources and important college updates.
          </p>

          <div className="portal-hero-buttons">
            <a href="#services" className="portal-primary-btn">
              Explore Services →
            </a>
            <a href="#notices" className="portal-outline-btn">
              View Notices
            </a>
          </div>
        </div>

        <div className="portal-hero-art">
          <div className="portal-art-circle">
            <span>🎓</span>
          </div>
          <div className="portal-art-card">
            <strong>DD COLLEGE</strong>
            <small>Learn • Grow • Succeed</small>
          </div>
        </div>
      </section>

      <section className="portal-welcome">
        <div>
          <span className="portal-section-label">WELCOME TO DD COLLEGE</span>
          <h2>Your Campus, Your Portal</h2>
          <p>
            Find academic resources, college information and student support
            services through this dedicated student portal.
          </p>
        </div>
        <div className="portal-welcome-icon">🎓</div>
      </section>

      <section className="portal-services" id="services">
        <div className="portal-heading">
          <span className="portal-section-label">STUDENT RESOURCES</span>
          <h2>Explore Student Services</h2>
          <p>Everything you need for your college journey.</p>
        </div>

        <div className="portal-service-grid">
          {services.map((service) => (
            <Link
              href={service.href}
              className="portal-service-card"
              key={service.title}
            >
              <div className="portal-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="portal-card-link">Explore More →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="portal-bottom-grid">
        <div className="portal-notices" id="notices">
          <div className="portal-bottom-heading">
            <div>
              <span className="portal-section-label">LATEST UPDATES</span>
              <h2>Notice Board</h2>
            </div>
            <span className="portal-notice-icon"></span>
          </div>

          {notices.map((notice, index) => (
            <div className="portal-notice-item" key={index}>
              <span>{notice.date}</span>
              <p>{notice.title}</p>
            </div>
          ))}
        </div>

        <div className="portal-help">
          <span className="portal-help-icon"></span>
          <span className="portal-section-label">STUDENT SUPPORT</span>
          <h2>Need Assistance?</h2>
          <p>
            For academic queries, admission information or student support,
            please contact the college administration.
          </p>
          <Link href="/contact" className="portal-primary-btn">
            Contact College →
          </Link>
        </div>
      </section>

      <section className="portal-footer-banner">
        <h2>Learn Today. Lead Tomorrow.</h2>
        <p>DD College — Empowering students through education and opportunity.</p>
      </section>
    </main>
  );
}
