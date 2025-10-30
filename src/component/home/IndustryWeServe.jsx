import StarLogo from "@/assets/images/home/17.svg";
import SectionContainer from "../ui/SectionContainer";

const industryData = [
    "Real Estate& Property", 
    "Education & Training", 
    "Financial Services", 
    "Mortgage & Lending",
    "Home Services", 
    "Retail & E-commerce",
    "Legal Services",
    "Solar",
    "Insurance",
    "Healthcare & Patient Services",
    "Debt Collection & Recovery"
]

const IndustryWeServe = () => {
    return (
        <SectionContainer>
            <div className="flex items-start justify-between w-full
                lg:flex-row lg:gap-5
                md:flex-col md:gap-14
                max-md:flex-col max-md:gap-14
                max-sm:gap-10">
                <div className="
                    lg:w-[35%]
                    md:w-full">
                    <h2 className="text-3xl font-bold font-heading">Industries We Serve</h2>
                    <p>Trusted across multiple New Zealand industries:</p>
                </div>
                <div className="flex flex-wrap gap-5 justify-between
                    lg:w-[65%] 
                    md:w-full
                    max-md:w-full">
                    {industryData.map((data, index) => (
                        <div key={index} className="flex items-start gap-3
                            md:w-[30%] 
                            max-md:w-full">
                           <StarLogo className="shrink-0
                            md:w-8 md:h-8 
                            max-md:w-6 max-md:h-6"/>
                           <h3 className="text-[#444444] font-bold
                            md:text-xl 
                            max-md:text-base">{data}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    )
}

export default IndustryWeServe;