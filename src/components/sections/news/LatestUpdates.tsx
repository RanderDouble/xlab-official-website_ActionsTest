import { LATEST_NEWS } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function LatestUpdates() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <SectionHeader title="最新发布" href="/news/list?category=latest" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {LATEST_NEWS.featured.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden bg-white">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 transition-transform hover:scale-105">
                  Cover
                </div>
              </div>
              <div className="p-3 text-sm text-gray-800">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col divide-y">
          {LATEST_NEWS.list.map((item) => (
            <div key={item.id} className="py-3 flex items-center justify-between">
              <div className="text-sm text-gray-800">{item.title}</div>
              <div className="text-xs text-gray-500">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
