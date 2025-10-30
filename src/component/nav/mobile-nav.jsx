import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../ui/Button";
import { BiSolidPhoneCall } from "react-icons/bi";

const MobileNav = () => {
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  const handleMenuNavOpen = () => setIsMenuNavOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuNavOpen(false);

  return (
    <nav aria-label="Mobile navigation" className="flex items-center gap-5">
      {/* Menu Toggle */}
      <button
        onClick={handleMenuNavOpen}
        aria-expanded={isMenuNavOpen}
        aria-controls="mobile-menu"
        className="p-1"
        aria-label={isMenuNavOpen ? "Close menu" : "Open menu"}
      >
        {isMenuNavOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>

      {/* Full menu */}
      <AnimatePresence>
        {isMenuNavOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-full mt-0 w-full bg-white shadow-md rounded-b-xl z-50 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4">
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
              <div className="flex items-center gap-3">
                <Button url={"/contact-us"} bgColor={"bg-slight-orange"} textColor={"text-white"}>
                  Contact Us
                  <BiSolidPhoneCall size={18}/>
                </Button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
