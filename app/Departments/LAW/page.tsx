
import Link from "next/link";
import {
  Scale,
  Landmark,
  BookOpen,
  Gavel,
  ShieldCheck,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Handshake,
  FileText,
} from "lucide-react";

import "./law.css";

const subjects = [
  {
    icon: Landmark,
    title: "Constitutional Law",
    description:
      "Understand the Constitution, fundamental rights, duties and structure of government.",
  },
  {
    icon: Scale,
    title: "Criminal Law",
    description:
      "Explore the principles of criminal justice, offences and legal procedures.",
  },
  {
    icon: FileText,
    title: "Civil Law",
    description:
      "Learn about civil disputes, legal rights, contracts and remedies.",
  },
  {
    icon: ShieldCheck,
    title: "Human Rights Law",
    description:
      "Understand human rights, equality, justice and legal protection.",
  },
];

const learningAreas = [
  "Introduction to the Indian legal system",
  "Constitutional principles and fundamental rights",
  "Legal research and case study analysis",
  "Legal drafting and documentation concepts",
  "Court procedures and legal terminology",
  "Ethics, justice and professional responsibility",
];

const activities = [
  "Moot court and mock trial activities",
  "Legal awareness programmes",
  "Debates and discussions on legal issues",
  "Case study presentations",
  "Legal research and writing exercises",
  "Constitution Day and legal literacy events",
];

const careers = [
  "Advocate (subject to required qualifications and enrolment)",
  "Legal Advisor (subject to eligibility)",
  "Corporate Legal Professional",
  "Judicial Services (subject to examination and eligibility)",
  "Legal Researcher",
  "Legal Assistant",
];

export default function DepartmentOfLawPage() {
  return (
    <main className="law-page">
      {/* HERO */}
      <section className="law-hero">
        <div className="law-hero-overlay" />

        <div className="law-container law-hero-content">
          <span className="law-eyebrow">
            DD COLLEGE | DEPARTMENT OF LAW
          </span>

          <h1>
            DEPARTMENT
            <span> OF LAW</span>
          </h1>

          <p>
            Developing legal knowledge, critical thinking and an
            understanding of justice, rights and responsibilities
            in society.
          </p>

          <div className="law-hero-actions">
            <Link
              href="/contact?course=Law#contact-form"
              className="law-btn law-btn-primary"
            >
              Admission Enquiry <ArrowUpRight size={18} />
            </Link>

            <a href="#law-about" className="law-btn law-btn-outline">
              Explore Department <ArrowRight size={18} />
            </a>
          </div>

          <div className="law-hero-note">
            <Scale size={22} />
            <span>KNOWLEDGE • JUSTICE • EQUALITY</span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="law-breadcrumb">
        <div className="law-container">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Departments</span>
          <span>/</span>
          <strong>Department of Law</strong>
        </div>
      </div>

      {/* ABOUT */}
      <section className="law-section" id="law-about">
        <div className="law-container law-about-grid">
          <div className="law-about-image">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1100&q=85"
              alt="Law books and justice"
            />

            <div className="law-image-card">
              <Scale size={30} />
              <div>
                <strong>Justice & Equality</strong>
                <span>Building Legal Awareness</span>
              </div>
            </div>
          </div>

          <div className="law-about-content">
            <span className="law-label">ABOUT THE DEPARTMENT</span>

            <h2>
              Education That Builds
              <span> Justice & Responsibility</span>
            </h2>

            <p>
              Legal education helps students understand the laws,
              institutions and principles that shape society. It
              develops analytical thinking, communication, research
              and problem-solving skills.
            </p>

            <p>
              The Department of Law at DD College aims to promote
              awareness of legal rights, constitutional values,
              justice and the rule of law through academic learning
              and educational activities.
            </p>

            <div className="law-check-list">
              <div><CheckCircle2 /> Understanding legal principles</div>
              <div><CheckCircle2 /> Critical and analytical thinking</div>
              <div><CheckCircle2 /> Legal research and communication</div>
              <div><CheckCircle2 /> Awareness of rights and duties</div>
            </div>

            <Link
              href="/contact?course=Law#contact-form"
              className="law-text-link"
            >
              Connect With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SUBJECT AREAS */}
      <section className="law-section law-subjects">
        <div className="law-container">
          <div className="law-heading">
            <span className="law-label">AREAS OF LEGAL STUDY</span>
            <h2>
              Explore the World of <span>Law</span>
            </h2>
            <p>
              Develop an understanding of important legal concepts,
              rights, institutions and the justice system.
            </p>
          </div>

          <div className="law-subject-grid">
            {subjects.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="law-subject-card" key={item.title}>
                  <div className="law-subject-icon">
                    <Icon size={30} />
                  </div>

                  <span className="law-number">0{index + 1}</span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="law-section">
        <div className="law-container law-learning-grid">
          <div className="law-learning-content">
            <span className="law-label">ACADEMIC LEARNING</span>

            <h2>
              Learn to Think.
              <span> Understand the Law.</span>
            </h2>

            <p>
              Legal studies encourage students to examine real-world
              issues, understand legal frameworks and develop
              responsible perspectives on justice and society.
            </p>

            <div className="law-learning-list">
              {learningAreas.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="law-learning-image">
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1100&q=85"
              alt="Law library and legal education"
            />
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="law-section law-activities">
        <div className="law-container">
          <div className="law-heading">
            <span className="law-label">BEYOND THE CLASSROOM</span>
            <h2>
              Practical Exposure & <span>Legal Activities</span>
            </h2>
            <p>
              Educational activities help students connect legal
              concepts with real-world situations.
            </p>
          </div>

          <div className="law-activity-grid">
            {activities.map((item, index) => (
              <div className="law-activity-item" key={item}>
                <span className="law-activity-count">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Gavel size={21} />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="law-section">
        <div className="law-container law-values-grid">
          <div className="law-value-card">
            <BookOpen size={34} />
            <h3>Legal Knowledge</h3>
            <p>
              Build a strong foundation in legal concepts and
              constitutional values.
            </p>
          </div>

          <div className="law-value-card">
            <Handshake size={34} />
            <h3>Ethics & Integrity</h3>
            <p>
              Understand fairness, professional ethics and
              responsibility towards society.
            </p>
          </div>

          <div className="law-value-card">
            <Users size={34} />
            <h3>Social Justice</h3>
            <p>
              Develop awareness of equality, human rights and
              access to justice.
            </p>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="law-section law-careers">
        <div className="law-container">
          <div className="law-heading">
            <span className="law-label">FUTURE OPPORTUNITIES</span>
            <h2>
              Build Your Future in <span>Legal Studies</span>
            </h2>
            <p>
              Depending on the programme, eligibility, professional
              qualifications and applicable regulatory requirements,
              students may explore these pathways.
            </p>
          </div>

          <div className="law-career-grid">
            {careers.map((career) => (
              <div className="law-career-item" key={career}>
                <BriefcaseBusiness size={22} />
                <strong>{career}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="law-cta">
        <div className="law-container law-cta-content">
          <div>
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Learn the Law. Make a Difference.</h2>
            <p>
              Contact DD College to know more about the Department
              of Law and available academic programmes.
            </p>
          </div>

          <Link
            href="/contact?course=Law#contact-form"
            className="law-btn law-btn-primary"
          >
            Admission Enquiry <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
