"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 负数表示背景滚动比内容慢（产生远离效果），正数表示更快
  className?: string;
}

export function ParallaxSection({
  children,
  speed = -0.3,
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 只有当 section 在视口内时才计算
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = window.scrollY;
          const sectionTop = section.offsetTop;
          const relativeScroll = scrolled - sectionTop + windowHeight;
          const offset = relativeScroll * speed;

          bg.style.transform = `translateY(${offset}px)`;
        }

        lastScrollY = window.scrollY;
        rafId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 初始调用

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        style={{
          backgroundImage: "url(/assets/about/BackGround.svg)",
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "top",
          willChange: "transform",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
