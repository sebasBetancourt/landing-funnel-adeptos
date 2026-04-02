import Link from "next/link";
import { landingData } from "@/data/landing";

const Icons = {
  linkedin: () => (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  ),
  x: () => (
    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  youtube: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  calendar: () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
  ),
  mail: () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
  )
};

export default function TopBar() {
  const { socials, utility } = landingData.navigation;

  return (
    <div className="w-full h-10 flex items-center justify-between px-6 md:px-12 text-[9px] font-black uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="flex gap-6 items-center">
        {socials.map((social) => {
          const Icon = Icons[social.icon as keyof typeof Icons];
          return (
            <Link 
              key={social.name} 
              href={social.href} 
              className="opacity-60 hover:opacity-100 hover:text-primary transition-all"
              aria-label={social.name}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
      <div className="flex gap-8 items-center hidden sm:flex">
        {utility.map((item) => {
          const Icon = Icons[item.icon as keyof typeof Icons];
          return (
            <Link 
              key={item.label} 
              href={item.href} 
              className="flex items-center gap-2 group hover:text-primary transition-colors"
            >
              <span className="opacity-60 group-hover:opacity-100"><Icon /></span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
