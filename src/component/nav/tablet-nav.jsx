import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";


const TabletNav = () => {
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuNavOpen(false);
  }

  return (
    <div className="flex items-center gap-5 relative">
      {/* Contact button */}
      <div className="flex items-center gap-3">
        <Button url={"/contact-us"} bgColor={"bg-slight-orange"} textColor={"text-white"}>
          Contact Us
          <BiSolidPhoneCall size={18}/>
        </Button>
      </div>
      {/* Menu toggle + dropdown */}
      <div className="relative flex items-center">
        <button
          onClick={() => {
            setIsMenuNavOpen((prev) => !prev);
          }}
          className="p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuNavOpen}
        >
          {isMenuNavOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>

        <AnimatePresence>
          {isMenuNavOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute right-0 top-full mt-4 flex flex-col gap-3 bg-white p-4 rounded-xl shadow-md z-50 min-w-[300px]"
            >
              <Link className="brand-text-slight-black font-medium" href="/">
                Home
              </Link>

              <Link className="brand-text-slight-black  font-medium" href="/about">
                About
              </Link>

              <Link className="brand-text-slight-black font-medium" href="/services">
                Services
              </Link>

              <Link className="brand-text-slight-black font-medium" href="/industries">
                Industries
              </Link>

              <Link className="brand-text-slight-black font-medium" href="/prices">
                Prices
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabletNav;
