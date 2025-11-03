

import SectionContainer from "../ui/SectionContainer";
import heroPng from "@/assets/images/prices/priceshero.png";
import Image from "next/image";

const Introduction = () => {
  return (
    <SectionContainer>
      <div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
      >
        {/* Text Block */}
        <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2">
          <h1 className="text-navy text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight">
            Prices
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Clients appreciate Leadsourze’s transparent and flexible pricing, offering exceptional value without compromising on quality.
          </p>
        </div>

        {/* Optional Image / Visual Placeholder */}
        <div className="lg:w-1/2 w-full flex justify-center">
        <Image 
          src={heroPng}
          alt="Outsourcing services illustration"
          className="max-w-sm lg:max-w-md w-full object-contain rounded-lg"
        />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
