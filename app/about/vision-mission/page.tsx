
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Eye,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Globe,
  Award,
  Compass,
} from "lucide-react";

import "./mission.css";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We encourage honesty, responsibility, ethical behaviour and respect in every aspect of academic life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We promote curiosity, creative thinking and practical learning to prepare students for a changing world.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We value diversity and strive to create a welcoming environment where every student can grow.",
  },
  {
    icon: HeartHandshake,
    title: "Excellence",
    description:
      "We inspire students and educators to continuously improve their knowledge, skills and performance.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "We develop problem-solving abilities, independent thinking and confidence through meaningful learning.",
  },
  {
    icon: Globe,
    title: "Social Responsibility",
    description:
      "We encourage students to contribute positively to society and act as responsible citizens.",
  },
];

const commitments = [
  "Keeping education accessible. Offering affordable, quality education to all, with special emphasis on students from underprivileged and diverse backgrounds, so that financial constraints never impede potential.",
  "Upholding academic excellence. Reviewing teaching and learning practices consistently, supported by experienced, committed faculty.",
  "Building skills for life and work. Combining academics with skill development, personality enhancement and guidance for a changing employment landscape.",
  "Nurturing inquiry, innovation and integrity. Sustaining a positive, disciplined environment where knowledge and ethical values grow together.",
  "Fostering inclusion and belonging. Respecting diversity, ensuring parity, and keeping every classroom safe, supportive and stimulating.",
  "Engaging the whole community. Keeping parents and guardians informed of their ward’s progress and encouraging every student to take part in extracurricular activities.",
];

