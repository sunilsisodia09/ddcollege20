
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  ShieldCheck,
  User,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Upload,
  Award,
} from "lucide-react";

import "./admission.css";

const courses = [
  "BCA",
  "BBA",
  "B.Com",
  "BA",
  "B.Sc",
  "MA",
  "M.Com",
  "Other / Not Sure Yet",
];

export default function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [documents, setDocuments] = useState<FileList | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    qualification: "",
    percentage: "",
    address: "",
    message: "",
  });

  function updateField(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Frontend confirmation only. Connect a backend API to receive applications.
    setSubmitted(true);
  }

  return (
    <main className="admission-page">
      {/* HERO */}
      <section className="admission-hero">
        <div className="admission-container admission-hero-inner">
          <div className="admission-hero-content">
            <span className="admission-eyebrow">
              <GraduationCap size={18} />
              DD COLLEGE · ADMISSIONS
            </span>

            <h1>
              Your Future Begins
              <span> With DD College</span>
            </h1>

            <p>
              Take the next step towards your academic and professional goals.
              Explore our programmes and submit an admission enquiry to connect
              with the DD College admission team.
            </p>

            <div className="admission-hero-actions">
              <a href="#admission-form" className="admission-primary-btn">
                Apply for Admission <ArrowRight size={18} />
              </a>

              <Link href="/courses" className="admission-outline-btn">
                Explore Courses <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="admission-hero-features">
              <span><CheckCircle2 size={17} /> Academic Guidance</span>
              <span><CheckCircle2 size={17} /> Student Support</span>
              <span><CheckCircle2 size={17} /> Admission Assistance</span>
            </div>
          </div>

          <div className="admission-hero-card">
            <div className="admission-hero-card-icon">
              <Award size={34} />
            </div>
            <span>YOUR NEXT CHAPTER</span>
            <h2>Learn Today. Lead Tomorrow.</h2>
            <p>
              Discover your interests, develop your skills and work towards
              your future goals.
            </p>
            <a href="#admission-form">
              Start Your Enquiry <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="admission-intro-section">
        <div className="admission-container">
          <div className="admission-intro">
            <span className="admission-tag">ONLINE ADMISSION ENQUIRY</span>
            <h2>Take the First Step Towards Your Future</h2>
            <p>
              Complete the form with your details and preferred programme.
              The information will help the admission team understand your
              enquiry and guide you about the next steps.
            </p>
          </div>

          <div className="admission-steps">
            <div className="admission-step">
              <span>01</span>
              <div>
                <h3>Share Your Details</h3>
                <p>Enter your personal information.</p>
              </div>
            </div>

            <div className="admission-step">
              <span>02</span>
              <div>
                <h3>Select a Programme</h3>
                <p>Choose your preferred course.</p>
              </div>
            </div>

            <div className="admission-step">
              <span>03</span>
              <div>
                <h3>Admission Guidance</h3>
                <p>Get information about the next steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM AREA */}
      <section className="admission-main admission-container">
        <aside className="admission-sidebar">
          <div className="admission-side-card">
            <div className="admission-side-icon">
              <GraduationCap size={30} />
            </div>

            <span className="admission-side-label">DD COLLEGE</span>
            <h3>Admissions & Student Guidance</h3>

            <p>
              Get information about programmes, eligibility requirements,
              application procedures and admission-related queries.
            </p>

            <div className="admission-side-divider" />

            <div className="admission-benefit">
              <BookOpen size={20} />
              <span>Programme Information</span>
            </div>

            <div className="admission-benefit">
              <ShieldCheck size={20} />
              <span>Admission Guidance</span>
            </div>

            <div className="admission-benefit">
              <FileText size={20} />
              <span>Application Requirements</span>
            </div>

            <div className="admission-benefit">
              <User size={20} />
              <span>Student Support</span>
            </div>

            <Link href="/courses" className="admission-course-link">
              View Available Courses <ArrowRight size={17} />
            </Link>
          </div>

          <div className="admission-help-card">
            <div className="admission-help-icon">
              <Phone size={21} />
            </div>
            <h3>Need Admission Help?</h3>
            <p>
              Visit the contact page for college contact information and
              admission assistance.
            </p>
            <Link href="/contact">
              Contact DD College <ArrowRight size={16} />
            </Link>
          </div>
        </aside>

        <div className="admission-form-card" id="admission-form">
          {submitted ? (
            <div className="admission-success">
              <div className="admission-success-icon">
                <CheckCircle2 size={42} />
              </div>

              <span className="admission-tag">FORM COMPLETED</span>
              <h2>Thank You, {form.fullName}!</h2>

              <p>
                Your admission enquiry form has been completed successfully.
                This page currently provides frontend confirmation only;
                your details have not yet been sent to the college.
              </p>

              <div className="admission-summary">
                <div>
                  <span>Applicant</span>
                  <strong>{form.fullName}</strong>
                </div>
                <div>
                  <span>Preferred Course</span>
                  <strong>{form.course}</strong>
                </div>
                <div>
                  <span>Mobile Number</span>
                  <strong>{form.phone}</strong>
                </div>
              </div>

              <button
                type="button"
                className="admission-submit"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Enquiry <ArrowRight size={18} />
              </button>

              <Link href="/contact" className="admission-success-link">
                Contact College
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="admission-form-heading">
                <div>
                  <span>DD COLLEGE · APPLICATION</span>
                  <h2>Admission Enquiry Form</h2>
                  <p>Fields marked with * are required.</p>
                </div>

                <div className="admission-form-heading-icon">
                  <FileText size={26} />
                </div>
              </div>

              {/* PERSONAL DETAILS */}
              <div className="admission-form-section">
                <h3>
                  <span>01</span>
                  Personal Information
                </h3>

                <div className="admission-grid">
                  <label className="admission-field admission-full">
                    Full Name *
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={updateField}
                      placeholder="Enter student's full name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="admission-field">
                    Email Address *
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="example@email.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label className="admission-field">
                    Mobile Number *
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="10-digit mobile number"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <label className="admission-field">
                    Date of Birth *
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label className="admission-field">
                    Gender *
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={updateField}
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </label>

                  <label className="admission-field admission-full">
                    Complete Address *
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={updateField}
                      placeholder="House number, locality, city, state and PIN code"
                      rows={3}
                      required
                    />
                  </label>
                </div>
              </div>

              {/* ACADEMIC DETAILS */}
              <div className="admission-form-section">
                <h3>
                  <span>02</span>
                  Academic Information
                </h3>

                <div className="admission-grid">
                  <label className="admission-field admission-full">
                    Preferred Course / Programme *
                    <select
                      name="course"
                      value={form.course}
                      onChange={updateField}
                      required
                    >
                      <option value="">Select your preferred course</option>
                      {courses.map((course) => (
                        <option value={course} key={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="admission-field">
                    Last Qualification *
                    <select
                      name="qualification"
                      value={form.qualification}
                      onChange={updateField}
                      required
                    >
                      <option value="">Select qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Post Graduation">Post Graduation</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="admission-field">
                    Percentage / CGPA
                    <input
                      name="percentage"
                      value={form.percentage}
                      onChange={updateField}
                      placeholder="e.g. 78% or 8.2 CGPA"
                    />
                  </label>
                </div>
              </div>

              {/* DOCUMENTS */}
              <div className="admission-form-section">
                <h3>
                  <span>03</span>
                  Supporting Documents
                </h3>

                <label className="admission-upload">
                  <Upload size={25} />
                  <strong>Choose Documents</strong>
                  <span>
                    Upload marksheets or relevant documents (optional).
                  </span>

                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setDocuments(e.target.files)}
                  />

                  <small>
                    {documents?.length
                      ? `${documents.length} file(s) selected`
                      : "Accepted formats: PDF, JPG, JPEG and PNG"}
                  </small>
                </label>
              </div>

              {/* MESSAGE */}
              <div className="admission-form-section">
                <h3>
                  <span>04</span>
                  Additional Information
                </h3>

                <label className="admission-field">
                  Your Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Write your questions or any additional information..."
                    rows={4}
                  />
                </label>
              </div>

              <label className="admission-consent">
                <input type="checkbox" required />
                <span>
                  I confirm that the information provided is accurate to the
                  best of my knowledge.
                </span>
              </label>

              <button type="submit" className="admission-submit">
                Complete Enquiry Form <ArrowRight size={19} />
              </button>

              <p className="admission-privacy">
                <ShieldCheck size={15} />
                Please provide accurate information. Personal details and
                documents should be handled securely.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="admission-bottom">
        <div className="admission-container">
          <div>
            <span>DD COLLEGE</span>
            <h2>Have Questions About Admission?</h2>
            <p>
              Connect with the college for programme information and admission
              assistance.
            </p>
          </div>

          <Link href="/contact" className="admission-primary-btn">
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
