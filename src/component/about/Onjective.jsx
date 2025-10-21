import mission from "@/assets/images/about/mission.png";
import values from "@/assets/images/about/values.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";


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
        <div className="max-w-7xl py-20 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >  
            <div className="flex flex-col items-center justify-between gap-20">
                <div className="flex items-center justify-between">
                    <div className="w-1/2 shadow-2 py-14 px-5 rounded-lg flex flex-col gap-10">
                        <div className="flex items-center gap-5">
                            <FaCheck size={40} color={"#2E7D32"}/>
                            <p className="text-5xl font-heading font-semibold">Our <span className="brand-text-green">Mission</span></p>
                        </div>
                        <p className="text-gray-500">To provide New Zealand businesses with dependable telesales campaigns that generate consistent results and improve data quality.</p>
                    </div>
                    <Image className="w-[40%]" src={mission}/>
                </div>
                <div className="flex flex-row-reverse items-center justify-between">
                    <div className="w-1/2 shadow-2 p-5 rounded-lg flex flex-col gap-10">
                        <div className="flex items-center gap-5">
                            <FaCheck size={40} color={"#2E7D32"}/>
                            <p className="text-5xl font-heading font-semibold">Our <span className="brand-text-green">Values</span></p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {valuesData.map((data, index) => (
                                <div className="flex items-center gap-6">
                                    <FaRegCircleCheck color="#2E7D32" size={30}/>
                                    <div key={index}>
                                        <p className="brand-text-green text-xl"><span className="font-semibold">{data.title}</span> - {data.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image className="w-[40%]" src={values}/>
                </div>
            </div>
        </div>
    )
}

export default Objective;