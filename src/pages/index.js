import Introduction from "@/component/home/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
      <Introduction />
    </div>
  );
}
