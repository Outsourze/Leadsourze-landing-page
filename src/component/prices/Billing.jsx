import Image from "next/image";
import airplane from "@/assets/images/prices/airport.png";
import location from "@/assets/images/prices/location.png";
import suitcase from "@/assets/images/prices/suitcase.png";
import suit from "@/assets/images/prices/suit.png";
import { GoArrowUpRight } from "react-icons/go";
import SectionContainer from "../ui/SectionContainer";

const billingList = [{
    logo: suitcase,
    dscrpt: "Fortnightly billing or $500 blocks (whichever comes first)"
}, {
    logo: location,
    dscrpt: "Refundable $250 deposit applies"
}, {
    logo: airplane,
    dscrpt: "Transparent reports, no hidden fees"
}]

const Billing = () => {
    return (
        <SectionContainer>
          <div className="flex flex-col gap-10">
            <h2 className="text-[#444444] text-3xl font-bold">Billing & Deposits</h2>   
            <div className="flex items-start justify-between
                lg:flex-row
                md:flex-col">
                <div className="flex flex-wrap  justify-between gap-5 gap-y-8
                    lg:w-[73%] 
                    md:w-full
                    max-md:w-full">
                    {billingList.map((list, index) => (
                        <div className={`${index === 0 ? "outline-[#2E7D32]" : "outline-gray-300"} flex flex-col gap-8 outline rounded-lg p-5
                        md:w-[48%] max-md:w-full`}>
                            <Image alt="imagesT" width={50} src={list.logo}/>
                            <p className="font-medium ">{list.dscrpt}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-end justify-end relative
                    lg:w-[25%] lg:block
                    md:hidden
                    max-md:hidden">
                    <Image src={suit} alt="suit" width={300} className="rounded-xl"/>
                    <div className="absolute w-[450px] bottom-0 -left-[100%] shadow-2 py-7 px-10 rounded-2xl bg-white flex gap-5 items-start justify-between">
                        <div className="flex flex-col gap-2 w-[60%]">
                            <h3 className="font-heading text-lg font-medium">Database Management Included</h3>
                            <p className="text-sm text-gray-500">Every campaign comes with database cleansing and reporting — no extra cost.</p>
                            <p className="italic font-medium">Request a Custom Quote</p>
                        </div>
                        <div className="bg-white rounded-md p-5 shadow-2">
                            <GoArrowUpRight size={25}/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </SectionContainer>
    )
}

export default Billing;