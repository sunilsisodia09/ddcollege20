
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "./TopBar.css";

const navigationLinks = [
  { label: "News & Events", href: "/news" },
  { label: "Quick Links", href: "/quick-links" },
  { label: "Admission Enquiry", href: "/admissions" },
  { label: "Examinations", href: "/examinations" },
  { label: "Alumni", href: "/alumni" },
];

export default function TopBar() {
  return (
    <div className="dd-topbar">
      <div className="dd-topbar-container">

        <nav
          className="dd-topbar-nav"
          aria-label="College quick navigation"
        >
          {navigationLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`dd-topbar-link ${
                item.label === "Admission Enquiry"
                  ? "dd-admission-link"
                  : ""
              }`}
            >
              {item.label === "Admission Enquiry" && (
                <span className="dd-live-dot" />
              )}

              {item.label}
            </Link>
          ))}
        </nav>

        <div className="dd-topbar-actions">

          <a
            href="tel:+91XXXXXXXXXX"
            className="dd-topbar-call"
            aria-label="Call D.D. College"
          >
            <Phone size={15} />
            <span>Call Now</span>
          </a>

          <Link
            href="/contact"
            className="dd-topbar-enquiry"
          >
            <MessageCircle size={15} />
            <span>Enquire Now</span>
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </div>
    </div>
  );
}
