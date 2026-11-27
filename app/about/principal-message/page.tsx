
import Image from "next/image";
import "./principal-message.css";

export default function PrincipalMessagePage() {
  return (
    <main className="dd-principal-page">
      {/* HERO BANNER */}
      <section className="dd-principal-hero">
        <Image
        src="/campus/dd.png"
          alt="D.D. College campus"
          fill
          priority
          sizes="100vw"
          className="dd-principal-hero-image"
        />

        <div className="dd-principal-hero-overlay" />

        <div className="dd-principal-hero-content">
          <span className="dd-principal-hero-eyebrow">
            D.D. COLLEGE, DEHRADUN
          </span>

          <h1>Principal&apos;s Message</h1>

          <div className="dd-principal-hero-divider">
            <span />
          </div>

          <p>
            Inspiring Minds | Empowering Futures | Excellence in Education
          </p>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE SECTION */}
      <section className="dd-principal-section">
        <div className="dd-principal-content">
          <div className="dd-principal-eyebrow">
            <span>ACADEMIC LEADERSHIP</span>
            <span className="dd-principal-eyebrow-line" />
          </div>

          <h2 className="dd-principal-content-title">
            A Message from Our Principal
          </h2>

          <p className="dd-principal-tagline">
            Inspiring Minds <span>|</span> Empowering Futures{" "}
            <span>|</span> Excellence in Education
          </p>

          <div className="dd-principal-message-text">
            <p>Dear Students, Parents and Well-Wishers,</p>

            <p>
         D.D. College reviews its teaching and learning practices consistently to meet the evolving needs 
of students. Our experienced, motivated faculty are committed to academic excellence and foster 
a culture of inquiry, innovation and integrity, within a positive, disciplined environment where 
students can hone their skills. 
            </p>

            <p>
          The college offers undergraduate, postgraduate and diploma programmes across Sciences, 
Commerce and Humanities, along with professional courses in B.Ed., Computer Applications, 
Agriculture and Yoga. 
            </p>

            <p>
            Beyond the classroom, faculty provide updated subject material and guidance to help students 
navigate a changing education and employment landscape. They also work with the 
administration on action plans that bring out the best in students and staff. The results show: year 
after year, students secure top university-level positions. 
            </p>

            <p>
           Affordable fees keep quality education accessible to all. Regular communication keeps parents 
and guardians informed of their ward’s progress, and every student is encouraged to take part in 
extracurricular activities throughout the year. 
            </p>

   

            <p className="dd-principal-wishes">
              I wish all our students success in their academic journey
              and future endeavours.
            </p>
          </div>

          {/* PRINCIPAL SIGNATURE */}
          <div className="dd-principal-signature">
            <span className="dd-principal-signature-mark">
              With best wishes,
            </span>

            <h3>Principal</h3>
            <p>D.D. College, Dehradun</p>
          </div>
        </div>

        {/* PRINCIPAL PROFILE */}
        <aside className="dd-principal-profile">
          <div className="dd-principal-image-frame">
            <Image
              src="/campus/prin.png"
              alt="Principal of D.D. College, Dehradun"
              width={650}
              height={820}
              priority
              className="dd-principal-profile-image"
              sizes="(max-width: 768px) 100vw, 38vw"
            />
          </div>

          <div className="dd-principal-profile-card">
            <span className="dd-principal-profile-accent" />

            <div className="dd-principal-profile-details">
              <h3>Principal</h3>
              <p>Academic Leadership</p>
              <span>D.D. College, Dehradun</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
