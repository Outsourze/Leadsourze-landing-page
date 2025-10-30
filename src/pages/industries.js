import Introduction from "@/component/industries/Introduction";
import ListIndustries from "@/component/industries/ListIndustries";

export default function Industries() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <ListIndustries />
    </div>
  );
}
