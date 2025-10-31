import Form from "@/component/contact-us/Form";
import Introduction from "@/component/contact-us/Introduction";
import SEO from "@/utility/useSeo";

export default function ContactUs() {
  return (
    <>
      <SEO
        title="Lead Sourze | Contact Us – Outbound Calling & Lead Generation NZ & AU"
        description="Get in touch with Lead Sourze to discuss outbound calling, lead generation and appointment‑setting services for New Zealand & Australia."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
       />
      <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Form />
      </div>
    </>
  );
}
