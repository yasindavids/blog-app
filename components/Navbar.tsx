import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl text-white grid place-content-center">
          <Link
            href="/"
            className="text-black/90 no-underline hover:text-white"
          >
            Yasin Davids
          </Link>
        </h1>
      </div>
    </nav>
  );
}
