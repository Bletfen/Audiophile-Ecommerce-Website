import Link from "next/link";
import Image from "next/image";

export default function YX1EarphonesSpotlight() {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <div
        className="bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]
      w-[32.7rem] h-[20rem]
      bg-no-repeat bg-cover rounded-[0.8rem]"
      ></div>
      <div
        className="flex flex-col bg-[#f1f1f1]
        rounded-[0.8rem] px-[2.4rem] h-[20rem]
        justify-center
        "
      >
        <h2
          className="text-[2.8rem] text-[#000] font-bold
            tracking-[0.2rem]"
        >
          YX1 EARPHONES
        </h2>

        <Link
          href="#"
          className="border border-[#000]
            w-[16rem] text-center
            px-[2.9rem] py-[1.5rem]
            text-[1.3rem] font-bold
            tracking-[0.1rem]
            mt-[3.2rem]"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
