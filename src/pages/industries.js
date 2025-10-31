import Introduction from "@/component/industries/Introduction";
import ListIndustries from "@/component/industries/ListIndustries";
import SEO from "@/utility/useSeo";

export default function Industries() {
  return (
    <>
      <SEO
        title="Lead Sourze | Industries We Serve – Telesales & Outbound Calling for NZ & AU Businesses"
        description="See how Lead Sourze supports a wide range of industries—from home services and real estate to healthcare and solar—with tailored outbound calling, lead generation and appointment‑setting solutions for New Zealand and Australia."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
       />
      <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <ListIndustries />
      </div>
    </>
    
  );
}
