import Link from "next/link";


const DesktopNav = () => {
  return (
    <div className="flex items-center gap-9">
      <Link className="text-[var(--color-gray)] font-medium font-cta" href="/">
        Home
      </Link>

      <Link className="text-[var(--color-gray)] font-cta font-medium" href="/about">
        About
      </Link>

      <Link className="text-[var(--color-gray)] font-cta font-medium" href="/about">
        Industries
      </Link>

      <Link className="text-[var(--color-gray)] font-cta font-medium" href="/about">
        Prices
      </Link>

      <Link className="text-[var(--color-gray)] font-cta font-medium" href="/about">
        Contact US
      </Link>
    </div>
  );
};

export default DesktopNav;
