import Image from "next/image";
import { landingData } from "@/data/landing";

export default function AboutSection() {
  const { about } = landingData;

  return (
    <section className="bg-white py-24 md:py-32 px-4 sm:px-12 relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait & Massive Typography Overlap */}
            <div className="lg:col-span-6 relative">
              {/* Massive Headline (Impact Style as in screenshot) */}
              <div className="absolute top-10 left-0 z-20 w-full pointer-events-none">
                 <h2 className="text-[40px] sm:text-8xl md:text-[140px] lg:text-[180px] font-brand font-black uppercase text-black leading-[0.8] tracking-tighter">
                    HI, I'M <span className="block">RYAN</span>
                 </h2>
              </div>
              
              {/* Founder Image (Matching the 'Joe' portrait style) */}
              <div className="relative aspect-[3/4] w-full pt-24 sm:pt-40 md:pt-48">
                 <Image 
                   src={about.image} 
                   alt="Ryan Hamill Founder Portrait" 
                   fill 
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover object-top"
                   priority
                 />
              </div>
            </div>

            {/* Right Column: Experience & Mission */}
            <div className="lg:col-span-6 space-y-12 lg:pl-16">
               <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black uppercase text-black tracking-tighter leading-none">
                     {about.subHeadline.split('. ')[0]}.
                  </h3>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black uppercase text-black tracking-tighter leading-none relative inline-block">
                     {about.subHeadline.split('. ')[1]}
                  </h3>
               </div>

               <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                  {about.description}
               </p>

            </div>

        </div>
      </div>
    </section>
  );
}
