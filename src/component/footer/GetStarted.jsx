import Button from "../ui/button";
import Image from "next/image";
import leftLine from "@/assets/images/home/left-line.png";
import airPlane from "@/assets/images/home/airplane.png";

const GetStarted = () => {
  return (
    <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
      xl:px-0 xl:gap-20 
      lg:px-20 lg:gap-10 
      md:px-20 
      max-md:px-5 max-md:py-10"
    >
      <div className="brand-bg-green w-full px-10 py-12 flex flex-col justify-center items-center gap-10 rounded-xl relative overflow-hidden">
        <h1 className="text-[#2D3134] font-heading font-semibold text-4xl text-center">
          Partner with the telesales specialists trusted by New Zealand businesses.
        </h1>

        <Button bgColor={"bg-slight-orange"} url={"/"} textColor={"text-white"} style={"py-3"}>
          Get Started Today
        </Button>

        {/* FIXED IMAGE CONTAINER */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 h-full w-[280px]">
          <Image
            src={leftLine}
            alt="leftline"
            width={"280px"}
          />
          <Image
            src={airPlane}
            alt="airplane"
            width={40}
            height={40}
            className="absolute top-[55%] -right-12"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
