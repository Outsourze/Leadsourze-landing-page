import Link from "next/link";
import Button from "../ui/button";
import { BiSolidPhoneCall } from "react-icons/bi";

const DesktopNav = () => {
  return (
    <div className="flex items-center gap-9">
      <Link className="brand-text-slight-black font-medium" href="/">
        Home
      </Link>

      <Link className="brand-text-slight-black  font-medium" href="/about">
        About
      </Link>

      <Link className="brand-text-slight-black font-medium" href="/services">
        Services
      </Link>

      <Link className="brand-text-slight-black font-medium" href="/about">
        Industries
      </Link>

      <Link className="brand-text-slight-black font-medium" href="/about">
        Prices
      </Link>


      <div className="flex items-center gap-3">
        <Button url={"/"} bgColor={"bg-slight-orange"} textColor={"text-white"}>
          Contact Us
          <BiSolidPhoneCall size={18}/>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
