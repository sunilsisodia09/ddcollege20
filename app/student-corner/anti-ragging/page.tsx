
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
  Users,
  GraduationCap,
  AlertTriangle,
  Ban,
  MessageCircle,
  FileText,
  Scale,
  CheckCircle2,
  PhoneCall,
  LockKeyhole,
  BookOpen,
  HandHeart,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";

import "./anti-ragging.css";

const prohibitedActivities = [
  {
    icon: MessageCircle,
    title: "Verbal Abuse",
    description:
      "Teasing, insulting, humiliating, threatening or using abusive language towards students.",
  },
  {
    icon: Users,
    title: "Physical Harassment",
    description:
      "Any form of physical assault, force, punishment or activity that causes physical discomfort.",
  },
  {
    icon: LockKeyhole,
    title: "Mental Harassment",
    description:
      "Creating fear, embarrassment, anxiety or psychological pressure among students.",
  },
  {
    icon: Ban,
    title: "Forced Activities",
    description:
      "Forcing students to perform inappropriate, humiliating or unwanted activities.",
  },
  {
    icon: AlertTriangle,
    title: "Discrimination",
    description:
      "Targeting or discriminating against students on the basis of identity, background or personal characteristics.",
  },
  {
    icon: ShieldCheck,
    title: "Online Harassment",
    description:
      "Cyberbullying, threatening messages, sharing humiliating content or online intimidation.",
  },
];

const studentResponsibilities = [
  "Treat every student with dignity, equality and respect.",
  "Do not participate in or encourage any form of ragging.",
  "Report incidents of ragging to the appropriate college authority.",
  "Support students who may be experiencing harassment or intimidation.",
  "Follow college rules and applicable anti-ragging regulations.",
  "Help create a safe, welcoming and inclusive campus environment.",
];

const reportingSteps = [
  {
    number: "01",
    title: "Speak Up",
    description:
      "If you experience or witness ragging, do not ignore it. Your safety matters.",
  },
  {
    number: "02",
    title: "Inform the College",
    description:
      "Contact the college administration, designated anti-ragging authority or committee.",
  },
  {
    number: "03",
    title: "Share the Details",
    description:
      "Explain what happened, when and where it occurred, and provide any available supporting information.",
  },
  {
    number: "04",
    title: "Seek Support",
    description:
      "Ask for help from a trusted faculty member or college authority. In an emergency, contact emergency services.",
  },
];

