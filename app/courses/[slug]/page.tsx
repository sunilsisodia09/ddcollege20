
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    slug: "bca",
    title: "Bachelor of Computer Applications",
    shortTitle: "BCA",
    duration: "3 Years",
    description:
      "Build a strong foundation in computer applications, programming, software development and modern IT technologies.",
  },
  {
    slug: "bba",
    title: "Bachelor of Business Administration",
    shortTitle: "BBA",
    duration: "3 Years",
    description:
      "Develop management, leadership, entrepreneurship and business administration skills.",
  },
  {
    slug: "bcom",
    title: "Bachelor of Commerce",
    shortTitle: "B.Com",
    duration: "3 Years",
    description:
      "Learn accounting, finance, taxation, economics and modern commerce practices.",
  },
  {
    slug: "ba",
    title: "Bachelor of Arts",
    shortTitle: "BA",
    duration: "3 Years",
    description:
      "Explore humanities, social sciences, communication and a wide range of academic disciplines.",
  },
  {
    slug: "bsc",
    title: "Bachelor of Science",
    shortTitle: "B.Sc",
    duration: "3 Years",
    description:
      "Develop scientific knowledge, analytical thinking and practical research skills.",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug.toLowerCase()
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#650b28] via-[#8b0929] to-[#280817] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <GraduationCap size={17} />
              DD College Admissions
            </span>

            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
              {course.title}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/80">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-lg bg-white/10 px-5 py-3">
                Course: {course.shortTitle}
              </span>
              <span className="rounded-lg bg-white/10 px-5 py-3">
                Duration: {course.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-5 md:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <BookOpen
              size={32}
              className="mb-5 text-[#8b0929]"
            />

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              About This Course
            </h2>

            <p className="leading-8 text-slate-600">
              {course.description} At DD College, students
              get opportunities to develop academic knowledge,
              practical understanding and professional skills.
            </p>
          </div>
        </div>

        <aside className="h-fit rounded-2xl bg-white p-7 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-slate-900">
            Interested in Admission?
          </h2>

          <p className="mb-6 text-sm leading-6 text-slate-600">
            Connect with our admission team for course details
            and application assistance.
          </p>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#8b0929] px-5 py-4 font-semibold text-white transition hover:bg-[#650b28]"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </aside>
      </section>
    </main>
  );
}
