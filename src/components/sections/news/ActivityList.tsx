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
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_COUNT); // 初始索引指向第一个真实元素
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    // 稍微延迟开启各种动画，避免初始渲染闪烁
    setTimeout(() => setIsTransitioning(true), 100);

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // 3. 自动轮播
  useEffect(() => {
    if (!cardWidth) return;
    const intervalId = window.setInterval(() => {
      handleNext();
    }, 4000);
    return () => window.clearInterval(intervalId);
  }, [cardWidth, currentIndex]);

  // 4. 无缝重置逻辑 (瞬间回弹)
  useEffect(() => {
    if (!isTransitioning) return; // 只有在动画开启时才检测边界

    // 如果滑到了最后的一组克隆 (显示的已经是第一组真实数据的内容)
    if (currentIndex >= extendedItems.length - VISIBLE_COUNT) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // 关闭动画
        // 重置索引到真实的对应位置
        setCurrentIndex(currentIndex - ACTIVITIES.length);
        // 恢复动画
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
      }, TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }

    // 如果滑到了最前的一组克隆
    if (currentIndex < VISIBLE_COUNT) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + ACTIVITIES.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
      }, TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, extendedItems.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // 计算滑动的总距离
  // 步长 = 卡片宽 + 间距
  const stepSize = cardWidth + CARD_GAP;
  const translateX = currentIndex * stepSize;

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
                  className="h-[283px] bg-white rounded-[10px] shadow-[0px_0px_16px_rgba(79,79,79,0.11)] overflow-hidden relative flex-shrink-0"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[193px] bg-[#f3f3f3]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[96px] bg-white px-[14px] pt-2">
                    <div className="text-[13px] font-semibold text-[#383838] leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="mt-1 flex items-start justify-between">
                      <div className="text-[10px] font-semibold text-[#646464]">
                        {item.date}
                      </div>
                      <a
                        href={item.link}
                        className={
                          item.status === "active"
                            ? "inline-flex items-center justify-center h-[28px] w-[100px] rounded-[5px] text-white text-[13px] bg-gradient-to-r from-[#0071ef] to-[#149bff] whitespace-nowrap mt-5"
                            : "inline-flex items-center justify-center h-[28px] w-[100px] rounded-[5px] text-white text-[13px] bg-[#cecece] whitespace-nowrap mt-5"
                        }
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
