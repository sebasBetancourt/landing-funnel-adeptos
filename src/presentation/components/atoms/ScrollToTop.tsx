"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[100] bg-primary text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:bg-white border-2 border-black/10 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <span className="text-2xl font-black group-hover:-translate-y-1 transition-transform">
        ↑
      </span>
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20 pointer-events-none" />
    </button>
  );
}
