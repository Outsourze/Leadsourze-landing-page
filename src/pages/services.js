import Introduction from "@/component/services/Introduction";
import ITServices from "@/component/services/ITservices";
import ServicesList from "@/component/services/ServicesList";
import SEO from "@/utility/useSeo";

export default function Services() {
  return (
    <>
      <SEO
        title="Lead Sourze | Our Services – Outbound Calling, Appointment Setting & Lead Generation NZ & AU"
        description="Explore Lead Sourze’s full suite of services: outbound calling, qualified lead generation, appointment setting, database cleansing and more for businesses across New Zealand and Australia."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
       />
      <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <div>
          <Introduction />
          <ServicesList />
          <ITServices />
        </div>
      </div>
    </>
    
  );
}
