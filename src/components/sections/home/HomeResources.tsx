import { HomeIntro } from "@/components/sections/home/HomeIntro";

const mentorList = [
  "导师A",
  "导师B",
  "导师C",
  "导师D",
  "导师E",
  "导师F",
];

const venueCards = [
  "地点",
  "设备A",
  "设备B",
];

const logoList = [
  "合作方01",
  "合作方02",
  "合作方03",
  "合作方04",
  "合作方05",
  "合作方06",
];

export function HomeResources() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-10">
        <HomeIntro title="实验室资源一句话概括，占位文本" desc="资源说明占位" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-[260px] rounded flex items-end p-4 text-gray-700">
            导师大图 + 姓名
          </div>
          <div className="lg:col-span-2">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {mentorList.map((name) => (
                <div
                  key={name}
                  className="min-w-[140px] h-[120px] bg-white border rounded flex items-center justify-center text-sm text-gray-600"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {venueCards.map((title) => (
            <div key={title} className="h-[180px] bg-white rounded-xl border p-4 flex items-end text-gray-700">
              {title}
            </div>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto py-2">
          {logoList.map((logo) => (
            <div
              key={logo}
              className="min-w-[160px] h-[80px] bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
