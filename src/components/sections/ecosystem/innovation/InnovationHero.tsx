import Link from "next/link";
import { INNOVATION_HERO } from "@/lib/data";

export function InnovationHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="border border-gray-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[40%]">
              <div className="w-full h-[220px] md:h-[260px] bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600">
                项目大图
              </div>
            </div>
            <div className="md:w-[60%] space-y-4">
              <span className="inline-block text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                小标题简单概括涉及领域...
              </span>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {INNOVATION_HERO.title}
              </h1>
              <p className="text-sm text-gray-600 leading-6">{INNOVATION_HERO.description}</p>
              <Link
                href={INNOVATION_HERO.link}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-200 text-purple-900 text-sm"
              >
                了解详情
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
