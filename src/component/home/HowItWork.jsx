import howItWork1 from "@/assets/images/home/howitwork1.png";
import howItWork2 from "@/assets/images/home/howitwork2.png";
import howItWork3 from "@/assets/images/home/howitwork3.png";
import globe from "@/assets/images/home/globe.png";
import globeMask from "@/assets/images/home/mask-globe.png";
import Image from "next/image";

const HowItWork = () => {
    return (
        <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="flex items-center justify-between">
                <div className="w-1/2 relative">
                    <Image 
                        src={globe}
                        alt="globe"
                    />
                </div>
                <div className="w-1/2">
                    
                </div>
            </div>
        </div>
    )
}

export default HowItWork;