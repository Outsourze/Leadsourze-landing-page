import Introduction from "@/component/services/Introduction";
import ITServices from "@/component/services/ITservices";
import ServicesList from "@/component/services/ServicesList";

export default function Services() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <div>
            <Introduction />
            <ServicesList />
            <ITServices />
        </div>
    </div>
  );
}
