import { ABOUT_Intro } from "@/lib/data";
import { BrowserWindowCard } from "@/components/shared/BrowserWindowCard";

export function AboutIntro() {
  return (
    <section className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <BrowserWindowCard className="bg-slate-950 text-white border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-600" />
              <div className="space-y-10">
                <div>
                  <div className="text-xl font-semibold mb-2">我们是谁?</div>
                  <p className="text-gray-200 leading-7">
                    {ABOUT_Intro.whoWeAre}
                    <span className="text-yellow-300"> 商业、硬件、软件、设计 </span>
                    交叉协同。
                  </p>
                </div>
                <div>
                  <div className="text-xl font-semibold mb-2">使命愿景</div>
                  <p className="text-gray-200 leading-7">
                    {ABOUT_Intro.mission}
                    <span className="text-yellow-300"> 关键领域 </span>
                    深度探索。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-[260px] bg-white text-slate-900 rounded flex items-center justify-center text-sm">
                Logo Placeholder
              </div>
            </div>
          </div>
        </BrowserWindowCard>
      </div>
    </section>
  );
}
