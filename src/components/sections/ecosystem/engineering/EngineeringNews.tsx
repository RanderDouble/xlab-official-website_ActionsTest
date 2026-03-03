"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ENGINEERING_TEXT_NEWS, ENGINEERING_IMAGE_NEWS } from "@/lib/data";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { AnimatePresence, motion } from "framer-motion";

export function EngineeringNews() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? ENGINEERING_IMAGE_NEWS.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIdx((prev) => (prev === ENGINEERING_IMAGE_NEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full relative overflow-hidden py-16 bg-white">
      {/* 左下角背景LOGO */}
      <div className="absolute left-[-40px] bottom-[-40px] w-[350px] h-[350px] pointer-events-none z-0">
        <Image 
          src="/engineering/news/bg_logo.svg" 
          alt="bg-logo" 
          fill 
          className="object-contain" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-start mb-12">
          <LogoWithTitle chineseText="新闻动态" englishText="News Updates" />
          <Link
            href="/ecosystem/engineering/news"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors mt-1"
          >
            <span className="text-sm font-medium">查看全部</span>
            <Image src="/engineering/right_arrow.svg" width={40} height={40} alt="arrow" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* 左侧图文卡片 */}
          <div className="lg:col-span-5 relative">
            {/* 堆叠层 */}
            <div className="absolute top-[-12px] right-[-12px] w-full h-full rounded-xl bg-white shadow-[4px_-4px_15px_rgba(0,0,0,0.05)] -z-10" />
            <div className="absolute top-[-24px] right-[-24px] w-full h-full rounded-xl bg-white shadow-[4px_-4px_15px_rgba(0,0,0,0.03)] -z-20" />

            {/* 切换箭头 */}
            <button
              onClick={handlePrev}
              className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-transform"
            >
              <Image src="/engineering/left_arrow.svg" width={30} height={50} alt="prev" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-transform"
            >
              <Image src="/engineering/right_arrow.svg" width={30} height={50} alt="next" />
            </button>

            {/* ====================== 图文卡片点击跳转 ====================== */}
            <Link 
              href={ENGINEERING_IMAGE_NEWS[currentIdx].link} 
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-white block"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/${ENGINEERING_IMAGE_NEWS[currentIdx].image}`}
                    alt="news-pic"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/40 p-6 text-white">
                    <p className="text-xs font-medium opacity-90 mb-1">{ENGINEERING_IMAGE_NEWS[currentIdx].date}</p>
                    <h4 className="text-lg font-bold leading-snug">
                      {ENGINEERING_IMAGE_NEWS[currentIdx].title}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>
          </div>

          {/* 右侧文字列表 */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-gray-200">
            {ENGINEERING_TEXT_NEWS.slice(0, 4).map((news) => (
              <Link
                key={news.id}
                href={news.link}
                className="group block py-6 first:pt-0"
              >
                <div className="flex justify-between items-start gap-8">
                  <div className="flex-1 space-y-3">
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed text-justify">
                      {news.brief}
                    </p>
                  </div>
                  <div className="shrink-0 text-gray-400 text-sm font-medium pt-1">
                    {news.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}