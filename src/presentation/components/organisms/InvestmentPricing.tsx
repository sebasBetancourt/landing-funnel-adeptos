import { landingData } from "@/data/landing";
import Link from "next/link";

export default function InvestmentPricing() {
  const { investment } = landingData;

  return (
    <section className="bg-[#1C2120] py-24 md:py-32 px-4 sm:px-12 relative z-30 overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
           <h2 className="text-[28px] sm:text-5xl md:text-7xl font-brand font-black uppercase text-white leading-none tracking-tighter italic">
              {investment.title}
           </h2>
           <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              {investment.subtitle}
           </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
           {investment.tiers?.map((tier, i) => (
             <div 
               key={i} 
               className={`flex flex-col p-4 sm:p-10 md:p-12 rounded-[3.5rem] border transition-all duration-700 relative group overflow-hidden ${
                 tier.popular 
                   ? 'bg-primary border-primary text-black scale-105 z-20 shadow-[0_50px_100px_-20px_rgba(212,175,55,0.4)]' 
                   : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
               }`}
             >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse">
                     Most Popular
                  </div>
                )}

                {/* Card Top */}
                <div className="space-y-4 mb-10">
                   <div className={`text-[10px] font-black uppercase tracking-[0.3em] ${tier.popular ? 'text-black/60' : 'text-primary'}`}>
                      {tier.description}
                   </div>
                   <h3 className="text-4xl font-brand font-black uppercase italic tracking-tighter leading-none">
                      {tier.name}
                   </h3>
                   <div className={`text-[9px] font-black uppercase tracking-widest inline-block px-3 py-1.5 rounded-full ${
                     tier.popular ? 'bg-black text-white' : 'bg-primary text-black'
                   }`}>
                      Ready in {tier.readyIn}
                   </div>
                </div>

                {/* Features List */}
                <ul className="flex-1 space-y-6 mb-12">
                   {tier.features?.map((feature, idx) => (
                     <li key={idx} className="flex gap-4 items-start">
                        <span className={`text-base font-black ${tier.popular ? 'text-black/40' : 'text-primary'}`}>•</span>
                        <span className={`text-xs md:text-sm font-bold leading-relaxed tracking-tight ${
                          tier.popular ? 'text-black/80' : 'text-white/70 group-hover:text-white transition-colors'
                        }`}>
                           {feature}
                        </span>
                     </li>
                   ))}
                </ul>

                {/* Card Bottom: Guarantee & CTA */}
                <div className="space-y-8 pt-8 border-t border-black/5 dark:border-white/5">
                   <p className={`text-[10px] font-medium leading-relaxed italic ${
                     tier.popular ? 'text-black/60' : 'text-gray-500'
                   }`}>
                      {tier.guarantee}
                   </p>
                   
                   <Link 
                     href={tier.ctaHref || "/audit"} 
                     className={`block w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center transition-all shadow-xl hover:scale-105 active:scale-95 ${
                       tier.popular 
                         ? 'bg-black text-white hover:bg-gray-900' 
                         : 'bg-primary text-black hover:bg-white'
                     }`}
                   >
                      {tier.cta} →
                   </Link>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
