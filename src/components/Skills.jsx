function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-center">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;