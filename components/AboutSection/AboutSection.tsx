
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import "./AboutSection.css";

const stats = [
  {
    id: 1,
    number: 20,
    suffix: "+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    id: 2,
    number: 50,
    suffix: "+",
    label: "Academic Programs",
    icon: BookOpen,
  },
  {
    id: 3,
    number: 5000,
    suffix: "+",
    label: "Students",
    icon: Users,
  },
  {
    id: 4,
    number: 100,
    suffix: "%",
    label: "Career Support",
    icon: GraduationCap,
  },
];

const highlights = [
  {
    id: 1,
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Academic excellence supported by practical learning and knowledge.",
  },
  {
    id: 2,
    icon: Users,
    title: "Student Development",
    description:
      "A supportive environment to develop skills, confidence and personality.",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Career Opportunities",
    description:
      "Learning experiences that help students prepare for their future.",
  },
];

function CountUp({
  end,
  suffix = "",
  start,
}: {
  end: number;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let animationFrame = 0;

    if (mediaQuery.matches) {
      animationFrame = window.requestAnimationFrame(() => {
        setCount(end);
      });

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(end * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [end, start]);

  return (
    <>
      {count.toLocaleString("en-IN")}
      {suffix}
    </>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Fallback for browsers without IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`about-section ${isVisible ? "about-visible" : ""}`}
      ref={sectionRef}
      id="about"
    >
      <div className="about-container">
        {/* LEFT IMAGE AREA */}
        <div className="about-image-wrapper">
          <div className="about-image-main">
            <img
              src="/campus/build.webp"
              alt="D.D. College campus in Dehradun"
              loading="lazy"
            />

            <div className="about-image-overlay" />
          </div>

          <div className="about-image-decoration">
            <span />
            <span />
            <span />
          </div>

          {/* EXPERIENCE CARD */}
          <div className="about-experience-card">
            <div className="about-experience-icon">
              <Award size={27} strokeWidth={1.8} />
            </div>

            <div className="about-experience-content">
              <strong>20+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          {/* IMAGE LABEL */}
          <div className="about-image-label">
            <div className="about-image-label-icon">
              <GraduationCap size={21} />
            </div>

            <div>
              <strong>Learn. Grow. Succeed.</strong>
              <span>Building Future Leaders</span>
            </div>
          </div>

          {/* DECORATIVE BADGE */}
          <div className="about-image-badge">
            <Sparkles size={17} />
            <span>Inspiring Excellence</span>
          </div>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="about-content">
          {/* SECTION LABEL */}
          <div className="about-section-tag">
            <span className="about-tag-line" />
            <span>ABOUT D.D. COLLEGE</span>
          </div>

          {/* HEADING */}
          <h2 className="about-heading">
            Empowering Minds,
            <span> Building Futures.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="about-description">
            D.D. College, Dehradun, is committed to providing
            quality education and creating an environment where
            students can discover their potential, develop
            confidence and build successful careers.
          </p>

          <p className="about-description">
            With experienced faculty, a supportive learning
            environment and a focus on practical knowledge, we
            encourage students to achieve academic excellence
            and become responsible professionals.
          </p>

          {/* HIGHLIGHTS */}
          <div className="about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-highlight" key={item.id}>
                  <div className="about-highlight-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="about-highlight-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <CheckCircle2
                    className="about-highlight-check"
                    size={19}
                  />
                </div>
              );
            })}
          </div>

          {/* ACTION BUTTONS */}
          <div className="about-actions">
            <Link href="/about" className="about-read-more">
              Discover Our College
              <ArrowRight size={19} />
            </Link>

            <Link href="/contact" className="about-contact-link">
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* BOTTOM NOTE */}
          <div className="about-bottom-note">
            <span className="about-bottom-note-icon">
              <CheckCircle2 size={17} />
            </span>

            <p>
              Creating opportunities for learning and growth.
            </p>
          </div>
        </div>
      </div>

      {/* STATISTICS SECTION */}
      <div className="about-stats">
        <div className="about-stats-container">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="about-stat-item" key={stat.id}>
                <div className="about-stat-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div className="about-stat-content">
                  <h3>
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      start={isVisible}
                    />
                  </h3>

                  <p>{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
