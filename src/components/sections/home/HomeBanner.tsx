"use client";

import { useState, useEffect, useRef } from "react";
import { HOME_BANNERS } from "@/lib/data";

export function HomeBanner() {
  // 1. 构造扩展数组： [Last, ...Original, First]
  // 这样当滑到最后一张的克隆体时，我们可以偷偷切回第一张
  const extendedBanners = [
    { ...HOME_BANNERS[HOME_BANNERS.length - 1], id: "clone-last" },
    ...HOME_BANNERS,
    { ...HOME_BANNERS[0], id: "clone-first" },
  ];

  // 初始索引为 1 (因为索引 0 现在是克隆的最后一张)
  const [currentIndex, setCurrentIndex] = useState(1);

  // 控制是否启用过渡动画，用于瞬间重置位置
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 鼠标悬停状态
  const [isHovering, setIsHovering] = useState(false);

  // 防止在动画过程中快速点击
  const isAnimatingRef = useRef(false);

  // 自动轮播
  useEffect(() => {
    if (isHovering) return; // 悬停时暂停自动轮播

    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering]);

  // 监听索引变化，处理“瞬间回弹”逻辑
  useEffect(() => {
    // 动画时长与 CSS duration 保持一致 (500ms)
    const transitionDuration = 500;

    if (currentIndex === extendedBanners.length - 1) {
      // 如果到了最后一张（克隆的第一张）
      // 等待动画做完，然后瞬间跳回真正的第一张（索引1）
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // 关闭动画
        setCurrentIndex(1); // 瞬间跳回
        isAnimatingRef.current = false; // 解锁
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    if (currentIndex === 0) {
      // 如果到了第一张（克隆的最后一张）
      // 等待动画做完，然后瞬间跳回真正的最后一张
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(banners.length);
        isAnimatingRef.current = false;
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // 正常切换结束后，解锁并在下一帧恢复动画能力
    const timeout = setTimeout(() => {
      isAnimatingRef.current = false;
    }, transitionDuration);

    return () => clearTimeout(timeout);
  }, [currentIndex, extendedBanners.length]);

  // 当处于静默重置状态时，需要重新开启 Transition，以便下一次移动有动画
  useEffect(() => {
    if (!isTransitioning) {
      // 使用 requestAnimationFrame 或微小的 timeout 确保 DOM 更新后再开启 transition
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handlePrevious = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (originalIndex: number) => {
    if (isAnimatingRef.current) return;
    // 因为数组头部加了一个克隆元素，所以实际索引是 originalIndex + 1
    setCurrentIndex(originalIndex + 1);
  };

  const banners = HOME_BANNERS;
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden bg-white aspect-[1440/699]">
        <div
          className={`flex h-full ${
            // 关键：根据状态决定是否添加 transition 类
            isTransitioning ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedBanners.map((banner, index) => (
            <a
              // 使用 index 作为 key 的一部分以处理克隆项可能 id 重复的问题
              key={`${banner.id}-${index}`}
              href={banner.link}
              className="min-w-full h-full flex items-center justify-center bg-white overflow-hidden"
            >
              <img
                src={banner.imageUrl}
                alt={banner.label}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrevious}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="group absolute left-6 top-1/2 -translate-y-1/2 z-10 transition-transform duration-200 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="上一张"
        >
          {/* 按钮图标保持不变 */}
          <span className="sr-only">上一张</span>
          <span className="relative flex h-24 w-24 items-center justify-center">
            <img
              src="/assets/home/banner/LJumpDefault.svg"
              alt=""
              className="h-10 w-10 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0"
            />
            <img
              src="/assets/home/banner/LJumpHighlight.svg"
              alt=""
              className="absolute inset-0 m-auto h-10 w-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="group absolute right-6 top-1/2 -translate-y-1/2 z-10 transition-transform duration-200 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="下一张"
        >
          {/* 按钮图标保持不变 */}
          <span className="sr-only">下一张</span>
          <span className="relative flex h-24 w-24 items-center justify-center">
            <img
              src="/assets/home/banner/RJumpDefault.svg"
              alt=""
              className="h-10 w-10 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0"
            />
            <img
              src="/assets/home/banner/RJumpHighlight.svg"
              alt=""
              className="absolute inset-0 m-auto h-10 w-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </span>
        </button>

        {/* 指示点 (Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => {
            // 计算当前实际对应的 banner 索引 (修正偏移量)
            let isActive = false;
            if (currentIndex === 0)
              isActive = index === banners.length - 1; // 在左侧克隆位 = 最后一张
            else if (currentIndex === extendedBanners.length - 1)
              isActive = index === 0; // 在右侧克隆位 = 第一张
            else isActive = index === currentIndex - 1; // 正常情况

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500 w-6"
                    : "bg-gray-400 w-2 hover:bg-gray-600"
                }`}
                aria-label={`跳转到第 ${index + 1} 张`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
