import Introduction from "@/component/about/Introduction";
import Objective from "@/component/about/Onjective";


export default function About() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Objective />
    </div>
  );
}
