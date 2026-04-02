import Image from "next/image";
import Link from "next/link";
import { landingData } from "@/data/landing";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function HeroSection() {
  const { hero } = landingData;

  return (
    <main className="relative min-h-[100vh] lg:min-h-screen flex flex-col w-full bg-[#1C2120]">
      
      {/* Seamless Navigation Overlaid on Hero */}
      <div className="relative z-50 w-full flex flex-col">
        <TopBar />
        <Navbar />
      </div>

      {/* Background Portrait Layer */}
      <div className="z-0 overflow-hidden" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <Image 
          src={hero.portrait} 
          alt="Founder profile" 
          fill 
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain lg:object-left-bottom scale-100 sm:scale-110 lg:scale-125 origin-left lg:opacity-100 opacity-40 sm:opacity-60"
          style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
          priority
        />
        {/* Responsive Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 lg:bg-transparent lg:bg-gradient-to-l lg:from-[#1C2120] lg:via-[#1C2120]/80 lg:to-transparent z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex flex-col justify-center w-full px-4 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-12 lg:gap-0 max-w-[1920px] mx-auto min-h-[70vh]">
             
             {/* Left Column (Spacer for Background Image) */}
             <div className="hidden lg:block h-20 w-full" />

             {/* Right Column: Value Proposition */}
             <div className="flex flex-col items-center justify-center text-center space-y-10 order-2 pt-10 lg:pt-0 w-full lg:pl-10">
                <div className="space-y-4">
                   <h2 className="text-base sm:text-lg md:text-3xl lg:text-4xl font-black uppercase tracking-[0.3em] text-white drop-shadow-lg">
                      {hero.overline}
                   </h2>
                   <h1 className="text-[32px] sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-brand font-black uppercase text-white leading-[0.8] drop-shadow-2xl">
                      {hero.headline.first} <span className="text-primary">{hero.headline.accent}</span>
                   </h1>
                </div>

                <div className="space-y-6">
                   <p className="max-w-xl text-[13px] sm:text-base md:text-lg lg:text-xl font-medium text-white/90 drop-shadow-md leading-relaxed px-4">
                      {hero.description}
                   </p>
                   
                   <div className="flex flex-wrap justify-center gap-4 pt-2">
                      {hero.bullets?.map((bullet, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                           <span className="text-primary text-xs">✓</span>
                           <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/80">{bullet}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 pt-4 w-full">
                   <button className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-transform">
                         ▶
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-sm">{hero.secondaryCta}</span>
                   </button>

                   <Link href="/audit" className="bg-primary text-black px-6 sm:px-10 py-5 rounded-md font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center gap-3">
                      {hero.primaryCta} <span className="text-lg">→</span>
                   </Link>
                </div>
             </div>
          </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 cursor-pointer group">
         <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[9px] font-black uppercase tracking-[0.8em] text-white/30 group-hover:text-primary transition-colors">Scroll</span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
               <div className="w-1 h-1.5 bg-primary rounded-full animate-glow-pulse" />
            </div>
            <div className="text-primary text-xs font-bold mt-1">↓</div>
         </div>
      </div>
    </main>
  );
}
