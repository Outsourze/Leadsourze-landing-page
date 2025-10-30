import computer from "@/assets/images/services/computer.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Button from "../ui/Button";
import { GoArrowRight } from "react-icons/go";
import SectionContainer from "../ui/SectionContainer";

const iTservicesData = [
    "Flagging inactive or disconnected numbers",
    "Removing dead records from your database",
    "Tagging uninterested prospects",
    "Providing structured reports so you always know your database status"
]

const ITServices = () => {
    return (
        <SectionContainer>
            <div className="flex gap-5 justify-between w-full
                lg:items-center md:items-start">
                <div className="relative w-[40%] h-[400px]
                max-md:hidden">
                  <Image 
                    src={computer}
                    alt="computer"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start
                    md:w-1/2 max-md:w-full">
                    <h1 className="font-heading text-4xl font-semibold text-navy">Database Management & Cleansing</h1>
                    <p className="">With every campaign, we refine your lists to save you time and money:</p>

                    <div className="flex flex-col gap-3">
                        {iTservicesData.map((list, index) => (
                            <div className="flex gap-3 items-center">
                                <div className="rounded-xl p-3 brand-bg-green">
                                    <FaCheck size={20} color="#ffffff"/>
                                </div>
                                <p className="font-medium">{list}</p>
                            </div>
                        ))}
                    </div>
                    <Button url={"/"} bgColor={"brand-bg-green"} textColor={"text-white"} style={"!rounded-full px-7"}>
                        Explore Category
                        <GoArrowRight size={18}/>
                    </Button>
                </div>
            </div>
        </SectionContainer>
    )
}

export default ITServices;