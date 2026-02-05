type AddedToCartToastProps = {
  show: boolean;
  message?: string;
};

export default function AddedToCartToast({
  show,
  message = "Product added to cart",
}: AddedToCartToastProps) {
  return (
    <div
      aria-live="polite"
      className={`
        absolute left-0 top-[6rem]
        rounded-[0.8rem] bg-[#d87d4a] px-[1.6rem] py-[1rem]
        text-white text-[1.2rem] font-bold tracking-[0.1rem]
        transition-all duration-300 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
    >
      {message}
    </div>
  );
}
