import { landingData } from "@/data/landing";
import Link from "next/link";

export default function ProblemLeakSection() {
  const { problem, revenueLeak } = landingData;

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-30">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Problem Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
           <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-px bg-primary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{problem.title}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-brand font-black uppercase text-black leading-none italic tracking-tighter">
                 {problem.subtitle}
              </h2>
           </div>
           <div>
              <p className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-tight max-w-sm">
                 {problem.highlight}
              </p>
           </div>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {problem.points?.map((point, i) => (
             <div key={i} className="space-y-4 border-l border-gray-100 pl-6 group hover:border-black transition-colors duration-500">
                <div className="text-xs font-black uppercase tracking-widest text-primary">Case {i + 1}</div>
                <h3 className="text-lg font-black uppercase leading-tight group-hover:italic transition-all">{point.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{point.description}</p>
             </div>
           ))}
        </div>

        {/* Revenue Leak Table - Minimalist & Sales-Oriented */}
        <div className="bg-black text-white rounded-[3rem] p-10 md:p-20 space-y-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
           <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-5xl font-brand font-black uppercase italic tracking-tighter">
                 {revenueLeak.title}
              </h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest">{revenueLeak.disclaimer}</p>
           </div>

           <div className="max-w-4xl mx-auto">
              <table className="w-full border-collapse">
                 <thead>
                    <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                       <th className="text-left py-6">Revenue Gap</th>
                       <th className="text-right py-6">Monthly Cost</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {revenueLeak.items?.map((item, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-colors">
                         <td className="py-8 text-sm md:text-base font-bold uppercase tracking-widest text-white/70 group-hover:text-white">{item.label}</td>
                         <td className="py-8 text-right font-brand font-black text-lg md:text-xl group-hover:text-primary transition-colors italic">{item.cost}</td>
                      </tr>
                    ))}
                 </tbody>
                 <tfoot>
                    <tr className="border-t-2 border-primary">
                       <td className="py-10 text-xl font-brand font-black uppercase italic tracking-tighter">Total Estimated Revenue Leak</td>
                       <td className="py-10 text-right font-brand font-black text-4xl md:text-6xl text-primary drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">{revenueLeak.total}</td>
                    </tr>
                 </tfoot>
              </table>
           </div>

           <div className="flex justify-center pt-8">
              <Link href="#" className="bg-primary text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all hover:scale-105 shadow-2xl">
                 Stop the Leak → Book Free AI Audit
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
}
