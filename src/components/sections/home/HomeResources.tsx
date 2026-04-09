"use client";

import { useState, useRef, useEffect } from "react";

import {
  FEATURED_MENTOR,
  ACADEMIC_MENTORS,
  INDUSTRY_MENTORS,
} from "@/lib/data";

const resolveImageSrc = (src?: string): string => {
  if (!src) return "";
  if (src.startsWith("/public/")) {
    return src.replace("/public", "");
  }
  return src;
};

// =============================================================================
// 3. 子组件区 (Sub-components)
//    按从简单到复杂排序：AutoRail -> MentorCardSmall -> FeaturedMentorCard
// =============================================================================

/**
 * AutoRail - 自动滚动轨道组件
 * 基础组件，用于实现横向无限滚动动画，悬停时暂停
 * 使用速度（pixels/second）控制滚动速度
 */
function AutoRail({
  children,
  speed = 50,
  gapClass,
  viewportClass = "",
}: {
  children: React.ReactNode;
  speed?: number; // pixels per second
  gapClass: string;
  viewportClass?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    
    const updateDuration = () => {
      // 在 flex 下，包含了两个 {children} 所以总长度为实际滚动距离的两倍
      // 动画是到 -50%，所以滚动的物理长度刚好是原始 children 的宽度
      const singleContentWidth = track.scrollWidth / 2;
      if (singleContentWidth > 0) {
        setDuration(singleContentWidth / speed);
      }
    };

    updateDuration();
    
    // 这里使用 setTimeout 确保渲染完毕 DOM 排版稳定后再测一次
    const timer = setTimeout(updateDuration, 100);

    const observer = new ResizeObserver(updateDuration);
    observer.observe(track);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [speed, children]);

  return (
    <div className={`relative min-w-0 max-w-full overflow-x-hidden ${viewportClass}`}>
      <div className="py-[6px] w-full">
        <div
          ref={trackRef}
          className={`flex w-max ${gapClass} animate-marquee`}
          style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * MentorCardSmall - 小型导师卡片
 * 用于学术导师和产业导师列表展示
 */
function MentorCardSmall({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl?: string;
}) {
  const resolvedSrc = resolveImageSrc(imageUrl);

  return (
    <article className="relative h-[256px] w-[180px] shrink-0 overflow-hidden rounded-[15px] border border-[#149bff] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center p-[12px]">
      {/* 1. 图片区：取消 absolute，改用 w-full */}
      <div className="h-[180px] w-full overflow-hidden rounded-[10px]">
        <img
          src={resolvedSrc}
          alt={name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* 2. 名字区：利用 mt (margin-top) 来控制与图片的间距 */}
      <div className="mt-[8px] w-full text-left">
        <p className="text-[16px] font-bold leading-none text-black">{name}</p>
        <div className="mt-[4px] h-[3px] w-full rounded-[1px] bg-gradient-to-r from-[#149bff] to-[#43c5ac]" />
      </div>

      {/* 3. 描述区：mt-auto 会把它推到容器最底部 */}
      <p className="mt-1 h-[30px] w-full text-left text-[12px] font-medium leading-tight text-[#464646] line-clamp-2">
        {description}
      </p>
    </article>
  );
}

/**
 * FeaturedMentorCard - 精选导师卡片
 * 大型展示卡片，用于左侧突出显示主要导师
 */
function FeaturedMentorCard({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl?: string;
}) {
  const resolvedSrc = resolveImageSrc(imageUrl);

  return (
    <article className="relative flex h-[622px] w-[396px] shrink-0 items-center justify-center overflow-hidden rounded-[45px] border-[5px] border-[#149bff] bg-white">
      <article className="relative flex h-[522px] w-[326px] flex-col items-center rounded-[35px] bg-white shadow-[0_16px_32px_-8px_rgba(0,0,0,0.18)]">
        <div className="relative mt-[25px] h-[230px] w-[230px] shrink-0">
          <div className="absolute inset-[0px] translate-y-[4px] rounded-full bg-[#149bff] blur-[2px]" />

          <div className="absolute inset-0 rounded-full bg-white" />

          <div className="absolute inset-[8px] overflow-hidden rounded-full">
            {resolvedSrc ? (
              <img
                src={resolvedSrc}
                alt={name || "导师头像"}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#ffffff] text-[18px] font-bold text-[#646464]">
                导师占位
              </div>
            )}
          </div>

          <div className="pointer-events-none absolute inset-[8px] z-20 rounded-full shadow-[inset_0_6px_2px_0px_rgba(67,197,172,0.8)]" />
        </div>

        <div className="mt-6 flex w-full flex-col items-center pb-[30px]">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <p className="whitespace-nowrap text-[32px] font-bold leading-none text-[#383838]">
                {name}
              </p>
              <span className="absolute bottom-[2px] left-full mb-[-2px] ml-2 whitespace-nowrap text-[16px] font-bold text-[#383838]">
                教授
              </span>
            </div>

            <div className="mt-[8px] h-[4px] w-[250px] rounded-[2px] bg-gradient-to-r from-[#0071ef] to-[#149bff]" />
          </div>

          <p className="mb-[40px] mt-[5px] w-[240px] text-center text-[16px] font-medium leading-relaxed text-[#464646]">
            {description}
          </p>
        </div>
      </article>
    </article>
  );
}

// =============================================================================
// 4. 主组件区 (Main Component)
// =============================================================================

export function HomeResources() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-[20px] pb-[60px] pt-[80px]">
        {/* Title Section */}
        <div className="flex items-start gap-3">
          <img
            src="/assets/logo.svg"
            alt=""
            aria-hidden="true"
            className="h-12 w-12"
          />
          <div>
            <h2 className="text-[24px] font-bold leading-none text-[#383838]">
              实验室资源
            </h2>
            <p className="mt-[4px] text-[14px] font-bold leading-none text-[#383838]">
              Laboratory Resources
            </p>
          </div>
        </div>

        {/* Main Gradient Container */}
        <div
          className="mt-[40px] flex h-[687px] w-[1260px] flex-row gap-[32px] rounded-[45px] py-[32px] pl-[16px] pr-[32px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(67, 197, 172, 0.13) 100%),
              linear-gradient(147.5deg, rgba(20, 155, 255, 0) 84.772%, rgba(20, 155, 255, 0.65) 120.55%),
              linear-gradient(224.9deg, rgba(67, 197, 172, 0.13) 8.9927%, rgba(255, 255, 255, 0) 43.565%),
              linear-gradient(141.6deg, rgba(0, 113, 239, 0.65) 3.8182%, rgba(255, 255, 255, 0) 67.027%)
            `,
          }}
        >
          {/* Left Column - Featured Mentor */}
          <div className="flex shrink-0 items-center">
            <FeaturedMentorCard
              name={FEATURED_MENTOR.name}
              description={FEATURED_MENTOR.description}
              imageUrl={FEATURED_MENTOR.imageUrl}
            />
          </div>

          {/* Right Column - Mentor Grids */}
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-[32px]">
            {/* Academic Mentors Section */}
            <div className="w-full min-w-0">
              <div className="mb-[16px] flex flex-col items-start">
                <p className="text-[24px] font-bold leading-none text-black">
                  学术导师
                </p>
                <div className="mt-2 -mb-2 h-[5px] w-25 rounded-[5px] bg-[#0071ef]" />
              </div>
              <AutoRail speed={50} gapClass="gap-[16px]" viewportClass="pr-[2px]">
                {ACADEMIC_MENTORS.map((mentor) => (
                  <MentorCardSmall
                    key={mentor.id}
                    name={mentor.name}
                    description={mentor.description}
                    imageUrl={mentor.imageUrl}
                  />
                ))}
              </AutoRail>
            </div>

            {/* Industry Mentors Section */}
            <div className="w-full min-w-0">
              <div className="mb-[16px] flex flex-col items-start">
                <p className="text-[24px] font-bold leading-none text-black">
                  产业导师
                </p>
                <div className="mt-[8px] -mb-2 h-[5px] w-25 rounded-[5px] bg-[#0071ef]" />
              </div>
              <AutoRail speed={50} gapClass="gap-[16px]" viewportClass="pr-[2px]">
                {INDUSTRY_MENTORS.map((mentor) => (
                  <MentorCardSmall
                    key={mentor.id}
                    name={mentor.name}
                    description={mentor.description}
                    imageUrl={mentor.imageUrl}
                  />
                ))}
              </AutoRail>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
