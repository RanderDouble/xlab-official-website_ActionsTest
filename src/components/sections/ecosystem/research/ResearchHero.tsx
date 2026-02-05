import { RESEARCH_NEWS } from "@/lib/data";

export function ResearchHero() {
  const first = RESEARCH_NEWS[0];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <div className="border border-gray-900 rounded-lg h-[260px] md:h-[320px] bg-gray-100 flex items-center justify-center text-gray-700">
          Banner
        </div>

        <div className="border border-gray-900 rounded-lg p-4 md:p-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="border border-gray-900 rounded-md w-16 h-16 flex flex-col items-center justify-center text-sm">
                <div className="font-semibold">{first.date.day}</div>
                <div className="text-gray-500 uppercase">{first.date.month}</div>
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900">{first.title}</div>
                <div className="text-sm text-gray-500 mt-1">{first.desc}</div>
              </div>
            </div>
            <div className="w-28 h-16 bg-gray-200 border border-gray-900 rounded flex items-center justify-center text-xs text-gray-500">
              缩略图
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
