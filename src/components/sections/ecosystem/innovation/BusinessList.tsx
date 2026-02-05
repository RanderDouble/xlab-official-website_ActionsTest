import { BUSINESS_PROJECTS } from "@/lib/data";

export function BusinessList() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">商业探索</h2>
        <div className="flex flex-col gap-4">
          {BUSINESS_PROJECTS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className="border border-gray-900 rounded-lg p-4 flex flex-col md:flex-row gap-4 h-auto md:h-[200px] bg-white"
            >
              <div className="w-full md:w-[220px] aspect-[4/3] bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                头图
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{item.name}</div>
                  <p className="text-sm text-gray-600 mt-2 leading-6">{item.description}</p>
                </div>
                <div className="text-sm text-gray-500">查看详情 &gt;&gt;</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
