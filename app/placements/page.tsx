
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Laptop,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  UserRound,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import "./placements.css";

const stats = [
  {
    value: "Career",
    label: "Focused Learning",
    icon: Target,
  },
  {
    value: "Industry",
    label: "Career Awareness",
    icon: Building2,
  },
  {
    value: "Practical",
    label: "Skill Development",
    icon: Laptop,
  },
  {
    value: "Personal",
    label: "Career Guidance",
    icon: Users,
  },
];

const recruiters = [
  { name: "TCS", type: "Information Technology" },
  { name: "Infosys", type: "Technology & Consulting" },
  { name: "Wipro", type: "Technology Services" },
  { name: "Accenture", type: "Consulting & Technology" },
  { name: "HCLTech", type: "Technology Services" },
  { name: "ICICI Bank", type: "Banking & Finance" },
];

const placementServices = [
  {
    number: "01",
    title: "Career Planning",
    description:
      "Understand your interests, identify your strengths and explore suitable career pathways.",
    icon: Target,
  },
  {
    number: "02",
    title: "Resume Development",
    description:
      "Learn to present your academic background, skills, projects and experience professionally.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Interview Preparation",
    description:
      "Improve your confidence with interview practice, aptitude preparation and communication.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Industry Readiness",
    description:
      "Build workplace awareness and develop the professional skills needed for future opportunities.",
    icon: BriefcaseBusiness,
  },
];

const studentStories = [
  {
    name: "Student Profile 01",
    course: "Add verified course name",
    company: "Add verified employer",
    image: "/images/placements/student-1.jpg",
    quote:
      "Add an authentic student testimonial describing their learning experience and career journey.",
  },
  {
    name: "Student Profile 02",
    course: "Add verified course name",
    company: "Add verified employer",
    image: "/images/placements/student-2.jpg",
    quote:
      "Share a verified experience about career preparation, skill development and professional growth.",
  },
  {
    name: "Student Profile 03",
    course: "Add verified course name",
    company: "Add verified employer",
    image: "/images/placements/student-3.jpg",
    quote:
      "Highlight a real student's journey, achievements and experience at D.D. College.",
  },
];

const supportCards = [
  {
    title: "Professional Skills",
    description:
      "Develop communication, teamwork, problem-solving and workplace readiness.",
    icon: Users,
  },
  {
    title: "Digital Skills",
    description:
      "Explore relevant digital tools and practical skills for today's professional environment.",
    icon: Laptop,
  },
  {
    title: "Career Exploration",
    description:
      "Learn about different industries, job roles and opportunities related to your studies.",
    icon: TrendingUp,
  },
  {
    title: "Academic Growth",
    description:
      "Connect classroom learning with practical knowledge and long-term career goals.",
    icon: GraduationCap,
  },
];

