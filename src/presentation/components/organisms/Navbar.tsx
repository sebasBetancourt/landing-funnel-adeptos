import Link from "next/link";
import { landingData } from "@/data/landing";

export default function Navbar() {
  const { main, cta } = landingData.navigation;

  return (
    <nav className="w-full h-16 sm:h-24 flex items-center justify-between px-4 sm:px-12 bg-transparent">
      <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-transparent flex items-center justify-center font-brand font-black">
              <img src="/img/LOGO.png" alt="Adeptos Logo" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div className="font-brand font-black text-sm uppercase tracking-tighter leading-none hidden sm:block drop-shadow-md text-white">
              Adeptos<br/>Agency
            </div>
          </Link>
      </div>

      <div className="flex items-center gap-6 md:gap-10">
          <Link href="/audit" className="bg-primary text-black px-4 sm:px-8 py-2 sm:py-3.5 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl whitespace-nowrap">
            {cta}
          </Link>
      </div>
    </nav>
  );
}
