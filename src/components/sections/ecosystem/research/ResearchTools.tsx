import { RESEARCH_TOOLS } from "@/lib/data";

export function ResearchTools() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-4">
        <div className="border border-gray-900 rounded-lg px-4 py-2 text-sm text-gray-900">
          常用科研网站整理
        </div>

        <div className="flex gap-4 overflow-x-auto p-2">
          {RESEARCH_TOOLS.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-xl border border-gray-900 bg-white flex items-center justify-center text-xs text-gray-600">
                Icon
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-600 mt-2">
                {tool.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
