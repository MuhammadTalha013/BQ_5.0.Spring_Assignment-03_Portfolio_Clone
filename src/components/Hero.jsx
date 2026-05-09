function Hero(props) {
  return (
    <section className="bg-gray-100 text-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {props.heading}
      </h2>
      <p className="text-gray-600 mb-8">
        {props.subtext}
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition duration-300">
        Hire Me
      </button>
    </section>
  );
}

export default Hero;