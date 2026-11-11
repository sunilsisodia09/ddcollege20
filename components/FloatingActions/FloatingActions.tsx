"use client";

import Link from "next/link";
import "./FloatingActions.css";

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      {/* Enquiry Button */}
      <Link
        href="/contact"
        className="floating-action enquiry-action"
        aria-label="Enquiry Now"
      >
        <span className="floating-icon">✉</span>
        <span className="floating-text">Enquiry</span>
      </Link>

      {/* Download Courses & Fee Structure PDF */}
      <a
     href="/courses-fees.pdf"
        download="College-Courses-and-Fee-Structure.pdf"
        className="floating-action brochure-action"
        aria-label="Download All Courses and Fee Structure"
      >
        <span className="floating-icon">📄</span>
        <span className="floating-text">Courses & Fees</span>
      </a>
    </div>
  );
}