import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl shadow-black mx-auto mt-14 rounded-full"
        src="/images/_.jpeg"
        width={140}
        height={140}
        alt="Yasin Davids"
        priority={true}
      />
    </section>
  );
}
