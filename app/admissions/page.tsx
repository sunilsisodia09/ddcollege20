
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  ShieldCheck,
  User,
} from "lucide-react";
import "./admission.css";

export default function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);

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

  const [documents, setDocuments] = useState<FileList | null>(null);

  function updateField(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // This demo validates the form and shows a confirmation.
    // Connect an API/email backend to store real applications.
    setSubmitted(true);
  }

  return (
    <main className="admission-page">
      <section className="admission-hero">
        <div className="admission-hero-shape admission-shape-one" />
        <div className="admission-hero-shape admission-shape-two" />

        <div className="admission-container admission-hero-content">
          <span className="admission-eyebrow">
            <GraduationCap size={17} /> ADMISSIONS OPEN
          </span>

          <h1>
            Start Your Journey
            <br />
            <span>With DD College</span>
          </h1>

          <p>
            Take the first step towards your future. Apply online and explore
            the opportunities waiting for you at DD College, Dehradun.
          </p>

          <div className="admission-hero-points">
            <span><CheckCircle2 size={17} /> Student-focused learning</span>
            <span><CheckCircle2 size={17} /> Career-oriented education</span>
            <span><CheckCircle2 size={17} /> Supportive campus environment</span>
          </div>
        </div>
      </section>

      <section className="admission-main admission-container">
        <div className="admission-intro">
          <span className="admission-section-tag">ONLINE APPLICATION</span>
          <h2>Apply for Admission</h2>
          <p>
            Complete the application form below. Our admission team can contact
            you with information about the next steps.
          </p>
        </div>

        <div className="admission-layout">
          <aside className="admission-sidebar">
            <div className="admission-side-card">
              <div className="admission-side-icon">
                <GraduationCap size={27} />
              </div>
              <h3>Your Future Starts Here</h3>
              <p>
                Choose your preferred program and share your details to begin
                your admission enquiry.
              </p>

              <div className="admission-side-divider" />

              <div className="admission-benefit">
                <BookOpen size={19} />
                <span>Explore academic programs</span>
              </div>
              <div className="admission-benefit">
                <ShieldCheck size={19} />
                <span>Personal application details</span>
              </div>
              <div className="admission-benefit">
                <FileText size={19} />
                <span>Document information</span>
              </div>

              <Link href="/courses" className="admission-course-link">
                Explore Courses <ArrowRight size={17} />
              </Link>
            </div>

            <div className="admission-help-card">
              <h3>Need Help?</h3>
              <p>Contact the college admission office for guidance.</p>
              <Link href="/contact">
                Contact College <ArrowRight size={16} />
              </Link>
            </div>
          </aside>

          <div className="admission-form-card">
            {submitted ? (
              <div className="admission-success">
                <div className="admission-success-icon">
                  <CheckCircle2 size={42} />
                </div>
                <h2>Application Details Completed!</h2>
                <p>
                  Your form has passed the front-end validation. It has not
                  yet been sent to the college. Connect the form to the
                  college's email or database to receive applications.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="admission-submit"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="admission-form-heading">
                  <div>
                    <span>APPLICATION FORM</span>
                    <h2>Student Information</h2>
                  </div>
                  <User size={25} />
                </div>

                <div className="admission-form-section">
                  <h3><span>01</span> Personal Details</h3>

                  <div className="admission-grid">
                    <label className="admission-field admission-full">
                      Full Name *
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={updateField}
                        placeholder="Enter your full name"
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
                        placeholder="Enter 10-digit mobile number"
                        pattern="[0-9]{10}"
                        maxLength={10}
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
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </label>

                    <label className="admission-field admission-full">
                      Address *
                      <textarea
                        name="address"
                        value={form.address}
                        onChange={updateField}
                        placeholder="Enter your full address"
                        rows={3}
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="admission-form-section">
                  <h3><span>02</span> Academic Details</h3>

                  <div className="admission-grid">
                    <label className="admission-field admission-full">
                      Select Course *
                      <select
                        name="course"
                        value={form.course}
                        onChange={updateField}
                        required
                      >
                        <option value="">Choose your preferred course</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="B.Com">B.Com</option>
                        <option value="BA">BA</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="MA">MA</option>
                        <option value="M.Com">M.Com</option>
                        <option value="Other">Other / Not sure yet</option>
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
                        placeholder="e.g. 78%"
                      />
                    </label>
                  </div>
                </div>

                <div className="admission-form-section">
                  <h3><span>03</span> Documents</h3>

                  <label className="admission-field">
                    Upload Documents
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setDocuments(e.target.files)}
                    />
                    <small>
                      Accepted formats: PDF, JPG, PNG.
                      {documents?.length
                        ? ` ${documents.length} file(s) selected.`
                        : " Select your marksheets or other relevant documents."}
                    </small>
                  </label>
                </div>

                <div className="admission-form-section">
                  <h3><span>04</span> Additional Information</h3>

                  <label className="admission-field">
                    Message (Optional)
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={updateField}
                      placeholder="Any questions or additional information..."
                      rows={3}
                    />
                  </label>
                </div>

                <label className="admission-consent">
                  <input type="checkbox" required />
                  <span>
                    I confirm that the information provided above is correct
                    to the best of my knowledge.
                  </span>
                </label>

                <button type="submit" className="admission-submit">
                  Submit Application <ArrowRight size={19} />
                </button>

                <p className="admission-privacy">
                  Your information should be handled securely by the college.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
