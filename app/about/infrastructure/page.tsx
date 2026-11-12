export default function InfrastructurePage() {
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Spacious and well-designed classrooms with a comfortable learning environment.",
    },
    {
      title: "Computer Laboratories",
      description: "Computer facilities supporting practical learning and digital education.",
    },
    {
      title: "Library",
      description: "A learning space with books and academic resources for students.",
    },
    {
      title: "Sports Facilities",
      description: "Sports and recreational activities for students' overall development.",
    },
    {
      title: "Science Laboratories",
      description: "Laboratory facilities for practical academic learning.",
    },
    {
      title: "Campus Facilities",
      description: "Student-friendly campus facilities designed to support daily college life.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">
            DD College
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-[#8b0929] mt-3">
            Our Infrastructure
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 mt-5 leading-7">
            We provide a supportive educational environment with facilities
            designed to encourage academic excellence and overall development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 mb-5 flex items-center justify-center text-[#8b0929] text-xl font-bold">
                ✓
              </div>

              <h2 className="text-xl font-bold text-[#8b0929] mb-3">
                {facility.title}
              </h2>

              <p className="text-slate-600 leading-7">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
