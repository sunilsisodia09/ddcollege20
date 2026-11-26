
import Link from "next/link";
import "./AdmissionMarquee.css"
export default function AdmissionMarquee() {
  return (
    <section className="admission-marquee">
      <div className="admission-marquee-track">
        {[1, 2, 3, 4].map((item) => (
          <Link
            href="https://admissions.ddcollege.in/"
            className="admission-marquee-text"
            key={item}
          >
            <span> ADMISSIONS OPEN FOR ALL COURSES</span>
            <strong>APPLY NOW →</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
