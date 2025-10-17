import StarLogo from "@/assets/images/home/17.svg";

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
        <div className="bg-[#F5F7FA]">
            <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
                xl:px-0 xl:gap-20 
                lg:px-20 lg:gap-10 
                md:px-20 
                max-md:px-5 max-md:py-10"
            >
                <div className="flex items-start justify-between w-full">
                    <div className="w-[35%]">
                        <h2 className="text-[#444444] text-3xl font-bold">Industries We Serve</h2>
                        <p>Trusted across multiple New Zealand industries:</p>
                    </div>
                    <div className="w-[65%] flex flex-wrap gap-5 justify-between">
                        {industryData.map((data, index) => (
                            <div key={index} className="w-[30%] flex items-start gap-3">
                               <StarLogo className="w-8 h-8 shrink-0"/>
                               <h3 className="text-[#444444] text-xl font-bold">{data}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustryWeServe;