import { landingData } from "@/data/landing";
import Link from "next/link";

export default function BonusSection() {
  const { bonus } = landingData;

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-30">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header with High Value Emphasis */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 border-b border-gray-100 pb-16">
           <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-px bg-primary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Free Bonus</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-brand font-black uppercase text-black leading-none italic tracking-tighter">
                 {bonus.title}
              </h2>
           </div>
           <div className="flex flex-col items-end">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Total Combined Value</div>
              <div className="text-6xl md:text-8xl font-brand font-black text-black drop-shadow-sm italic">
                 {bonus.value}
              </div>
              <div className="bg-black text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mt-4">
                 Included Free
              </div>
           </div>
        </div>

        {/* Bonus Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {bonus.items?.map((item, i) => (
             <div key={i} className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-black hover:border-black hover:scale-105 transition-all duration-700 cursor-default">
                <div className="flex justify-between items-start mb-10">
                   <div className="w-12 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                   <div className="text-xl md:text-2xl font-brand font-black italic text-black group-hover:text-primary transition-colors">
                      {item.value}
                   </div>
                </div>
                <div className="space-y-4">
                   <h3 className="text-lg md:text-xl font-black uppercase leading-tight text-black group-hover:text-white transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                      {item.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>

        {/* Closing CTA */}
        <div className="pt-12 text-center space-y-10">
           <p className="text-xl text-gray-400 font-medium uppercase tracking-tight max-w-2xl mx-auto">
              This kit is tailored for your business and industry. <span className="text-black font-black italic">Start building today.</span>
           </p>
           <Link href="#" className="inline-block bg-black text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all shadow-2xl">
              Claim Your Kit → Book AI Audit
           </Link>
        </div>

      </div>
    </section>
  );
}
