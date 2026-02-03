import { TGallery } from "@/types/type";
import Image from "next/image";

export default function ProductImages({ images }: { images: TGallery }) {
  return (
    <div>
      <div className="flex flex-col gap-[2rem]">
        <Image
          src={images.first.mobile}
          alt="product image"
          width={327}
          height={174}
          className="rounded-[0.8rem]"
        />
        <Image
          src={images.second.mobile}
          alt="product image"
          width={327}
          height={174}
          className="rounded-[0.8rem]"
        />
      </div>
      <div className="mt-[2rem]">
        <Image
          src={images.third.mobile}
          alt="product image"
          width={327}
          height={368}
          className="rounded-[0.8rem]"
        />
      </div>
    </div>
  );
}
