import Link from "next/link";

export default function Bitmap() {
  return (
    <div
      className="pt-[10.8rem] pb-[11.2rem]
    bg-[url('/assets/home/mobile/image-header.jpg')]
    text-white text-center  bg-no-repeat bg-cover
    bg-[position:0%_100%]
    "
    >
      <span
        className="text-[1.4rem] opacity-50
        tracking-[1rem] shrink-0 mb-[1.6rem] block
        "
      >
        NEW PRODUCT
      </span>
      <h1
        className="text-[3.6rem] font-bold
        leading-[1.11] tracking-[0.12rem]
        mb-[2.4rem]
        "
      >
        XX99 MARK II HEADPHONES
      </h1>
      <p
        className="text-[1.5rem] font-[500] opacity-75
        leading-[1.67]"
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        href="#"
        className="px-[3rem] py-[1.5rem] bg-[#d87d4a]
        text-white text-[1.3rem] font-bold
        mt-[3.2rem] inline-block"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
}