export default function MissionVisionPage() {
  return (
    <main className="mv-page">
      {/* HERO */}
      <section className="mv-hero">
        <div className="mv-hero-bg-shape mv-shape-one" />
        <div className="mv-hero-bg-shape mv-shape-two" />

        <div className="mv-container mv-hero-grid">
          <div className="mv-hero-content">
            <div className="mv-eyebrow">
              <Sparkles size={16} />
              OUR PURPOSE & DIRECTION
            </div>

            <h1>
              Shaping Minds.
              <br />
              <span>Building Futures.</span>
            </h1>

            <p>
              At D.D. College Dehradun, we believe education is more
              than acquiring knowledge. It is about building character,
              inspiring ideas and empowering students to create a
              better future.
            </p>

            <div className="mv-hero-actions">
              <Link href="#our-mission" className="mv-btn mv-btn-primary">
                Discover Our Purpose
                <ArrowRight size={18} />
              </Link>

              <Link href="#core-values" className="mv-btn mv-btn-outline">
                Our Core Values
              </Link>
            </div>

            <div className="mv-hero-note">
              <CheckCircle2 size={18} />
              <span>Learning today. Leading tomorrow.</span>
            </div>
          </div>

          <div className="mv-hero-visual">
            <div className="mv-visual-orbit mv-orbit-one" />
            <div className="mv-visual-orbit mv-orbit-two" />

            <div className="mv-visual-card">
              <div className="mv-visual-top">
                <div className="mv-visual-icon">
                  <GraduationCap size={48} strokeWidth={1.5} />
                </div>

                <span>EDUCATION WITH PURPOSE</span>
              </div>

              <h2>Education That Inspires.</h2>

              <p>
                Knowledge, values and opportunities for a
                brighter tomorrow.
              </p>

              <div className="mv-visual-divider" />

              <div className="mv-visual-bottom">
                <div>
                  <Target size={19} />
                  <span>Purpose</span>
                </div>

                <div>
                  <Eye size={19} />
                  <span>Vision</span>
                </div>

                <div>
                  <Award size={19} />
                  <span>Excellence</span>
                </div>
              </div>
            </div>

            <div className="mv-floating-badge mv-badge-top">
              <div className="mv-floating-icon">
                <Lightbulb size={23} />
              </div>
              <div>
                <strong>Think</strong>
                <small>Creatively</small>
              </div>
            </div>

            <div className="mv-floating-badge mv-badge-bottom">
              <div className="mv-floating-icon">
                <BookOpen size={23} />
              </div>
              <div>
                <strong>Learn</strong>
                <small>Continuously</small>
              </div>
            </div>
          </div>
        </div>

        <div className="mv-hero-bottom-line" />
      </section>

      {/* INTRO STRIP */}
      <section className="mv-intro-strip">
        <div className="mv-container mv-intro-inner">
          <div className="mv-intro-icon">
            <Compass size={25} />
          </div>

          <p>
            <strong>Our belief:</strong> Every student deserves the
            opportunity to learn, grow and make a meaningful difference.
          </p>

          <span className="mv-intro-decoration">D.D. COLLEGE</span>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section" id="our-mission">
        <div className="mv-container">
          <div className="mv-section-heading">
            <span className="mv-eyebrow">WHAT GUIDES US</span>

            <h2>
              Purpose That Shapes
              <span> Our Future</span>
            </h2>

            <p>
              Our mission defines what we strive to do every day,
              while our vision guides the future we want to help create.
            </p>
          </div>

          <div className="mv-purpose-grid">
            {/* MISSION CARD */}
            <article className="mv-purpose-card mv-mission-card">
              <div className="mv-purpose-top">
                <div className="mv-purpose-icon">
                  <Target size={30} />
                </div>
                <span className="mv-purpose-number">01</span>
              </div>

              <span className="mv-card-label">OUR MISSION</span>

              <h3>Empowering Every Learner Through Quality Education</h3>

              <p>
                To provide affordable, quality education to every
                learner, and to empower young minds with knowledge,
                confidence and a sense of responsibility, so they
                emerge as well-rounded, independent individuals
                prepared to lead.
              </p>

              <div className="mv-card-footer">
                <GraduationCap size={21} />
                <span>Learn with purpose</span>
                <ArrowRight size={18} />
              </div>
            </article>

            {/* VISION CARD */}
            <article className="mv-purpose-card mv-vision-card">
              <div className="mv-purpose-top">
                <div className="mv-purpose-icon">
                  <Eye size={30} />
                </div>
                <span className="mv-purpose-number">02</span>
              </div>

              <span className="mv-card-label">OUR VISION</span>

              <h3>Building Confident and Responsible Individuals</h3>

              <p>
                Our vision is a learning environment that goes beyond
                textbooks and classrooms, shaping confident, skilled
                and responsible individuals who face real-world
                challenges with clarity and purpose.
              </p>

              <p>
                We believe education must be accessible, practical
                and value-driven. Academic excellence, skill
                development, personality enhancement and ethical
                grounding together make students career-ready and
                life-ready.
              </p>

              <p>
                Opportunity here is affordable yet impactful and
                open to all backgrounds, so finances never stand
                in the way of quality education. Through continuous
                learning, discipline and guidance, we aspire to
                build a generation that thinks independently,
                acts responsibly and contributes meaningfully
                to society.
              </p>

              <div className="mv-card-footer">
                <Sparkles size={21} />
                <span>Lead with confidence</span>
                <ArrowRight size={18} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="mv-commitment-section">
        <div className="mv-container mv-commitment-grid">
          <div className="mv-commitment-content">
            <span className="mv-eyebrow">OUR COMMITMENT</span>

            <h2>
              Building Skills for
              <span> Life and Work</span>
            </h2>

            <p>
              We are committed to accessible education, academic
              excellence, practical skills, ethical values and an
              inclusive learning environment. We also encourage
              meaningful engagement between students, parents,
              guardians and the wider college community.
            </p>

            <div className="mv-commitment-highlight">
              <div className="mv-highlight-icon">
                <HeartHandshake size={26} />
              </div>

              <div>
                <strong>Student First Approach</strong>
                <span>
                  Supporting every learner through education,
                  guidance and opportunity.
                </span>
              </div>
            </div>
          </div>

          <div className="mv-commitment-list">
            {commitments.map((item, index) => (
              <div className="mv-commitment-item" key={item}>
                <span className="mv-check-icon">
                  <CheckCircle2 size={20} />
                </span>

                <span>{item}</span>

                <span className="mv-commitment-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mv-values-section" id="core-values">
        <div className="mv-container">
          <div className="mv-section-heading">
            <span className="mv-eyebrow">THE VALUES WE LIVE BY</span>

            <h2>
              Our Core
              <span> Values</span>
            </h2>

            <p>
              The principles that shape our learning environment
              and guide our approach to education and personal
              development.
            </p>
          </div>

          <div className="mv-values-grid">
            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article className="mv-value-card" key={value.title}>
                  <div className="mv-value-top">
                    <div className="mv-value-icon">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="mv-value-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <div className="mv-value-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mv-bottom-cta">
        <div className="mv-container mv-cta-inner">
          <div>
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Be Part of a Brighter Future</h2>
            <p>
              Discover learning opportunities and take the next step
              towards your academic goals.
            </p>
          </div>

          <Link href="/courses" className="mv-btn mv-btn-cta">
            Explore Our Courses
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
