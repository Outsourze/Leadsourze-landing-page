import Banner from "@/component/home/Banner";
import HowItWork from "@/component/home/HowItWork";
import IndustryWeServe from "@/component/home/IndustryWeServe";
import Introduction from "@/component/home/Introduction";
import WhyOutsourze from "@/component/home/WhyOutsourze";
import SEO from "@/utility/useSeo";

export default function Home() {
  return (
    <>
      <SEO
       title="Lead Sourze | Expert Telesales & Outbound Calling for NZ & Australia Businesses"
       description="Lead Sourze delivers professional outbound calling campaigns across real estate, solar, finance, home services and more in New Zealand & Australia. AI‑enhanced human agents convert your contact lists into qualified leads, booked appointments and measurable results."
       url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
      />
      <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Banner />
        <HowItWork />
        <IndustryWeServe />
        <WhyOutsourze />
      </div>
    </>
  );
}
