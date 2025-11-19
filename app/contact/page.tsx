export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-2xl font-bold mt-8">Contact Us</h1>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="block w-full border rounded px-3 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="block w-full border rounded px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            className="block w-full border rounded px-3 py-2"
            rows={5}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-pink-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
