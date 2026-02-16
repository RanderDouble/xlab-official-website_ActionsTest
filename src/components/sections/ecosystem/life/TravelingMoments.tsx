import Link from "next/link";
import { TRAVEL_MOMENTS } from "@/lib/data";

export function TravelingMoments() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">同行时刻</h2>
        <div className="hidden md:grid grid-cols-4 gap-6">
          {TRAVEL_MOMENTS.slice(0, 4).map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className={`group flex flex-col border border-gray-900 rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "translate-y-6" : "translate-y-0"
              }`}
            >
              <div className="h-[220px] bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                图
              </div>
              <div className="border-t border-gray-900 bg-purple-100/60 px-3 py-2 text-sm text-gray-800 flex items-center justify-between">
                <span className="transition-transform duration-300 group-hover:scale-105">{item.title}</span>
                <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center text-xs transition-transform duration-300 group-hover:scale-105">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {TRAVEL_MOMENTS.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group min-w-[240px] snap-start flex flex-col border border-gray-900 rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105"
            >
              <div className="h-[180px] bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                图
              </div>
              <div className="border-t border-gray-900 bg-purple-100/60 px-3 py-2 text-sm text-gray-800 flex items-center justify-between">
                <span className="transition-transform duration-300 group-hover:scale-105">{item.title}</span>
                <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center text-xs transition-transform duration-300 group-hover:scale-105">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
