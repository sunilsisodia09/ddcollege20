
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Target,
  Eye,
  Users,
  Building2,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import "./college.css";

const highlights = [
  {
    icon: GraduationCap,
    title: "Student-Focused Learning",
    text: "An environment designed to support academic learning, personal growth and career preparation.",
  },
  {
    icon: BookOpen,
    title: "Academic Development",
    text: "Learning opportunities that encourage curiosity, practical understanding and continuous improvement.",
  },
  {
    icon: Users,
    title: "Holistic Growth",
    text: "Opportunities to develop communication, teamwork, leadership and social responsibility.",
  },
  {
    icon: Lightbulb,
    title: "Future-Ready Skills",
    text: "Encouraging creativity, independent thinking and adaptability for a changing world.",
  },
];

export default function AboutCollegePage() {
  return (
    <main className="about-college-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg-shape about-shape-one" />
        <div className="about-hero-bg-shape about-shape-two" />

        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <div className="about-eyebrow">
              <span className="about-eyebrow-line" />
              ABOUT D.D. COLLEGE
            </div>

            <h1>
              Shaping Minds.
              <br />
              <span>Building Futures.</span>
            </h1>

            <p>
              Discover a learning environment where knowledge,
              values and ambition come together to help students
              prepare for meaningful futures.
            </p>

            <div className="about-hero-actions">
              <Link href="/about/vision-mission" className="about-primary-btn">
                Our Vision &amp; Mission
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="about-secondary-btn">
                Contact College
              </Link>
            </div>

            <div className="about-hero-note">
              <ShieldCheck size={19} />
              <span>Learning • Growth • Opportunity</span>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-backdrop" />

            <div className="about-main-photo">
              <Image
               src="/campus/ground.jpg"
                alt="D.D. College Dehradun campus"
                width={800}
                height={950}
                priority
                sizes="(max-width: 768px) 100vw, 48vw"
                className="about-campus-image"
              />
            </div>

            <div className="about-photo-caption">
              <span className="about-caption-icon">
                <Building2 size={22} />
              </span>
              <div>
                <strong>D.D. College</strong>
                <span>Dehradun, Uttarakhand</span>
              </div>
            </div>

            <div className="about-yellow-decoration" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-introduction">
        <div className="about-intro-visual">
          <div className="about-intro-image-wrap">
            <Image
               src="/campus/dd.png"
              alt="Students learning at college"
              width={720}
              height={760}
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

          <Link href="/about/management" className="about-text-link">
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
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="about-highlight-card" key={item.title}>
                <div className="about-highlight-top">
                  <span className="about-highlight-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                  <span className="about-highlight-number">
                    0{index + 1}
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

          <Link href="/campus-life" className="about-primary-btn">
            Explore Campus Life
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="about-campus-gallery">
          <div className="about-gallery-large">
            <Image
                     src="/campus/dd.png"
              alt="College campus life"
              width={750}
              height={600}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="about-gallery-image"
            />
          </div>

          <div className="about-gallery-small">
            <Image
                     src="/campus/dd.png"
              alt="College student activities"
              width={500}
              height={350}
              sizes="(max-width: 768px) 48vw, 22vw"
              className="about-gallery-image"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-content">
          <span>YOUR JOURNEY STARTS HERE</span>

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
            <Link href="/contact" className="about-cta-button">
              Get in Touch <ArrowRight size={18} />
            </Link>

            <Link href="/departments" className="about-cta-link">
              Explore Departments
            </Link>
          </div>
        </div>

        <div className="about-cta-decoration" aria-hidden="true">
          DD
        </div>
      </section>
    </main>
  );
}
