"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LAB_MERCH_LIST_DATA } from "@/lib/data";

const ITEMS_PER_PAGE = 4;

export default function MerchandiseListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleOffsetTop = useRef<number>(0);
  const totalPages = Math.ceil(LAB_MERCH_LIST_DATA.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = LAB_MERCH_LIST_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    // 记录标题的原始位置
    if (titleRef.current) {
      titleOffsetTop.current = titleRef.current.offsetTop;
    }

    const handleScroll = () => {
      // 使用滚动距离和原始位置来判断
      setIsSticky(window.scrollY >= titleOffsetTop.current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-full relative flex flex-col items-center bg-[#f3f3f3]">
      {/* 1. 背景层 - 保持不变 */}
      <div 
        className="pointer-events-none absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-repeat z-0"
        style={{ backgroundImage: "url(/life/merch/subpage_bg.svg)" }}
      />

      {/* 2. 顶部吸顶标题栏 */}
      <div className="sticky top-0 z-30 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
        <div className="mx-auto flex h-[54px] max-w-[1000px] items-center px-4 md:px-0">
          

          {/* 居中标题内容 */}
          <div className="flex-1 flex items-center justify-center pr-8"> {/* pr-8 用于抵消左侧图标占据的空间，保持视觉居中 */}
            <div className="flex items-center gap-1">
              <h1 className="text-[20px] font-bold leading-none text-[#383838]">文创周边</h1>
              <Image 
                src="/triangle.svg" 
                width={14} 
                height={14} 
                alt="triangle" 
                className="leading-none text-[#0071ef] translate-x-[8px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. 内容区域 */}
      <div className="relative z-10 w-full max-w-[1023px] pt-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8 w-full"
          >
            {currentItems.map((item) => (
              <MerchItemCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 4. 分页器 - 紧随列表出现 */}
        {LAB_MERCH_LIST_DATA.length > 0 && (
          <div className="mt-8 mb-12 flex items-center justify-center gap-6 border-t border-dashed border-[#eee] pt-8">
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`transition-transform hover:scale-110 active:scale-95 ${
                currentPage === 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <Image src="/engineering/left_arrow.svg" width={30} height={50} alt="prev" />
            </button>

            <span className="text-[16px] font-bold text-[#333] tracking-widest">
              {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`transition-transform hover:scale-110 active:scale-95 ${
                currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <Image src="/engineering/right_arrow.svg" width={30} height={50} alt="next" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MerchItemCard({ item }: { item: any }) {
  return (
    <div
      className="relative w-full h-[320px]"
      style={{
        background: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0px 0px 15px rgba(0, 113, 239, 0.15)",
        borderRadius: "20px"
      }}
    >
      {/* 左侧图片容器 - 包含装饰性椭圆背景 */}
      <div className="absolute left-[60px] top-[20px] z-10">
        <div className="relative w-[280px] h-[280px]">
          
          {/* 装饰性椭圆 - 作为图片背景，与图片位置完全重合 */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `
                linear-gradient(132.98deg, rgba(219, 100, 99, 0) 43.52%, rgba(202, 53, 64, 0.2) 84.45%),
                linear-gradient(223.54deg, rgba(255, 202, 11, 0) 43.66%, rgba(255, 135, 6, 0.2) 93.66%),
                linear-gradient(71.16deg, rgba(20, 155, 255, 0) 59.54%, rgba(0, 113, 239, 0.25) 86.84%),
                linear-gradient(158.38deg, rgba(67, 197, 172, 0.25) 0%, rgba(138, 212, 194, 0) 38.5%),
                #FFFFFF
              `,
              borderRadius: "180px"
            }}
          />
        </div>
      </div>

      {/* 产品图片 - 在椭圆上方 */}
      <div className="absolute left-[60px] top-[20px] z-10">
        <div className="relative h-[280px] w-[280px] flex items-center justify-center">
          <Image
            src={item.img}
            alt={item.name}
            width={0}
            height={0}
            sizes="100vw"
            className=" h-auto w-[280px] z-10"
          />
        </div>
      </div>
     

      {/* 右侧文本内容区 */}
      <div className="absolute left-[400px] top-[90px] flex flex-col z-10">
        <h2 className="font-bold text-[26px] leading-tight text-[#222] mb-3">
          {item.name}
        </h2>

        <div
          className="w-[442px] h-[3px] rounded-[5px] mb-5"
          style={{
            background: "linear-gradient(90deg, #149BFF 0%, #43C5AC 52.4%, #F08E25 92.31%)"
          }}
        />

        <p className="font-bold text-[20px] leading-relaxed text-[#555] tracking-[0.05em] max-w-[500px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}