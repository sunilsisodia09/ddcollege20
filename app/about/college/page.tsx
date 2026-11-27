
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Building2,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

import "./college.css";

const highlights = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Student-Focused Learning",
    text: "An encouraging environment designed to support academic learning, personal growth and career preparation.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Academic Development",
    text: "Learning opportunities that encourage curiosity, practical understanding and continuous improvement.",
  },
  {
    icon: Users,
    number: "03",
    title: "Holistic Growth",
    text: "Opportunities to develop communication, teamwork, leadership and social responsibility.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Future-Ready Skills",
    text: "Encouraging creativity, independent thinking and adaptability for a changing world.",
  },
];

export default function AboutCollegePage() {
  return (
    <main className="about-college-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-pattern" />

        <div className="about-hero-inner">

          <div className="about-hero-copy">
            <div className="about-eyebrow">
              <span className="about-eyebrow-line" />
              <Sparkles size={15} />
              ABOUT D.D. COLLEGE
            </div>

            <h1>
              Shaping Minds.
              <br />
              <span>Building Futures.</span>
            </h1>

            <p className="about-hero-description">
              Discover a learning environment where knowledge,
              values and ambition come together to help students
              prepare for meaningful futures.
            </p>

            <div className="about-hero-actions">
              <Link
                href="/about/vision-mission"
                className="about-primary-btn"
              >
                Our Vision &amp; Mission
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="about-secondary-btn"
              >
                Contact College
                <MoveUpRight size={17} />
              </Link>
            </div>

            <div className="about-hero-note">
              <ShieldCheck size={19} />
              <span>Learning</span>
              <i />
              <span>Growth</span>
              <i />
              <span>Opportunity</span>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-outline" />

            <div className="about-main-photo">
              <Image
                src="/campus/ground.jpg"
                alt="D.D. College Dehradun campus"
                width={900}
                height={1050}
                priority
                sizes="(max-width: 768px) 100vw, 48vw"
                className="about-campus-image"
              />
            </div>

            <div className="about-photo-caption">
              <span className="about-caption-icon">
                <Building2 size={23} />
              </span>

              <div>
                <strong>D.D. College</strong>
                <span>Dehradun, Uttarakhand</span>
              </div>

              <ArrowRight size={19} className="about-caption-arrow" />
            </div>

            <div className="about-hero-floating">
              <span className="about-floating-icon">
                <GraduationCap size={23} />
              </span>
              <div>
                <strong>Learn &amp; Grow</strong>
                <span>Your journey starts here</span>
              </div>
            </div>

            <div className="about-yellow-decoration" />
          </div>

        </div>

        <div className="about-hero-bottom">
          <span>01 / ABOUT OUR INSTITUTION</span>
          <span>DISCOVER · LEARN · ACHIEVE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-introduction">

        <div className="about-intro-visual">
          <div className="about-intro-image-wrap">
            <Image
              src="/campus/lib.jpg"
              alt="Students learning at D.D. College"
              width={850}
              height={900}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="about-intro-image"
            />
          </div>

          <div className="about-image-label">
            <span className="about-label-number">01</span>
            <div>
              <strong>Learning with Purpose</strong>
              <span>Growing through knowledge</span>
            </div>
          </div>

          <div className="about-intro-decoration" />
        </div>

        <div className="about-intro-content">
          <div className="about-section-eyebrow">
            <span />
            WHO WE ARE
          </div>

          <h2>
            A Place to Learn,
            <br />
            <span>Discover and Grow.</span>
          </h2>

          <p>
            D.D. College, Dehradun, aims to provide an encouraging
            academic environment where students can develop their
            knowledge, discover their potential and work towards
            their aspirations.
          </p>

          <p>
            We believe that education extends beyond the classroom.
            It involves building confidence, strengthening values,
            developing practical abilities and preparing students
            to participate responsibly in society.
          </p>

          <p>
            Through learning opportunities, faculty guidance and
            campus activities, the college seeks to support the
            academic and personal development of its students.
          </p>

          <div className="about-intro-points">
            <div>
              <CheckCircle2 size={19} />
              <span>Supportive Learning Environment</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Personal and Academic Development</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Opportunities for Student Growth</span>
            </div>
          </div>

          <Link
            href="/about/management"
            className="about-text-link"
          >
            Discover our institution
            <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* HIGHLIGHTS */}
      <section className="about-highlights">

        <div className="about-section-heading">
          <div className="about-section-eyebrow">
            <span />
            THE D.D. COLLEGE EXPERIENCE
          </div>

          <h2>
            More Than Education.
            <br />
            <span>A Foundation for Life.</span>
          </h2>

          <p>
            A student-centred approach that values learning,
            personal development and preparation for the future.
          </p>
        </div>

        <div className="about-highlights-grid">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="about-highlight-card"
                key={item.title}
              >
                <div className="about-highlight-top">
                  <span className="about-highlight-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>

                  <span className="about-highlight-number">
                    {item.number}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="about-card-bottom-line" />
              </article>
            );
          })}
        </div>

      </section>

      {/* CAMPUS SECTION */}
      <section className="about-campus-section">

        <div className="about-campus-copy">
          <div className="about-section-eyebrow">
            <span />
            LIFE AT D.D. COLLEGE
          </div>

          <h2>
            Where Learning
            <br />
            <span>Meets Opportunity.</span>
          </h2>

          <p>
            College life is an opportunity to learn new skills,
            build friendships, explore interests and develop the
            confidence to take on new challenges.
          </p>

          <p>
            Discover our campus facilities, student activities and
            learning environment.
          </p>

          <Link
            href="/campus-life"
            className="about-primary-btn"
          >
            Explore Campus Life
            <ArrowRight size={18} />
          </Link>

          <div className="about-campus-note">
            <ShieldCheck size={18} />
            <span>Discover the D.D. College experience</span>
          </div>
        </div>

        <div className="about-campus-gallery">
       

      
            <Image
              src="/campus/build.webp"
              alt="D.D. College campus grounds"
              width={600}
              height={450}
              sizes="(max-width: 768px) 48vw, 22vw"
              className="about-gallery-image"
            />
          </div>

          <div className="about-gallery-caption">
            <span>DISCOVER YOUR POTENTIAL</span>
            <ArrowRight size={18} />
          </div>


      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-pattern" />

        <div className="about-cta-content">
          <div className="about-cta-eyebrow">
            <Sparkles size={16} />
            YOUR JOURNEY STARTS HERE
          </div>

          <h2>
            Take the Next Step
            <br />
            <strong>Towards Your Future.</strong>
          </h2>

          <p>
            Explore D.D. College and discover opportunities for
            learning, growth and personal development.
          </p>

          <div className="about-cta-actions">
            <Link
              href="/contact"
              className="about-cta-button"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>

         
          </div>
        </div>

        <div className="about-cta-decoration" aria-hidden="true">
          DD
        </div>

        <div className="about-cta-bottom">
          D.D. COLLEGE · DEHRADUN
        </div>
      </section>

    </main>
  );
}
