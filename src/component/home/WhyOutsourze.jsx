import { RiCheckboxCircleLine } from "react-icons/ri";
import blurBg from "@/assets/images/home/blur-bg.png";
import castleImg from "@/assets/images/home/castle.png";
import flagImg from "@/assets/images/home/flag.jpg";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import Button from "../ui/button";


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
        <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="flex flex-col gap-32">
                {/* why section */}
                <div className="flex flex-col gap-10">
                    <h1 className="font-heading font-bold text-3xl">Why Businesses Choose Lead Sourze</h1>
                    <div className="flex flex-wrap justify-between gap-3">
                        {WhyOutsourzeData.map((data, index) => (
                            <div key={index} className="w-[32%] p-5 rounded-2xl brand-bg-green text-white text-2xl">
                                {data}
                            </div>
                        ))}
                    </div>
                </div>
                {/* prices section */}
                <div className="flex items-start justify-between">
                    <div className="w-1/2 flex flex-col gap-10 items-start">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-heading font-bold text-3xl text-slight-black">Pricing Snapshot</h1>
                            <p>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                        </div>
                        <div className="flex flex-col gap-10 px-8">
                            {priceData.map((data, index) => (
                                <div key={index} className="flex gap-5 items-center">
                                    <RiCheckboxCircleLine size={30}/>
                                    <h4 className="text-xl font-semibold text-slight-black">{data}</h4>
                                </div>
                            ))}
                        </div>
                        <Button bgColor={"brand-bg-green"} textColor={"text-white"} url={"/"} text={"See Detailed Pricing"} style={"py-4 px-5"}/>
                    </div>
                    <div className="w-1/2 relative flex items-center justify-center">
                        <Image 
                            className="absolute -top-[50%] -right-[10%] z-0"
                            src={blurBg} 
                            alt="blur bg"
                            width={600}
                        />
                        <div className="shadow-lg rounded-xl p-5 w-[70%] z-10 bg-white flex flex-col gap-5">
                            <Image src={castleImg} alt="castle"/>
                            <div className="relative flex flex-col gap-5">
                                <h3 className="font-heading font-bold text-lg">Liburan ke Bali  🚗</h3>
                                <p className="text-gray-500 text-sm">14-29 Juni | by Shandika</p>
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
                                        <p className="text-sm text-gray-500">12 Orang pergi bersama</p>
                                    </div>
                                    <FaRegHeart className="brand-text-green"/>
                                </div>
                                <div className="absolute bg-white shadow-md flex items-start gap-5 -right-1/2 -translate-x-1/2 px-5 py-3 rounded-xl">
                                    <div className="relative rounded-full overflow-hidden h-12 w-12">
                                        <Image src={flagImg} alt="flag" fill className="object-cover object-left"/>
                                    </div>
                                    <div className="flex flex-col gap-3">   
                                        <p className="text-gray-500">Ongoing</p>
                                        <h4 className="text-lg font-semibold">Jelajah Indonesia</h4>
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
        </div>
    )
}

export default WhyOutsourze;