import Image from "next/image";
import Link from "next/link";
import { landingData } from "@/data/landing";

export default function PodcastSection() {
  const { podcast } = landingData;

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-30 overflow-hidden">
      
      {/* Background Wave Accent (CSS-Only approach for modern look) */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,202.7C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
        
        {/* Header Space */}
        <div className="space-y-6">
           <h2 className="text-5xl md:text-8xl font-brand font-black uppercase text-black leading-none tracking-tighter">
             {podcast.headline.split(' ')[0]} <span className="text-primary">{podcast.headline.split(' ')[1]}</span>
           </h2>
           <p className="max-w-xl mx-auto text-gray-500 font-medium text-lg leading-relaxed">
             {podcast.description}
           </p>
        </div>

        {/* Visual Mockup Container (Inspired by the screen) */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pt-8">
           
           {/* Phone/Device Visual */}
           <div className="w-64 h-[500px] bg-black rounded-[3rem] border-[8px] border-gray-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary to-black opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                 <div className="w-32 h-32 rounded-xl bg-gray-900 border border-white/10 shadow-2xl overflow-hidden group-hover:scale-110 transition-all relative">
                    <Image 
                      src={podcast.mockup} 
                      alt="Podcast Mockup" 
                      fill 
                      sizes="150px"
                      className="object-cover"
                    />
                 </div>
                 <div className="text-center space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary">Now Playing</div>
                    <div className="text-xs font-bold text-white leading-tight">Strategies for Scaling</div>
                 </div>
              </div>
              {/* Fake UI Accents */}
              <div className="absolute bottom-10 inset-x-0 flex justify-center gap-10 text-white/40">
                 <span>◀</span> <span>II</span> <span>▶</span>
              </div>
           </div>

           {/* Large Episode Art / Image */}
           <div className="w-80 md:w-96 aspect-square bg-[#f0f1f4] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group relative">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-200 font-brand font-black text-6xl select-none uppercase">Adeptos</div>
              <Image 
                src={podcast.cover} 
                alt="Latest Episode" 
                fill 
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
           </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
           <Link href="#" className="bg-primary text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl inline-flex items-center gap-4 group">
             {podcast.cta} <span className="text-xl group-hover:rotate-12 transition-transform">🎧</span>
           </Link>
        </div>
      </div>

    </section>
  );
}
