import Link from "next/link";
import Image from "next/image";
import { landingData } from "@/data/landing";

export default function Footer() {
  const { footer } = landingData;

  return (
    <footer className="bg-black py-20 px-6 md:px-12 relative z-30 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        
        {/* Large Brand Identity */}
        <div className="flex flex-col items-center gap-4 group">
           <div className="relative w-48 h-12 grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-700">
              <Image 
                src="/img/LOGO.png" 
                alt="Adeptos" 
                fill 
                sizes="200px"
                className="object-contain"
              />
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">ADEPTOS AGENCY</div>
        </div>

        {/* Navigation Grid */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
           {footer.nav.map(item => (
             <Link 
               key={item.label} 
               href={item.href} 
               className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors"
             >
               {item.label}
             </Link>
           ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-8">
           {footer.socials.map((social, i) => (
             <Link 
               key={i} 
               href={social.href} 
               className="text-white/40 hover:text-white transition-colors text-xl font-bold uppercase tracking-widest"
             >
               {social.icon}
             </Link>
           ))}
        </div>

        {/* Utility Links: Booking & Email */}
        <div className="flex flex-col sm:flex-row items-center gap-10 md:gap-16 pt-8 border-t border-white/5 w-full justify-center">
           {footer.utilities.map(item => (
             <Link 
               key={item.label} 
               href={item.href} 
               className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white hover:text-primary transition-colors group"
             >
               <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
               {item.label}
             </Link>
           ))}
        </div>

        {/* Final Legal & Copyright */}
        <div className="pt-16 w-full text-center space-y-6">
           <div className="w-full h-px bg-white/5" />
           <p className="text-[9px] md:text-[10px] font-medium text-white/20 leading-relaxed max-w-3xl mx-auto uppercase tracking-wider">
              {footer.copyright} All rights reserved. Some affiliate links in use: 
              <Link href="#" className="hover:underline mx-1">Privacy Policy</Link> | 
              <Link href="#" className="hover:underline mx-1">Cookie Policy</Link> | 
              <Link href="#" className="hover:underline mx-1">Website designed by Adeptos AI</Link>. 
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
           </p>
        </div>
      </div>

    </footer>
  );
}
