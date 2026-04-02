import { landingData } from "@/data/landing";

export default function TrustBar() {
  const { trust } = landingData;

  return (
    <section className="w-full bg-black py-10 border-y border-white/5 relative z-30 shadow-2xl">
      <div className="w-full flex flex-col items-center gap-10">
        <p className="text-[9px] font-black uppercase tracking-[0.7em] text-white/40 text-center">
          {trust.message}
        </p>
        
        {/* Full width container for logos */}
        <div className="w-full overflow-hidden">
          <div className="max-w-[2560px] mx-auto px-6 md:px-20 flex flex-wrap items-center justify-between gap-12 md:gap-x-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 select-none">
            {trust.logos.map((logo) => (
              <div 
                key={logo.name} 
                className={`text-2xl md:text-3xl font-black transition-all hover:scale-105 hover:opacity-100 ${
                  logo.style === 'serif' ? 'font-serif tracking-tighter' : 
                  logo.style === 'serif-underline' ? 'font-serif tracking-tighter border-b-2 border-current leading-none pb-0.5' : 
                  'tracking-tight'
                }`}
              >
                {logo.type === 'special' ? (
                  <span>TED<span className="text-red-700 not-italic">x</span></span>
                ) : logo.type === 'icon-text' ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                    {logo.name}
                  </span>
                ) : (
                  logo.name
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
