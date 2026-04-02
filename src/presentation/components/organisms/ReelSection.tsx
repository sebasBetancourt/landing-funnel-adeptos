"use client";

import { useEffect, useRef } from "react";
import { landingData } from "@/data/landing";

export default function ReelSection() {
  const { reelSection } = landingData;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            // Autoplay might be blocked by browser if not muted/interacted with
          });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.6 } // Play when 60% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* iPhone Mockup Visual */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
           <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group">
              
              {/* iPhone Navigation Bar / Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-white/5 mr-2" />
                 <div className="w-10 h-1 rounded-full bg-white/10" />
              </div>

              {/* Video Container */}
              <div className="absolute inset-x-0 top-0 bottom-0 z-10 bg-gray-900 overflow-hidden">
                 <video 
                   ref={videoRef}
                   src={reelSection.videoUrl}
                   loop
                   playsInline
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Visual Overlay if no video loaded */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white/5 pointer-events-none select-none">
                    <span className="text-4xl">📱</span>
                    <span className="text-[10px] font-black uppercase tracking-widest mt-2">Adeptos Reel</span>
                 </div>
              </div>

              {/* Bezel Accents */}
              <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none z-20" />
           </div>
        </div>

        {/* Textual Content */}
        <div className="space-y-8 order-1 md:order-2">
           <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-brand font-black uppercase text-black leading-none tracking-tighter">
                 {reelSection.title}
              </h2>
              <div className="w-20 h-1.5 bg-primary" />
           </div>

           <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              {reelSection.description}
           </p>

           <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-px bg-gray-200" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 italic">Experience Feedback Redefined</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
