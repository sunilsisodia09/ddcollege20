
"use client";

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
      {/* HERO SECTION */}
      <section className="mv-hero">
        <div className="mv-hero-pattern" />

        <div className="mv-container mv-hero-grid">
          <div className="mv-hero-content">
            <span className="mv-eyebrow">
              <Sparkles size={16} />
              OUR PURPOSE & DIRECTION
            </span>

            <h1>
              Our Mission.
              <br />
              Our <span>Vision.</span>
            </h1>

            <p>
              At D.D. College Dehradun, we believe education is more than
              acquiring knowledge. It is about building character, inspiring
              ideas and empowering students to create a better future.
            </p>

            <div className="mv-hero-actions">
              <Link href="#our-mission" className="mv-btn mv-btn-primary">
                Explore Our Purpose <ArrowRight size={18} />
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
              <div className="mv-visual-icon">
                <GraduationCap size={48} strokeWidth={1.6} />
              </div>

              <span className="mv-visual-label">D.D. COLLEGE DEHRADUN</span>

              <h2>Education with Purpose</h2>

              <p>
                Knowledge, values and opportunities for a brighter tomorrow.
              </p>

              <div className="mv-visual-divider" />

              <div className="mv-visual-bottom">
                <span>
                  <Target size={17} />
                  Purpose
                </span>
                <span>
                  <Eye size={17} />
                  Vision
                </span>
              </div>
            </div>

            <div className="mv-floating-badge mv-badge-top">
              <Lightbulb size={22} />
              <div>
                <strong>Think</strong>
                <small>Creatively</small>
              </div>
            </div>

            <div className="mv-floating-badge mv-badge-bottom">
              <BookOpen size={22} />
              <div>
                <strong>Learn</strong>
                <small>Continuously</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="mv-intro-strip">
        <div className="mv-container mv-intro-inner">
          <p>
            <span>Our belief:</span> Every student deserves the opportunity
            to learn, grow and make a meaningful difference.
          </p>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mv-section" id="our-mission">
        <div className="mv-container">
          <div className="mv-section-heading">
            <span className="mv-eyebrow">WHAT GUIDES US</span>
            <h2>
              Purpose That Shapes <span>Our Future</span>
            </h2>
            <p>
              Our mission defines what we strive to do every day, while our
              vision guides the future we want to help create.
            </p>
          </div>

          <div className="mv-purpose-grid">
            <article className="mv-purpose-card mv-mission-card">
              <div className="mv-purpose-top">
                <div className="mv-purpose-icon">
                  <Target size={29} />
                </div>
                <span className="mv-purpose-number">01</span>
              </div>

              <span className="mv-card-label">OUR MISSION</span>

              <h3>Empowering Minds Through Education</h3>

              <p>
                Our mission is to provide a supportive and enriching learning
                environment that encourages academic development, practical
                skills, ethical values and personal growth. We aim to help
                students become confident, responsible and capable individuals
                who can contribute positively to society.
              </p>

              <div className="mv-card-footer">
                <GraduationCap size={20} />
                <span>Learn with purpose</span>
              </div>
            </article>

            <article className="mv-purpose-card mv-vision-card">
              <div className="mv-purpose-top">
                <div className="mv-purpose-icon">
                  <Eye size={29} />
                </div>
                <span className="mv-purpose-number">02</span>
              </div>

              <span className="mv-card-label">OUR VISION</span>

              <h3>Inspiring Excellence for Tomorrow</h3>

              <p>
                Our vision is to contribute to a future where education
                empowers individuals to think independently, embrace
                innovation and respond to real-world challenges. We aspire
                to nurture lifelong learners and socially responsible citizens
                who are prepared to make a meaningful impact.
              </p>

              <div className="mv-card-footer">
                <Sparkles size={20} />
                <span>Lead with confidence</span>
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
              Helping Every Student Reach Their <span>Potential</span>
            </h2>

            <p>
              We strive to make education meaningful by supporting students
              in their academic journey, personal development and preparation
              for the opportunities ahead.
            </p>

           
          </div>

          <div className="mv-commitment-list">
            {commitments.map((item, index) => (
              <div className="mv-commitment-item" key={item}>
                <span className="mv-check-icon">
                  <CheckCircle2 size={20} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mv-values-section">
        <div className="mv-container">
          <div className="mv-section-heading">
            <span className="mv-eyebrow">THE VALUES WE LIVE BY</span>
            <h2>
              Our Core <span>Values</span>
            </h2>
            <p>
              The principles that shape our learning environment and guide
              our approach to education and personal development.
            </p>
          </div>

          <div className="mv-values-grid">
            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article className="mv-value-card" key={value.title}>
                  <div className="mv-value-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="mv-value-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

  
    </main>
  );
}
