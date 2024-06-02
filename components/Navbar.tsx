import Link from "next/link";
import Home from "../app/page";
import ProfilePic from "./Profile";

export default function Navbar() {
  return (
    <nav className="bg-green-800 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <ProfilePic />
        <Home />
      </div>
    </nav>
  );
}
