"use client";

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { LATEST_NEWS } from "@/lib/data";

const partners = [
  { id: 1, name: "合作机构 A" },
  { id: 2, name: "合作机构 B" },
  { id: 3, name: "合作机构 C" },
  { id: 4, name: "合作机构 D" },
  { id: 5, name: "合作机构 E" },
];

export function PartnerSync() {
  const [partnerRef, partnerApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!partnerApi) return;
    setSelectedIndex(partnerApi.selectedScrollSnap());
  }, [partnerApi]);

  useEffect(() => {
    if (!partnerApi) return;
    setSnapCount(partnerApi.scrollSnapList().length);
    onSelect();
    partnerApi.on("select", onSelect);
    partnerApi.on("reInit", onSelect);
  }, [partnerApi, onSelect]);

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">合作机构</h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => partnerApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-900 bg-white flex items-center justify-center"
            aria-label="上一页"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => partnerApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-900 bg-white flex items-center justify-center"
            aria-label="下一页"
          >
            &gt;
          </button>

          <div className="overflow-hidden px-12" ref={partnerRef}>
            <div className="flex">
              {partners.map((item) => (
                <div key={item.id} className="min-w-[80%] md:min-w-[33.33%] pr-4">
                  <div className="border border-gray-900 rounded-lg h-[220px] bg-slate-100 flex flex-col">
                    <div className="flex-1 border-b border-gray-900" />
                    <div className="flex-1 flex items-center justify-center text-sm text-gray-600">
                      {item.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => partnerApi?.scrollTo(index)}
                className={`h-2 w-6 rounded-full border border-gray-900 ${
                  index === selectedIndex ? "bg-blue-400" : "bg-white"
                }`}
                aria-label={`跳转到第 ${index + 1} 页`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">合作新闻</h3>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee">
              {[...LATEST_NEWS.featured, ...LATEST_NEWS.featured].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%]"
                >
                  <div className="border border-gray-900 rounded-lg p-4 bg-white h-[180px] flex flex-col justify-between">
                    <div className="text-sm text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500">合作新闻展示</div>
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
