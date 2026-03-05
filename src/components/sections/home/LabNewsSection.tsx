"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { HOME_LAB_NEWS_TEXT, HOME_LAB_NEWS_IMAGE } from "@/lib/data";
import type { LabNews } from "@/types";

// ==================== Constants ====================

const IMAGE_CARD_RATIO = 629 / 317;
const CARD_GAP = 11;
const TRANSITION_DURATION = 500;
const AUTOPLAY_INTERVAL = 4500;
const RIGHT_EDGE_GUTTER = 16;

// ==================== Utility Functions ====================

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (src.startsWith("/public/")) {
    return src.replace("/public", "");
  }
  return src;
};

// ==================== Sub-components ====================

interface NewsListItemProps {
  item: LabNews;
}

function NewsListItem({ item }: NewsListItemProps) {
  const content = (
    <article className="grid grid-cols-[1fr_auto] gap-3 border-b border-[#cecece] py-[14px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="min-w-0">
        <h3 className="truncate text-[18px] font-bold leading-[1.2] text-[#646464]">
          {item.title}
        </h3>
        <p className="mt-[8px] truncate text-[12px] font-bold leading-none text-[#646464]">
          {item.summary}
        </p>
      </div>
      <time className="pt-[2px] text-[12px] font-bold leading-none text-[#646464]">
        {item.date}
      </time>
    </article>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

interface NewsCardProps {
  item: LabNews;
  cardWidth: number;
  isFirst: boolean;
  cardRef?: React.RefObject<HTMLElement | null>;
}

function NewsCard({ item, cardWidth, isFirst, cardRef }: NewsCardProps) {
  const imageSrc = resolveImageSrc(item.imageUrl);
  const content = (
    <article
      ref={isFirst ? cardRef : undefined}
      className="relative shrink-0 overflow-hidden rounded-[10px]"
      style={{
        width: cardWidth ? `${cardWidth}px` : undefined,
        minWidth: cardWidth ? `${cardWidth}px` : undefined,
        aspectRatio: `${IMAGE_CARD_RATIO}`,
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={item.title}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#e9e9e9] text-[14px] font-bold text-[#646464]">
          图片占位
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 rounded-b-[10px] bg-black/55 px-[16px] pb-[15px] pt-[11px] text-white">
        <h3 className="text-[24px] font-bold leading-none">{item.title}</h3>
        <p className="mt-[10px] truncate text-[16px] font-bold leading-none">
          {item.summary}
        </p>
      </div>
    </article>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block shrink-0 cursor-pointer transition-opacity hover:opacity-95"
      >
        {content}
      </a>
    );
  }

  return content;
}

// ==================== Main Component ====================

export function LabNewsSection() {
  const railContainerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);
  const isAnimatingRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [stepSize, setStepSize] = useState(0);
  const [rightEdgeOffset, setRightEdgeOffset] = useState(0);

  const slides = HOME_LAB_NEWS_IMAGE;
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  const recalcStepSize = useCallback(() => {
    if (!railContainerRef.current) return;
    const nextCardWidth = railContainerRef.current.offsetWidth * 0.874;
    const rect = railContainerRef.current.getBoundingClientRect();
    const offsetToViewportRight = Math.max(
      0,
      window.innerWidth - rect.right - RIGHT_EDGE_GUTTER,
    );
    setCardWidth(nextCardWidth);
    setStepSize(nextCardWidth + CARD_GAP);
    setRightEdgeOffset(offsetToViewportRight);
  }, []);

  useEffect(() => {
    recalcStepSize();
    window.addEventListener("resize", recalcStepSize);
    return () => window.removeEventListener("resize", recalcStepSize);
  }, [recalcStepSize]);

  useEffect(() => {
    if (!stepSize || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setCurrentIndex((prev) => prev + 1);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [stepSize, slides.length]);

  const resetTo = useCallback((nextIndex: number) => {
    setIsTransitioning(false);
    setCurrentIndex(nextIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
        isAnimatingRef.current = false;
      });
    });
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex === 0) {
      resetTo(slides.length);
      return;
    }

    if (currentIndex === slides.length + 1) {
      resetTo(1);
      return;
    }

    isAnimatingRef.current = false;
  }, [currentIndex, resetTo, slides.length]);

  const translateX = stepSize ? currentIndex * stepSize : 0;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-[20px] pb-10 pt-[52px]">
        <div className="grid grid-cols-[1fr_1.22fr] gap-10">
          <div className="min-w-0">
            <div className="mb-4 flex items-start justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/logo.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12"
                  />
                  <div>
                    <h2 className="text-[24px] font-bold leading-none text-[#383838]">
                      实验室新闻
                    </h2>
                    <p className="mt-[4px] text-[14px] font-bold leading-none text-[#383838]">
                      About Our News
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/news"
                className="mt-[4px] inline-flex items-center gap-2 text-[16px] font-bold leading-none text-[#cecece]"
              >
                查看全部
                <span className="text-[26px] font-normal leading-none text-[#0071ef]  translate-y-[-2px]">
                  ›
                </span>
              </Link>
            </div>

            <div className="border-t border-[#cecece]">
              {HOME_LAB_NEWS_TEXT.slice(0, 4).map((item) => (
                <NewsListItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="min-w-0 mt-[70px]" ref={railContainerRef}>
            <div
              className="overflow-hidden"
              ref={viewportRef}
              style={
                rightEdgeOffset
                  ? {
                      width: `calc(100% + ${rightEdgeOffset}px)`,
                      marginRight: `-${rightEdgeOffset}px`,
                    }
                  : undefined
              }
            >
              <div
                className="flex gap-[11px] pb-1"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translateX(-${translateX}px)`,
                  transition: isTransitioning
                    ? `transform ${TRANSITION_DURATION}ms ease-out`
                    : "none",
                }}
              >
                {extendedSlides.map((item, index) => (
                  <NewsCard
                    key={`${item.id}-${index}`}
                    item={item}
                    cardWidth={cardWidth}
                    isFirst={index === 1}
                    cardRef={firstCardRef}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
