export default function CoursesPage() {
  const courses = [
    { name: "Bachelor of Arts (B.A.)", duration: "3 Years" },
    { name: "Bachelor of Commerce (B.Com.)", duration: "3 Years" },
    { name: "Bachelor of Science (B.Sc.)", duration: "3 Years" },
    { name: "Master of Arts (M.A.)", duration: "2 Years" },
    { name: "Master of Commerce (M.Com.)", duration: "2 Years" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8b0929]">
            Our Courses
          </h1>
          <p className="mt-4 text-slate-600">
            Explore academic programmes at DD College.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="bg-white rounded-2xl p-8 border shadow-sm"
            >
              <h2 className="text-xl font-bold text-[#8b0929]">
                {course.name}
              </h2>
              <p className="mt-4 text-slate-600">
                Duration: {course.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
