import Image from "next/image";
import Link from "next/link";
export default function ZX9SpeakerSpotlight() {
  return (
    <div
      className="bg-[#d87d4a] rounded-[0.8rem]
    px-[2.4rem] py-[5.5rem]
    flex flex-col items-center justify-center
    bg-[url('/assets/home/desktop/pattern-circles.svg')]
    bg-no-repeat bg-[length:560px_560px]
    bg-[position:right_-117px_top_-120px]
    w-[32.7rem] md:w-[68.9rem] lg:w-[111rem]
    transition-all duration-300
    md:pt-[5.2rem] md:pb-[6.4rem] lg:pt-[9.6rem] lg:pb-[0]
    md:bg-[length:800px_800px]
    md:bg-[position:right_-57px_top_-250px]
    lg:flex-row lg:overflow-hidden
    lg:gap-[13.8rem]
    lg:bg-[length:1000px_1000px]
    lg:bg-[position:right_300px_top_-70px]
    "
    >
      <Image
        className="w-[17.2rem] h-[20.7rem] 
          md:w-[19.7rem] md:h-[23.7rem]
          lg:w-[41rem] lg:h-[46.4rem]
          lg:relative lg:top-[0.7rem]"
        src="/assets/home/desktop/image-speaker-zx9.png"
        alt="ZX9 Speaker"
        width={410}
        height={464}
      />
      <div
        className="text-white
        flex flex-col items-center
        text-center gap-[2.4rem]
        lg:items-start lg:text-start lg:ml-[0]
        lg:self-start"
      >
        <h2
          className="text-[3.6rem] font-bold
        tracking-[1.29px] leading-[1.11] mt-[3.2rem]
        md:text-[5.6rem] md:leading-[1.04]
        lg:mt-[1.5rem]"
        >
          ZX9 <br /> SPEAKER
        </h2>
        <p
          className="text-[1.5rem] font-[500] opacity-75
            leading-[1.67] max-w-[35rem]
            lg:mb-[4rem]"
        >
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          href="#"
          className="bg-[#000]
            px-[3.1rem] py-[1.5rem]
            text-[1.3rem] font-bold
            tracking-[0.1rem]"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
