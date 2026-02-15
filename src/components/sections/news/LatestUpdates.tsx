import { LATEST_NEWS } from "@/lib/data";
import { NewsSectionHeader } from "@/components/sections/news/NewsSectionHeader";

export function LatestUpdates() {
  const resolveImageSrc = (src: string) => {
    if (src.startsWith("/public/")) {
      return src.replace("/public", "");
    }
    return src;
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] py-10 space-y-4">
        <NewsSectionHeader
          title="最新发布"
          subtitle="Latest Release"
          href="/news/list"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-9 justify-items-center">
          {LATEST_NEWS.featured.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[10px] overflow-hidden border border-[#f3f3f3] shadow-[0px_0px_16px_rgba(79,79,79,0.08)] h-[384px] w-full max-w-[300px] relative"
            >
              <div className="absolute inset-x-0 top-0 h-[224px] overflow-hidden bg-[#f3f3f3]">
                <img
                  src={resolveImageSrc(item.image)}
                  alt={item.title}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 top-[224px] h-[160px] px-2 pt-3 pb-2 border-t border-[#f3f3f3] relative">
                <div className="text-[15px] font-semibold text-[#383838] text-left">
                  {item.title}
                </div>
                <div className="text-[10px] font-semibold text-[#646464] leading-[1.45] mt-1 text-left">
                  {item.summary}
                </div>
                <span className="absolute left-3 bottom-3 inline-flex items-center justify-center h-[25px] w-[71.25px] rounded-[7px] text-white bg-gradient-to-r from-[#0071ef] to-[#149bff]">
                  <span className="block w-full text-[13px] tracking-[0.6em] text-center pl-[0.6em]">
                    {item.category}
                  </span>
                </span>
                <span className="absolute right-2 bottom-3 text-[11px] font-semibold text-[#646464]">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {LATEST_NEWS.list.map((item) => (
            <div key={item.id} className="border-t border-[#f3f3f3] pt-4">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-1">
                  <div className="text-[15px] font-semibold text-[#383838]">
                    {item.title}
                  </div>
                  <div className="text-[11px] font-semibold text-[#646464]">
                    {item.summary}
                  </div>
                </div>
                <div className="text-[11px] font-semibold text-[#646464] whitespace-nowrap">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
