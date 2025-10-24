import Link from 'next/link';
import LeadsourzeLogo from "@/assets/logo/Leadsourze Logo.svg";
import { useMediaQuery } from '@/utility/useMediaQuery';
import DesktopNav from './nav/destop-nav';
import TabletNav from './nav/tablet-nav';
import MobileNav from './nav/mobile-nav';

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <div className="fixed lg:py-4 md:py-2 max-md:py-0 top-0 left-0 right-0 w-full z-50 bg-[var(--background)]">
            <div className="py-4 flex items-center justify-between max-w-7xl m-auto 
            xl:px-0 lg:px-20 md:px-20 max-md:px-5 relative">
                <Link href={"/"} aria-label="Outsouzed Home" className='relative'>
                  <LeadsourzeLogo className="lg:w-52 md:w-36 max-md:w-36 absolute top-1/2 -translate-y-1/2"/>
                </Link>
                {isDesktop && <DesktopNav />}
                {isTablet && <TabletNav />}
                {isMobile && <MobileNav />}
            </div>
        </div>
    )
}

export default Header;