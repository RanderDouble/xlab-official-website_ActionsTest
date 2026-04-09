import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import Image from "next/image";
import { RESEARCH_TOOLS } from "@/lib/data";

export function ResearchLife() {
  return (
    <section className="w-full bg-white relative min-h-screen"> {/* 确保section至少占满屏幕高度 */}
      {/* 背景图 - 占满页面宽度，完整显示，相对位置不变 */}
      <div className="absolute left-0 right-0 top-0 -translate-y-[180px] w-full min-h-[1398px] z-[1]">
        {/* 移除 overflow-hidden 避免截断背景图 */}
        <Image
          src="/research/life_bg.svg"
          alt="Background"
          fill
          // 改用 object-fill 让背景图撑满容器
          className="object-fill"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6 relative">
        {/* LogoWithTitle - 在背景图之上 */}
        <div className="relative z-[10]">
          <LogoWithTitle
            chineseText="X-Labers的科研生活"
            englishText="Research Life of X-Labers"
          />
        </div>

        {/* 前景图 - 在最上层 */}
        <div className="relative w-full h-[800px] z-[20]">
          <Image
            src="/research/life_main.svg"
            alt="Research Life"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}