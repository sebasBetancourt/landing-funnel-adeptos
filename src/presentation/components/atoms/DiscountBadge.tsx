import { landingData } from "@/data/landing";

export default function DiscountBadge() {
  const { offer } = landingData;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] group cursor-pointer">
      <div className="bg-black text-white px-3 py-6 rounded-r-xl border-y border-r border-white/10 shadow-[20px_0_40px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:pl-6 group-hover:bg-primary group-hover:text-black">
        <div className="flex flex-col items-center gap-1">
          {/* Vertical Text Orientation */}
          <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
            {offer.label}
          </span>
          <div className="w-1 h-12 bg-primary group-hover:bg-black transition-colors mt-2" />
        </div>
      </div>
      
      {/* Tooltip on Hover */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-black text-[9px] font-bold text-white px-4 py-2 rounded-lg opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-white/10 shadow-2xl">
        {offer.description}
      </div>
    </div>
  );
}
