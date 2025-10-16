import Link from "next/link";
import Button from "../ui/button";


const DesktopNav = () => {
  return (
    <div className="flex items-center gap-9">
      <Link className="brand-text-slight-black font-medium" href="/">
        Home
      </Link>

      <Link className="brand-text-slight-black  font-medium" href="/about">
        About
      </Link>

      <Link className="brand-text-slight-black font-medium" href="/about">
        Services
      </Link>

      <Link className="brand-text-slight-black font-medium" href="/about">
        Industries
      </Link>

      <Link className="brand-text-slight-black font-medium" href="/about">
        Prices
      </Link>

      <Button url={"/"} text={"Contact US"} bgColor={"bg-slight-orange"} textColor={"text-white"}/>
    </div>
  );
};

export default DesktopNav;
