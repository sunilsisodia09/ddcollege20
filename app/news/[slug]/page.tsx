
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  GraduationCap,
  Newspaper,
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const newsArticles = [
  {
    slug: "admissions-open-2026",
    title: "Admissions Open 2026",
    category: "Admissions",
    date: "2026",
    description:
      "DD College welcomes students to explore academic opportunities and begin their journey towards a successful future.",
  },
  {
    slug: "campus-life",
    title: "Discover Campus Life at DD College",
    category: "Campus News",
    date: "2026",
    description:
      "Explore the academic environment, student activities and learning opportunities at DD College.",
  },
  {
    slug: "student-achievements",
    title: "Celebrating Student Achievements",
    category: "Student News",
    date: "2026",
    description:
      "DD College celebrates the achievements and accomplishments of its students.",
  },
];

export default async function NewsDetailsPage({ params }: Props) {
  const { slug } = await params;

  const article = newsArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-[#650b28] to-[#9b153d] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <Newspaper size={18} />
            {article.category}
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            {article.title}
          </h1>

          <div className="mt-7 flex items-center gap-2 text-sm text-white/80">
            <CalendarDays size={17} />
            {article.date}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-12">
          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b0929]/10 text-[#8b0929]">
            <GraduationCap size={34} />
          </div>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            {article.title}
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            {article.description}
          </p>

          <div className="mt-10 border-t border-slate-100 pt-8">
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              DD College
            </h3>

            <p className="leading-7 text-slate-600">
              For more information about admissions, courses
              and college activities, connect with our team.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#8b0929] px-7 py-3 font-semibold text-white transition hover:bg-[#650b28]"
            >
              Contact Us
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
