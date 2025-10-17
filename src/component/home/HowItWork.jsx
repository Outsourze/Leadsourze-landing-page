import howItWork1 from "@/assets/images/home/howitwork1.png";
import howItWork2 from "@/assets/images/home/howitwork2.png";
import howItWork3 from "@/assets/images/home/howitwork3.png";
import globe from "@/assets/images/home/globe.png";
import globeMask from "@/assets/images/home/mask-globe.png";
import Image from "next/image";
import Icon1 from "@/assets/images/home/14.svg";
import Icon2 from "@/assets/images/home/15.svg";
import Icon3 from "@/assets/images/home/16.svg";


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
    return (
        <div className="bg-offwhite">
            <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
                xl:px-0 xl:gap-20 
                lg:px-20 lg:gap-10 
                md:px-20 
                max-md:px-5 max-md:py-10"
            >
                <div className="flex items-center justify-between">
                    <div className="w-1/2 relative">
                        <div className="relative w-[600px] h-[600px] flex items-center">
                            <Image 
                                className="absolute z-0 left-1/2 -translate-x-1/2"
                                src={globe}
                                alt="globe"
                                width={550}
                            />
                            <Image 
                                className="absolute z-10 left-1/2 -translate-x-1/2 top-7"
                                src={globeMask}
                                alt="globe mask"
                                width={500}
                            />
                            <div className="relative z-20 w-[85%] h-[85%] m-auto">
                                <Image className="rounded-lg absolute top-10 right-0" width={200} src={howItWork1}/>
                                <Image className="rounded-lg absolute bottom-10 right-0" width={200} src={howItWork2}/>
                                <Image className="rounded-lg absolute top-1/2 -translate-y-1/2 left-5" width={200} src={howItWork3}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-10">
                        <div className="flex gap-3 flex-col">
                            <h2 className="font-bold font-heading text-3xl">How It Works</h2>
                            <p>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                        </div>
                        <div className="flex gap-10 flex-col">
                            {howItWorkData.map((data, index) => (
                                <div key={index} className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
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
            </div>
        </div>
    )
}

export default HowItWork;