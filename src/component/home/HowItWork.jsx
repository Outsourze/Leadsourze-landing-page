import howItWork1 from "@/assets/images/home/howitwork1.png";
import howItWork2 from "@/assets/images/home/howitwork2.png";
import howItWork3 from "@/assets/images/home/howitwork3.png";
import globe from "@/assets/images/home/globe.png";
import globeMask from "@/assets/images/home/mask-globe.png";
import Image from "next/image";
import Icon1 from "@/assets/images/home/14.svg";
import Icon2 from "@/assets/images/home/15.svg";
import Icon3 from "@/assets/images/home/16.svg";
import SectionContainer from "../ui/SectionContainer";
import { useMediaQuery } from "@/utility/useMediaQuery";

const howItWorkData = [{
    icon: <Icon2 className="text-[#a1ffa6] w-8 h-auto"/>,
    title: "You Provide the Leads",
    dscrpt: "Supply your contact lists, we handle the outreach."
}, {
    icon: <Icon3 className="text-[#a1ffa6] w-7 h-auto"/>,
    title: "We Make the Calls",
    dscrpt: "Professional agents supported by AI tools for efficiency."
}, {
    icon: <Icon1 className="text-[#a1ffa6] w-6 h-auto"/>,
    title: "You Get Result",
    dscrpt: "Qualified leads, booked appointments, revenue recovery, and a cleaner database."
}]

const HowItWork = () => {
    const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <div className="bg-offwhite">
            <SectionContainer>
                <div className="flex items-center justify-between w-full
                    lg:flex-row
                    md:flex-col">
                    <div className="w-1/2 relative 
                        xl:h-[600px]
                        lg:h-[500px]
                        md:h-[500px]
                        max-md:hidden">
                        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center
                        xl:w-[600px] xl:h-[600px] xl:left-1/2
                        lg:w-[500px] lg:h-[500px] lg:left-[40%]
                        md:w-[500px] md:h-[500px] md:left-1/2">
                            <Image 
                                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
                                src={globe}
                                alt="globe"
                                width={isLaptop ? 450 : isTablet ? 450 : 550}
                            />
                            <Image 
                                className="absolute z-10 left-1/2 -translate-x-1/2 top-[47%] -translate-y-1/2"
                                src={globeMask}
                                alt="globe mask"
                                width={isLaptop ? 400 : isTablet ? 400 : 500}
                            />
                            <div className="relative z-20 w-[85%] h-[85%] m-auto">
                                <Image 
                                    className="rounded-lg absolute top-10 right-0" 
                                    width={isLaptop ? 150 : isTablet ? 150 : 200} 
                                    src={howItWork1}
                                />
                                <Image 
                                    className="rounded-lg absolute bottom-10 right-0" 
                                    width={isLaptop ? 150 : isTablet ? 150 : 200} 
                                    src={howItWork2}
                                />
                                <Image 
                                    className="rounded-lg absolute top-1/2 -translate-y-1/2 left-5" 
                                    width={isLaptop ? 150 : isTablet ? 150 : 200} src={howItWork3}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10
                        lg:w-1/2 
                        md:w-full md:p-0 
                        max-md:py-14">
                        <div className="flex gap-3 flex-col">
                            <h2 className="font-bold font-heading text-3xl">How It Works</h2>
                            <p>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                        </div>
                        <div className="flex gap-10 flex-col">
                            {howItWorkData.map((data, index) => (
                                <div key={index} className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                                        {data.icon}
                                    </div>
                                    <div className="flex items-start gap-1 flex-col">
                                        <h3 className="font-semibold">{data.title}</h3>
                                        <p className="text-gray-500 text-sm">{data.dscrpt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default HowItWork;