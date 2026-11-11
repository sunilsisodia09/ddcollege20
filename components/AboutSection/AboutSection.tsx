
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Users,
  Building2,
  Award,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";

import "./AboutSection.css";

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence", icon: Building2 },
  { value: 50, suffix: "+", label: "Academic Programs", icon: BookOpen },
  { value: 5000, suffix: "+", label: "Students", icon: Users },
  { value: 100, suffix: "%", label: "Career Support", icon: GraduationCap },
];



function CountUp({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1800;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setCount(value);
    } else {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value]);

  return (
    <>
      {count.toLocaleString("en-IN")}
      {suffix}
    </>
  );
}

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element || countStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [countStarted]);

  return (
    <section className="dd-about-section" id="about">
      <div className="dd-about-container">

        {/* ABOUT INTRO */}

        <div className="dd-about-top">

          {/* IMAGE AREA */}

          <div className="dd-about-image-column">
            <div className="dd-about-image-frame">
              <img
                src="/campus/build.webp"
                alt="D.D. College Dehradun campus"
                className="dd-about-main-image"
              />

              <div className="dd-about-image-shade" />

              <div className="dd-about-image-top-tag">
                <Sparkles size={15} />
                <span>Welcome to D.D. College</span>
              </div>

              <div className="dd-about-image-caption">
                <span className="dd-about-caption-line" />
                <div>
                  <span>OUR CAMPUS</span>
                  <h3>Where Dreams Find Direction.</h3>
                </div>
              </div>
            </div>

            {/* Floating experience card */}

            <div className="dd-about-experience-card">
              <div className="dd-about-experience-icon">
                <GraduationCap size={27} />
              </div>

              <div>
                <strong>25+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>

            {/* Floating education card */}

            <div className="dd-about-floating-card">
              <div className="dd-about-floating-icon">
                <Award size={22} />
              </div>
              <div>
                <strong>Building Bright Futures</strong>
                <span>Education with purpose</span>
              </div>
            </div>

            <div className="dd-about-image-decoration" />
            <div className="dd-about-image-dot-pattern" />
          </div>

          {/* CONTENT AREA */}

          <div className="dd-about-content">
            <div className="dd-about-eyebrow">
              <span />
              GET TO KNOW US
              <span className="dd-about-eyebrow-end" />
            </div>

            <h2>
              Shaping Minds.
              <br />
              <span>Building Futures.</span>
            </h2>

            <p className="dd-about-lead">
              More than a college, we are a place where ambition meets
              opportunity and students discover their true potential.
            </p>

            <p className="dd-about-description">
              At D.D. College Dehradun, we believe education is about
              more than earning a degree. It is about developing
              knowledge, confidence, creativity, and the skills needed
              to succeed in the real world. Our learning environment
              encourages students to explore new ideas, discover their
              strengths, and prepare for meaningful careers.
            </p>

            {/* Highlights */}

            <div className="dd-about-highlights">
              <div className="dd-about-highlight">
                <span className="dd-about-highlight-icon">
                  <CheckCircle2 size={19} />
                </span>
                <span>Student-focused learning environment</span>
              </div>

              <div className="dd-about-highlight">
                <span className="dd-about-highlight-icon">
                  <CheckCircle2 size={19} />
                </span>
                <span>Academic and personal development</span>
              </div>

              <div className="dd-about-highlight">
                <span className="dd-about-highlight-icon">
                  <CheckCircle2 size={19} />
                </span>
                <span>Learning beyond the classroom</span>
              </div>
            </div>

            {/* Buttons */}

            <div className="dd-about-actions">
              <Link href="/about" className="dd-about-primary-btn">
                Discover Our Story
                <ArrowUpRight size={19} />
              </Link>

              <Link href="/departments" className="dd-about-text-link">
                Explore Departments
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="dd-about-content-footer">
              <span className="dd-about-footer-icon">
                <Target size={18} />
              </span>
              <span>Inspiring learning. Empowering tomorrow.</span>
            </div>
          </div>
        </div>

        {/* STATISTICS */}

        <div className="dd-about-stats-section">
          <div className="dd-about-stats-heading">
            <div>
              <span>OUR IMPACT</span>
              <h3>Numbers That Inspire Confidence</h3>
            </div>
            <p>
              A growing community built on learning, opportunities,
              and achievement.
            </p>
          </div>

          <div className="dd-about-stats" ref={statsRef}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  className="dd-about-stat-item"
                  key={stat.label}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="dd-about-stat-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div className="dd-about-stat-content">
                    <strong>
                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        start={countStarted}
                      />
                    </strong>
                    <span>{stat.label}</span>
                  </div>

                  <span className="dd-about-stat-index">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

       

      </div>
    </section>
  );
}
