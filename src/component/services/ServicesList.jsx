import { BiCurrentLocation } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa6";
import houses from "@/assets/images/services/houses.png";
import Image from "next/image";

const ServicesList = () => {
    return (
        <div className="max-w-7xl w-full py-20 m-auto flex flex-col justify-between
          xl:px-0 xl:gap-20 
          lg:px-20 lg:gap-10 
          md:px-20 
          max-md:px-5 max-md:py-10"
        >
            <div className="flex items-start justify-between w-full gap-20">
                <div className="flex flex-col gap-10 w-1/2">
                    <div className="flex flex-col gap-5 items-start shadow-2 px-6 py-10 rounded-2xl">
                        <BiCurrentLocation size={62} className="text-slight-green"/>
                        <h2 className="font-heading text-2xl font-semibold">Custom and design your card, make it look unique</h2>
                        <p>High-volume, professional campaigns that keep your brand top of mind.</p>
                        <p className=" outline rounded-2xl px-5 py-2 w-[75%]">$1 per connected call (first 500 at $0.50)</p>
                        <p className="font-semibold outline rounded-2xl px-5 py-2 w-[75%]">Minimum campaign: 500 calls</p>
                    </div>
                    <div className="flex flex-col gap-5 items-start shadow-2 px-6 py-10 rounded-2xl">
                        <FaCircleNotch size={50} className="text-slight-green"/>
                        <h2 className="font-heading text-2xl font-semibold">Lead Qualification</h2>
                        <p>We screen prospects for genuine interest and intent so your team only talks to serious leads.</p>
                        <p className=" outline rounded-2xl px-5 py-2 w-[75%]">$20 per qualified lead (first 500 at $10)</p>
                    </div>
                </div>
                 {/* Updated Image container */}
                <div className="w-1/2 h-[600px] relative">
                    <Image
                        src={houses}
                        alt="houses"
                        fill
                        className="object-cover object-center rounded-2xl"
                        priority
                    />
                </div>
            </div>
            <div className="flex items-center gap-20 justify-between">
                <div className="flex flex-col gap-5 shadow-2 p-5 rounded-xl">
                    <h3 className="font-heading text-2xl font-semibold">Appointment Setting </h3>
                    <p className="text-gray-500">From property appraisals to financial consultations, we book qualified appointments straight into your diary or CRM.</p>
                </div>
                <div className="flex flex-col gap-5 shadow-2 p-5 rounded-xl">
                    <h3 className="font-heading text-2xl font-semibold">Revenue Recovery</h3>
                    <p className="text-gray-500">Polite but firm debt collection and payment reminder campaigns that protect your brand while recovering lost revenue.</p>
                </div>
            </div>
        </div>
    )
}


export default ServicesList;