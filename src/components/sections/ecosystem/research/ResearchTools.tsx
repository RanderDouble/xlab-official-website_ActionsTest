import { RESEARCH_TOOLS } from "@/lib/data";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
export function ResearchTools() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-4">
        <div className="relative z-[10]">
          <LogoWithTitle
            chineseText="常用科研网站整理"
            englishText="Collection of Research Websites"
          />
        </div>

        {/* 科研网站整理 */}
        <div className="relative z-[10] pt-8">
          <div className="grid grid-cols-5 gap-8 max-w-[1295px] mx-auto">
            {RESEARCH_TOOLS.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[195px] h-[62px] bg-white rounded-[10px] hover:opacity-80 transition-opacity px-4"
                style={{
                  boxShadow: '0px 0px 4.1px rgba(20, 155, 255, 0.42)'
                }}
              >
                <span className="text-[20px] font-bold text-gray-900 text-center leading-tight overflow-hidden line-clamp-2">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
