import Image from "next/image";
import { ResearchTeamProject } from "@/types/index";

export function ResearchTeamCard({ data }: { data: ResearchTeamProject }) {
  const { themeColor, teamName, englishName, logoPath, items } = data;

  // 辅助函数：生成三侧渐变边框样式
  // 顶部实色横条 + 两侧向下渐变，高度通过 mask 或 background-size 严格控制
  const getThreeSideBorderStyle = (color: string) => ({
    background: `
      linear-gradient(white, white) padding-box, 
      linear-gradient(to right, ${color}, ${color}) top / 100% 3px no-repeat border-box,
      linear-gradient(to bottom, ${color}, rgba(0, 0, 0, 0)) border-box
    `,
    border: '2px solid transparent'
  });

  return (
    <div className="relative max-w-[1320px] mx-auto mb-5">
      {/* 1. 外层卡片：移除 shadow-sm, 增加 overflow-hidden 确保 logo 被边框遮挡 */}
      <div 
        className="relative rounded-[16px] p-[2px] bg-white overflow-hidden" 
        style={getThreeSideBorderStyle(themeColor)}
      >
        
        {/* 2. SVG Logo：置于底层 (z-0)，右上角会被 border-box 遮挡 */}
        <div className="absolute top-[-20px] right-[-20px] z-0 pointer-events-none">
          <Image 
            src={logoPath} 
            alt="team logo" 
            width={187} 
            height={186} 
            className="w-[150px] md:w-[220px] h-auto object-contain opacity-90"
          />
        </div>

        {/* Header 区域*/}
        <div className="relative px-10 pt-14 pb-8 flex justify-between items-start z-10">
          <h2 
            className="text-[36px] font-bold text-[#383838] leading-[52px]" 
            style={{ fontFamily: 'Source Han Sans CN' }}
          >
            {teamName} · 项目介绍
          </h2>

          {/* 3. 镂空艺术字*/}
          <div 
            className="absolute right-[240px] top-[40px] text-[56px] font-black select-none tracking-[0.05em]"
            style={{ 
              WebkitTextStroke: `2px ${themeColor}`, // 增加描边厚度
              color: 'transparent',
              opacity: 0.8
            }}
          >
            {englishName}
          </div>
        </div>

        {/* 4. 项目内容列表 */}
        <div className="relative px-10 pb-12 grid grid-cols-2 gap-x-10 gap-y-12 z-10">
          {items.map((item, idx) => {
            const isFullWidth = item.type === 'image-text';

            return (
              <div 
                key={idx} 
                className={`${isFullWidth ? 'col-span-2' : 'col-span-1'} flex flex-col`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                  
                  {/* 情况1 & 3：图片组件 */}
                  {(item.type === 'image-text' || item.type === 'image-only') && (
                    <div className={`${item.type === 'image-only' ? 'w-full' : 'md:w-[450px]'} relative`}>
                      {/* 渐变边框容器 */}
                      <div
                        className="rounded-[8px] p-[2px] h-full"
                        style={{
                          background: `
                            linear-gradient(white, white) padding-box,
                            linear-gradient(to right, ${themeColor}, ${themeColor}) top / 100% 2px no-repeat border-box,
                            linear-gradient(to bottom, ${themeColor}, rgba(0, 0, 0, 0) 100%) border-box
                          `,
                          border: '2px solid transparent',
                        }}
                      >
                        {/* 内部容器：使用 flex-col 确保标题在图片上方 */}
                        <div className="bg-white rounded-[6px] h-full flex flex-col">
                          {/* 情况3：纯图片组件的标题现在位于边框内部 */}
                          {item.type === 'image-only' && item.title && (
                            <h3 className="text-[20px] md:text-[22px] font-bold text-[#383838] px-4 p-8 mb-2 pb-3">
                              {item.title}
                            </h3>
                          )}

                          {/* 图片区域 */}
                          <div className="relative aspect-[16/10] w-full flex-1 overflow-hidden bg-gray-50 flex items-center justify-center rounded-b-[6px]">
                            {item.imageUrl && (
                              <Image 
                                src={item.imageUrl} 
                                alt={item.title || "project image"} 
                                fill 
                                className="object-contain p-4" 
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 情况1 & 2：文本组件 */}
                  {(item.type === 'image-text' || item.type === 'text-only') && (
                    <div className="flex-1 flex flex-col justify-center">
                      {item.type === 'text-only' ? (
                        <div 
                          className="rounded-[8px] p-8 h-full"
                          style={getThreeSideBorderStyle(themeColor)}
                        >
                          <h3 className="text-[22px] font-bold text-[#383838] mb-4">{item.title}</h3>
                          <p className="text-[#666666] leading-[35px] text-[16px] whitespace-pre-line">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div className="py-2">
                          <h3 className="text-[22px] font-bold text-[#383838] mb-4">{item.title}</h3>
                          <p className="text-[#666666] leading-[35px] text-[16px] whitespace-pre-line">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}