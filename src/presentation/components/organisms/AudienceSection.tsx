import Image from "next/image";
import Link from "next/link";

interface AudienceProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  reverse?: boolean;
}

export default function AudienceSection({ title, description, cta, image, reverse }: AudienceProps) {
  return (
    <section className={`py-24 md:py-32 px-6 md:px-12 relative z-30 overflow-hidden ${reverse ? 'bg-[#f8f9fa]' : 'bg-white'}`}>
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Visual Column */}
        <div className="w-full md:w-3/5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl z-10">
          <Image 
            src={image} 
            alt={title} 
            fill 
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        {/* Text Column - Positioned to Overlap */}
        <div className={`w-full md:w-2/3 space-y-10 relative z-20 md:-ml-32 lg:-ml-48 ${reverse ? 'md:-mr-32 lg:-mr-48 md:text-right' : ''}`}>
          <div className="space-y-6">
             <h2 className="text-6xl md:text-[100px] lg:text-[130px] font-brand font-black uppercase leading-[0.85] tracking-tighter mix-blend-difference text-black pointer-events-none drop-shadow-sm">
               {title.split(' & ').map((part, i) => (
                 <span key={i} className="block">{part}</span>
               )) || title}
             </h2>
             <div className={`w-20 h-1 bg-primary/20 ${reverse ? 'ml-auto' : ''}`} />
          </div>

          <div className="space-y-8">
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl drop-shadow-sm">
               {description}
            </p>

            <div className="pt-4">
               <Link href="#" className="bg-primary text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl inline-flex items-center gap-4 group">
                 {cta} <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
