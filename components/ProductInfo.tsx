import { TProduct } from "@/types/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCart from "./AddToCart";
import ProductImages from "./ProductImages";
import OtherOffers from "./OtherOffers";
import Category from "./Category";
import Home from "@/app/page";
import HomeInfo from "./HomeInfo";
import Footer from "./Footer";

export default function ProductInfo({ data }: { data: TProduct | undefined }) {
  if (!data) {
    return notFound();
  }
  return (
    <div
      className="mt-[2.4rem] flex flex-col
      items-center
        "
    >
      <div className="px-[2.4rem]">
        <Image
          src={data.image.mobile}
          alt={data.name}
          width={327}
          height={327}
          className="rounded-[0.8rem]"
        />
        <div className="flex flex-col mt-[3.2rem]">
          {data.new && (
            <span
              className="text-[1.4rem] tracking-[1rem]
                text-[#d87d4a] mb-[2.4rem]"
            >
              NEW PRODUCT
            </span>
          )}
          <h2
            className="mb-[2.4rem] text-[2.8rem]
            font-bold tracking-[0.1rem] text-[#000]"
          >
            {data.name.toUpperCase()}
          </h2>
          <p
            className="mb-[2.4rem] text-[1.5rem] font-[500]
            leading-[1.67] text-[#000] opacity-50"
          >
            {data.description}
          </p>
          <span className="text-[1.8rem] font-bold tracking-[1.29px] text-[#000]">
            $ {data.price.toLocaleString()}
          </span>
          <div>
            <AddToCart />
          </div>
        </div>
      </div>
      <section
        className="flex flex-col gap-[2.4rem]
        px-[2.4rem]"
      >
        <h3
          className="text-[2.4rem] font-bold leading-[1.5]
            tracking-[0.86px] text-[#000] mt-[8.8rem]"
        >
          FEATURES
        </h3>
        <p
          className="mb-[2.4rem] text-[1.5rem] font-[500]
            leading-[1.67] text-[#000] opacity-50"
        >
          {data.features}
        </p>
      </section>
      <section
        className="self-start
      px-[2.4rem]"
      >
        <h3
          className="text-[2.4rem] font-bold leading-[1.5]
            tracking-[0.86px] text-[#000] mt-[8.8rem]"
        >
          IN THE BOX
        </h3>
        <ul className="mt-[2.4rem]">
          {data.includes.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-[2.4rem] mt-[0.8rem]"
            >
              <span
                className="text-[#d87d4a] font-bold text-[1.5rem]
                leading-[1.67] "
              >
                {item.quantity}x
              </span>
              <span
                className="text-[1.5rem] font-[500] text-[#000]
                opacity-50 leading-[1.67]"
              >
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-[8.8rem]">
        <ProductImages images={data.gallery} />
      </section>
      <section
        className="flex items-center justify-center
        mt-[12rem]"
      >
        <OtherOffers otherItems={data.others} />
      </section>
      <section className="mt-[5.8rem]">
        <Category />
      </section>
      <section className="mt-[12rem]">
        <HomeInfo />
      </section>
      <footer className="mt-[12rem] md:mt-[9.6rem] bg-[#101010] w-full">
        <Footer />
      </footer>
    </div>
  );
}
