import Banner from "@/component/home/Banner";
import GetStarted from "@/component/home/GetStarted";
import HowItWork from "@/component/home/HowItWork";
import IndustryWeServe from "@/component/home/IndustryWeServe";
import Introduction from "@/component/home/Introduction";
import WhyOutsourze from "@/component/home/WhyOutsourze";

export default function Home() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
      <Introduction />
      <Banner />
      <HowItWork />
      <IndustryWeServe />
      <WhyOutsourze />
      <GetStarted />
    </div>
  );
}
