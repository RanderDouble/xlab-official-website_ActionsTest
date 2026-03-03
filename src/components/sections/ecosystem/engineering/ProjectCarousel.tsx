"use client";

import { useCallback, useEffect, useState } from "react";
// 移除 Autoplay 导入
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { SHORT_TERM_PROJECTS } from "@/lib/data";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";

export function ProjectCarousel() {
  // 1. 取消自动播放：移除 Autoplay 插件配置
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" } 
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

    const handleSelect = () => {
      queueMicrotask(() => {
        onSelect();
      });
    };

    emblaApi.on("select", handleSelect);
    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <LogoWithTitle chineseText="项目成果" englishText="Project Results" />

        <div className="relative mt-8">
          {/* 按钮层：z-30 确保在最上方 */}
          <button onClick={scrollPrev} className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-transform">
             <Image src="/engineering/left_arrow.svg" width={40} height={60} alt="Prev" className="w-8 md:w-10 h-auto" />
          </button>
          <button onClick={scrollNext} className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-transform">
             <Image src="/engineering/right_arrow.svg" width={40} height={60} alt="Next" className="w-8 md:w-10 h-auto" />
          </button>

          <div className="relative w-full aspect-[1245/560] min-h-[450px] md:min-h-[560px]">
            {/* 背景图层 */}
            <div className="absolute inset-0 z-0">
              <Image src="/engineering/project_results/bg.svg" fill alt="background" className="object-contain" priority />
            </div>

            <div 
              className="absolute top-0 bottom-0 left-[50px] right-[50px] md:left-[80px] md:right-[80px] z-10 overflow-hidden" 
              ref={emblaRef}
            >
              <div className="flex h-full">
                {SHORT_TERM_PROJECTS.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex-[0_0_100%] min-w-0 h-full px-4 md:px-8 py-12 md:py-20" // Slide 仍然占满这个收缩后的容器
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full w-full">
                      {/* 文字区 */}
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-[32px] font-bold text-gray-800 border-b-2 border-gray-300 pb-2 inline-block self-start mb-4 md:mb-6">
                          {item.title}
                        </h3>
                        <p className="text-blue-500 font-medium text-sm md:text-base leading-[1.8] mb-2">
                          {item.brief}
                        </p>
                        <div className="flex flex-col space-y-4 md:space-y-6">
                          {item.description.split('\n').map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-sm md:text-base text-gray-600 leading-[1.8] text-justify">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* 图片区 */}
                      <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 分页指示器 */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              {SHORT_TERM_PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`transition-all duration-300 rounded-full border-2 ${
                    index === selectedIndex ? "bg-blue-600 border-blue-600 w-3 h-3" : "bg-transparent border-gray-300 w-2.5 h-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}