import { landingData } from "@/data/landing";
import Link from "next/link";

export default function WorkflowStepsSection() {
  const { workflow } = landingData;

  return (
    <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative z-30 overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
           <h2 className="text-5xl md:text-7xl font-brand font-black uppercase text-white leading-none tracking-tighter italic">
              {workflow.title}
           </h2>
           <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              {workflow.description}
           </p>
        </div>

        {/* Steps Grid - Bold & Numbered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
           {workflow.steps?.map((step, i) => (
             <div key={i} className="group space-y-6 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 hover:border-primary/20 transition-all duration-700">
                <div className="text-6xl md:text-8xl font-brand font-black text-white/10 group-hover:text-primary/20 transition-colors drop-shadow-sm group-hover:italic group-hover:scale-110 origin-left">
                   {step.id}
                </div>
                <div className="space-y-4">
                   <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">
                      {step.title}
                   </h3>
                   <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                      {step.description}
                   </p>
                </div>
                {/* Subtle Progress Line */}
                <div className="w-10 h-1 bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
             </div>
           ))}
        </div>

        {/* Closing CTA for this section */}
        <div className="pt-12 text-center">
            <Link href="#" className="inline-flex flex-col items-center gap-4 group">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors animate-pulse">See it in action</span>
               <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all text-xl">
                  ↓
               </div>
            </Link>
        </div>

      </div>
    </section>
  );
}
