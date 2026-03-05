import Image from "next/image";
import Link from "next/link";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";

export function ColumnEntry() {
  const columnData = {
    interview: {
      bg: "/engineering/columns/x-interview_bg.svg",
      letters: "/engineering/columns/x-interview_letters.svg",
      link: "/ecosystem/engineering/columns/three-sounds",
    },
    project: {
      bg: "/engineering/columns/x-project_bg.svg",
      letters: "/engineering/columns/x-project_letters.svg",
      link: "/ecosystem/engineering/columns/noah-ark",
    },
  };

  // 统一配置：确保左右严格一致
  const CONSTANTS = {
    // 前景图与艺术字的间距
    IMG_TO_LETTER_GAP: 10, 
    // 艺术字容器高度（控制水平对齐的核心）
    LETTER_BAR_HEIGHT: 80,
    // 前景图最大宽度
    CARD_MAX_WIDTH: 520,
  };

  return (
    <section className="w-full bg-white relative overflow-hidden py-12 md:py-24">
      {/* 大背景图：左移调整 - 从right-0改为right-[8%]，宽度微调为3/4更自然 */}
      <div 
        className="absolute right-[8%] top-0 h-full w-3/4 pointer-events-none z-0"
        style={{ maxWidth: '1200px' }} // 防止过大
      >
        <Image
          src="/engineering/columns/bg.svg"
          alt="background"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div style={{ marginBottom: '20px' }}>
          <LogoWithTitle chineseText="专  栏" englishText="Column" />
        </div>

        {/* 主容器：改为Grid布局，中间留空给Logo，结构更稳 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-16">
          
          {/* ===== 左侧专栏：X · Interview ===== */}
          <div className="md:col-span-5 relative flex flex-col">
            {/* 前景图卡片*/}
            <div className="relative z-10">
              <Link 
                href={columnData.interview.link}
                className="inline-block transition-transform"
                style={{
                  display: 'inline-block', // 确保仅包裹内容
                  lineHeight: 0, // 避免行高影响布局
                }}
              >
                <Image
                  src={columnData.interview.bg}
                  alt="X · Interview"
                  width={410}
                  height={205}
                  className="h-auto object-contain duration-300 hover:scale-105"
                  style={{
                    transform: 'translateY(-45px) translateX(-5px)',
                    transformOrigin: 'center',
                  }}
                />
              </Link>
            </div>

            {/* 艺术字+查看全部：绝对定位，强制水平对齐 */}
            <div 
              className="absolute left-0 right-0 flex items-center justify-between"
              style={{ 
                top: `calc(100% + ${CONSTANTS.IMG_TO_LETTER_GAP}px)`,
                height: `${CONSTANTS.LETTER_BAR_HEIGHT}px`
              }}
            >
              <div className="relative h-full w-2/3">
                <Image
                  src={columnData.interview.letters}
                  alt="X · Interview"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <Link
                href={columnData.interview.link}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors shrink-0"
              >
                <span className="text-sm font-medium">查看全部</span>
                <Image
                  src="/engineering/right_arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </Link>
            </div>
          </div>

          {/* ===== 中间：Logo区域 (强制占2列，确保居中) ===== */}
          <div className="md:col-span-2 flex items-center justify-center z-20">
            {/* 这里是中间的X形Logo，若有独立图片请替换 */}
            <div className="w-20 h-20 md:w-28 md:h-28"></div>
          </div>

          {/* ===== 右侧专栏：X · Project ===== */}
          <div className="md:col-span-5 relative flex flex-col">
            {/* 前景图卡片：与左侧完全同宽，底部留间距 */}
            <div className="relative z-10" style={{ maxWidth: `${CONSTANTS.CARD_MAX_WIDTH}px` }}>
              <Link 
                href={columnData.project.link}
                className="block transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={columnData.project.bg}
                  alt="X · Project"
                  width={CONSTANTS.CARD_MAX_WIDTH}
                  height={350}
                  className="w-full h-auto object-contain"
                  style={{
                    transform: 'translateY(-15px)',
                    transformOrigin: 'center',
                  }}
                />
              </Link>
            </div>

            {/* 艺术字+查看全部*/}
            <div 
              className="absolute left-0 right-0 flex items-center justify-between"
              style={{ 
                top: `calc(100% + ${CONSTANTS.IMG_TO_LETTER_GAP}px)`,
                height: `${CONSTANTS.LETTER_BAR_HEIGHT}px`
              }}
            >
              <div className="relative h-full w-2/3">
                <Image
                  src={columnData.project.letters}
                  alt="X · Project"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <Link
                href={columnData.project.link}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors shrink-0"
              >
                <span className="text-sm font-medium">查看全部</span>
                <Image
                  src="/engineering/right_arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}