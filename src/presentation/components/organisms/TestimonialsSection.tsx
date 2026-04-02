import Image from "next/image";
import { landingData } from "@/data/landing";

export default function TestimonialsSection() {
  const { testimonials } = landingData;

  return (
    <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative z-30 overflow-hidden">
      
      {/* Massive Background Typography: FEEDFORWARD™ */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none overflow-hidden">
        <span className="text-[200px] md:text-[300px] lg:text-[450px] font-brand font-black uppercase text-white leading-none whitespace-nowrap tracking-tighter">
          {testimonials.headline}
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 md:gap-24 relative z-10">
        
        {/* Testimonial Portrait with Seamless Blend */}
        <div className="relative w-full max-w-lg aspect-[3/4] md:aspect-square group">
           {/* Glow Effect behind image */}
           <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
           
           <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 rounded-[4rem] overflow-hidden border border-white/5">
              <Image 
                src={testimonials.image} 
                alt="Client Testimony" 
                fill 
                sizes="(max-width: 768px) 100vw, 512px"
                className="object-cover"
                style={{ 
                  maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                }}
              />
              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
           </div>

           {/* Badge Overlay */}
           <div className="absolute -bottom-10 right-0 md:-right-20 bg-primary text-black p-6 md:p-8 rounded-[2rem] shadow-2xl rotate-3 flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-brand font-black italic uppercase leading-none">REAL RESULTS</span>
           </div>
        </div>

        {/* Quote Content */}
        <div className="max-w-4xl text-center space-y-12">
           <div className="text-3xl md:text-5xl font-medium text-white italic leading-tight tracking-tight px-4 md:px-0">
              <span className="text-primary text-6xl md:text-8xl leading-none font-brand font-black align-top mr-4">“</span>
              {testimonials.items[0].quote}
              <span className="text-primary text-6xl md:text-8xl leading-none font-brand font-black align-bottom ml-4">”</span>
           </div>

           <div className="space-y-4 pt-8">
              <div className="w-16 h-1 bg-primary mx-auto mb-6" />
              <div className="text-xl md:text-2xl font-black uppercase text-white tracking-widest leading-none">
                 {testimonials.items[0].author}
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] text-white/40">
                 {testimonials.items[0].role} | {testimonials.items[0].company}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
