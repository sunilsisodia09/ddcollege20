
"use client";

import {
  Mail,
  FileText,
  ArrowDownToLine,
} from "lucide-react";

import "./FloatingActions.css";

export default function FloatingActions() {
  return (
    <div className="floating-actions">

      {/* ENQUIRY - DIRECT EMAIL */}
      <a
        href="mailto:info@ddcollege.in"
        className="floating-action enquiry-action"
        aria-label="Send an enquiry by email"
        title="Send Email"
      >
        <span className="floating-icon">
          <Mail size={18} strokeWidth={2} />
        </span>

        <span className="floating-text">
          Enquiry
        </span>
      </a>

      {/* COURSES AND FEES DOWNLOAD */}
      <a
        href="/courses/ddcollegefee.pdf"
        download="College-Courses-and-Fee-Structure.pdf"
        className="floating-action brochure-action"
        aria-label="Download college courses and fee structure PDF"
        title="Download Courses and Fees"
      >
        <span className="floating-icon">
          <FileText size={18} strokeWidth={2} />
        </span>

        <span className="floating-text">
          Courses & Fees
        </span>

        <span className="floating-download-icon">
          <ArrowDownToLine size={13} />
        </span>
      </a>

    </div>
  );
}
