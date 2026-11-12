
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Laptop,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  Monitor,
  Cpu,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

const learningAreas = [
  {
    icon: Code2,
    title: "Programming & Coding",
    description:
      "Build programming knowledge, logical thinking and problem-solving skills through practical coding.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Learn website development, modern web technologies and interactive digital experiences.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Understand database concepts, data organization, storage and management systems.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Explore emerging technologies, intelligent systems and the fundamentals of AI.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Understand digital safety, information security and responsible technology practices.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Explore application concepts and the technologies used to create digital solutions.",
  },
];

const careerOptions = [
  "Software Developer",
  "Web Developer",
  "Database Administrator",
  "IT Support Specialist",
  "Software Tester",
  "Data Analyst",
];

export default function ComputerSciencePage() {
  return (
    <main className="cs-page">
      <style>{`
        .cs-page {
          --cs-maroon: #790d2d;
          --cs-dark: #24111a;
          --cs-gold: #d9a441;
          --cs-light: #fffaf5;
          color: #29232a;
          background: #fff;
          overflow: hidden;
        }
        .cs-page * { box-sizing: border-box; }
        .cs-container {
          width: min(1160px, calc(100% - 40px));
          margin: auto;
        }
        .cs-hero {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          color: white;
          background:
            linear-gradient(90deg, rgba(30, 9, 20, .94), rgba(65, 13, 37, .83), rgba(30, 9, 20, .45)),
            url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=90") center/cover;
        }
        .cs-hero-content { max-width: 760px; padding: 90px 0; }
        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #f4c76f;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .cs-eyebrow:before {
          content: "";
          width: 30px;
          height: 2px;
          background: var(--cs-gold);
        }
        .cs-hero h1 {
          margin: 22px 0;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 850;
        }
        .cs-hero h1 span { color: #f1c36d; }
        .cs-hero p {
          max-width: 650px;
          color: #f2e9ed;
          font-size: 17px;
          line-height: 1.9;
        }
        .cs-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
        .cs-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 49px;
          padding: 0 22px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 750;
          transition: .25s ease;
        }
        .cs-btn-primary { color: #2b1720; background: #efc36f; }
        .cs-btn-primary:hover { background: white; transform: translateY(-3px); }
        .cs-btn-outline { color: white; border: 1px solid rgba(255,255,255,.65); }
        .cs-btn-outline:hover { background: white; color: var(--cs-maroon); }
        .cs-breadcrumb { padding: 16px 0; background: #fbf6f1; color: #76666c; font-size: 13px; }
        .cs-breadcrumb a { color: var(--cs-maroon); text-decoration: none; }
        .cs-section { padding: 82px 0; }
        .cs-section-soft { background: var(--cs-light); }
        .cs-heading { max-width: 720px; margin-bottom: 38px; }
        .cs-kicker {
          color: var(--cs-maroon);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .cs-heading h2 {
          margin: 12px 0;
          color: var(--cs-dark);
          font-size: clamp(29px, 4vw, 43px);
          line-height: 1.2;
        }
        .cs-heading p, .cs-about-text p {
          color: #71666b;
          font-size: 15px;
          line-height: 1.9;
        }
        .cs-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }
        .cs-about-image { position: relative; }
        .cs-about-image img {
          display: block;
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 9px;
        }
        .cs-image-label {
          position: absolute;
          right: -15px;
          bottom: 22px;
          padding: 17px 23px;
          color: white;
          background: var(--cs-maroon);
          border-radius: 6px;
          font-weight: 750;
          box-shadow: 0 12px 30px #0002;
        }
        .cs-about-text h2 {
          margin: 12px 0 18px;
          color: var(--cs-dark);
          font-size: clamp(29px, 4vw, 41px);
          line-height: 1.2;
        }
        .cs-check-list { display: grid; gap: 13px; margin-top: 24px; }
        .cs-check {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #453840;
          font-size: 14px;
          font-weight: 650;
        }
        .cs-check svg { color: var(--cs-maroon); flex-shrink: 0; }
        .cs-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cs-card {
          padding: 27px 24px;
          background: white;
          border: 1px solid #eee5e8;
          border-radius: 9px;
          transition: .25s ease;
        }
        .cs-card:hover {
          transform: translateY(-6px);
          border-color: #d6a1b2;
          box-shadow: 0 15px 35px #4b102015;
        }
        .cs-icon {
          display: grid;
          place-items: center;
          width: 53px;
          height: 53px;
          margin-bottom: 20px;
          color: var(--cs-maroon);
          background: #f8eaf0;
          border-radius: 9px;
        }
        .cs-card h3 { margin: 0 0 11px; color: var(--cs-dark); font-size: 18px; }
        .cs-card p { margin: 0; color: #756970; font-size: 14px; line-height: 1.8; }
        .cs-highlight {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
          padding: 42px;
          color: white;
          background: linear-gradient(120deg, #4c1028, #85183d);
          border-radius: 12px;
        }
        .cs-highlight h2 { margin: 12px 0; font-size: clamp(27px, 4vw, 38px); }
        .cs-highlight p { color: #f3e5eb; line-height: 1.8; }
        .cs-highlight-list { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cs-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 14px;
          font-weight: 650;
        }
        .cs-highlight-item svg { color: #f4c76f; flex-shrink: 0; }
        .cs-career-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .cs-career {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 19px;
          background: white;
          border: 1px solid #eee5e8;
          border-radius: 7px;
          font-weight: 700;
          color: #493640;
        }
        .cs-career svg { color: var(--cs-maroon); flex-shrink: 0; }
        .cs-cta {
          padding: 65px 20px;
          color: white;
          text-align: center;
          background: var(--cs-dark);
        }
        .cs-cta h2 { margin: 0 0 13px; font-size: clamp(28px, 4vw, 42px); }
        .cs-cta p { max-width: 650px; margin: 0 auto 25px; color: #e4d9de; line-height: 1.8; }
        @media(max-width: 850px) {
          .cs-card-grid { grid-template-columns: repeat(2, 1fr); }
          .cs-about-grid { gap: 35px; }
          .cs-highlight { grid-template-columns: 1fr; }
        }
        @media(max-width: 600px) {
          .cs-container { width: min(100% - 30px, 1160px); }
          .cs-hero { min-height: 530px; }
          .cs-hero-content { padding: 70px 0; }
          .cs-hero p { font-size: 15px; }
          .cs-section { padding: 58px 0; }
          .cs-about-grid { grid-template-columns: 1fr; }
          .cs-about-image img { height: 280px; }
          .cs-image-label { right: 8px; }
          .cs-card-grid, .cs-career-grid { grid-template-columns: 1fr; }
          .cs-highlight { padding: 28px 22px; }
          .cs-highlight-list { grid-template-columns: 1fr; }
          .cs-actions .cs-btn { width: 100%; }
        }
      `}</style>

      <section className="cs-hero">
        <div className="cs-container">
          <div className="cs-hero-content">
            <span className="cs-eyebrow">DD College · Academic Department</span>
            <h1>
              Department of <span>Computer Science</span>
            </h1>
            <p>
              Discover the world of computing, programming and digital
              innovation. Develop technical knowledge, practical skills and
              problem-solving abilities for a technology-driven future.
            </p>
            <div className="cs-actions">
              <Link href="/contact?course=Computer%20Science#contact-form" className="cs-btn cs-btn-primary">
                Admission Enquiry <ArrowUpRight size={18} />
              </Link>
              <a href="#about-department" className="cs-btn cs-btn-outline">
                Explore Department <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-breadcrumb">
        <div className="cs-container">
          <Link href="/">Home</Link> / Departments / Computer Science
        </div>
      </div>

      <section className="cs-section" id="about-department">
        <div className="cs-container cs-about-grid">
          <div className="cs-about-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85"
              alt="Students learning computer science"
            />
            <div className="cs-image-label">Learn · Create · Innovate</div>
          </div>

          <div className="cs-about-text">
            <span className="cs-kicker">About the Department</span>
            <h2>Building Knowledge for a Digital World</h2>
            <p>
              The Department of Computer Science focuses on developing
              understanding of computers, software, programming and modern
              information technologies. Students are encouraged to explore
              concepts through practical activities, projects and collaborative
              learning.
            </p>
            <p>
              Our learning approach aims to strengthen logical thinking,
              technical confidence, creativity and the ability to solve
              real-world problems using technology.
            </p>
            <div className="cs-check-list">
              {[
                "Foundation in computing and programming concepts",
                "Practical and project-based learning",
                "Problem-solving and analytical thinking",
                "Awareness of emerging technologies",
              ].map((item) => (
                <div className="cs-check" key={item}>
                  <CheckCircle2 size={19} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section cs-section-soft">
        <div className="cs-container">
          <div className="cs-heading">
            <span className="cs-kicker">Academic Focus</span>
            <h2>Explore the World of Computer Science</h2>
            <p>
              Develop a foundation in important computing areas and understand
              how technology is used in today's digital environment.
            </p>
          </div>

          <div className="cs-card-grid">
            {learningAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article className="cs-card" key={area.title}>
                  <div className="cs-icon"><Icon size={26} /></div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-highlight">
            <div>
              <span className="cs-eyebrow">Learning Experience</span>
              <h2>Skills That Go Beyond the Classroom</h2>
              <p>
                Build a strong learning foundation through practical
                exploration, teamwork and an understanding of real-world
                technology applications.
              </p>
            </div>
            <div className="cs-highlight-list">
              {[
                "Programming Fundamentals",
                "Logical Problem Solving",
                "Project-Based Learning",
                "Digital Literacy",
                "Technical Communication",
                "Team Collaboration",
              ].map((item) => (
                <div className="cs-highlight-item" key={item}>
                  <CheckCircle2 size={19} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section cs-section-soft">
        <div className="cs-container">
          <div className="cs-heading">
            <span className="cs-kicker">Future Opportunities</span>
            <h2>Career Pathways in Technology</h2>
            <p>
              Computer science knowledge can provide a foundation for
              exploring a variety of technology-related career paths.
              Opportunities depend on qualifications, skills and experience.
            </p>
          </div>

          <div className="cs-career-grid">
            {careerOptions.map((career) => (
              <div className="cs-career" key={career}>
                <BriefcaseBusiness size={20} />
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-heading">
            <span className="cs-kicker">Our Approach</span>
            <h2>Learn with Curiosity and Confidence</h2>
            <p>
              We encourage students to stay curious, explore new ideas and
              develop the confidence to adapt to a continuously changing
              technological environment.
            </p>
          </div>
          <div className="cs-card-grid">
            <article className="cs-card">
              <div className="cs-icon"><Laptop size={26} /></div>
              <h3>Practical Understanding</h3>
              <p>Connect classroom concepts with practical computing activities and exercises.</p>
            </article>
            <article className="cs-card">
              <div className="cs-icon"><Monitor size={26} /></div>
              <h3>Digital Skills</h3>
              <p>Build confidence in using digital tools and understanding modern technologies.</p>
            </article>
            <article className="cs-card">
              <div className="cs-icon"><Cpu size={26} /></div>
              <h3>Innovation Mindset</h3>
              <p>Develop curiosity, creativity and an interest in emerging computing trends.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cs-cta">
        <div className="cs-container">
          <GraduationCap size={38} color="#efc36f" />
          <h2>Start Your Journey in Computer Science</h2>
          <p>
            Interested in learning about computing and technology? Contact DD
            College for information about available programmes and admissions.
          </p>
          <Link href="/contact?course=Computer%20Science#contact-form" className="cs-btn cs-btn-primary">
            Admission Enquiry <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
