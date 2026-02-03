export default function AddToCart() {
  return (
    <div
      className="flex items-center gap-[1.6rem]
        mt-[3.1rem]"
    >
      <div
        className="flex items-center w-[12rem]
                justify-between p-[1.5rem] 
                bg-[#F1F1F1]"
      >
        <svg
          width="4"
          height="2"
          viewBox="0 0 4 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.25"
            d="M1.2517e-06 1.22889V0.00039047H3.9V1.22889H1.2517e-06Z"
            fill="black"
          />
        </svg>
        <span
          className="text-[1.3rem] font-bold tracking-[0.1rem]
        "
        >
          1
        </span>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.25"
            d="M2.327 5.87519V3.54819H1.2517e-06V2.31969H2.327V-0.000812829H3.5555V2.31969H5.8695V3.54819H3.5555V5.87519H2.327Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="py-[1.5rem] px-[3.4rem] bg-[#d87d4a]">
        <button
          className="text-white font-bold text-[1.3rem]
        tracking-[0.1rem]"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
