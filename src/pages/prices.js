import Billing from "@/component/prices/Billing";
import Introduction from "@/component/prices/Introduction";
import Perks from "@/component/prices/Perks";


export default function Prices() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Perks />
        <Billing />
    </div>
  );
}
