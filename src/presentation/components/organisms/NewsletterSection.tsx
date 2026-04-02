import Image from "next/image";
import Link from "next/link";
import { landingData } from "@/data/landing";

export default function NewsletterSection() {
  const { newsletter } = landingData;

  return (
    <section className="relative w-full py-10 h-[700px] flex items-center justify-center overflow-hidden z-30">
      
      {/* Background with Stage/Show Visual and Blur */}
      <div className="absolute inset-0">
         <Image 
            src="/img/_73A8553.JPG" 
            alt="Fearless Event" 
            fill 
            sizes="100vw"
            className="object-cover blur-[2px] opacity-40 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
      </div>

      <div className="relative z-20 text-center space-y-10 px-6 py-10 max-w-xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-brand font-black uppercase text-white tracking-tight drop-shadow-2xl">
           {newsletter.headline}
        </h2>
        
        <div className="space-y-4">
           <p className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-widest">
              {newsletter.subHeadline}
           </p>
           
           <div className="space-y-6 pt-4">
              <Link 
                href="/audit" 
                className="w-full bg-primary text-black py-5 rounded-full font-brand font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl text-center block"
              >
                  {newsletter.cta}
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
}
