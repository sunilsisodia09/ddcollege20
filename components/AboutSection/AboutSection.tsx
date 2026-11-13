
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

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(end * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="about-section"
      ref={sectionRef}
      id="about"
    >
      <div className="about-container">

        {/* LEFT IMAGE SECTION */}
        <div className="about-image-wrapper">
          <div className="about-image-main">
            <img
              src="/campus/build.webp"
              alt="D.D. College Dehradun Campus"
              loading="lazy"
            />
          </div>

          <div className="about-image-decoration" />

          {/* EXPERIENCE CARD */}
          <div className="about-experience-card">
            <div className="about-experience-icon">
              <Award size={27} />
            </div>

            <div>
              <strong>20+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          {/* CAMPUS LABEL */}
          <div className="about-image-label">
            <GraduationCap size={20} />
            <span>Building Future Leaders</span>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="about-content">

          <div className="about-section-tag">
            <span />
            ABOUT D.D. COLLEGE
          </div>

          <h2 className="about-heading">
            Empowering Minds,
            <span> Building Futures</span>
          </h2>

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
            <div className="about-highlight">
              <div className="about-highlight-icon">
                <BookOpen size={21} />
              </div>

              <div>
                <h4>Quality Education</h4>
                <p>
                  Academic excellence with practical learning.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="about-highlight-icon">
                <Users size={21} />
              </div>

              <div>
                <h4>Student Development</h4>
                <p>
                  Opportunities to grow skills and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="about-actions">
            <Link
              href="/about"
              className="about-read-more"
            >
              Discover Our College
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="about-contact-link"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="about-stats">
        <div className="about-stats-container">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                className="about-stat-item"
                key={stat.id}
              >
                <div className="about-stat-icon">
                  <Icon size={25} />
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
