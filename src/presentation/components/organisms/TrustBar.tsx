import { landingData } from "@/data/landing";

export default function TrustBar() {
  const { trust } = landingData;

  return (
    <section className="w-full bg-[#1C2120] py-12 border-y border-white/5 relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
          {trust.message}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 md:gap-44 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {trust.logos.map((logo, index) => (
             <div 
               key={index} 
               className={`flex items-center justify-center text-white font-brand font-black text-xl md:text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default ${
                 logo.type === 'special' ? 'text-primary' : ''
               }`}
             >
               <img src={logo.name} alt="" className="w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