export default function PlacementsPage() {
  return (
    <main className="placements-page">
      {/* HERO */}
      <section className="placement-hero">
        <div className="placement-hero-bg" />

        <div className="placement-hero-inner">
          <div className="placement-hero-copy">
            <div className="placement-eyebrow placement-eyebrow-light">
              <span className="placement-eyebrow-dot" />
              D.D. COLLEGE · DEHRADUN
            </div>

            <h1>
              Your Ambition.
              <br />
              Your Skills.
              <br />
              <span>Your Future.</span>
            </h1>

            <p className="placement-hero-description">
              Education is the beginning. Skills, confidence and
              opportunities help you move forward. Discover how D.D.
              College supports your professional journey.
            </p>

            <div className="placement-hero-actions">
              <a href="#career-support" className="placement-btn-primary">
                Explore Career Support
                <ArrowRight size={18} />
              </a>

              <Link href="/contact" className="placement-btn-ghost">
                Talk to Our Team
                <MoveUpRight size={17} />
              </Link>
            </div>

            <div className="placement-hero-trust">
              <div className="placement-avatar-stack">
                <span><Users size={17} /></span>
                <span><GraduationCap size={17} /></span>
                <span><Award size={17} /></span>
              </div>
              <div>
                <strong>Learn. Prepare. Progress.</strong>
                <p>Building confidence for the next step.</p>
              </div>
            </div>
          </div>

          <div className="placement-hero-visual">
            <div className="placement-hero-photo">
              <Image
                src="/images/placements/placement-hero.jpg"
                alt="College students preparing for their professional careers"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
                className="placement-cover-image"
              />

              <div className="placement-photo-gradient" />

              <div className="placement-photo-caption">
                <span className="placement-caption-icon">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <span>YOUR JOURNEY STARTS HERE</span>
                  <strong>Prepare for what's next.</strong>
                </div>
              </div>
            </div>

            <div className="placement-floating-card">
              <span className="placement-floating-icon">
                <Sparkles size={22} />
              </span>
              <div>
                <strong>Discover your potential</strong>
                <p>Skills for a changing world</p>
              </div>
              <ArrowDownRight size={21} />
            </div>

            <div className="placement-hero-orbit" />
          </div>
        </div>

        <a href="#placement-overview" className="placement-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={16} />
        </a>
      </section>

      {/* OVERVIEW */}
      <section
        className="placement-overview section-padding"
        id="placement-overview"
      >
        <div className="placement-container">
          <div className="placement-overview-heading">
            <div>
              <div className="placement-eyebrow">
                <span className="placement-eyebrow-dot" />
                CAREER & PLACEMENT
              </div>

              <h2 className="placement-heading">
                Preparing students for
                <br />
                <span>what comes next.</span>
              </h2>
            </div>

            <p className="placement-overview-description">
              At D.D. College, Dehradun, we believe career preparation
              goes beyond a degree. We encourage students to build
              practical skills, explore professional pathways and
              approach their future with confidence.
            </p>
          </div>

          <div className="placement-stat-grid">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <article className="placement-stat-card" key={item.label}>
                  <div className="placement-stat-top">
                    <span className="placement-stat-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                    <span className="placement-stat-arrow">
                      <ArrowDownRight size={20} />
                    </span>
                  </div>

                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER PROCESS */}
      <section className="placement-journey section-padding">
        <div className="placement-container placement-journey-layout">
          <div className="placement-journey-visual">
            <div className="placement-journey-image">
              <Image
                src="/images/placements/career-guidance.jpg"
                alt="Career guidance and professional development"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                className="placement-cover-image"
              />
            </div>

            <div className="placement-journey-note">
              <span className="placement-journey-note-icon">
                <Award size={25} />
              </span>
              <div>
                <strong>Growth starts with preparation.</strong>
                <p>Build skills. Discover opportunities.</p>
              </div>
            </div>

            <div className="placement-image-index">
              <span>01</span>
              <span>CAREER DEVELOPMENT</span>
            </div>
          </div>

          <div className="placement-journey-content">
            <div className="placement-eyebrow">
              <span className="placement-eyebrow-dot" />
              YOUR CAREER JOURNEY
            </div>

            <h2 className="placement-heading">
              Small steps.
              <br />
              <span>Big possibilities.</span>
            </h2>

            <p className="placement-journey-intro">
              Develop the knowledge, confidence and professional
              mindset that can help you navigate your career journey.
            </p>

            <div className="placement-service-list">
              {placementServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="placement-service-item"
                    key={service.number}
                  >
                    <div className="placement-service-number">
                      {service.number}
                    </div>

                    <div className="placement-service-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <div className="placement-service-copy">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>

                    <CheckCircle2
                      className="placement-service-check"
                      size={20}
                    />
                  </article>
                );
              })}
            </div>

            <Link href="/contact" className="placement-inline-link">
              Enquire About Career Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY EXPOSURE */}
      <section className="placement-industry section-padding">
        <div className="placement-container">
          <div className="placement-industry-heading">
            <div>
              <div className="placement-eyebrow">
                <span className="placement-eyebrow-dot" />
                INDUSTRY EXPOSURE
              </div>

              <h2 className="placement-heading">
                Explore the world
                <br />
                <span>of opportunities.</span>
              </h2>
            </div>

            <p>
              Learn about different industries and the professional
              skills they value. The organizations below are examples
              of employers across various sectors, not confirmed
              placement partners.
            </p>
          </div>

          <div className="placement-recruiter-grid">
            {recruiters.map((company, index) => (
              <article className="placement-recruiter-card" key={company.name}>
                <div className="placement-recruiter-number">
                  0{index + 1}
                </div>

                <div className="placement-recruiter-logo">
                  <Building2 size={24} strokeWidth={1.6} />
                </div>

                <h3>{company.name}</h3>
                <p>{company.type}</p>

                <span className="placement-recruiter-arrow">
                  <ArrowRight size={18} />
                </span>
              </article>
            ))}
          </div>

          <p className="placement-industry-disclaimer">
            <Building2 size={15} />
            Illustrative company list only. No recruitment partnership
            or hiring relationship is implied.
          </p>
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section className="placement-stories section-padding">
        <div className="placement-container">
          <div className="placement-stories-heading">
            <div>
              <div className="placement-eyebrow">
                <span className="placement-eyebrow-dot" />
                STUDENT SPOTLIGHT
              </div>

              <h2 className="placement-heading">
                Every journey
                <br />
                <span>has a story.</span>
              </h2>
            </div>

            <p>
              Celebrate student achievements, academic progress and
              career milestones through authentic stories from the
              D.D. College community.
            </p>
          </div>

          <div className="placement-student-grid">
            {studentStories.map((student, index) => (
              <article className="placement-student-card" key={student.name}>
                <div className="placement-student-photo">
                  <Image
                    src={student.image}
                    alt={`Student portrait for ${student.name}`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="placement-cover-image"
                  />

                  <div className="placement-student-photo-overlay" />

                  <span className="placement-student-index">
                    STUDENT STORY · 0{index + 1}
                  </span>

                  <span className="placement-student-badge">
                    <GraduationCap size={17} />
                  </span>
                </div>

                <div className="placement-student-content">
                  <div className="placement-student-course">
                    {student.course}
                  </div>

                  <h3>{student.name}</h3>

                  <p className="placement-student-quote">
                    “{student.quote}”
                  </p>

                  <div className="placement-student-company">
                    <BriefcaseBusiness size={17} />
                    <span>{student.company}</span>
                  </div>

                  <div className="placement-student-divider" />

                  <p className="placement-student-disclaimer">
                    Profile placeholder — replace with verified
                    student details, a genuine photo and an
                    authorized testimonial.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="placement-stories-footer">
            <div className="placement-stories-footer-icon">
              <UserRound size={23} />
            </div>
            <div>
              <strong>Your story could be next.</strong>
              <p>Explore your academic and career opportunities with us.</p>
            </div>
            <Link href="/contact" className="placement-stories-cta">
              Connect With Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CAREER SUPPORT */}
      <section
        className="placement-support section-padding"
        id="career-support"
      >
        <div className="placement-container">
          <div className="placement-support-heading">
            <div className="placement-eyebrow placement-eyebrow-light">
              <span className="placement-eyebrow-dot" />
              SKILLS FOR YOUR FUTURE
            </div>

            <h2>
              More than a degree.
              <br />
              <span>Ready for what's next.</span>
            </h2>

            <p>
              Focus on the skills, knowledge and professional habits
              that support lifelong learning and career development.
            </p>
          </div>

          <div className="placement-support-grid">
            {supportCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article className="placement-support-card" key={card.title}>
                  <div className="placement-support-card-top">
                    <span className="placement-support-number">
                      0{index + 1}
                    </span>
                    <span className="placement-support-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  <span className="placement-support-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="placement-cta-section">
        <div className="placement-container">
          <div className="placement-cta-card">
            <div className="placement-cta-decoration" />

            <div className="placement-cta-copy">
              <div className="placement-eyebrow placement-eyebrow-light">
                <span className="placement-eyebrow-dot" />
                TAKE THE NEXT STEP
              </div>

              <h2>
                Your future
                <br />
                starts with a <span>conversation.</span>
              </h2>

              <p>
                Connect with D.D. College to learn more about academic
                programmes, career development and student support.
              </p>

              <Link href="/contact" className="placement-btn-primary">
                Contact D.D. College
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="placement-cta-visual">
              <div className="placement-cta-image">
                <Image
                  src="/images/placements/placement-hero.jpg"
                  alt="Students looking ahead to their future"
                  fill
                  sizes="(max-width: 800px) 90vw, 40vw"
                  className="placement-cover-image"
                />
              </div>

              <div className="placement-cta-stamp">
                <GraduationCap size={28} />
                <span>LEARN</span>
                <span>GROW</span>
                <span>SUCCEED</span>
              </div>
            </div>
          </div>

          <div className="placement-bottom-note">
            <span>D.D. COLLEGE · DEHRADUN</span>
            <span>Learn with purpose. Move forward with confidence.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
