import Form from "@/component/contact-us/Form";
import Introduction from "@/component/contact-us/Introduction";

export default function ContactUs() {
  return (
    <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        <Introduction />
        <Form />
    </div>
  );
}
