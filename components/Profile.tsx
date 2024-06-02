import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  return (
    <section className="relative w-full mx-auto overflow-hidden h-72 md:h-90 lg:h-100 ">
      <div>
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center "
          src="/images/rain.gif"
          alt="Yasin Davids"
          layout="fill"
          priority={true}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <div className="flex flex-col items-center">
          <p className="mt-7 text-5xl text-center text-white">
            <span className="whitespace-nowrap">
              <span className="font-bold">Yasin Davids</span>
            </span>
          </p>
          <p className="mt-4 mb-1 text-xl text-center text-white">
            Software Engineer
          </p>
        </div>
        <div className="flex flex-row justify-center align-middle gap-4 text-white text-4xl mt-4 ">
          <Link
            className="text-white hover:text-green-600"
            href={"https://github.com/yasindavids"}
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white hover:text-green-600"
            href={"https://www.linkedin.com/in/yasin-davids-38a059283"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </section>
  );
}
