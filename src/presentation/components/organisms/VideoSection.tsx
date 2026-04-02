import { landingData } from "@/data/landing";

export default function VideoSection() {
  const { reelSection } = landingData;

  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[16/6] bg-black overflow-hidden flex items-center justify-center relative z-30">
      
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* We use a placeholder for now, but configured for real video assets */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 grayscale"
          poster="/img/video-placeholder.png"
        >
          <source src={reelSection.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center space-y-6 px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-brand font-black uppercase text-white tracking-tight gap-4 flex flex-col md:flex-row items-center justify-center leading-none drop-shadow-2xl italic">
          SEE IT IN <span className="text-primary">ACTION</span>
        </h2>
        
        <div className="pt-8">
           <button className="bg-primary text-black px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl flex items-center gap-4 mx-auto group">
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">▶</span>
              Watch Adeptos Agent
           </button>
        </div>
      </div>

      {/* Decorative Brand Accents */}
      <div className="absolute bottom-0 right-0 p-8 opacity-10 hidden md:block">
         <div className="text-[120px] font-brand font-black leading-none text-white tracking-tighter">AGENTS.</div>
      </div>
    </section>
  );
}
