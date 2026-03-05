"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { MEDIA_QUOTES } from "@/lib/data";
import { NewsSectionHeader } from "@/components/sections/news/NewsSectionHeader";

const CARD_GAP = 24;
const SCROLL_SPEED = 45;
const CARD_HEIGHT = 260;

// ==================== Utility Functions ====================

function formatDate(dateStr: string): string {
  return dateStr.replace(/-/g, "/");
}

// ==================== Sub-components ====================

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.384-5.798 4.076-5.798 6.81 0 0 .133-.065.335-.065.891 0 1.779.327 2.468.909.692.584 1.062 1.4 1.062 2.301 0 1.8-1.481 3.263-3.303 3.263-1.182 0-2.29-.628-2.897-1.639-.19-.315-.295-.67-.295-1.038 0-.402.127-.783.35-1.11zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.384-5.798 4.076-5.798 6.81 0 0 .133-.065.335-.065.891 0 1.779.327 2.468.909.692.584 1.062 1.4 1.062 2.301 0 1.8-1.481 3.263-3.303 3.263-1.182 0-2.29-.628-2.897-1.639-.19-.315-.295-.67-.295-1.038 0-.402.127-.783.35-1.11z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

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
    <Link
      key={key}
      href={item.link}
      className="shrink-0 block cursor-pointer"
      style={{ width: `${cardWidth}px`, flex: `0 0 ${cardWidth}px` }}
    >
      <div
        className="bg-white rounded-[10px] shadow-[0px_0px_16px_rgba(79,79,79,0.11)] px-7 py-5 flex flex-col hover:shadow-[0px_0px_20px_rgba(79,79,79,0.15)] transition-shadow"
        style={{ height: `${CARD_HEIGHT}px` }}
      >
        {/* Top: Quote icon + content + date */}
        <div className="flex-1 flex flex-col">
          <QuoteIcon className="mb-3" />
          <p className="text-[15px] text-[#383838] leading-[1.6] flex-1">
            {item.content}
          </p>
          <div className="text-[12px] text-[#383838] text-right mt-2">
            {formatDate(item.date)}
          </div>
        </div>

        {/* Separator line */}
        <div className="h-px w-full bg-[#D9D9D9] my-4" aria-hidden="true" />

        {/* Bottom: Book icon + media name | Logo + X-Lab */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/news/Book.svg"
              alt=""
              width={21}
              height={27}
              className="shrink-0"
            />
            <span className="text-base font-semibold text-[#383838]">
              {item.mediaName}
            </span>
          </div>
          <div className="flex items-center gap-1.5 -mb-4 -mr-1">
            <Image
              src="/assets/header/Logo.svg"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="text-base font-semibold text-[#383838]">X-Lab</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-[60px] py-10 space-y-5">
        <NewsSectionHeader title="媒体关注" subtitle="Media Attention" href="/news/media" />
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-4 pb-10">
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
