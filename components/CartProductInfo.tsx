import { IItem } from "@/store/cartStore";
import data from "@/data/data.json";
import Image from "next/image";
import QuantityMangaer from "./QuantityManager";
import Link from "next/link";
import { getDisplayName } from "@/namemodifier/nameModifier";

export default function CartProductInfo({
  items,
  setIsCartOpen,
}: {
  items: IItem[];
  setIsCartOpen: (isOpen: boolean) => void;
}) {
  const getOtherNameBySlug = (slug: string) => {
    for (const product of data) {
      const match = product.others.find((other) => other.slug === slug);
      if (match) return match.name;
    }
    return undefined;
  };

  const total = items
    .map(({ product, quantity }) => product.price * quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="flex flex-col gap-[2.4rem]">
        {items.map(({ product, quantity }) => (
          <div key={product.id}>
            <div className="flex items-center">
              <Image
                src={product.image.mobile}
                alt={product.name}
                width={64}
                height={64}
                className="mr-[1.6rem] rounded-[0.8rem]"
              />
              <div className="mr-[2rem]">
                <h2
                  className="text-[1.5rem] font-bold
                leading-[1.67] text-[#000]"
                >
                  {getDisplayName(
                    (
                      getOtherNameBySlug(product.slug) ?? product.name
                    ).toUpperCase(),
                  )}
                </h2>
                <span
                  className="text-[1.4rem] font-bold
                leading-[1.79] text-[#000] opacity-50"
                >
                  $ {product.price.toLocaleString()}
                </span>
              </div>
              <div className="ml-auto">
                <QuantityMangaer
                  itemQuantity={quantity}
                  itemSlug={product.slug}
                  type={"cart"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center justify-between
              mt-[3.2rem]"
      >
        <span
          className="text-[1.5rem] font-[500] leading-[1.67]
                text-[#000] opacity-50"
        >
          TOTAL
        </span>
        <span className="text-[1.8rem] font-bold">
          $ {total.toLocaleString()}
        </span>
      </div>
      <Link
        href={"/checkout"}
        className="block text-[1.3rem] font-bold tracking-[0.1rem]
        text-[#fff] py-[1.5rem] w-full mt-[2.4rem]
        text-center bg-[#d87d4a] cursor-pointer"
        onClick={() => setIsCartOpen(false)}
      >
        CHECKOUT
      </Link>
    </div>
  );
}
