"use client";

import useEmblaCarousel from "embla-carousel-react";
import { TESTIMONIALS } from "@/lib/data";

export function Gramophone() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-yellow-50 border border-gray-900 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">留声机</h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="min-w-full pr-4">
                  <div className="bg-white border border-gray-900 rounded-xl p-6 h-[200px] flex flex-col justify-between">
                    <div className="text-4xl text-gray-300">“”</div>
                    <div className="text-sm text-gray-700 leading-6">{item.content}</div>
                    <div className="text-xs text-gray-500">
                      {item.author} · {item.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
