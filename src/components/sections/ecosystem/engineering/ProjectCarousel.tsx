"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { SHORT_TERM_PROJECTS } from "@/lib/data";
import { BrowserWindowCard } from "@/components/shared/BrowserWindowCard";

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <BrowserWindowCard>
          <div className="relative">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-900 bg-white"
              aria-label="上一项"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-900 bg-white"
              aria-label="下一项"
            >
              &gt;
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {SHORT_TERM_PROJECTS.map((item) => (
                  <div key={item.id} className="min-w-full pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 items-center">
                      <div className="space-y-4">
                        <div className="text-2xl font-semibold text-gray-900">{item.title}</div>
                        <p className="text-sm text-gray-600 leading-6">{item.description}</p>
                        <div className="text-xs text-gray-400">背景纹理: {item.bgPattern}</div>
                      </div>
                      <div className="h-[240px] md:h-[300px] bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
                        项目图片
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {SHORT_TERM_PROJECTS.map((item) => (
                <span key={item.id} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>
        </BrowserWindowCard>
      </div>
    </section>
  );
}
