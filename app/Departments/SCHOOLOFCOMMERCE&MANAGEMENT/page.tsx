
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  Coins,
  GraduationCap,
  Users,
  Building2,
  Megaphone,
  Target,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

import "./management.css";

const programmes = [
  {
    name: "Bachelor of Commerce",
    code: "B.Com.",
    duration: "3 Years",
    description:
      "Learn accounting, finance, taxation, business practices and commercial concepts.",
    icon: Calculator,
  },
  {
    name: "Master of Commerce",
    code: "M.Com.",
    duration: "2 Years",
    description:
      "Develop advanced knowledge of commerce, financial management and accounting.",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Bachelor of Business Administration",
    code: "BBA",
    duration: "3 Years",
    description:
      "Explore business administration, management, marketing and entrepreneurship.",
    icon: BriefcaseBusiness,
  },
];

const areas = [
  {
    title: "Accounting & Finance",
    description:
      "Understand accounting, financial planning and business finance.",
    icon: Coins,
  },
  {
    title: "Business Management",
    description:
      "Learn management principles, planning and decision-making.",
    icon: Building2,
  },
  {
    title: "Marketing",
    description:
      "Explore branding, marketing strategies and consumer behaviour.",
    icon: Megaphone,
  },
  {
    title: "Human Resources",
    description:
      "Understand teamwork, leadership and people management.",
    icon: Users,
  },
];

const benefits = [
  "Strong foundation in commerce and business concepts",
  "Analytical and problem-solving skills",
  "Communication and presentation skills",
  "Business awareness and professional development",
  "Preparation for higher education and career opportunities",
];

export default function SchoolOfCommerceManagementPage() {
  return (
    <main className="scm-page">
      {/* HERO */}
      <section className="scm-hero">
        <div className="scm-container scm-hero-content">
          <span className="scm-eyebrow">
            DD COLLEGE | ACADEMIC DEPARTMENT
          </span>

          <h1>
            School of <span>Commerce</span>
            <br />
            & Management
          </h1>

          <p>
            Explore the world of commerce, finance and business management.
            Develop knowledge, professional skills and confidence for the
            future.
          </p>

          <div className="scm-buttons">
            <Link
              href="/contact?department=School%20of%20Commerce%20%26%20Management#contact-form"
              className="scm-button"
            >
              Admission Enquiry <ArrowRight size={18} />
            </Link>

            <a href="#programmes" className="scm-button scm-button-outline">
              Explore Programmes
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT DEPARTMENT */}
      <section className="scm-section">
        <div className="scm-container scm-about">
          <div>
            <span className="scm-label">ABOUT THE DEPARTMENT</span>

            <h2>
              Building Knowledge for the
              <span> Business World</span>
            </h2>

            <p>
              The School of Commerce & Management at DD College focuses on
              developing students&apos; understanding of commerce, accounting,
              finance, business administration and management.
            </p>

            <p>
              The academic approach encourages analytical thinking,
              communication, leadership and awareness of the modern business
              environment.
            </p>

            <div className="scm-checks">
              {benefits.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scm-about-image" />
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="scm-section scm-light" id="programmes">
        <div className="scm-container">
          <div className="scm-heading">
            <span className="scm-label">ACADEMIC PROGRAMMES</span>

            <h2>
              Explore Our <span>Programmes</span>
            </h2>

            <p>
              Discover programmes designed to introduce students to commerce
              and management education.
            </p>
          </div>

          <div className="scm-programmes">
            {programmes.map((course) => {
              const Icon = course.icon;

              return (
                <article className="scm-course-card" key={course.code}>
                  <div className="scm-course-icon">
                    <Icon size={30} />
                  </div>

                  <span className="scm-course-code">{course.code}</span>

                  <h3>{course.name}</h3>

                  <p>{course.description}</p>

                  <div className="scm-duration">
                    <span>Duration</span>
                    <strong>{course.duration}</strong>
                  </div>

                  <Link
                    href={`/contact?course=${encodeURIComponent(
                      course.code
                    )}&department=School%20of%20Commerce%20%26%20Management#contact-form`}
                    className="scm-course-link"
                  >
                    Admission Enquiry <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>

          <p className="scm-note">
            Please confirm current course availability and eligibility with
            DD College before applying.
          </p>
        </div>
      </section>

      {/* AREAS OF STUDY */}
      <section className="scm-section">
        <div className="scm-container">
          <div className="scm-heading">
            <span className="scm-label">AREAS OF STUDY</span>

            <h2>
              Explore the <span>Business World</span>
            </h2>
          </div>

          <div className="scm-areas">
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="scm-area-card" key={area.title}>
                  <Icon size={30} />
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="scm-section scm-career">
        <div className="scm-container scm-career-content">
          <div>
            <span className="scm-label">FUTURE OPPORTUNITIES</span>

            <h2>
              Prepare Yourself for
              <span> New Opportunities</span>
            </h2>

            <p>
              Commerce and management education can support further studies
              and career pathways in finance, banking, accounting, marketing,
              administration and entrepreneurship.
            </p>
          </div>

          <div className="scm-career-box">
            <div>
              <BookOpen size={22} /> Higher Education
            </div>
            <div>
              <Coins size={22} /> Banking & Finance
            </div>
            <div>
              <BriefcaseBusiness size={22} /> Business Administration
            </div>
            <div>
              <Target size={22} /> Entrepreneurship
            </div>
            <div>
              <GraduationCap size={22} /> Professional Development
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="scm-bottom">
        <div className="scm-container scm-bottom-inner">
          <div>
            <h2>Build Your Future with DD College</h2>
            <p>
              Connect with us for programme details and admission information.
            </p>
          </div>

          <Link href="/contact" className="scm-button scm-bottom-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
