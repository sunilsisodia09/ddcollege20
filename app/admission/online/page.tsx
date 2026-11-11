
"use client";

import { useState, type FormEvent } from "react";
import {
  GraduationCap,
  UserRound,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  School,
} from "lucide-react";

import "./onlineadmission.css";

const courses = [
  {
    department: "Department of Science",
    options: [
      "B.Sc. (C.B.Z.)",
      "B.Sc. (P.C.M.)",
      "M.Sc. Physics",
      "M.Sc. Chemistry",
      "M.Sc. Mathematics",
      "M.Sc. Zoology",
      "M.Sc. Botany",
    ],
  },
  {
    department: "Department of Agro Science",
    options: [
      "B.Sc. Agriculture (Hons.)",
      "M.Sc. Horticulture",
      "M.Sc. Agronomy",
    ],
  },
  {
    department: "Department of Commerce & Management",
    options: ["B.Com", "B.Com (Hons.)", "BBA", "M.Com"],
  },
  {
    department: "Department of Humanities & Social Sciences",
    options: [
      "B.A.",
      "M.A. English",
      "M.A. History",
      "M.A. Political Science",
    ],
  },
  {
    department: "Department of Education",
    options: ["B.Ed."],
  },
  {
    department: "Department of Computer Science",
    options: ["B.Sc. Computer Science", "BCA", "B.Sc. IT"],
  },
  {
    department: "Department of Health Sciences",
    options: ["GNM Nursing", "D.Pharma"],
  },
  {
    department: "Department of Law",
    options: ["B.A. LL.B.", "LL.B."],
  },
  {
    department: "Department of Yoga",
    options: ["B.A. (Yoga)", "P.G. Diploma in Yoga", "M.A. (Yoga)"],
  },
];

const initialForm = {
  studentName: "",
  fatherName: "",
  motherName: "",
  dob: "",
  gender: "",
  mobile: "",
  alternateMobile: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  course: "",
  qualification: "",
  board: "",
  passingYear: "",
  percentage: "",
  message: "",
  declaration: false,
};

type AdmissionForm = typeof initialForm;

