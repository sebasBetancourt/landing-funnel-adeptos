import TopBar from "@/presentation/components/organisms/TopBar";
import Navbar from "@/presentation/components/organisms/Navbar";
import HeroSection from "@/presentation/components/organisms/HeroSection";
import TrustBar from "@/presentation/components/organisms/TrustBar";
import VideoSection from "@/presentation/components/organisms/VideoSection";
import DiscountBadge from "@/presentation/components/atoms/DiscountBadge";
import { landingData } from "@/data/landing";

export default function Home() {
  const { benefits } = landingData;

  return (
    <div className="flex flex-col min-h-screen bg-[#1C2120] selection:bg-primary selection:text-black font-sans text-white overflow-x-hidden">
      
      {/* Sticky Offer Overlay */}
      <DiscountBadge />
      
      {/* Hero Orchestration (Includes Header/Nav overlay) */}
      <HeroSection />

      {/* Social Proof (Trust Ribbon) - Expanded to Full Width */}
      <TrustBar />

      {/* Video Content Section (Joe in Action) */}
      <VideoSection />

      {/* Benefits Section (Static for now, but ready for future extraction) */}
      <section className="bg-white py-24 px-6 md:px-12 text-black relative z-40">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
               <h3 className="text-5xl md:text-7xl font-brand font-black uppercase italic leading-none">
                 {benefits.title.split(' ').map((word, i) => (
                   <span key={i} className="block">{word}</span>
                 ))}
               </h3>
               <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                  {benefits.subtitle}
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {benefits.items.map(item => (
                  <div key={item.id} className="aspect-square bg-gray-100 rounded-3xl p-6 md:p-8 flex flex-col justify-end group hover:bg-black hover:text-white transition-all duration-500 cursor-default">
                     <div className="w-8 h-1 bg-primary mb-4 group-hover:w-12 transition-all" />
                     <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Benefit {item.id}</div>
                     <div className="text-xs md:text-sm font-bold leading-tight">{item.title}</div>
                  </div>
                ))}
            </div>
         </div>
      </section>

    </div>
  );
}
