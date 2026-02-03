import { TOtherProduct, TProduct } from "@/types/type";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";

export default function OtherOffers({
  otherItems,
}: {
  otherItems: TOtherProduct[];
}) {
  const categoryBySlug = new Map(
    (data as TProduct[]).map((product) => [product.slug, product.category]),
  );
  return (
    <div
      className="flex flex-col items-center
        gap-[4rem]"
    >
      <h3
        className="text-[2.4rem] font-bold leading-[1.5]
            tracking-[0.86px] text-[#000] mt-[8.8rem]"
      >
        YOU MAY ALSO LIKE
      </h3>
      <div>
        {otherItems.map((item) => (
          <div
            key={item.slug}
            className="flex
            flex-col items-center
            gap-[3.2rem] mb-[5.6rem]
            "
          >
            <Image
              src={item.image.mobile}
              width={327}
              height={120}
              alt={item.name}
              className="rounded-[0.8rem]"
            />
            <h4
              className="
                text-[2.4rem] font-bold tracking-[1.71px]
                text-[#000]"
            >
              {item.name.toUpperCase()}
            </h4>
            <Link
              href={`/${categoryBySlug.get(item.slug)}/${item.slug}`}
              className="px-[3rem] py-[1.5rem] bg-[#d87d4a]
                text-white text-[1.3rem] font-bold
                inline-block
                "
            >
              SEE PRODUCT
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
