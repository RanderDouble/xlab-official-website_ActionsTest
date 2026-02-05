import type { NewsItem } from "@/types";

const newsList: NewsItem[] = [
  { id: "n1", title: "实验室动态新闻标题占位 01", date: "2026-02-01", type: "text" },
  { id: "n2", title: "实验室动态新闻标题占位 02", date: "2026-01-28", type: "text" },
  { id: "n3", title: "实验室动态新闻标题占位 03", date: "2026-01-20", type: "text" },
  { id: "n4", title: "实验室动态新闻标题占位 04", date: "2026-01-12", type: "text" },
];

const newsImages: NewsItem[] = [
  {
    id: "i1",
    title: "图片新闻占位 01",
    date: "2026-02-01",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
  {
    id: "i2",
    title: "图片新闻占位 02",
    date: "2026-01-25",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
  {
    id: "i3",
    title: "图片新闻占位 03",
    date: "2026-01-10",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
];

export function HomeBanner() {
  return (
    <section className="w-full">
      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-600">
        banner
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">实验室新闻</h2>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">按时间筛选</button>
            </div>
            <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
              {newsList.map((item) => (
                <div key={item.id} className="bg-white border rounded p-4">
                  <div className="text-sm text-gray-500">{item.date}</div>
                  <div className="text-base text-gray-800 mt-1">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[300px] overflow-x-auto flex flex-nowrap">
            {newsImages.map((item) => (
              <div key={item.id} className="min-w-full pr-4">
                <div className="h-full bg-white border rounded overflow-hidden">
                  <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                    image
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
