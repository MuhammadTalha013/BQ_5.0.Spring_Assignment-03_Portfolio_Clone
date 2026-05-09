function About(props) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">{props.title}</h2>
      <p className="text-gray-600 leading-7">
        {props.description}
      </p>
    </section>
  );
}

export default About;