import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-6 text-5xl text-center dark:text-black">
        <span className="whitespace-nowrap">
          <span className="font-bold">Yasin Davids</span>
        </span>
      </p>
      <p className="mt-2 mb-3 text-xl text-center text-black">
        Hi, I'm a Software Engineer
      </p>
      <div className=" flex flex-row justify-center align-middle gap-4 text-black text-4xl ">
        <Link
          className="text-black hover:text-green-700"
          href={"https://github.com/yasindavids"}
        >
          <FaGithub />
        </Link>
        <Link
          className="text-black hover:text-green-700"
          href={"https://www.linkedin.com/in/yasin-davids-38a059283"}
        >
          <FaLinkedin />
        </Link>
      </div>
    </main>
  );
}
