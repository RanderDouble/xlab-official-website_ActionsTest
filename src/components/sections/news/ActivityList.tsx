import { ACTIVITIES } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ActivityList() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <SectionHeader title="活动招募" href="/news/list?category=activity" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACTIVITIES.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 flex gap-4">
              <div className="aspect-square w-[96px] bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                Img
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-base font-semibold text-gray-800">{item.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.date}</div>
                </div>
                <div>
                  {item.status === "active" ? (
                    <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-purple-200 text-purple-900">
                      去参加 -&gt;
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 text-sm rounded-full border text-gray-500">
                      已结束
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
