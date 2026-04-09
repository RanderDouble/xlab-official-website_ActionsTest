"use client";

import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import Image from "next/image";
import { motion } from "framer-motion";

export function PhotoWall() {
  const row1 = [
    { src: "/life/photowall/p1.svg", w: 216, h: 288 },
    { src: "/life/photowall/p2.svg", w: 516, h: 290 },
    { src: "/life/photowall/p3.svg", w: 551, h: 290 },
  ];

  const row2 = [
    { src: "/life/photowall/p4.svg", w: 180, h: 270 },
    { src: "/life/photowall/p5.svg", w: 480, h: 270 },
    { src: "/life/photowall/p6.svg", w: 406, h: 270 },
    { src: "/life/photowall/p7.svg", w: 180, h: 270 },
  ];

  const row3 = [
    { src: "/life/photowall/p8.svg", w: 477, h: 261 },
    { src: "/life/photowall/p9.svg", w: 392, h: 261 },
    { src: "/life/photowall/p10.svg", w: 391, h: 261 },
  ];

  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <LogoWithTitle chineseText="照片墙" englishText="Picture Wall" />
      </div>

      {/* 限制最大视野宽度并居中 */}
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        <ScrollingRow items={row1} direction="left" speed={35} />
        <ScrollingRow items={row2} direction="right" speed={45} />
        <ScrollingRow items={row3} direction="left" speed={40} />
      </div>
    </section>
  );
}

interface ScrollingRowProps {
  items: { src: string; w: number; h: number }[];
  direction: "left" | "right";
  speed: number;
}

function ScrollingRow({ items, direction, speed }: ScrollingRowProps) {
  const tripledItems = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-6">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {tripledItems.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-[15px] overflow-hidden flex-shrink-0 transition-all duration-500 hover:scale-105 hover:z-20 cursor-pointer"
            style={{
              width: `${item.w}px`,
              height: `${item.h}px`,
              transformOrigin: "center center",
            }}
          >
            <Image
              src={item.src}
              alt={`Photo ${idx}`}
              fill
              className="object-cover"
              sizes="500px"
              priority={idx < items.length * 2}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}