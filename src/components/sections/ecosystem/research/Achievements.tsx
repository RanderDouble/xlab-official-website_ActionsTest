import { RESEARCH_PROJECTS } from "@/lib/data";

export function Achievements() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          <div className="border border-gray-900 rounded-lg p-6 text-2xl font-semibold text-gray-900">
            科研成果
          </div>
          <div className="border border-gray-900 rounded-lg p-6 flex items-center justify-center text-gray-500">
            Logo
          </div>
        </div>

        <div className="border border-gray-900 rounded-lg h-[180px] bg-gray-100 flex items-center justify-center text-gray-600">
          成果概述（产出多少文章...）
        </div>

        <div className="border border-gray-900 rounded-lg p-6">
          <div className="flex flex-col gap-8">
            {RESEARCH_PROJECTS.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="text-xl font-semibold text-gray-900">{item.title}</div>
                  <p className="text-sm text-gray-600 mt-2 leading-6">{item.description}</p>
                </div>
                <div className="flex-1">
                  <div className="w-full h-[220px] bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
                    图表 / 图片
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
