import CheckoutForm from "@/components/CheckoutForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col mt-[1.6rem]">
      <Link
        href={`/`}
        className="text-[1.5rem] text-[#000] opacity-50
        leading-[1.67] font-[500] px-[2.4rem]
        md:px-[3.9rem] lg:w-[111rem] lg:mx-auto
        lg:px-[0]"
      >
        Go Back
      </Link>
      <CheckoutForm />
    </div>
  );
}
