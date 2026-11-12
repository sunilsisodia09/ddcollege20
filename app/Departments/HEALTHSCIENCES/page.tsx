
import Link from "next/link";
import {
  HeartPulse,
  Stethoscope,
  Brain,
  Activity,
  Microscope,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Hospital,
  Users,
} from "lucide-react";

import "./health-sciences.css";

const focusAreas = [
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description:
      "Understand health, wellness and the importance of a healthy lifestyle.",
  },
  {
    icon: Microscope,
    title: "Scientific Learning",
    description:
      "Develop scientific curiosity through observation, learning and practical knowledge.",
  },
  {
    icon: Brain,
    title: "Human Health",
    description:
      "Explore the fundamentals of human health, body systems and well-being.",
  },
  {
    icon: ShieldCheck,
    title: "Health Awareness",
    description:
      "Build awareness about hygiene, prevention, nutrition and community health.",
  },
];

const learningPoints = [
  "Fundamentals of health sciences",
  "Human anatomy and physiology concepts",
  "Health, hygiene and nutrition awareness",
  "Basic healthcare and wellness concepts",
  "Scientific observation and research skills",
  "Community health awareness",
];

const opportunities = [
  "Healthcare Support Services",
  "Health & Wellness Sector",
  "Public Health Awareness",
  "Healthcare Administration",
  "Research Assistance",
  "Further Studies in Health Sciences",
];

const highlights = [
  { icon: BookOpen, title: "Academic Learning", text: "Build a strong foundation in health-related knowledge." },
  { icon: Activity, title: "Practical Approach", text: "Connect theoretical understanding with real-world applications." },
  { icon: Users, title: "Community Awareness", text: "Understand the role of health education in society." },
];

export default function HealthSciencesPage() {
  return (
    <main className="health-page">
      {/* HERO */}
      <section className="health-hero">
        <div className="health-hero-overlay" />
        <div className="health-container health-hero-content">
          <span className="health-eyebrow">
            DD COLLEGE | DEPARTMENT OF HEALTH SCIENCES
          </span>

          <h1>
            DEPARTMENT OF
            <span> HEALTH SCIENCES</span>
          </h1>

          <p>
            Exploring the science of health, wellness and human well-being
            through knowledge, awareness and meaningful learning.
          </p>

          <div className="health-hero-actions">
            <Link
              href="/contact?course=Health%20Sciences#contact-form"
              className="health-btn health-btn-primary"
            >
              Admission Enquiry <ArrowUpRight size={18} />
            </Link>

            <a href="#health-about" className="health-btn health-btn-outline">
              Explore Department <ArrowRight size={18} />
            </a>
          </div>

          <div className="health-hero-bottom">
            <HeartPulse size={21} />
            <span>KNOWLEDGE • HEALTH • HUMANITY</span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="health-breadcrumb">
        <div className="health-container">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Departments</span>
          <span>/</span>
          <strong>Health Sciences</strong>
        </div>
      </div>

      {/* ABOUT */}
      <section className="health-section" id="health-about">
        <div className="health-container health-about-grid">
          <div className="health-about-image">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1100&q=85"
              alt="Healthcare professionals learning about health sciences"
            />
            <div className="health-image-card">
              <HeartPulse size={30} />
              <div>
                <strong>Health & Wellness</strong>
                <span>Learning for a Better Tomorrow</span>
              </div>
            </div>
          </div>

          <div className="health-about-content">
            <span className="health-label">ABOUT THE DEPARTMENT</span>
            <h2>
              Building Knowledge for a
              <span> Healthier Society</span>
            </h2>

            <p>
              Health Sciences is an interdisciplinary field focused on
              understanding human health, wellness, disease prevention and
              healthcare systems. It brings together scientific knowledge,
              awareness and practical understanding.
            </p>

            <p>
              The Department of Health Sciences at DD College aims to
              encourage students to develop an interest in health-related
              subjects, scientific thinking and the importance of
              responsible healthcare practices.
            </p>

            <div className="health-check-list">
              <div><CheckCircle2 /> Health and wellness awareness</div>
              <div><CheckCircle2 /> Scientific learning approach</div>
              <div><CheckCircle2 /> Focus on human well-being</div>
              <div><CheckCircle2 /> Community health understanding</div>
            </div>

            <Link
              href="/contact?course=Health%20Sciences#contact-form"
              className="health-text-link"
            >
              Connect With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="health-section health-focus">
        <div className="health-container">
          <div className="health-heading">
            <span className="health-label">OUR FOCUS AREAS</span>
            <h2>
              Explore the World of <span>Health Sciences</span>
            </h2>
            <p>
              Develop an understanding of health, scientific knowledge
              and the importance of wellness in everyday life.
            </p>
          </div>

          <div className="health-focus-grid">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="health-focus-card" key={item.title}>
                  <div className="health-focus-icon">
                    <Icon size={29} />
                  </div>
                  <span className="health-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="health-section">
        <div className="health-container health-learning-grid">
          <div className="health-learning-content">
            <span className="health-label">LEARNING EXPERIENCE</span>
            <h2>
              Learning Beyond the
              <span> Classroom</span>
            </h2>

            <p>
              A strong understanding of health sciences involves curiosity,
              scientific thinking and awareness of real-life health issues.
              Students can explore key concepts through academic learning
              and relevant educational activities.
            </p>

            <div className="health-learning-list">
              {learningPoints.map((point) => (
                <div key={point}>
                  <CheckCircle2 size={19} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="health-learning-image">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1100&q=85"
              alt="Healthcare education and practical learning"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="health-section health-highlights">
        <div className="health-container">
          <div className="health-heading">
            <span className="health-label">OUR APPROACH</span>
            <h2>
              A Foundation for <span>Future Learning</span>
            </h2>
          </div>

          <div className="health-highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article className="health-highlight-card" key={item.title}>
                  <Icon size={32} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section className="health-section">
        <div className="health-container">
          <div className="health-heading">
            <span className="health-label">FUTURE OPPORTUNITIES</span>
            <h2>
              Explore Opportunities in
              <span> Health & Wellness</span>
            </h2>
            <p>
              Depending on the programme, eligibility and additional
              professional qualifications, students may explore
              health-related career and higher-study pathways.
            </p>
          </div>

          <div className="health-career-grid">
            {opportunities.map((item) => (
              <div className="health-career-item" key={item}>
                <Stethoscope size={22} />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="health-cta">
        <div className="health-container health-cta-content">
          <div>
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Build Your Future with Knowledge</h2>
            <p>
              Contact DD College to learn more about the Department
              of Health Sciences and available academic programmes.
            </p>
          </div>

          <Link
            href="/contact?course=Health%20Sciences#contact-form"
            className="health-btn health-btn-primary"
          >
            Admission Enquiry <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
