function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Spotify Clone</h3>
          <p className="text-gray-600 text-sm">
            Responsive website built with React and Tailwind.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Netflix Clone</h3>
          <p className="text-gray-600 text-sm">
            Modern landing page design with clean UI.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Porfolio Clone</h3>
          <p className="text-gray-600 text-sm">
            Professional portfolio layout.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;