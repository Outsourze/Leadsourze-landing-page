import mission from "@/assets/images/about/mission.png";
import values from "@/assets/images/about/values.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import SectionContainer from "../ui/SectionContainer";


const valuesData = [
    {
        title: "Professionalism",
        desc: "Every call represents your brand with integrity."
    },
    {
        title: "Reliability",
        desc: "Consistent delivery backed by proven systems."
    },
    {
        title: "Performance",
        desc: "You only pay for connected calls and qualified leads."
    },
    {
        title: "Data Accuracy",
        desc: "Every campaign helps improve your lists."
    },
    {
        title: "Transparency",
        desc: "Clear pricing and reporting at every stage."
    }
]

const Objective = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-between gap-20">
                <div className="items-center justify-between flex
                    md:flex-row
                    max-md:flex-col-reverse max-md:gap-10">
                    <div className="shadow-2 py-14 px-5 rounded-lg flex flex-col gap-10
                        md:w-1/2 
                        max-md:w-[80%]
                        max-sm:w-full">
                        <div className="flex items-center gap-5">
                            <FaCheck size={40} color={"#2E7D32"}/>
                            <p className="font-heading font-semibold
                                lg:text-5xl
                                md:text-3xl 
                                max-md:text-3xl">Our <span className="brand-text-green">Mission</span></p>
                        </div>
                        <p className="text-gray-500">To provide  <span className="font-bold">New Zealand & Australian</span> businesses with dependable telesales campaigns that generate consistent results and improve data quality.</p>
                    </div>
                    <Image className="w-[40%]" src={mission}/>
                </div>
                <div className="flex items-center justify-between
                    md:flex-row-reverse 
                    max-md:flex-col-reverse max-md:gap-10">
                    <div className="shadow-2 p-5 rounded-lg flex flex-col gap-10
                        md:w-1/2 
                        max-md:w-[80%]
                        max-sm:w-full">
                        <div className="flex items-center gap-5">
                            <FaCheck size={40} color={"#2E7D32"}/>
                            <p className="font-heading font-semibold
                                lg:text-5xl
                                md:text-3xl 
                                max-md:text-3xl">Our <span className="brand-text-green">Values</span></p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {valuesData.map((data, index) => (
                                <div className="flex items-center gap-6">
                                    <CiCircleCheck color="#2E7D32" size={30}/>
                                    <div key={index}>
                                        <p className="brand-text-green 
                                            lg:text-xl
                                            md:text-lg"><span className="font-semibold">{data.title}</span> - {data.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image className="w-[40%]" src={values}/>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Objective;