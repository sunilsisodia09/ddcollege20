export default function LeadershipPage() {
  const leaders = [
    {
      name: "Management",
      role: "College Management",
      description:
        "Providing guidance and support for the academic growth and development of DD College.",
    },
    {
      name: "Principal",
      role: "Principal",
      description:
        "Leading academic activities and maintaining educational standards across the institution.",
    },
    {
      name: "Faculty",
      role: "Teaching Faculty",
      description:
        "Dedicated faculty members supporting students through teaching, mentoring and guidance.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">
            DD College
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-[#8b0929] mt-3">
            Our Leadership
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 mt-5 leading-7">
            Meet the leadership and academic team working towards quality
            education and student development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {leaders.map((leader) => (
            <div
              key={leader.role}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 text-[#8b0929] flex items-center justify-center text-2xl font-bold mb-5">
                {leader.name.charAt(0)}
              </div>

              <h2 className="text-xl font-bold text-[#8b0929]">
                {leader.name}
              </h2>

              <p className="text-amber-600 font-semibold mt-2">
                {leader.role}
              </p>

              <p className="text-slate-600 leading-7 mt-4">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
