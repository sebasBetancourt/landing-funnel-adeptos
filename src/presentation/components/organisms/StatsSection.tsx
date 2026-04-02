import { landingData } from "@/data/landing";
import Link from "next/link";

export default function StatsSection() {
  const { stats } = landingData;

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Visual Stats Column */}
        <div className="space-y-12">
           <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-brand font-black uppercase text-black italic tracking-tighter">
                 {stats.title}
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
                 {stats.description}
              </p>
           </div>

           <div className="space-y-6">
              {stats.items?.map((stat, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all duration-500 ${
                  stat.highlight 
                    ? 'bg-black text-white border-black scale-105 shadow-2xl' 
                    : 'bg-gray-50 text-black border-gray-100 hover:border-black/20'
                }`}>
                   <div className="flex items-center justify-between gap-4">
                      <div className="space-y-1">
                         <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Segment {i + 1}</div>
                         <div className="text-sm font-black uppercase tracking-tight">{stat.label}</div>
                      </div>
                      <div className={`text-3xl md:text-4xl font-brand font-black ${stat.highlight ? 'text-primary' : 'text-black'}`}>
                         {stat.value}
                      </div>
                   </div>
                   {stat.highlight && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                         <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">ELITE ADVANTAGE</span>
                      </div>
                   )}
                </div>
              ))}
           </div>
           
           <div className="text-[9px] font-medium text-gray-300 uppercase tracking-widest pt-4">
              Sources: Fullview, AI Automation Spot, OECD
           </div>
        </div>

        {/* Narrative Side */}
        <div className="space-y-12">
           <div className="space-y-8">
              <h4 className="text-2xl sm:text-3xl md:text-5xl font-brand font-black uppercase text-black leading-tight tracking-tighter">
                 Your competitors aren't using this yet. <span className="text-gray-300 italic">That won't last.</span>
              </h4>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                 We're in the early stage of Agentic AI adoption. The businesses that move now will build a lead in speed, efficiency, and revenue that late adopters won't be able to close.
              </p>
           </div>

           <div className="space-y-6 pt-10 border-t border-gray-100">
              <div className="flex items-start gap-6">
                 <div className="text-primary font-black text-4xl">!</div>
                 <p className="text-lg font-bold uppercase tracking-tight text-black">
                    This is like the birth of the Internet in the early 2000s.
                 </p>
              </div>
              <div className="flex items-start gap-6">
                 <div className="text-primary font-black text-4xl">!</div>
                 <p className="text-lg font-bold uppercase tracking-tight text-black">
                    Or social media in the 2010s.
                 </p>
              </div>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-primary pt-4 animate-pulse">
                 Now is the time to act, before it's too late.
              </p>
           </div>

           <Link href="/audit" className="inline-block bg-primary text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-2xl">
              Book Free AI Audit →
           </Link>
        </div>

      </div>
    </section>
  );
}