export default function OnlineAdmission() {
  const [form, setForm] = useState<AdmissionForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;

      setForm((previous) => ({
        ...previous,
        [name]: checked,
      }));

      return;
    }

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.declaration) {
      window.alert("Please accept the declaration before submitting.");
      return;
    }

    // Frontend demo only: no application is stored on a server.
    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
  }

  return (
    <main className="dd-online-admission">
      {/* HERO */}
      <section className="dd-admission-hero">
        <div className="dd-admission-hero-overlay" />

        <div className="dd-admission-container dd-admission-hero-inner">
          <div className="dd-admission-hero-copy">
            <span className="dd-admission-eyebrow">
              DD COLLEGE | ADMISSIONS 2026–27
            </span>

            <h1>
              Start Your
              <span> Academic Journey</span>
            </h1>

            <p>
              Take the next step towards your future. Submit your
              admission enquiry and explore the programmes offered
              by DD College.
            </p>

            <div className="dd-admission-hero-points">
              <span>
                <CheckCircle2 size={17} />
                Multiple Programmes
              </span>

              <span>
                <CheckCircle2 size={17} />
                Student Support
              </span>
            </div>
          </div>

          <div className="dd-admission-hero-card">
            <div className="dd-admission-hero-icon">
              <GraduationCap size={34} />
            </div>

            <span>ADMISSIONS OPEN</span>
            <h2>2026–27</h2>

            <p>
              Apply for your preferred course and connect with our
              admissions team for guidance.
            </p>

            <a href="#admission-form">
              Apply Now <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="dd-admission-intro">
        <div className="dd-admission-container">
          <div className="dd-admission-intro-heading">
            <span>ONLINE ADMISSION</span>
            <h2>Admission Enquiry Form</h2>
            <p>
              Fill in the details below. Fields marked with * are
              required.
            </p>
          </div>

          <div className="dd-admission-notice">
            <FileText size={22} />

            <p>
              Please provide accurate information. Submitting this
              form on this demo page does not itself register or
              store your application. The college must connect the
              form to its admission system to receive submissions.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        className="dd-admission-form-section"
        id="admission-form"
      >
        <div className="dd-admission-container">
          {submitted ? (
            <div className="dd-admission-success">
              <div className="dd-admission-success-icon">
                <CheckCircle2 size={42} />
              </div>

              <h2>Form Validation Successful</h2>

              <p>
                Your information has passed the browser-side
                validation. It has not been sent to DD College.
                Please connect a backend or admission API to submit
                the actual application.
              </p>

              <button
                type="button"
                className="dd-admission-primary-btn"
                onClick={resetForm}
              >
                Fill Another Form
              </button>
            </div>
          ) : (
            <form
              className="dd-admission-form"
              onSubmit={handleSubmit}
            >
              {/* PERSONAL DETAILS */}
              <div className="dd-admission-form-heading">
                <div className="dd-admission-form-heading-icon">
                  <UserRound size={22} />
                </div>

                <div>
                  <h2>Personal Details</h2>
                  <p>Enter the student&apos;s personal information.</p>
                </div>
              </div>

              <div className="dd-admission-grid">
                <div className="dd-admission-field">
                  <label htmlFor="studentName">
                    Student&apos;s Full Name *
                  </label>

                  <input
                    id="studentName"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="fatherName">
                    Father&apos;s Name *
                  </label>

                  <input
                    id="fatherName"
                    name="fatherName"
                    value={form.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father's name"
                    required
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="motherName">
                    Mother&apos;s Name
                  </label>

                  <input
                    id="motherName"
                    name="motherName"
                    value={form.motherName}
                    onChange={handleChange}
                    placeholder="Enter mother's name"
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="dob">Date of Birth *</label>

                  <div className="dd-admission-input-icon">
                    <CalendarDays size={17} />

                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      value={form.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="gender">Gender *</label>

                  <select
                    id="gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
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
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="dd-admission-form-heading">
                <div className="dd-admission-form-heading-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h2>Contact Details</h2>
                  <p>Provide contact information for communication.</p>
                </div>
              </div>

              <div className="dd-admission-grid">
                <div className="dd-admission-field">
                  <label htmlFor="mobile">Mobile Number *</label>

                  <div className="dd-admission-input-icon">
                    <Phone size={17} />

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="alternateMobile">
                    Alternate Mobile Number
                  </label>

                  <input
                    id="alternateMobile"
                    name="alternateMobile"
                    type="tel"
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    value={form.alternateMobile}
                    onChange={handleChange}
                    placeholder="Alternate number"
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="email">Email Address *</label>

                  <div className="dd-admission-input-icon">
                    <Mail size={17} />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="city">City *</label>

                  <input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    autoComplete="address-level2"
                    required
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="state">State *</label>

                  <input
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    autoComplete="address-level1"
                    required
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="pincode">PIN Code *</label>

                  <input
                    id="pincode"
                    name="pincode"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="6-digit PIN code"
                    autoComplete="postal-code"
                    required
                  />
                </div>

                <div className="dd-admission-field dd-admission-field-full">
                  <label htmlFor="address">Full Address *</label>

                  <div className="dd-admission-input-icon dd-admission-textarea-icon">
                    <MapPin size={17} />

                    <textarea
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="House number, street, locality..."
                      rows={3}
                      autoComplete="street-address"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* COURSE DETAILS */}
              <div className="dd-admission-form-heading">
                <div className="dd-admission-form-heading-icon">
                  <BookOpen size={22} />
                </div>

                <div>
                  <h2>Course Selection</h2>
                  <p>Select the programme you wish to pursue.</p>
                </div>
              </div>

              <div className="dd-admission-grid">
                <div className="dd-admission-field dd-admission-field-full">
                  <label htmlFor="course">Preferred Course *</label>

                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your preferred course</option>

                    {courses.map((group) => (
                      <optgroup
                        key={group.department}
                        label={group.department}
                      >
                        {group.options.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              {/* ACADEMIC DETAILS */}
              <div className="dd-admission-form-heading">
                <div className="dd-admission-form-heading-icon">
                  <School size={22} />
                </div>

                <div>
                  <h2>Academic Details</h2>
                  <p>Enter details of your latest qualification.</p>
                </div>
              </div>

              <div className="dd-admission-grid">
                <div className="dd-admission-field">
                  <label htmlFor="qualification">
                    Last Qualification *
                  </label>

                  <select
                    id="qualification"
                    name="qualification"
                    value={form.qualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select qualification</option>
                    <option value="10th">Class 10th</option>
                    <option value="12th">Class 12th</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">
                      Post Graduation
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="board">Board / University *</label>

                  <input
                    id="board"
                    name="board"
                    value={form.board}
                    onChange={handleChange}
                    placeholder="Enter board or university"
                    required
                  />
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="passingYear">
                    Passing Year *
                  </label>

                  <select
                    id="passingYear"
                    name="passingYear"
                    value={form.passingYear}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select passing year</option>

                    {Array.from(
                      { length: 30 },
                      (_, index) => new Date().getFullYear() - index
                    ).map((year) => (
                      <option key={year} value={String(year)}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="dd-admission-field">
                  <label htmlFor="percentage">
                    Percentage / CGPA *
                  </label>

                  <input
                    id="percentage"
                    name="percentage"
                    value={form.percentage}
                    onChange={handleChange}
                    placeholder="e.g. 78% or 8.2 CGPA"
                    required
                  />
                </div>

                <div className="dd-admission-field dd-admission-field-full">
                  <label htmlFor="message">
                    Additional Information
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any questions or details you would like to share..."
                    rows={4}
                  />
                </div>
              </div>

              {/* DECLARATION */}
              <div className="dd-admission-declaration">
                <label>
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={form.declaration}
                    onChange={handleChange}
                    required
                  />

                  <span>
                    I declare that the information provided above is
                    accurate to the best of my knowledge. I understand
                    that the college may contact me regarding my
                    admission enquiry. *
                  </span>
                </label>
              </div>

              <div className="dd-admission-submit-row">
                <p>
                  <FileText size={16} />
                  Please review your details before submitting.
                </p>

                <button
                  type="submit"
                  className="dd-admission-primary-btn"
                >
                  Submit Enquiry
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* BOTTOM HELP SECTION */}
      <section className="dd-admission-help">
        <div className="dd-admission-container dd-admission-help-inner">
          <div>
            <span>NEED ADMISSION ASSISTANCE?</span>
            <h2>We&apos;re Here to Help</h2>
            <p>
              Contact DD College for course eligibility, admission
              procedures and fee information.
            </p>
          </div>

          <a href="/contact" className="dd-admission-help-btn">
            Contact College <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
