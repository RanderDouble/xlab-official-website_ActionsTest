"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ACTIVITIES } from "@/lib/data";
import { NewsSectionHeader } from "@/components/sections/news/NewsSectionHeader";

// 配置常量
const CARD_GAP = 48; // 卡片间距 (保持较大间距)
const EDGE_PADDING = 10; // 视口左右留白，避免边缘被裁切
const VISIBLE_COUNT = 3; // 视口内正好显示3张
const TRANSITION_DURATION = 500;

export function ActivityList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isResettingRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_COUNT); // 初始索引指向第一个真实元素
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 1. 构造增强版克隆列表
  // 为了确保显示3张时的无缝滚动，我们需要在前后各克隆 VISIBLE_COUNT (3) 个元素
  const extendedItems = [
    ...ACTIVITIES.slice(-VISIBLE_COUNT).map((item) => ({
      ...item,
      id: `clone-pre-${item.id}`,
    })),
    ...ACTIVITIES,
    ...ACTIVITIES.slice(0, VISIBLE_COUNT).map((item) => ({
      ...item,
      id: `clone-post-${item.id}`,
    })),
  ];

  // 2. 动态计算卡片宽度，确保正好显示三张
  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      const trackWidth = containerRef.current.offsetWidth - EDGE_PADDING * 2;
      // 公式：(总宽 - (数量-1)*间距) / 数量
      const calculatedWidth = Math.floor(
        (trackWidth - (VISIBLE_COUNT - 1) * CARD_GAP) / VISIBLE_COUNT
      );
      setCardWidth(calculatedWidth);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // 3. 自动轮播
  useEffect(() => {
    if (!cardWidth) return;
    const intervalId = window.setInterval(() => {
      if (isResettingRef.current || isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => window.clearInterval(intervalId);
  }, [cardWidth]);

  const normalizeIndex = useCallback((index: number) => {
    const offset = index - VISIBLE_COUNT;
    const normalizedOffset =
      ((offset % ACTIVITIES.length) + ACTIVITIES.length) % ACTIVITIES.length;
    return VISIBLE_COUNT + normalizedOffset;
  }, []);

  const resetToIndex = useCallback((index: number) => {
    isResettingRef.current = true;
    setIsTransitioning(false);
    setCurrentIndex(index);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
        isResettingRef.current = false;
        isAnimatingRef.current = false;
      });
    });
  }, []);

  const handleTrackTransitionEnd = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName !== "transform") return;

      const lowerBound = VISIBLE_COUNT;
      const upperBound = VISIBLE_COUNT + ACTIVITIES.length - 1;

      if (currentIndex < lowerBound || currentIndex > upperBound) {
        resetToIndex(normalizeIndex(currentIndex));
        return;
      }

      isAnimatingRef.current = false;
    },
    [currentIndex, normalizeIndex, resetToIndex],
  );

  const moveBy = useCallback(
    (delta: number) => {
      if (!cardWidth || isResettingRef.current || isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setCurrentIndex((prev) => prev + delta);
    },
    [cardWidth],
  );

  const handlePrev = useCallback(() => {
    moveBy(-1);
  }, [moveBy]);

  const handleNext = useCallback(() => {
    moveBy(1);
  }, [moveBy]);

  // 计算滑动的总距离
  // 步长 = 卡片宽 + 间距
  const stepSize = cardWidth + CARD_GAP;
  const translateX = currentIndex * stepSize;

  const resolveImageSrc = (src: string) => {
    if (src.startsWith("/public/")) {
      return src.replace("/public", "");
    }
    return src;
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto py-10 space-y-4">
        {/* 标题保留内边距对齐 */}
        <div className="px-4 md:px-8 lg:px-[60px]">
          <NewsSectionHeader
            title="活动招募"
            subtitle="Event Recruitment"
            href="/news/list?category=activity"
          />
        </div>

        {/* 轮播区域：
           1. flex items-center gap-0: 减小按钮与卡片的距离到 0
           2. 移除了 px，让按钮尽可能向两边靠
        */}
        <div className="flex items-center gap-0 w-full px-2 md:px-4">
          {/* 左按钮：加大尺寸 (h-24 w-24) */}
          <button
            type="button"
            onClick={handlePrev}
            className="group h-16 w-16 flex-shrink-0 flex items-center justify-center z-10"
            aria-label="上一条"
          >
            <img
              alt=""
              className="h-8 w-8 group-hover:hidden"
              src="/assets/home/banner/LJumpDefault.svg"
            />
            <img
              alt=""
              className="hidden h-8 w-8 group-hover:block"
              src="/assets/home/banner/LJumpHighlight.svg"
            />
          </button>

          {/* 视口容器 */}
          <div className="relative flex-1 overflow-x-hidden overflow-y-visible py-6" ref={containerRef}>
            <div
              className="flex"
              onTransitionEnd={handleTrackTransitionEnd}
              style={{
                padding: `0 ${EDGE_PADDING}px`,
                gap: `${CARD_GAP}px`,
                transform: `translateX(-${translateX}px)`,
                transition: isTransitioning
                  ? `transform ${TRANSITION_DURATION}ms ease-out`
                  : "none",
              }}
            >
              {extendedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  style={{
                    // 强制宽度，确保 flex 布局不会挤压或拉伸
                    width: `${cardWidth}px`,
                    flex: `0 0 ${cardWidth}px`,
                  }}
                  className="h-[340px] bg-white rounded-[10px] shadow-[0px_0px_16px_rgba(79,79,79,0.11)] overflow-hidden relative flex-shrink-0"
                >
                  <div className="absolute inset-x-0 top-0 h-[220px] overflow-hidden bg-[#f3f3f3]">
                    <img
                      src={resolveImageSrc(item.imageUrl)}
                      alt={item.title}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[120px] bg-white px-4 pt-3">
                    <div className="text-base font-semibold text-[#383838] leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="mt-2 flex items-start justify-between">
                      <div className="text-xs font-semibold text-[#646464]">
                        {item.date}
                      </div>
                      <a
                        href={item.link}
                        className={
                          item.status === "active"
                            ? "inline-flex items-center justify-center h-[32px] w-[110px] rounded-full text-white text-[15px] font-bold bg-gradient-to-r from-[#0071ef] to-[#149bff] shadow-sm whitespace-nowrap mt-6"
                            : "inline-flex items-center justify-center h-[32px] w-[110px] rounded-full text-white text-[15px] font-bold bg-[#cecece] whitespace-nowrap mt-6"
                        }
                        style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Source Han Sans SC", "Microsoft YaHei UI", sans-serif' }}
                      >
                        {item.ctaLabel}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右按钮：加大尺寸 (h-24 w-24) */}
          <button
            type="button"
            onClick={handleNext}
            className="group h-16 w-16 flex-shrink-0 flex items-center justify-center z-10"
            aria-label="下一条"
          >
            <img
              alt=""
              className="h-8 w-8 group-hover:hidden"
              src="/assets/home/banner/RJumpDefault.svg"
            />
            <img
              alt=""
              className="hidden h-8 w-8 group-hover:block"
              src="/assets/home/banner/RJumpHighlight.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
