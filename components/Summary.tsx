import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { getDisplayName } from "@/namemodifier/nameModifier";

export default function Summary() {
  const { items } = useCartStore();

  return (
    <div>
      <h2>SUMMARY</h2>
      <div>
        {items.map(({ product, quantity }) => (
          <div key={product.id}>
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={64}
              height={64}
            />
            <div>
              <h3>{getDisplayName(product.name)}</h3>
              <span>{product.price}</span>
            </div>
            <div>x{quantity}</div>
          </div>
        ))}
      </div>
      <div>
        <span>TOTAL</span>
        <span></span>
      </div>
      <div>
        <span>SHIPPING</span>
        <span>$50</span>
      </div>
      <div>
        <span>VAT(included)</span>
        <span>$XX</span>
      </div>
      <div>
        <span>GRAND TOTAL</span>
        <span>$XX</span>
      </div>
    </div>
  );
}
