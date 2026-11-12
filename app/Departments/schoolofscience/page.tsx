
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Microscope,
  Monitor,
  Target,
  Telescope,
  Users,
} from "lucide-react";

import "./schoolofscience.css";

const subjects = [
  {
    icon: Atom,
    name: "Physics",
    description:
      "Explore the fundamental principles of matter, energy, motion and the physical world.",
  },
  {
    icon: FlaskConical,
    name: "Chemistry",
    description:
      "Understand chemical reactions, elements, compounds and the science of materials.",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    description:
      "Develop logical thinking, analytical ability and problem-solving skills.",
  },
  {
    icon: Microscope,
    name: "Biological Sciences",
    description:
      "Discover living organisms, life processes, biodiversity and the natural environment.",
  },
  {
    icon: Monitor,
    name: "Computer Science",
    description:
      "Build an understanding of computing, digital technologies and computational thinking.",
  },
  {
    icon: Telescope,
    name: "Applied Sciences",
    description:
      "Connect scientific concepts with practical applications and real-world challenges.",
  },
];

const learningFeatures = [
  {
    icon: BookOpen,
    title: "Strong Academic Foundation",
    description:
      "Focus on core scientific concepts, subject knowledge and academic understanding.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Encourage curiosity, logical reasoning, observation and independent thinking.",
  },
  {
    icon: Microscope,
    title: "Practical Learning",
    description:
      "Connect theoretical concepts with demonstrations, experiments and practical activities wherever facilities are available.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Promote teamwork, discussions, presentations and knowledge sharing.",
  },
];

const careerOptions = [
  "Higher Education & Research",
  "Scientific and Technical Fields",
  "Information Technology",
  "Education & Teaching",
  "Laboratory and Analytical Work",
  "Competitive Examinations",
];

export default function SchoolOfSciencePage() {
  return (
    <main className="sos-page">
      {/* HERO */}
      <section className="sos-hero">
        <div className="sos-hero-overlay" />

        <div className="sos-container sos-hero-content">
          <div className="sos-eyebrow">
            <span />
            DD COLLEGE | ACADEMIC DEPARTMENTS
          </div>

          <h1>
            School of <span>Science</span>
          </h1>

          <p>
            Discover the world through scientific learning, curiosity,
            innovation and knowledge. Build a strong foundation for tomorrow
            through the study of science.
          </p>

          <div className="sos-hero-actions">
            <Link href="/contact?department=School%20of%20Science#contact-form">
              Admission Enquiry <ArrowRight size={18} />
            </Link>

            <a href="#about-science" className="sos-outline-btn">
              Explore Department
            </a>
          </div>

          <div className="sos-hero-bottom">
            <div>
              <Atom size={20} />
              <span>Scientific Thinking</span>
            </div>
            <div>
              <FlaskConical size={20} />
              <span>Knowledge & Discovery</span>
            </div>
            <div>
              <GraduationCap size={20} />
              <span>Academic Excellence</span>
            </div>
          </div>
        </div>

        <div className="sos-hero-shape" />
      </section>

      {/* INTRODUCTION */}
      <section className="sos-about section-space" id="about-science">
        <div className="sos-container sos-about-grid">
          <div className="sos-about-visual">
            <div className="sos-image-main">
              <div className="sos-image-caption">
                <span>LEARN</span>
                <strong>Explore. Discover. Innovate.</strong>
              </div>
            </div>

            <div className="sos-floating-card">
              <Atom size={30} />
              <div>
                <strong>Science</strong>
                <span>A world of possibilities</span>
              </div>
            </div>
          </div>

          <div className="sos-about-content">
            <div className="sos-section-tag">ABOUT THE SCHOOL</div>

            <h2>
              Understanding the World Through
              <span> Science & Discovery</span>
            </h2>

            <p>
              The School of Science at DD College aims to encourage students
              to explore scientific ideas, develop analytical skills and
              understand the world around them.
            </p>

            <p>
              Science education helps students develop curiosity, logical
              reasoning, observation and problem-solving abilities. Through
              structured academic learning and practical exposure, students
              can build a foundation for higher studies and future careers.
            </p>

            <div className="sos-about-points">
              <div>
                <CheckCircle2 size={19} />
                Concept-based academic learning
              </div>
              <div>
                <CheckCircle2 size={19} />
                Scientific attitude and curiosity
              </div>
              <div>
                <CheckCircle2 size={19} />
                Analytical and problem-solving skills
              </div>
              <div>
                <CheckCircle2 size={19} />
                Preparation for future opportunities
              </div>
            </div>

            <Link href="/contact" className="sos-text-link">
              Connect With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SUBJECT AREAS */}
      <section className="sos-subjects section-space">
        <div className="sos-container">
          <div className="sos-section-heading">
            <div className="sos-section-tag">EXPLORE SCIENCE</div>
            <h2>
              Areas of <span>Scientific Study</span>
            </h2>
            <p>
              Explore important scientific disciplines and develop a broader
              understanding of the natural and technological world.
            </p>
          </div>

          <div className="sos-subject-grid">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;

              return (
                <article className="sos-subject-card" key={subject.name}>
                  <div className="sos-subject-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="sos-subject-icon">
                    <Icon size={29} />
                  </div>

                  <h3>{subject.name}</h3>
                  <p>{subject.description}</p>

                  <div className="sos-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="sos-learning section-space">
        <div className="sos-container">
          <div className="sos-section-heading">
            <div className="sos-section-tag">OUR APPROACH</div>
            <h2>
              Learning Beyond <span>Textbooks</span>
            </h2>
            <p>
              An approach that encourages students to question, understand,
              analyse and apply scientific knowledge.
            </p>
          </div>

          <div className="sos-learning-grid">
            {learningFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="sos-learning-card" key={feature.title}>
                  <div className="sos-learning-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="sos-careers section-space">
        <div className="sos-container sos-career-grid">
          <div className="sos-career-content">
            <div className="sos-section-tag">FUTURE POSSIBILITIES</div>

            <h2>
              Turn Scientific Knowledge Into
              <span> Future Opportunities</span>
            </h2>

            <p>
              A background in science can open pathways to a wide range of
              academic, professional and research-oriented opportunities.
              Your future direction depends on your chosen subjects,
              qualifications and further studies.
            </p>

            {/* <Link href="/admission/courses" className="sos-career-btn">
              Explore Courses <ArrowRight size={18} />
            </Link> */}
          </div>

          <div className="sos-career-list">
            {careerOptions.map((career, index) => (
              <div className="sos-career-item" key={career}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{career}</strong>
                <CheckCircle2 size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sos-cta-section">
        <div className="sos-container">
          <div className="sos-cta">
            <div className="sos-cta-icon">
              <GraduationCap size={37} />
            </div>

            <div className="sos-cta-content">
              <span>YOUR ACADEMIC JOURNEY STARTS HERE</span>
              <h2>Curious Minds. Scientific Thinking. Brighter Futures.</h2>
              <p>
                Connect with DD College to learn more about academic programs
                and admission information.
              </p>
            </div>

            <Link
              href="/contact?department=School%20of%20Science#contact-form"
              className="sos-cta-btn"
            >
              Admission Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
