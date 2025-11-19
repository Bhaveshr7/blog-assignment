import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed left-0 right-0 bottom-0 bg-gray-900 text-white py-3">
      <div className="max-w-6xl mx-auto px-4 text-center">
        Submit the form to get in touch!
        <Link
          href="/contact"
          className="ml-4 hover:text-pink-400"
        >
          Click Here +
        </Link>
      </div>
    </footer>
  );
}
