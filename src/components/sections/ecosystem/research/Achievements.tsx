import { RESEARCH_ACHIEVEMENTS_BRIEF, HARDWARE_TEAM_ACHIEVEMENTS, SOFTWARE_TEAM_ACHIEVEMENTS, OPERATION_TEAM_ACHIEVEMENTS } from "@/lib/data";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { ResearchTeamCard } from "./ResearchTeamCard"
import Image from "next/image";

export function Achievements() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <LogoWithTitle
          chineseText="科研成果"
          englishText="Scientific Research Achievements"
        />

        <div className="relative max-w-[1320px] mx-auto">
          {/* 边框逻辑：保持 2px 透明边框 + 三层复合背景 */}
          <div 
            className="relative rounded-[12px] p-[2px]"
            style={{
              background: `
                linear-gradient(white, white) padding-box, 
                linear-gradient(to right, #0071EF, #0071EF) top / 100% 3px no-repeat border-box,
                linear-gradient(to bottom, #0071EF, rgba(0, 113, 239, 0)) border-box
              `,
              border: '2px solid transparent'
            }}
          >
            {/* 内容主体：改为 items-start 以便精准控制垂直对齐 */}
            <div className="bg-white rounded-[10px] min-h-[220px] flex items-start relative overflow-hidden pt-[60px] pb-[60px]">
              {/* 右上角锦旗 - 紧贴上边线 */}
              <div className="absolute top-[-10px] right-[40px] z-10">
                <Image
                  src="/research/blue_flag.svg"
                  alt="Achievement Flag"
                  width={94}
                  height={93}
                  className="w-auto h-auto drop-shadow-sm"
                  priority
                />
              </div>

              {/* 左侧蓝色渐变装饰条 - 按照你给的参数微调 */}
              <div className="ml-[40px] md:ml-[60px] flex-shrink-0">
                <div
                  className="w-[12px] h-[91px] rounded-[2px]"
                  style={{
                    // 360deg 即是从下往上，底部 0.1 透明度，顶部 #149BFF
                    background: 'linear-gradient(360deg, rgba(255, 255, 255, 0.1) 0%, #149BFF 100%)',
                  }}
                />
              </div>

              {/* 中间文本内容 - 移除 py-10 改用统一的起始对齐 */}
              <div className="whitespace-pre-line flex-1 px-8 pr-44">
                <p 
                  className="font-bold text-[20px] md:text-[24px] leading-[35px] text-[#383838]" 
                  style={{ 
                    marginTop: "-4px" 
                  }}
                >
                  {`浙江大学启真交叉学科创新创业实验室的科研成果丰硕。这里交代科研成果。
 非常多的科研成果。
 非常丰硕的科研成果。
 四个团队合力完成了很多科研成果。`}
                </p>
              </div>

              
            </div>
          </div>
        </div>

        {/* 下方的占位图表部分 */}
        <ResearchTeamCard data={HARDWARE_TEAM_ACHIEVEMENTS} />

        <ResearchTeamCard data={SOFTWARE_TEAM_ACHIEVEMENTS} />

        <ResearchTeamCard data={OPERATION_TEAM_ACHIEVEMENTS} />

        
      </div>
    </section>
  );
}