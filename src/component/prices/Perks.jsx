import { FaBriefcase } from "react-icons/fa";

const perksList = [{
    icon: <FaBriefcase size={32} className="brand-text-green" />,
    title: "Qualified Leads",
    dscrpt: "$20 per lead"
}, {
    icon: <FaBriefcase size={32} className="brand-text-green" />,
    title: "Outbound Calling:",
    dscrpt: "$1 per connected call"
}, {
    icon: <FaBriefcase size={32} className="brand-text-green" />,
    title: "Exclusive New Client Offer ",
    dscrpt: "$0.50 per call / $10 per lead for your first 500 calls"
}]

const Perks = () => {
    return (
        <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
          xl:px-0 xl:gap-20 
          lg:px-20 lg:gap-10 
          md:px-20 
          max-md:px-5 max-md:py-10"
        >
            <div className="flex w-full items-start justify-between gap-10">
                <div className="w-[30%] flex flex-col gap-5">
                    <h2 className="font-heading font-bold text-navy text-3xl">Simple. Transparent. Performance Based.</h2>
                    <p className="text-gray-500">Minimum Campaign Size: 500 calls per client</p>
                </div>
                <div className="w-[70%] flex justify-between">
                    {perksList.map((list, index) => (
                        <div key={index} className="flex flex-col gap-5 w-[22.5%]">
                            {list.icon}
                            <h3 className="font-heading font-semibold text-xl">{list.title}</h3>
                            <p className="text-gray-500">{list.dscrpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default Perks;

