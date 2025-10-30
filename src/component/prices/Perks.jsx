import { FaBriefcase } from "react-icons/fa";
import SectionContainer from "../ui/SectionContainer";

const perksList = [
  {
    icon: <FaBriefcase size={32} className="brand-text-green" />,
    title: "Qualified Leads",
    dscrpt: "$20 per lead",
  },
  {
    icon: <FaBriefcase size={32} className="brand-text-green" />,
    title: "Outbound Calling",
    dscrpt: "$1 per connected call",
  },
  {
    icon: <FaBriefcase size={32} className="brand-text-green" />,
    title: "Exclusive New Client Offer",
    dscrpt: "$0.50 per call / $10 per lead for your first 500 calls",
  },
];

const Perks = () => {
  return (
    <SectionContainer>
      <div
        className="flex w-full flex-col gap-10 
        lg:flex-row lg:items-start lg:justify-between"
      >
        {/* Left Section */}
        <div
          className="flex flex-col 
          text-center lg:text-left
          gap-3 lg:gap-5
          w-full lg:w-[30%]"
        >
          <h2 className="font-heading font-bold text-navy text-3xl">
            Simple. Transparent. Performance Based.
          </h2>
          <p className="text-gray-500">
            Minimum Campaign Size: 500 calls per client
          </p>
        </div>

        {/* Right Section */}
        <div
          className="grid w-full lg:w-[70%]
          grid-cols-1 gap-8
          sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between"
        >
          {perksList.map((list, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center 
              gap-3 p-6 rounded-2xl outline outline-gray-300
              hover:shadow-md transition-shadow
              lg:items-start lg:text-left"
            >
              <div>{list.icon}</div>
              <h3 className="font-heading font-semibold text-xl">
                {list.title}
              </h3>
              <p className="text-gray-500 text-base">{list.dscrpt}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Perks;
