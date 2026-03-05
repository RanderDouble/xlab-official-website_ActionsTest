"use client";

import { useState } from "react";
import Image from "next/image";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { LIFE_VIDEO_SECTION, LIFE_VIDEOS_LIST } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function VideoStories() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? LIFE_VIDEOS_LIST.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === LIFE_VIDEOS_LIST.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <LogoWithTitle chineseText="影像故事" englishText="Video Stories" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
          
          {/* 左侧：固定文案与标签 */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <div className="relative">
              <p className="text-gray-700 text-[18px] leading-[2] text-justify font-bold">
                {'　　'+LIFE_VIDEO_SECTION.description}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {LIFE_VIDEO_SECTION.tags.map((tag, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 group">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-[20px] overflow-hidden transition-transform group-hover:scale-105 duration-300">
                    <Image
                      src={tag.icon}
                      alt={tag.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-gray-800 font-bold text-sm md:text-base">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：视频播放器 */}
          <div className="lg:col-span-7 relative">
            {/* 左箭头 */}
            <button
              onClick={handlePrev}
              className="absolute left-[-50px] lg:left-[-50px] top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-all active:scale-95"
            >
              <Image src="/engineering/left_arrow.svg" width={35} height={55} alt="Prev" />
            </button>

            {/* 视频容器 */}
            <div
              className="relative w-full aspect-video rounded-[24px] overflow-hidden shadow-2xl bg-black"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={LIFE_VIDEOS_LIST[currentIdx].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <video
                    src={LIFE_VIDEOS_LIST[currentIdx].url}
                    poster={LIFE_VIDEOS_LIST[currentIdx].cover}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    playsInline
                    onPlay={handlePlay}
                    onPause={handlePause}
                  />

                  {/* 视频标题 - 左上方，鼠标悬停或暂停时显示 */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovering || !isPlaying ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-4 z-10 px-4 py-2 rounded-lg pointer-events-none"
                  >
                    <h3 className="text-white text-lg font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {LIFE_VIDEOS_LIST[currentIdx].title}
                    </h3>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 右箭头 */}
            <button
              onClick={handleNext}
              className="absolute right-[-50px] lg:right-[-50px] top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-all active:scale-95"
            >
              <Image src="/engineering/right_arrow.svg" width={35} height={55} alt="Next" />
            </button>

            {/* 分页指示器 */}
            <div className="mt-4 flex justify-center items-center gap-3">
              {LIFE_VIDEOS_LIST.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIdx(index)}
                  className={`transition-all duration-300 rounded-full border-2 ${
                    index === currentIdx
                      ? "bg-blue-600 border-blue-600 w-3 h-3"
                      : "bg-transparent border-gray-300 w-3 h-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}