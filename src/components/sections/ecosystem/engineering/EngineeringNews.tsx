import Link from "next/link";
import {ENGINEERING_TEXT_NEWS, ENGINEERING_IMAGE_NEWS} from "@/lib/data"


export function EngineeringNews() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-4">
        <div className="flex items-baseline">
          <h2 className="text-2xl font-semibold text-gray-900 mr-4">新闻动态</h2>
          <Link href="/ecosystem/engineering/news" className="text-sm text-gray-600 hover:text-gray-900">
            more&gt;&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-[300px] overflow-x-auto flex flex-nowrap">
            {ENGINEERING_IMAGE_NEWS.map((item) => (
              <div key={item.id} className="min-w-full pr-4">
                <div className="h-full bg-white border border-gray-900 rounded-lg overflow-hidden">
                  <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                    图片新闻
                  </div>
                  <div className="p-3">
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="text-base text-gray-800 mt-1">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
            {ENGINEERING_TEXT_NEWS.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="border border-gray-900 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="text-sm text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-500">{item.date}</div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
