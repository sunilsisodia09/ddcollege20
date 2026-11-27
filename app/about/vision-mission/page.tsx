
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
  "Provide a supportive and student-focused learning environment.",
  "Encourage academic excellence and practical knowledge.",
  "Develop leadership, communication and teamwork skills.",
  "Promote ethical values, discipline and social responsibility.",
  "Support students in preparing for future career opportunities.",
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

                <span>EST. EDUCATION WITH PURPOSE</span>
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

            <article className="mv-purpose-card mv-mission-card">
              <div className="mv-purpose-top">
                <div className="mv-purpose-icon">
                  <Target size={30} />
                </div>
                <span className="mv-purpose-number">01</span>
              </div>

              <span className="mv-card-label">OUR MISSION</span>

              <h3>Empowering Minds Through Education</h3>

              <p>
                Our mission is to provide a supportive and enriching
                learning environment that encourages academic development,
                practical skills, ethical values and personal growth.
                We aim to help students become confident, responsible
                and capable individuals who can contribute positively
                to society.
              </p>

              <div className="mv-card-footer">
                <GraduationCap size={21} />
                <span>Learn with purpose</span>
                <ArrowRight size={18} />
              </div>
            </article>

            <article className="mv-purpose-card mv-vision-card">
              <div className="mv-purpose-top">
                <div className="mv-purpose-icon">
                  <Eye size={30} />
                </div>
                <span className="mv-purpose-number">02</span>
              </div>

              <span className="mv-card-label">OUR VISION</span>

              <h3>Inspiring Excellence for Tomorrow</h3>

              <p>
                Our vision is to contribute to a future where education
                empowers individuals to think independently, embrace
                innovation and respond to real-world challenges.
                We aspire to nurture lifelong learners and socially
                responsible citizens who are prepared to make a
                meaningful impact.
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
              Helping Every Student Reach Their
              <span> Full Potential</span>
            </h2>

            <p>
              We strive to make education meaningful by supporting
              students in their academic journey, personal development
              and preparation for the opportunities ahead.
            </p>

            <div className="mv-commitment-highlight">
              <div className="mv-highlight-icon">
                <HeartHandshake size={26} />
              </div>

              <div>
                <strong>Student First Approach</strong>
                <span>
                  Supporting growth at every step of the journey.
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
