import Billing from "@/component/prices/Billing";
import Introduction from "@/component/prices/Introduction";
import Perks from "@/component/prices/Perks";
import SEO from "@/utility/useSeo";

export default function Prices() {
  return (
    <>
      <SEO
        title="Lead Sourze | Pricing – Outbound Calling & Lead Generation NZ & AU"
        description="View Lead Sourze’s transparent pricing for outbound calling campaigns, qualified leads and appointment‑setting services in New Zealand & Australia. Get the service you need — pay for performance."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
       />
      <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Perks />
        <Billing />
      </div>
    </>
  );
}
