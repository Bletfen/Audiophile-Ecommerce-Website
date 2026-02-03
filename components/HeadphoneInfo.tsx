import { TProduct } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export default function HeadphoneInfo({ data }: { data: TProduct[] }) {
  return (
    <div
      className="flex flex-col items-center
        gap-[12rem]"
    >
      {data.map((item) => (
        <div key={item.id}>
          <div
            className="flex flex-col
              items-center"
          >
            <Image
              src={item.image.mobile}
              alt={item.name}
              width={220}
              height={240}
              className="flex md:hidden"
            />
            <div
              className="hidden md:flex lg:hidden
              w-[689px] h-[352px] bg-[#f1f1f1]
              flex items-center justify-center"
            >
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={220}
                height={243}
                className="hidden md:flex lg:hidden"
              />
            </div>
            <Image
              src={item.image.desktop}
              alt={item.name}
              width={540}
              height={560}
              className="hidden lg:flex"
            />
          </div>
          <div
            className="flex flex-col
              items-center text-center
              gap-[2.4rem] mt-[3.2rem]"
          >
            {item.new && (
              <span
                className="text-[1.4rem]
                  tracking-[1rem] text-[#d87d4a]
                  "
              >
                NEW PRODUCT
              </span>
            )}
            <h2
              className="text-[2.8rem] font-bold
                text-[#000] tracking-[0.1rem]
                max-w-[32.7rem]"
            >
              {item.name}
            </h2>
            <p
              className="text-[1.5rem] font-[500]
                leading-[1.67] text-[#000] opacity-50
                "
            >
              {item.description}
            </p>
            <Link
              href="#"
              className="px-[3rem] py-[1.5rem] bg-[#d87d4a]
                text-white text-[1.3rem] font-bold
                inline-block
                "
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
