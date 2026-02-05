import { LIFE_VIDEO } from "@/lib/data";

export function VideoStories() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-[45%] space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">影像故事</h2>
            <p className="text-sm text-gray-600 leading-6">
              记录实验室的成长与改变，展示成员真实而热烈的探索轨迹。
            </p>
            <div className="flex flex-wrap gap-2">
              {LIFE_VIDEO.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-[55%] w-full">
            <div className="aspect-video bg-gray-200 border border-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster={LIFE_VIDEO.poster}
                src={LIFE_VIDEO.url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
