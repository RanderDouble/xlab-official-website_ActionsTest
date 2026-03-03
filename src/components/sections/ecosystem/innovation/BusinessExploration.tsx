import Image from "next/image";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { BUSINESS_PROJECTS } from "@/lib/data";

export function BusinessExploration() {
  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      {/* 标题部分：商业探索 Business Exploration */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <LogoWithTitle 
          chineseText="商业探索" 
          englishText="Business Exploration" 
        />
      </div>

      {/* 项目卡片列表 */}
      <div className="flex flex-col items-center gap-8">
        {BUSINESS_PROJECTS.map((project) => (
          <BusinessProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

// 单个项目卡片组件
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BusinessProjectCard({ project }: { project: any }) {
  return (
    <div className="relative w-[1100px] h-auto min-h-[360px] rounded-[15px] shadow-[0px_8px_20px_rgba(0,0,0,0.15)] overflow-hidden">
      {/* 左侧图片：高度改为 360px，与卡片最小高度一致，消除下方留白 */}
      <div
        className="absolute left-0 top-0 h-full rounded-l-[15px] overflow-hidden z-10"
        style={{
          width: "480px",
          height: "360px", // 改为 360px，与卡片 min-h 一致
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 右上角蓝绿色渐变条 */}
      <div
        className="absolute top-0 rounded-r-[25px] z-15"
        style={{
          width: "540px",
          height: "25px",
          left: "480px",
          background: "linear-gradient(90deg, #43C5AC 0%, rgba(138,212,194,0) 100%)",
        }}
      />

      {/* 右侧白色卡片 */}
      <div
        className="absolute bg-white/95 h-full rounded-r-[15px] shadow-md z-5"
        style={{
          width: "620px",
          left: "480px",
          top: 0,
          minHeight: "360px",
          paddingBottom: "40px",
        }}
      >
        {/* 项目名称：自适应多行，与上下元素间隔增大 */}
        <div className="relative ml-[60px] mt-[40px] mb-[20px] z-20">
          <h3
            className="text-2xl font-bold text-gray-900 whitespace-normal break-words"
            style={{
              width: "490px",
            }}
          >
            {project.name}
          </h3>
        </div>

        {/* 蓝色渐变分割线 */}
        <div
          className="relative h-[3px] rounded-[5px] z-30 ml-[60px] mb-[20px]"
          style={{
            width: "490px",
            background: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
          }}
        />

        {/* 项目描述 */}
        <p
          className="relative text-gray-600 text-base font-bold leading-loose z-20 ml-[60px]"
          style={{
            width: "490px",
          }}
        >
          {'　　'+project.description}
        </p>
      </div>
    </div>
  );
}