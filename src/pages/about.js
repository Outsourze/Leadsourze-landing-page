import Introduction from "@/component/about/Introduction";
import Objective from "@/component/about/Onjective";
import SEO from "@/utility/useSeo";

export default function About() {
  return (
    <>
      <SEO
        title="Lead Sourze | About Us – Your Telesales Partner for NZ & AU"
        description="Discover Lead Sourze’s mission, values and expertise in delivering scalable telesales & outbound calling solutions to New Zealand and Australian businesses."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
       />
      <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Objective />
      </div>
    </>
  );
}
