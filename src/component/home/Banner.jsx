import Link from "next/link";
import Logo1 from "@/assets/images/home/11.svg";
import Logo2 from "@/assets/images/home/12.svg"
import Logo3 from "@/assets/images/home/13.svg"

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
        <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="bg-black w-full flex items-center justify-between p-10 rounded-3xl">
                <div className="w-[60%] flex flex-col items-start gap-10">
                    <h1 className="font-heading font-bold text-5xl leading-16 text-white">Exclusive New Client Offer First 500 Calls at Half Price</h1>
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
                <div className="w-[35%] flex flex-col gap-5">
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
        </div>
    )
}

export default Banner;