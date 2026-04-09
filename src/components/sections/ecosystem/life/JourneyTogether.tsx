"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { TRAVEL_MOMENTS } from "@/lib/data";

export function JourneyTogether() {
  return (
    <section className="w-full relative py-20 bg-white overflow-hidden">
      {/* 彩色背景层：扩展为全屏宽度 */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 24.52%, rgba(255, 255, 255, 0) 49.52%, rgba(255, 255, 255, 0) 74.76%, #FFFFFF 100%)`
        }}
      >
        <Image 
          src="/life/together/bg.svg" 
          alt="background" 
          fill 
          className="object-cover" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* 标题复用 */}
        <LogoWithTitle chineseText="同行时刻" englishText="Journey Together" />

        {/* 模块主体容器 */}
        <div className="relative mt-12 w-full max-w-[1326px] mx-auto h-[610px] flex items-center justify-center">
          {/* 图片卡片列表 */}
          <div className="flex gap-8 px-10">
            {TRAVEL_MOMENTS.map((moment) => (
              <motion.div
                key={moment.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-[276px] h-[490px] rounded-[15px] overflow-hidden group"
                style={{
                  boxShadow: '4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <Link href={moment.link} className="block w-full h-full relative">
                  {/* 图片层：填充整个容器 */}
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover"
                  />

                  {/* 底部文字遮罩层 (text_bg.svg) */}
                  <div className="absolute bottom-0 left-0 w-full h-[88px] z-10">
                    <Image 
                      src="/life/together/text_bg.svg" 
                      alt="text background" 
                      fill 
                      className="object-cover"
                    />
                    
                    {/* 标题内容 */}
                    <div className="absolute inset-0 flex items-start justify-between px-3 pt-4 text-white">
                      <span className="text-lg font-bold break-words leading-tight max-w-[240px]">
                        {moment.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}