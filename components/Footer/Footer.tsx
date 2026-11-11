"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  GraduationCap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import "./Footer.css";

const quickLinks = [
  { label: "About College", href: "/about" },
  { label: "Courses & Programs", href: "/courses" },
  { label: "Departments", href: "/departments" },
  { label: "Campus Life", href: "/campus" },
  { label: "Placements", href: "/placements" },
  { label: "College Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const admissionLinks = [
  { label: "Admission Process", href: "/admission" },
  { label: "How to Apply", href: "/admission/how-to-apply" },
  { label: "Eligibility Criteria", href: "/admission/eligibility" },
  { label: "Courses & Fees", href: "/admission/courses" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Anti-Ragging Policy", href: "/anti-ragging" },
  { label: "Student Syllabus", href: "/student-corner/syllabus" },
];

const programs = [
  "BBA",
  "BCA",
  "B.Com",
  "B.Sc",
  "D.Pharm",
  "GNM",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="dd-social-dot" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21.5 7.2a2.8 2.8 0 0 0-2-2C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.5.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8Z" />
        <path d="m10 9 5 3-5 3V9Z" className="dd-youtube-play" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1 0-4.5ZM3 9h4v12H3V9Zm6 0h3.8v1.6h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9V9Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dd-footer">

   

      {/* MAIN FOOTER */}
      <div className="dd-footer-main">
        <div className="dd-footer-container">

          <div className="dd-footer-grid">

            {/* COLLEGE BRAND */}
            <div className="dd-footer-brand">

              <Link href="/" className="dd-footer-logo">
                <Image
                  src="/logos/college.png"
                  alt="D.D. College Dehradun"
                  width={230}
                  height={85}
                  className="dd-footer-logo-image"
                />
              </Link>

              <h3 className="dd-footer-brand-heading">
                D.D. College, Dehradun
              </h3>

              <p className="dd-footer-description">
                D.D. College, Dehradun, is dedicated to academic
                excellence, practical education and the overall
                development of students. We aim to nurture knowledge,
                confidence, creativity and professional skills
                for a brighter future.
              </p>

              <div className="dd-footer-social-heading">
                Connect With Us
              </div>

              <div className="dd-footer-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="dd-footer-social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

            </div>

            {/* QUICK LINKS */}
            <div className="dd-footer-column">
              <h3>Explore College</h3>

              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <ChevronRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ADMISSIONS */}
            <div className="dd-footer-column">
              <h3>Admissions</h3>

              <ul>
                {admissionLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <ChevronRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="dd-footer-contact">
              <h3>Get In Touch</h3>

              <div className="dd-footer-contact-item">
                <div className="dd-footer-contact-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <strong>College Campus</strong>
                  <span>
                    D.D. College, Dehradun,
                    Uttarakhand, India.
                  </span>
                </div>
              </div>

              <div className="dd-footer-contact-item">
                <div className="dd-footer-contact-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <strong>Admission Enquiry</strong>
                  <Link href="/contact">
                    Contact Admission Cell
                  </Link>
                </div>
              </div>

              <div className="dd-footer-contact-item">
                <div className="dd-footer-contact-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <strong>Email Us</strong>
                  <Link href="/contact">
                    Send an Enquiry
                  </Link>
                </div>
              </div>

              <div className="dd-footer-contact-item">
                <div className="dd-footer-contact-icon">
                  <Clock3 size={19} />
                </div>

                <div>
                  <strong>Office Hours</strong>
                  <span>
                    Monday – Saturday
                    <br />
                    9:00 AM – 5:00 PM
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="dd-footer-contact-button"
              >
                Contact College
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

          {/* PROGRAMS STRIP */}
          <div className="dd-footer-programs">
            <div className="dd-footer-program-title">
              <GraduationCap size={20} />
              <span>Our Academic Programs</span>
            </div>

            <div className="dd-footer-program-list">
              {programs.map((program) => (
                <Link
                  href="/courses"
                  key={program}
                >
                  {program}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="dd-footer-bottom">
        <div className="dd-footer-container">
          <div className="dd-footer-bottom-inner">

            <p>
              © {currentYear} D.D. College, Dehradun.
              All Rights Reserved.
            </p>

            <div className="dd-footer-bottom-links">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <span />
              
              <Link href="/terms">
                Terms & Conditions
              </Link>

              <span />

              <Link href="/contact">
                Contact Us
              </Link>
            </div>

            <a
              href="https://admissions.ddcollege.in"
              target="_blank"
              rel="noopener noreferrer"
              className="dd-footer-admission-link"
            >
              Admission Portal
              <ExternalLink size={13} />
            </a>

          </div>
        </div>
      </div>

    </footer>
  );
}