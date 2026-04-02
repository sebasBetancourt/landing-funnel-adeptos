import { landingData } from "@/data/landing";

export default function TrustBar() {
  const { trust } = landingData;

  return (
    <section className="w-full bg-[#1C2120] py-12 border-y border-white/5 relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
          {trust.message}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {trust.logos.map((logo, index) => (
             <div 
               key={index} 
               className={`text-white font-brand font-black text-xl md:text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default ${
                 logo.type === 'special' ? 'text-primary' : ''
               }`}
             >
               {logo.name}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
