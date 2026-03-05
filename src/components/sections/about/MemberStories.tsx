"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ABOUT_MEMBER_STORIES } from "@/lib/data";

function StoryCard({
  title,
  summary,
  imageUrl,
  link,
}: {
  title: string;
  summary: string;
  imageUrl?: string;
  link: string;
}) {
  return (
    <div className="h-[330px] w-[420px] overflow-hidden rounded-[25px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="h-[238px] w-full bg-gradient-to-br from-[#0071EF] to-[#149BFF]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[16px] text-white/60">
            图片占位
          </div>
        )}
      </div>

      <div className="relative h-[92px] px-[20px] pt-[12px]">
        <h4 className="text-[24px] font-bold leading-[30px] text-black">
          {title}
        </h4>
        <p className="mt-[2px] text-[16px] font-bold leading-[20px] tracking-[1.8px] text-[#888888]">
          {summary}
        </p>
        <a
          href={link}
          className="absolute right-[18px] top-[36px] inline-flex h-[33px] w-[120px] items-center justify-center rounded-[5px] bg-gradient-to-r from-[#0071EF] to-[#149BFF] text-[18px] font-bold tracking-[2.5px] text-white"
        >
          查看详情
        </a>
      </div>
    </div>
  );
}

export function MemberStories() {
  const stories = ABOUT_MEMBER_STORIES;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startLeft: 0,
  });

  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    const trackElement = trackRef.current;
    const thumbElement = thumbRef.current;
    if (!scrollElement || !trackElement || !thumbElement) {
      return;
    }

    const syncThumb = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
      const trackWidth = trackElement.clientWidth;
      const maxScrollLeft = Math.max(scrollWidth - clientWidth, 0);

      if (maxScrollLeft <= 0) {
        thumbElement.style.width = `${trackWidth}px`;
        thumbElement.style.transform = "translateX(0px)";
        thumbElement.dataset.left = "0";
        thumbElement.dataset.width = `${trackWidth}`;
        return;
      }

      const visualThumbWidth = Math.max(
        72,
        Math.min(120, (clientWidth / scrollWidth) * trackWidth),
      );
      const maxThumbLeft = Math.max(trackWidth - visualThumbWidth, 0);
      const thumbLeft = (scrollLeft / maxScrollLeft) * maxThumbLeft;

      thumbElement.style.width = `${visualThumbWidth}px`;
      thumbElement.style.transform = `translateX(${thumbLeft}px)`;
      thumbElement.dataset.left = `${thumbLeft}`;
      thumbElement.dataset.width = `${visualThumbWidth}`;
    };

    const onScroll = () => {
      syncThumb();
    };

    const onResize = () => {
      syncThumb();
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!dragStateRef.current.isDragging) {
        return;
      }

      const trackWidth = trackElement.clientWidth;
      const thumbWidth = Number(thumbElement.dataset.width ?? "0");
      const maxThumbLeft = Math.max(trackWidth - thumbWidth, 0);
      const deltaX = event.clientX - dragStateRef.current.startX;
      const nextThumbLeft = Math.min(
        Math.max(dragStateRef.current.startLeft + deltaX, 0),
        maxThumbLeft,
      );

      const maxScrollLeft = Math.max(
        scrollElement.scrollWidth - scrollElement.clientWidth,
        0,
      );
      const nextScrollLeft =
        maxThumbLeft === 0 ? 0 : (nextThumbLeft / maxThumbLeft) * maxScrollLeft;
      scrollElement.scrollLeft = nextScrollLeft;
    };

    const onMouseUp = () => {
      dragStateRef.current.isDragging = false;
      thumbElement.style.cursor = "grab";
      document.body.style.userSelect = "";
    };

    const onTrackClick = (event: MouseEvent) => {
      if (dragStateRef.current.isDragging || event.target === thumbElement) {
        return;
      }

      const trackRect = trackElement.getBoundingClientRect();
      const clickX = event.clientX - trackRect.left;
      const thumbWidth = Number(thumbElement.dataset.width ?? "0");
      const trackWidth = trackElement.clientWidth;
      const maxThumbLeft = Math.max(trackWidth - thumbWidth, 0);
      const nextThumbLeft = Math.min(
        Math.max(clickX - thumbWidth / 2, 0),
        maxThumbLeft,
      );

      const maxScrollLeft = Math.max(
        scrollElement.scrollWidth - scrollElement.clientWidth,
        0,
      );
      const nextScrollLeft =
        maxThumbLeft === 0 ? 0 : (nextThumbLeft / maxThumbLeft) * maxScrollLeft;

      scrollElement.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
    };

    const onThumbMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      dragStateRef.current.isDragging = true;
      dragStateRef.current.startX = event.clientX;
      dragStateRef.current.startLeft = Number(thumbElement.dataset.left ?? "0");
      thumbElement.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    syncThumb();
    scrollElement.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    trackElement.addEventListener("click", onTrackClick);
    thumbElement.addEventListener("mousedown", onThumbMouseDown);

    return () => {
      scrollElement.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      trackElement.removeEventListener("click", onTrackClick);
      thumbElement.removeEventListener("mousedown", onThumbMouseDown);
      document.body.style.userSelect = "";
    };
  }, [stories.length]);

  return (
    <section className="relative z-30 mt-[-300px] w-full bg-white py-[40px]">
      <div className="relative mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="relative z-40 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img alt="" className="h-12 w-12" src="/assets/logo.svg" />
            <div className="">
              <div className="text-[28px] font-semibold text-[#383838]">
                成员故事
              </div>
              <div className="text-[15px] text-[#383838] mt-[-2px]">Their Stories</div>
            </div>
          </div>
          <Link
            className="relative z-50 flex items-center gap-2.5 text-[15px] font-semibold text-[#cecece] transition-colors hover:text-[#0071ef]"
            href="/about/stories"
          >
            <span>查看全部</span>
            <span className="text-lg leading-none text-[#0071ef]">&gt;</span>
          </Link>
        </div>
        <div className="mt-8 overflow-visible">
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex overflow-x-auto overflow-y-hidden px-[2px] py-[6px]"
          >
            <div className="flex gap-[30px]">
              {stories.map((story) => (
                <StoryCard
                  key={story.id}
                  title={story.title}
                  summary={story.summary}
                  imageUrl={story.imageUrl}
                  link={story.link}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div
            ref={trackRef}
            className="relative h-[10px] w-[640px] rounded-full bg-[#D9D9D9]"
          >
            <div
              ref={thumbRef}
              className="absolute left-0 top-0 h-[10px] rounded-full bg-[#646464]"
              style={{ width: "88px", cursor: "grab" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
