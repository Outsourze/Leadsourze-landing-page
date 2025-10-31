import { RiCheckboxCircleLine } from "react-icons/ri";
import blurBg from "@/assets/images/home/blur-bg.png";
import castleImg from "@/assets/images/home/castle.png";
import nature from "@/assets/images/home/nature.png";
import flagImg from "@/assets/images/home/flag.png";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";


const WhyOutsourzeData = [
    "Established systems trusted across industries",
    "Pay only for performance — no wasted spend",
    "Transparent billing & reporting",
    "Database cleansing included at no extra cost",
    "AI-enhanced calling with human oversight",
    "Minimum 500-call campaigns for meaningful results",
]

const priceData = [
    "Outbound Calling: $1 per connected call",
    "Qualified Leads: $20 per lead",
    "Special Offer: First 500 calls at $0.50 / $10 per lead",
    "Minimum campaign size: 500 calls",
]

const WhyOutsourze = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col gap-32">
                {/* why section */}
                <div className="flex flex-col gap-10">
                    <h1 className="font-bold text-3xl font-heading">Why Businesses Choose Lead Sourze</h1>
                    <div className="flex flex-wrap justify-between gap-3">
                        {WhyOutsourzeData.map((data, index) => (
                            <div key={index} className="p-5 rounded-2xl brand-bg-green
                                md:w-[32%] 
                                max-md:w-[48%]
                                max-[500px]:!w-full">
                                <p className="text-white 
                                    lg:text-2xl
                                    md:text-lg">{data}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* prices section */}
                <div className="flex items-start justify-between
                    lg:flex-row
                    md:flex-col-reverse md:gap-14
                    max-md:flex-col-reverse max-md:gap-14">
                    <div className="flex flex-col gap-10 items-start
                        lg:w-1/2
                        md:w-full
                        max-md:w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-heading font-bold text-3xl ">Pricing Snapshot</h1>
                            <p>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                        </div>
                        <div className="flex flex-col 
                            md:px-8 md:gap-10 
                            max-md:px-0 max-md:gap-5">
                            {priceData.map((data, index) => (
                                <div key={index} className="flex items-center
                                    md:gap-5 
                                    max-md:gap-3">
                                    <RiCheckboxCircleLine size={30} className="shrink-0"/>
                                    <h4 className="font-semibold text-slight-black
                                        lg:text-xl 
                                        md:text-lg
                                        max-md:text-base">{data}</h4>
                                </div>
                            ))}
                        </div>
                        <Button bgColor={"brand-bg-green"} textColor={"text-white"} url={"/"} style={"py-4 px-5"}>
                            See Detailed Pricing
                        </Button>
                    </div>
                    <div className="relative flex items-center justify-center
                        lg:w-1/2
                        md:w-full
                        max-md:w-full">
                        <Image 
                            className="absolute -top-[50%] z-0 min-[1400px]:-right-[10%] right-0"
                            src={blurBg} 
                            alt="blur bg"
                            width={600}
                        />
                        <div className="shadow-lg rounded-xl p-5 z-10 bg-white flex flex-col gap-5
                            md:w-[80%] max-md:w-full">
                            <div className="rounded-2xl overflow-hidden
                                xl:h-[200px] lg:h-[170px] md:h-[250px]">
                              <Image
                                className="object-cover object-center"
                                src={nature}
                                alt="castle"
                              />
                            </div>

                            <div className="relative flex flex-col gap-5">
                                <h3 className="font-heading font-bold text-lg">Queenstown 🏔️</h3>
                                <p className="text-gray-500 text-sm">4–29 June | by Aiden Reid</p>
                                <div className="flex items-center gap-5">
                                    <div className="p-3 rounded-full bg-gray-100 text-gray-500">
                                        <FaLeaf />
                                    </div>
                                    <div className="p-3 rounded-full bg-gray-100 text-gray-500">
                                        <FaMap />
                                    </div>
                                    <div className="p-3 rounded-full bg-gray-100 text-gray-500">
                                        <BsSendFill />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <BsBuildings className="text-gray-500"/>
                                        <p className="text-sm text-gray-500">12 People joining</p>
                                    </div>
                                    <FaRegHeart className="brand-text-green"/>
                                </div>
                                <div className="absolute bg-white shadow-md flex items-start gap-5 px-5 py-3 rounded-xl
                                    md:-right-[60%] md:-translate-x-1/2 
                                    max-md:right-0">
                                    <div className="relative rounded-full overflow-hidden h-12 w-12">
                                        <Image src={flagImg} alt="flag" fill className="object-cover object-left"/>
                                    </div>
                                    <div className="flex flex-col gap-3">   
                                        <p className="text-gray-500">Ongoing</p>
                                        <h4 className="text-lg font-semibold">Explore New Zealand</h4>
                                        <p><span className="brand-text-green font-medium">40%</span> completed</p>
                                        <div className="w-full h-1 brand-bg-green rounded-full flex items-end justify-end overflow-hidden">
                                            <div className="w-[60%] h-1 bg-gray-300"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default WhyOutsourze;