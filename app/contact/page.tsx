"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./contact.css";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Our Team",
    value: "+91 74175 55666",
    description: "Speak with our college team.",
    href: "tel:+917417555666",
    action: "Call Now",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@ddcollege.in",
    description: "Send your questions by email.",
    href: "mailto:info@ddcollege.in",
    action: "Send Email",
  },
  {
    icon: MapPin,
    label: "Visit Our Campus",
    value: "Garhi Cantt, Dehradun",
    description: "25 Nimbuwala, near ONGC Helipad.",
    href: "https://www.google.com/maps/search/?api=1&query=DD+College+25+Nimbuwala+Garhi+Cantt+Dehradun",
    action: "Get Directions",
  },
];

const enquiryOptions = [
  "Admission Enquiry",
  "Course Information",
  "Fees & Scholarships",
  "Campus Visit",
  "Placement & Career Support",
  "Other Enquiry",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    enquiry: "Admission Enquiry",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = event.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((previous) => ({
        ...previous,
        [name]: target.checked,
      }));
    } else {
      setFormData((previous) => ({
        ...previous,
        [name]: value,
      }));
    }

    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "D.D. College — New Website Enquiry",
      "",
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Course: ${formData.course || "Not selected"}`,
      `Enquiry: ${formData.enquiry}`,
      "",
      `Message: ${formData.message || "No additional message"}`,
    ].join("\n");

    const emailUrl =
      "mailto:info@ddcollege.in" +
      "?subject=" +
      encodeURIComponent("Website Enquiry - D.D. College") +
      "&body=" +
      encodeURIComponent(message);

    window.location.href = emailUrl;
    setSubmitted(true);
  };

  return (
    <main className="dd-contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-background" />

        <div className="contact-container contact-hero-inner">
          <div className="contact-hero-copy">
            <div className="contact-eyebrow">
              <span />
              WE ARE HERE TO HELP
            </div>

            <h1>
              Let's Start a
              <span> Conversation.</span>
            </h1>

            <p>
              Have questions about admissions, courses or campus life?
              Connect with D.D. College, Dehradun. Our team is here to
              help you take the next step in your educational journey.
            </p>

            <div className="contact-hero-actions">
              <a href="#contact-form" className="contact-primary-btn">
                Send an Enquiry <ArrowRight size={18} />
              </a>

              <a href="tel:+917417555666" className="contact-call-link">
                <Phone size={17} />
                +91 74175 55666
              </a>
            </div>

            <div className="contact-trust-line">
              <ShieldCheck size={18} />
              <span>Student-focused guidance and support</span>
            </div>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-hero-image">
              <div className="contact-campus-art">
                <GraduationCap size={78} strokeWidth={1.1} />
                <span>D.D. COLLEGE</span>
                <strong>DEHRADUN</strong>
                <small>LEARN · GROW · ACHIEVE</small>
              </div>
            </div>

            <div className="contact-floating-card">
              <div className="contact-floating-icon">
                <MessageCircle size={23} />
              </div>
              <div>
                <strong>Need assistance?</strong>
                <span>Let's find the right information for you.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-details-grid">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <article className="contact-detail-card" key={item.label}>
                  <div className="contact-detail-top">
                    <div className="contact-detail-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                    <ArrowRight size={19} className="contact-detail-arrow" />
                  </div>

                  <span className="contact-detail-label">{item.label}</span>

                  <h2>{item.value}</h2>

                  <p>{item.description}</p>

                  <a
                    href={item.href}
                    target={item.href.startsWith("https://") ? "_blank" : undefined}
                    rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
                    className="contact-detail-action"
                  >
                    {item.action}
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="contact-enquiry-section" id="contact-form">
        <div className="contact-container contact-enquiry-layout">
          <div className="contact-enquiry-info">
            <div className="contact-eyebrow contact-eyebrow-dark">
              <span />
              CONNECT WITH OUR TEAM
            </div>

            <h2>
              Your Questions.
              <span> Our Guidance.</span>
            </h2>

            <p>
              Tell us what you would like to know. Share your details
              and choose the type of enquiry, and we will help you find
              the right next step.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <GraduationCap size={23} />
                </div>
                <div>
                  <h3>Admission Guidance</h3>
                  <p>Ask about courses, eligibility and admission procedures.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Users size={23} />
                </div>
                <div>
                  <h3>Student Support</h3>
                  <p>Get information about college facilities and student life.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock3 size={23} />
                </div>
                <div>
                  <h3>Plan Your Visit</h3>
                  <p>Contact our team to discuss a visit to the campus.</p>
                </div>
              </div>
            </div>

            <div className="contact-direct-card">
              <div className="contact-direct-icon">
                <Phone size={22} />
              </div>
              <div>
                <span>Prefer to speak directly?</span>
                <a href="tel:+917417555666">+91 74175 55666</a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>ENQUIRY FORM</span>
              <h2>How Can We Help You?</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="phone">Mobile Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    minLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    autoComplete="tel-national"
                    title="Enter a valid 10-digit mobile number."
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="course">Course of Interest</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select a course</option>
                  <option value="B.A.">B.A.</option>
                  <option value="B.Com">B.Com / B.Com (Hons.)</option>
                  <option value="B.Sc.">B.Sc.</option>
                  <option value="BCA / Computer Science">BCA / Computer Science</option>
                  <option value="BBA">BBA</option>
                  <option value="B.Sc. Agriculture">B.Sc. Agriculture</option>
                  <option value="LL.B. / B.A. LL.B.">LL.B. / B.A. LL.B.</option>
                  <option value="B.Ed.">B.Ed.</option>
                  <option value="GNM Nursing">GNM Nursing</option>
                  <option value="D.Pharma">D.Pharma</option>
                  <option value="Postgraduate Programme">Postgraduate Programme</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="enquiry">Enquiry Type *</label>
                <select
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  required
                >
                  {enquiryOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={4}
                  maxLength={1500}
                />
              </div>

              <label className="contact-consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I agree to be contacted by D.D. College regarding
                  my enquiry.
                </span>
              </label>

              <button type="submit" className="contact-submit-btn">
                Send Enquiry
                <Send size={17} />
              </button>

              {submitted && (
                <div className="contact-form-notice" role="status">
                  <CheckCircle2 size={19} />
                  <span>
                    Your email application has been opened. Please send
                    the pre-filled email to complete your enquiry.
                  </span>
                </div>
              )}

              <p className="contact-form-footnote">
                Your email application must be configured to send the enquiry.
                This form does not directly store or submit data to a college
                database.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CAMPUS LOCATION */}
      <section className="contact-location-section">
        <div className="contact-container">
          <div className="contact-location-heading">
            <div>
              <div className="contact-eyebrow contact-eyebrow-dark">
                <span />
                FIND OUR CAMPUS
              </div>
              <h2>
                Come Visit <span>D.D. College.</span>
              </h2>
              <p>
                We look forward to helping you learn more about our
                college and academic programmes.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=DD+College+25+Nimbuwala+Garhi+Cantt+Dehradun"
              target="_blank"
              rel="noreferrer"
              className="contact-map-btn"
            >
              Get Directions <ArrowRight size={17} />
            </a>
          </div>

          <div className="contact-location-grid">
            <div className="contact-map-frame">
              <iframe
                title="D.D. College Dehradun location map"
                src="https://maps.google.com/maps?q=DD%20College%2C%2025%20Nimbuwala%2C%20Garhi%20Cantt%2C%20Dehradun&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="contact-location-card">
              <div className="contact-location-icon">
                <MapPin size={27} />
              </div>

              <span className="contact-location-label">OUR ADDRESS</span>

              <h3>D.D. College, Dehradun</h3>

              <p>
                25 Nimbuwala, Garhi Cantt,
                <br />
                Near ONGC Helipad,
                <br />
                Dehradun, Uttarakhand – 248003, India
              </p>

              <div className="contact-location-divider" />

              <div className="contact-location-detail">
                <Phone size={18} />
                <a href="tel:+917417555666">+91 74175 55666</a>
              </div>

              <div className="contact-location-detail">
                <Mail size={18} />
                <a href="mailto:info@ddcollege.in">info@ddcollege.in</a>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=DD+College+25+Nimbuwala+Garhi+Cantt+Dehradun"
                target="_blank"
                rel="noreferrer"
                className="contact-directions-link"
              >
                Open in Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
