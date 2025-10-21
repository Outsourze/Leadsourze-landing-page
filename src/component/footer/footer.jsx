import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CopyRight from "./copyright";



// footer
export const socialMedia = [{
    url: "https://www.facebook.com/outsourze",
    alt: "facebook",
    icon: <FaFacebookF size={18}/>
}, {
    url: "https://www.instagram.com/outsourzeglobal",
    alt: "instagram",
    icon: <AiFillInstagram size={18}/>
}, {
    url: "https://www.tiktok.com/@outsourzeglobal",
    alt: "tiktok",
    icon: <FaTiktok size={18}/>
}, {
    url: "https://www.linkedin.com/company/outsourzeglobal",
    alt: "linken",
    icon: <FaLinkedinIn size={18}/>
}]

export const contactInfo = [{
    alt: "call",
    icon: <BiSolidPhoneCall className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "PH +63 968 372 4410 | AU +61 468 928 549\nUK +44 77 6063 0126"
}, {
    alt: "email",
    icon: <MdEmail className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "hello@leadsourze.com"
}, {
    alt: "location",
    icon: <FaLocationDot className="lg:w-6 md:w-4 max-md:w-4"/>,
    text: "Outsourze Inc Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201"
}]

const Footer = () => {
    return (
        <div className="brand-bg-offwhite pt-4">
            <div className="pt-4 pb-16 max-w-7xl m-auto 
            xl:px-0 lg:px-20 md:px-20 max-md:px-5 max-md:relative max-md:border-t border-gray-400">
                <div className="flex items-center justify-between 
                xl:gap-0 lg:gap-10 md:gap-10 max-md:gap-5 max-md:flex-col">
                    <div className="flex flex-col gap-5
                    xl:max-w-xl lg:max-w-lg">
                        <Link href={"/"} aria-label="Outsouzed Home">
                          logo
                        </Link>
               
                        <p className="xl:text-[15px] md:text-xs max-md:text-xs max-md:border-b-gray-300 max-md:border-b max-md:pb-2 text-gray-500">Outsourze is a remote staffing and outsourcing solutions company based in the Philippines. .</p>
                        <div className="flex items-center 
                        lg:gap-7 md:gap-5 max-md:absolute max-md:bottom-0 max-md:right-5 max-md:gap-2">
                            {socialMedia.map((social, index) => (
                                <Link 
                                    key={index} 
                                    href={social.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${social.name} page`}
                                    className="brand-bg-green rounded-full p-3 text-white"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="font-medium">Visit our other sites</p>
                            <div className="text-gray-500 flex items-center gap-2">
                                <Link href={"/"}>Outsourze</Link>
                                <Link href={"/"}>Talentsourze</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[30rem]">
                        <h3 className="font-semibold brand-text-orange
                        lg:text-[20px] md:text-sm max-md:text-sm">Get In Touch</h3>
                        <div className="flex flex-col gap-3 max-md:gap-2">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="brand-bg-green py-2 px-4 rounded-full text-white">
                                        {info.icon}
                                    </div>
                                    <p className=" font-medium
                                    lg:text-[15px] md:text-[8px] max-md:text-[10px] whitespace-pre-line text-gray-500">{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight />
        </div>
    )
}

export default Footer;