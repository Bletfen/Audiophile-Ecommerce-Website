import Bitmap from "./Bitmap";

export default function Header() {
  return (
    <header className="max-w-[1440px] mx-auto">
      <div
        className="w-full h-[1.5rem]
      bg-[#191919] transition-all duration-300 ease-in-out
      md:hidden"
      ></div>
      <div className="max-w-[1440px] mx-auto">
        <Bitmap />
      </div>
    </header>
  );
}
