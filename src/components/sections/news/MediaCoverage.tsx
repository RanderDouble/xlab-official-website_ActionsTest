"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { MEDIA_QUOTES } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function MediaCoverage() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <SectionHeader title="媒体关注" href="/news/list?category=media" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {MEDIA_QUOTES.map((item) => (
              <div
                key={item.id}
                className="min-w-[80%] md:min-w-[33%] lg:min-w-[25%] pr-4"
              >
                <div className="h-[260px] border-2 border-gray-800 rounded-xl p-5 flex flex-col justify-between bg-gray-50">
                  <div className="text-sm text-gray-800 leading-6">“{item.content}”</div>
                  <div className="text-xs text-gray-500">{item.mediaName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
