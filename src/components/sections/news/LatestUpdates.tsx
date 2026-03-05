import Link from "next/link";
import { FEATURED_NEWS, NEWS_LIST } from "@/lib/data";
import { NewsSectionHeader } from "@/components/sections/news/NewsSectionHeader";

export function LatestUpdates() {
  const resolveImageSrc = (src?: string) => {
    if (!src) return "";
    if (src.startsWith("/public/")) {
      return src.replace("/public", "");
    }
    return src;
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-[60px] py-10 space-y-4">
        <NewsSectionHeader
          title="最新发布"
          subtitle="Latest Release"
          href="/news/latest"
        />

        <div className="grid grid-cols-4 gap-9 justify-items-center">
          {FEATURED_NEWS.map((item) => (
            <Link key={item.id} href={item.link || "#"} className="block w-full max-w-[300px]">
              <div className="bg-white rounded-[10px] overflow-hidden border border-[#f3f3f3] shadow-[0px_0px_16px_rgba(79,79,79,0.08)] h-[440px] relative hover:shadow-[0px_0px_20px_rgba(79,79,79,0.12)] transition-shadow cursor-pointer">
                <div className="absolute inset-x-0 top-0 h-[260px] overflow-hidden bg-[#f3f3f3]">
                  <img
                    src={resolveImageSrc(item.imageUrl)}
                    alt={item.title}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-x-0 top-[260px] h-[180px] px-3 pt-4 pb-2 border-t border-[#f3f3f3] relative">
                  <div className="text-[17px] font-semibold text-[#383838] text-left leading-snug">
                    {item.title}
                  </div>
                  <div className="text-xs font-semibold text-[#646464] leading-[1.45] mt-2 text-left">
                    {item.summary}
                  </div>
                  <span className="absolute left-3 bottom-3 inline-flex items-center justify-center px-4 h-[32px] min-w-[80px] rounded-full text-white bg-gradient-to-r from-[#0071ef] to-[#149bff] shadow-sm">
                    <span className="text-[15px] font-bold tracking-widest leading-none">
                      {item.category}
                    </span>
                  </span>
                  <span className="absolute right-3 bottom-3 text-xs font-semibold text-[#646464]">
                    {item.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          {NEWS_LIST.map((item) => (
            <Link key={item.id} href={item.link || "#"} className="block">
              <div className="border-t border-[#f3f3f3] pt-5 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <div className="text-[17px] font-semibold text-[#383838]">
                      {item.title}
                    </div>
                    <div className="text-xs font-semibold text-[#646464]">
                      {item.summary}
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#646464] whitespace-nowrap">
                    {item.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
