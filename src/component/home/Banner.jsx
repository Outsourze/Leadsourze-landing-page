import Link from "next/link";
import Logo1 from "@/assets/images/home/11.svg";
import Logo2 from "@/assets/images/home/12.svg"
import Logo3 from "@/assets/images/home/13.svg"
import SectionContainer from "../ui/SectionContainer";

const benefits = [{
    logo: <Logo1 className="text-[#a1ffa6] w-6 h-auto"/>,
    dscrpt: "$0.50 per connected call (normally $1)"
}, {
    logo: <Logo2 className="text-[#a1ffa6] w-6 h-auto"/>,
    dscrpt: "$10 per qualified lead (normally $20)"
}, {
    logo: <Logo3 className="text-[#a1ffa6] w-6 h-auto"/>,
    dscrpt: "Applies to your first 500 calls"
}]

const Banner = () => {
    return (
        <SectionContainer>
            <div className="bg-black w-full flex items-center justify-between rounded-3xl
                md:flex-row md:gap-0 md:p-10 
                max-md:flex-col-reverse max-md:gap-14 max-md:p-5">
                <div className="flex flex-col items-start gap-10
                    lg:w-[60%]
                    md:w-[50%] 
                    max-md:w-full">
                    <h1 className="font-heading font-bold leading-16 text-white
                        xl:leading-20
                        lg:text-5xl lg:leading-14
                        md:text-4xl md:leading-10
                        max-md:text-3xl max-md:leading-10
                        max-sm:text-2xl">Exclusive New Client Offer First 500 Calls at Half Price</h1>
                    <Link 
                        className="py-5 px-10 rounded-xl text-white"
                        style={{
                          background: "linear-gradient(91deg, rgba(3, 22, 8, 0.7) 0%, rgba(16, 85, 31, 0.7) 100%)"
                        }}
                        href={"/"}
                    >
                        Get Started Today
                    </Link>
                </div>
                <div className="flex flex-col gap-5
                    lg:w-[35%]
                    md:w-[45%] 
                    max-md:w-full">
                        {benefits.map((list, index) => (
                            <div style={{
                              background: "linear-gradient(91deg, rgba(3, 22, 8, 0.7) 0%, rgb(7 47 15)"
                            }} 
                            key={index} 
                            className="flex items-center gap-5 rounded-2xl p-2 border border-[#032704]">
                                <div className="p-4 bg-[#032704] rounded-xl">
                                    {list.logo}
                                </div>
                                <p className="text-[#02c70b]">{list.dscrpt}</p>
                            </div>
                        ))}
                </div>
            </div>
        </SectionContainer>
    )
}

export default Banner;