export default function AntiRaggingPage() {
  return (
    <main className="anti-ragging-page">
      {/* HERO */}
      <section className="ar-hero">
        <div className="ar-hero-pattern" />

        <div className="ar-container">
          <div className="ar-breadcrumb">
            <Link href="/">Home</Link>
            <ArrowRight size={14} />
            <span>Student Corner</span>
            <ArrowRight size={14} />
            <span>Anti-Ragging</span>
          </div>

          <div className="ar-hero-grid">
            <div className="ar-hero-content">
              <div className="ar-eyebrow">
                <ShieldCheck size={16} />
                SAFE CAMPUS INITIATIVE
              </div>

              <h1>
                Say No to Ragging.
                <span> Say Yes to Respect.</span>
              </h1>

              <p>
                Every student deserves a safe, friendly and respectful
                learning environment. DD College stands for dignity,
                equality and a campus free from ragging.
              </p>

              <div className="ar-hero-actions">
                <a href="#reporting" className="ar-primary-btn">
                  How to Report
                  <ArrowRight size={18} />
                </a>

                <a href="#commitment" className="ar-outline-btn">
                  Our Commitment
                </a>
              </div>

              <div className="ar-hero-note">
                <CheckCircle2 size={17} />
                Respect everyone. Protect everyone.
              </div>
            </div>

            <div className="ar-hero-visual">
              <div className="ar-visual-ring ring-one" />
              <div className="ar-visual-ring ring-two" />

              <div className="ar-shield-card">
                <div className="ar-shield-main">
                  <ShieldCheck size={76} strokeWidth={1.5} />
                </div>
                <span>SAFE CAMPUS</span>
                <h3>Zero Tolerance for Ragging</h3>
                <p>Respect. Safety. Equality.</p>
              </div>

              <div className="ar-floating-card ar-float-top">
                <HeartHandshake size={22} />
                <div>
                  <strong>Respect</strong>
                  <span>Every individual</span>
                </div>
              </div>

              <div className="ar-floating-card ar-float-bottom">
                <Users size={22} />
                <div>
                  <strong>Inclusion</strong>
                  <span>One campus, one community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ar-intro-section" id="commitment">
        <div className="ar-container">
          <div className="ar-intro-grid">
            <div className="ar-intro-heading">
              <div className="ar-section-label">
                <span />
                OUR COMMITMENT
              </div>

              <h2>
                Education Without
                <span> Fear or Harassment.</span>
              </h2>
            </div>

            <div className="ar-intro-content">
              <p>
                Ragging has no place in an educational institution. It can
                affect a student's confidence, dignity, mental well-being
                and academic experience.
              </p>

              <p>
                DD College promotes a culture where every student feels
                welcomed, valued and protected. Students are encouraged
                to build friendships through positive interaction,
                cooperation and mutual respect.
              </p>

              <div className="ar-intro-highlight">
                <ShieldCheck size={25} />
                <strong>
                  A safe campus is everyone's responsibility.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROHIBITED ACTIVITIES */}
      <section className="ar-prohibited-section">
        <div className="ar-container">
          <div className="ar-section-heading">
            <div className="ar-section-label">
              <span />
              KNOW THE RULES
            </div>

            <h2>
              What Counts as <span>Ragging?</span>
            </h2>

            <p>
              Any act that humiliates, intimidates, harms or creates
              discomfort for another student must be taken seriously.
            </p>
          </div>

          <div className="ar-prohibited-grid">
            {prohibitedActivities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="ar-prohibited-card" key={item.title}>
                  <div className="ar-prohibited-top">
                    <div className="ar-prohibited-icon">
                      <Icon size={25} />
                    </div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="ar-warning-note">
            <div>
              <AlertTriangle size={23} />
            </div>
            <p>
              <strong>Remember:</strong> Ragging is not a tradition or
              entertainment. It is prohibited under applicable
              anti-ragging regulations.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT RESPONSIBILITIES */}
      <section className="ar-responsibility-section">
        <div className="ar-container">
          <div className="ar-responsibility-grid">
            <div className="ar-responsibility-visual">
              <div className="ar-responsibility-circle">
                <HandHeart size={65} />
                <span>RESPECT</span>
                <strong>Starts With Us</strong>
              </div>

              <div className="ar-responsibility-badge">
                <CheckCircle2 size={19} />
                Positive Campus Culture
              </div>
            </div>

            <div className="ar-responsibility-content">
              <div className="ar-section-label">
                <span />
                STUDENT RESPONSIBILITIES
              </div>

              <h2>
                Be the Reason
                <span> Someone Feels Safe.</span>
              </h2>

              <p>
                Every student can help make the college a welcoming
                place. Small acts of kindness and responsible behaviour
                make a meaningful difference.
              </p>

              <div className="ar-responsibility-list">
                {studentResponsibilities.map((item) => (
                  <div className="ar-responsibility-item" key={item}>
                    <CheckCircle2 size={19} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPORTING */}
      <section className="ar-reporting-section" id="reporting">
        <div className="ar-container">
          <div className="ar-section-heading">
            <div className="ar-section-label">
              <span />
              REPORTING GUIDANCE
            </div>

            <h2>
              How to <span>Report Ragging</span>
            </h2>

            <p>
              If you experience or witness ragging, take action.
              You have the right to ask for help and protection.
            </p>
          </div>

          <div className="ar-reporting-grid">
            {reportingSteps.map((step) => (
              <article className="ar-report-card" key={step.number}>
                <span className="ar-report-number">{step.number}</span>
                <div className="ar-report-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="ar-report-help">
            <div className="ar-report-help-icon">
              <PhoneCall size={27} />
            </div>

            <div className="ar-report-help-content">
              <span>NEED HELP?</span>
              <h3>Do Not Stay Silent.</h3>
              <p>
                Contact the college administration or designated
                anti-ragging authority for assistance. If someone is
                in immediate danger, contact emergency services.
              </p>
            </div>

            <Link href="/contact" className="ar-contact-btn">
              Contact College
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMITTEE */}
      <section className="ar-committee-section">
        <div className="ar-container">
          <div className="ar-committee-card">
            <div className="ar-committee-icon">
              <ClipboardCheck size={37} />
            </div>

            <div className="ar-committee-content">
              <div className="ar-section-label">
                <span />
                CAMPUS SUPPORT
              </div>

              <h2>
                Anti-Ragging <span>Committee</span>
              </h2>

              <p>
                The college's designated anti-ragging authorities
                help promote awareness, receive complaints and
                support a safe campus environment in accordance
                with applicable regulations.
              </p>

              <div className="ar-committee-points">
                <span>
                  <CheckCircle2 size={16} />
                  Student awareness
                </span>
                <span>
                  <CheckCircle2 size={16} />
                  Complaint assistance
                </span>
                <span>
                  <CheckCircle2 size={16} />
                  Campus safety
                </span>
              </div>

              <Link href="/contact" className="ar-committee-btn">
                Contact College Administration
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="ar-committee-decoration">
              <Scale size={115} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL RESOURCE */}
      <section className="ar-resource-section">
        <div className="ar-container">
          <div className="ar-resource-card">
            <div className="ar-resource-icon">
              <FileText size={29} />
            </div>

            <div className="ar-resource-content">
              <span>OFFICIAL INFORMATION</span>
              <h2>Know Your Rights. Know the Regulations.</h2>
              <p>
                Students can visit the National Anti-Ragging Portal
                for official information, regulations and reporting
                resources.
              </p>
            </div>

            <a
              href="https://www.antiragging.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="ar-resource-btn"
            >
              Visit Official Portal
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="ar-final-section">
        <div className="ar-container">
          <div className="ar-final-content">
            <div className="ar-final-icon">
              <HeartHandshake size={35} />
            </div>

            <h2>
              Together, We Build a
              <span> Ragging-Free Campus.</span>
            </h2>

            <p>
              Choose kindness. Respect differences. Stand against ragging.
              Make your college experience safe and meaningful for everyone.
            </p>

            <Link href="/contact" className="ar-final-btn">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
