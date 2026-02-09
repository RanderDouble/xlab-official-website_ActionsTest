"use client";

import { useState, useEffect, useRef } from "react";
import type { NewsItem } from "@/types";

const banners = [
  {
    id: 1,
    label: "Banner 1",
    link: "#",
    imageUrl: "/assets/home/tmp/banner.svg",
  },
  {
    id: 2,
    label: "Banner 2",
    link: "#",
    imageUrl: "/assets/home/tmp/Frame 101.svg",
  },
  {
    id: 3,
    label: "Banner 3",
    link: "#",
    imageUrl: "/assets/home/tmp/banner.svg",
  },
  {
    id: 4,
    label: "Banner 4",
    link: "#",
    imageUrl: "/assets/home/tmp/Frame 101.svg",
  },
];

const newsList: NewsItem[] = [
  {
    id: "n1",
    title: "实验室动态新闻标题占位 01",
    date: "2026-02-01",
    type: "text",
  },
  {
    id: "n2",
    title: "实验室动态新闻标题占位 02",
    date: "2026-01-28",
    type: "text",
  },
  // {
  //   id: "n3",
  //   title: "实验室动态新闻标题占位 03",
  //   date: "2026-01-20",
  //   type: "text",
  // },
  // {
  //   id: "n4",
  //   title: "实验室动态新闻标题占位 04",
  //   date: "2026-01-12",
  //   type: "text",
  // },
];

const newsImages: NewsItem[] = [
  {
    id: "i1",
    title: "图片新闻占位 01",
    date: "2026-02-01",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
  {
    id: "i2",
    title: "图片新闻占位 02",
    date: "2026-01-25",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
  {
    id: "i3",
    title: "图片新闻占位 03",
    date: "2026-01-10",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
];

export function HomeBanner() {
  // 1. 构造扩展数组： [Last, ...Original, First]
  // 这样当滑到最后一张的克隆体时，我们可以偷偷切回第一张
  const extendedBanners = [
    { ...banners[banners.length - 1], id: "clone-last" },
    ...banners,
    { ...banners[0], id: "clone-first" },
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

  return (
    <section className="w-full">
      <div className="w-full aspect-video bg-white relative overflow-hidden">
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
          <span className="relative block w-24 h-24">
            <img
              src="/assets/home/banner/LJumpDefault.svg"
              alt=""
              className="w-24 h-24 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0"
            />
            <img
              src="/assets/home/banner/LJumpHighlight.svg"
              alt=""
              className="w-24 h-24 absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
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
          <span className="relative block w-24 h-24">
            <img
              src="/assets/home/banner/RJumpDefault.svg"
              alt=""
              className="w-24 h-24 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0"
            />
            <img
              src="/assets/home/banner/RJumpHighlight.svg"
              alt=""
              className="w-24 h-24 absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* 新闻列表部分保持不变，省略以节省空间，直接使用原代码即可 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">实验室新闻</h2>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                按时间筛选
              </button>
            </div>
            <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
              {newsList.map((item) => (
                <div key={item.id} className="bg-white border rounded p-4">
                  <div className="text-sm text-gray-500">{item.date}</div>
                  <div className="text-base text-gray-800 mt-1">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[300px] overflow-x-auto flex flex-nowrap">
            {newsImages.map((item) => (
              <div key={item.id} className="min-w-full pr-4">
                <div className="h-full bg-white border rounded overflow-hidden">
                  <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                    image
                  </div>
                  <div className="p-3">
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="text-base text-gray-800 mt-1">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
