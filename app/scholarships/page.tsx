import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const scholarshipBenefits = [
  {
    title: "Merit-Based Scholarships",
    description:
      "Scholarship opportunities for students demonstrating excellent academic performance.",
    icon: Award,
  },
  {
    title: "Financial Assistance",
    description:
      "Support opportunities for eligible students who need financial assistance.",
    icon: GraduationCap,
  },
  {
    title: "Academic Excellence",
    description:
      "Encouraging students to achieve their academic and professional goals.",
    icon: BookOpen,
  },
];

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#650b28] via-[#8b0929] to-[#310817] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm">
            DD College Financial Support
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold md:text-6xl">
            Scholarships & Financial Assistance
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Supporting talented and deserving students through scholarship opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#8b0929]"
          >
            Enquire About Scholarships
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-[#8b0929]">
            Student Support
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Scholarship Opportunities
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Explore scholarship opportunities and financial support options.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {scholarshipBenefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#8b0929]/10 text-[#8b0929]">
                  <Icon size={29} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">
            How to Apply?
          </h2>

          <div className="mt-8 space-y-5">
            {[
              "Contact the college admission team.",
              "Ask about available scholarship schemes.",
              "Check eligibility and required documents.",
              "Submit your application as instructed by the college.",
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="shrink-0 text-[#8b0929]" size={23} />
                <p className="text-slate-600">{step}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#8b0929] px-7 py-4 font-semibold text-white"
          >
            Contact Admission Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
