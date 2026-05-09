function Contact() {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-xl border"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-xl border"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-xl border"
        ></textarea>
        <button
          type="button"
          className="bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;