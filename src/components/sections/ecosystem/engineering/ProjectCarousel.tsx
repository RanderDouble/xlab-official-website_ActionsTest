"use client";

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { SHORT_TERM_PROJECTS } from "@/lib/data";
import { BrowserWindowCard } from "@/components/shared/BrowserWindowCard";

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <BrowserWindowCard>
          <div className="relative">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-900 bg-white hover:bg-gray-50 transition-colors z-10"
              aria-label="上一项"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-900 bg-white hover:bg-gray-50 transition-colors z-10"
              aria-label="下一项"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="overflow-hidden px-12 md:px-16" ref={emblaRef}>
              <div className="flex">
                {SHORT_TERM_PROJECTS.map((item) => (
                  <div key={item.id} className="min-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-8 items-center">
                      <div className="space-y-4 md:space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                      <div className="relative h-[240px] md:h-[320px] bg-gray-100 border border-gray-900 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.image_title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {SHORT_TERM_PROJECTS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-gray-900 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`跳转到第 ${index + 1} 项`}
                />
              ))}
            </div>
          </div>
        </BrowserWindowCard>
      </div>
    </section>
  );
}
