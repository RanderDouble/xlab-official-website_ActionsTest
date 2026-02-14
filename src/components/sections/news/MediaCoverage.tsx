"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { MEDIA_QUOTES } from "@/lib/data";
import { NewsSectionHeader } from "@/components/sections/news/NewsSectionHeader";

const CARD_GAP = 24;
const SCROLL_SPEED = 45;
const CARD_HEIGHT = 220;

export function MediaCoverage() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      if (!viewportRef.current) return;
      const nextCardWidth = Math.floor(
        (viewportRef.current.offsetWidth - CARD_GAP * 3) / 4
      );
      setCardWidth(nextCardWidth);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const updateDistance = () => {
      if (!sequenceRef.current) return;
      setScrollDistance(sequenceRef.current.offsetWidth + CARD_GAP);
    };

    updateDistance();
    const frameId = window.requestAnimationFrame(updateDistance);
    return () => window.cancelAnimationFrame(frameId);
  }, [cardWidth]);

  const duration = scrollDistance > 0 ? scrollDistance / SCROLL_SPEED : 30;

  const renderCard = (item: (typeof MEDIA_QUOTES)[number], key: string) => (
    <div
      key={key}
      className="shrink-0"
      style={{ width: `${cardWidth}px`, flex: `0 0 ${cardWidth}px` }}
    >
      <div className="bg-white rounded-[10px] shadow-[0px_0px_16px_rgba(79,79,79,0.11)] px-6 py-4 flex flex-col" style={{ height: `${CARD_HEIGHT}px` }}>
        <div className="flex-1 space-y-3">
          <div className="h-5 w-5 rounded-[2px] bg-[#e5e5e5]" aria-hidden="true" />
          <p className="text-[13px] text-[#383838] leading-[1.6]">{item.content}</p>
        </div>

        <div className="space-y-3">
          <div className="h-px w-full bg-[#d9d9d9]" aria-hidden="true" />
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[14px] font-semibold text-[#383838]">{item.mediaName}</div>
              <div className="text-[9px] text-[#383838]">{item.date}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-[2px] bg-[#e5e5e5]" aria-hidden="true" />
              <div className="h-2.5 w-[56px] rounded-[2px] bg-[#e5e5e5]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] py-10 space-y-5">
        <NewsSectionHeader title="媒体关注" subtitle="Media Attention" href="/news/list?category=media" />
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-2 md:px-3 lg:px-4 pb-10">
        <div className="media-marquee-viewport overflow-x-hidden overflow-y-visible py-6" ref={viewportRef}>
          <div
            className="media-marquee-track flex w-max gap-6"
            style={
              {
                "--marquee-distance": `${scrollDistance}px`,
                "--marquee-duration": `${duration}s`,
              } as CSSProperties
            }
          >
            <div ref={sequenceRef} className="flex shrink-0 gap-6">
              {MEDIA_QUOTES.map((item) => renderCard(item, `seq-a-${item.id}`))}
            </div>

            <div className="flex shrink-0 gap-6" aria-hidden="true">
              {MEDIA_QUOTES.map((item) => renderCard(item, `seq-b-${item.id}`))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .media-marquee-track {
          animation: media-marquee var(--marquee-duration, 30s) linear infinite;
          will-change: transform;
        }

        .media-marquee-viewport:hover .media-marquee-track {
          animation-play-state: paused;
        }

        @keyframes media-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-1 * var(--marquee-distance, 0px)), 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
