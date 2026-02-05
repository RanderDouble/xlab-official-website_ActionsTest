import Link from "next/link";

const textNews = [
  { id: 101, title: "工程实践成果发布", date: "2025-06-12" },
  { id: 102, title: "硬件实践课程开放报名", date: "2025-05-02" },
  { id: 103, title: "项目路演活动回顾", date: "2025-03-18" },
  { id: 104, title: "短期项目中期展示", date: "2025-04-08" },
];

const imageNews = [
  { id: 201, title: "项目现场图文 01", date: "2025-06-12" },
  { id: 202, title: "项目现场图文 02", date: "2025-05-20" },
  { id: 203, title: "项目现场图文 03", date: "2025-04-18" },
];

export function EngineeringNews() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">新闻动态</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
            {textNews.map((item) => (
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

          <div className="h-[300px] overflow-x-auto flex flex-nowrap">
            {imageNews.map((item) => (
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
        </div>
      </div>
    </section>
  );
}
