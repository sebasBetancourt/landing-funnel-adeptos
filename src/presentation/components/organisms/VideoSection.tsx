import { landingData } from "@/data/landing";

export default function VideoSection() {
  const { video } = landingData;

  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[16/6] bg-black overflow-hidden flex items-center justify-center">
      
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* We use a placeholder for now, but configured for real video assets */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-40 grayscale"
          poster={video.placeholder}
        >
          {/* Example Source: <source src="/videos/joe_in_action.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center space-y-6 px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-brand font-black uppercase text-white tracking-tight leading-none drop-shadow-2xl">
          {video.overline} <span className="text-primary relative inline-block">
             {video.accent}
             <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30" />
          </span>
        </h2>
        
        <div className="pt-8">
           <button className="bg-primary text-black px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl flex items-center gap-4 mx-auto group">
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">▶</span>
              {video.cta}
           </button>
        </div>
      </div>

      {/* Decorative Brand Accents */}
      <div className="absolute bottom-0 right-0 p-8 opacity-10 hidden md:block">
         <div className="text-[120px] font-brand font-black leading-none text-white tracking-tighter">ACTION.</div>
      </div>
    </section>
  );
}
