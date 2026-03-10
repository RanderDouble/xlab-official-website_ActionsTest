"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { TESTIMONIALS } from "@/lib/data";

export function MessageBoard() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([currentIndex + newDirection, newDirection]);
  };

  const getCardIndex = (offset: number) => {
    const index = currentIndex + offset;
    return (index % TESTIMONIALS.length + TESTIMONIALS.length) % TESTIMONIALS.length;
  };

  const variants = {
    // 1. 进入动画：从两侧滑入，初始比例较小
    enter: (custom: { direction: number; offset: number }) => ({
      x: custom.direction === 1 ? 800 : -800,
      opacity: 0,
      scale: 0.6,
      y: 31,
      zIndex: 10,
    }),

    // 2. 中间激活态：位于圆心，比例 1:1
    center: {
      x: 0,
      scale: 1,
      y: 0,
      zIndex: 40,
      opacity: 1,
    },

    // 3. 两侧常驻态：缩放到 0.6 倍，y 轴下移对齐底边
    side: (custom: { offset: number }) => ({
      x: custom.offset * 500, // 稍微缩小间距使画面更紧凑
      scale: 0.6,
      y: 31,
      zIndex: 10,
      opacity: 1,
    }),

    // 4. 退出动画：直线滑出视野
    exit: (custom: { direction: number; offset: number }) => ({
      x: custom.direction === 1 ? -800 : 800,
      opacity: 0,
      scale: 0.6,
      y: 31,
      zIndex: 0,
    }),
  };

  return (
    <section className="w-full relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <LogoWithTitle chineseText="留言板" englishText="Message Board" />

        <div className="relative mt-16 w-[1083px] h-[375px] mx-auto flex items-center justify-center">
          {/* 背景渐变层 */}
          <div
            className="absolute inset-0 rounded-[25px] z-0"
            style={{
              background: `
                linear-gradient(130.23deg, rgba(219, 100, 99, 0) 45.54%, rgba(202, 53, 64, 0.2) 88.37%), 
                linear-gradient(226.31deg, rgba(255, 202, 11, 0) 45.82%, rgba(255, 135, 6, 0.2) 98.3%), 
                linear-gradient(72.79deg, rgba(20, 155, 255, 0) 58.57%, rgba(0, 113, 239, 0.25) 86.53%), 
                linear-gradient(156.42deg, rgba(67, 197, 172, 0.25) 0%, rgba(138, 212, 194, 0) 41.21%), 
                #FFFFFF
              `
            }}
          />

          {/* 导航按钮 */}
          <button onClick={() => paginate(-1)} className="absolute -left-6 -bottom-6 z-50 hover:scale-110 active:scale-95 transition-all">
            <Image src="/life/message/left_arrow.svg" width={50} height={50} alt="prev" />
          </button>
          <button onClick={() => paginate(1)} className="absolute -right-6 -bottom-6 z-50 hover:scale-110 active:scale-95 transition-all">
            <Image src="/life/message/right_arrow.svg" width={50} height={50} alt="next" />
          </button>

          <div className="relative flex items-center justify-center w-full z-10">
            <AnimatePresence initial={false} custom={{ direction }}>
              {[-1, 0, 1].map((offset) => {
                const itemIndex = getCardIndex(offset);
                const item = TESTIMONIALS[itemIndex];
                const isCenter = offset === 0;

                return (
                  <motion.div
                    key={`${itemIndex}-${currentIndex}`}
                    custom={{ direction, offset }}
                    variants={variants}
                    initial="enter"
                    animate={isCenter ? "center" : "side"}
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 200, damping: 25 },
                      scale: { duration: 0.4 },
                      y: { duration: 0.4 }
                    }}
                    className="absolute"
                  >
                    {/* 卡片容器：移除 overflow-hidden 以保证装饰物完整展示 */}
                    <div className="relative w-[597px] h-[251px]">
                      
                      {/* 右上角装饰椭圆 */}
                      <div className={`absolute -top-12 -right-10 w-28 h-28 z-[100] pointer-events-none`}>
                        <Image 
                          src="/life/message/decoration.svg" 
                          fill 
                          alt="decoration" 
                          className="object-contain" 
                          style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))" }} 
                        />
                      </div>

                      {/* 统一渲染带内容的卡片 */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* 无论是否在中间，都渲染 center_card.svg 背景 */}
                        <Image 
                          src="/life/message/center_card.svg" 
                          fill 
                          alt="card bg" 
                          priority 
                          className={`-z-10 transition-opacity duration-300`} 
                        />
                        
                        {/* 文本内容区域：通过 font-size 和 padding 在 side 状态下自动随容器缩放 */}
                        <div className="w-full h-full p-12 flex flex-col justify-between relative z-10 text-left">
                          <p className="text-[21px] leading-[1.7] text-black font-bold">
                            {'　　' + item.content}
                          </p>
                          <div className="flex justify-between items-end">
                            <span className="text-[24px] font-bold text-black">{item.author}</span>
                            <span className="text-[24px] text-black font-bold">{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}