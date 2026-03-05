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
    // 1. 进入动画：保持 y: 31 以确保与侧边状态高度一致
    enter: (custom: { direction: number; offset: number }) => ({
      x: custom.direction === 1 ? 1200 : -1200,
      opacity: 0,
      scale: 0.5,
      y: 31, 
      zIndex: 10,
    }),

    // 2. 中间状态：y 设为 0
    center: {
      x: 0,
      scale: 1,
      y: 0,
      zIndex: 40,
      opacity: 1,
    },

    // 3. 两侧常驻态：y 设为 31 以实现底部对齐 (251px - 220px = 31px)
    side: (custom: { offset: number }) => ({
      x: custom.offset * 480,
      scale: 0.75,
      y: 31, 
      zIndex: 10,
      opacity: 1,
    }),

    // 4. 退出动画：水平飞出
    exit: (custom: { direction: number; offset: number }) => ({
      x: custom.direction === 1 ? -1200 : 1200,
      opacity: 0,
      scale: 0.5,
      y: 31,
      zIndex: 0,
    }),
  };

  return (
    <section className="w-full relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <LogoWithTitle chineseText="留言板" englishText="Message Board" />

        <div className="relative mt-16 w-[1083px] h-[375px] mx-auto flex items-center justify-center">
          {/* 背景层 */}
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
                    key={itemIndex}
                    custom={{ direction, offset }}
                    variants={variants}
                    initial="enter"
                    animate={isCenter ? "center" : "side"}
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 180, damping: 24 }, // 直线平移动画
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 },
                      y: { duration: 0.4 } // 确保 y 轴切换平滑
                    }}
                    className="absolute"
                  >
                    <div className={`relative ${isCenter ? 'w-[597px] h-[251px]' : 'w-[320px] h-[220px]'}`}>
                      
                      {/* 右上角装饰：置于最顶层 */}
                      <div className={`absolute ${isCenter ? '-top-12 -right-10 w-29 h-29' : '-top-8 -right-6 w-24 h-24'} z-[100] pointer-events-none`}>
                        <Image 
                          src="/life/message/decoration.svg" 
                          fill 
                          alt="decoration" 
                          className="object-contain" 
                          style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))" }} 
                        />
                      </div>

                      {isCenter ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="relative w-full h-full flex items-center justify-center"
                        >
                          <Image src="/life/message/center_card.svg" fill alt="card bg" priority className="-z-10" />
                          <div className="w-full h-full p-12 flex flex-col justify-between relative z-10 text-left">
                            <p className="text-[21px] leading-[1.7] text-black font-bold">
                              {'　　' + item.content}
                            </p>
                            <div className="flex justify-between items-end">
                              <span className="text-[24px] font-bold text-black">{item.author}</span>
                              <span className="text-[24px] text-black font-bold">{item.role}</span>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="w-full h-full relative">
                          <Image src="/life/message/omission_card.svg" fill alt="omission" className="object-cover" />
                        </div>
                      )}
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