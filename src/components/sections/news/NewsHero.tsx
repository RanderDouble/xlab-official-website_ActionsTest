// 1. 定义数据接口（提取内容）
interface NewsHeroProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  linkUrl?: string;
}

export function NewsHero({
  // 给出默认值，这样即使不传参也不会白屏
  title = "X-Lab 2025年会",
  description = "2025年7月2日，X-Lab在xx大楼召开2025年中总结年会占位占位占位占位占位占位占位。",
  imageSrc = "/assets/tmp/Frame%2091.svg",
  linkUrl = "/news/list"
}: NewsHeroProps) {
  
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-[60px] pb-10 pt-8">
        
        {/* 2. 新增的父级定位容器：它没有 overflow-hidden！ */}
        <div className="relative w-full">
          
          {/* 3. “查看全部”被提出来了！
              现在你可以随意调整 -right-[] 的值，它绝对不会被切掉了。
              我加了 z-10 确保它始终在最上层。
          */}
          <div className="absolute right-4 top-4 z-10">
            <a 
              className="flex items-center gap-2.5 text-[15px] font-semibold text-[#cecece] transition-colors hover:text-[#0071ef]" 
              href={linkUrl}
            >
              查看全部
              <span className="text-[#0071ef]">&gt;</span>
            </a>
          </div>

          {/* 原本的图片和内容容器：保留 overflow-hidden 以确保图片圆角和渐变不溢出 */}
          <div className="relative aspect-[1320/567] w-full overflow-hidden rounded-2xl bg-white">
            <img
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top"
              src={imageSrc}
            />
            
            {/* 底部半透明遮罩与文字 */}
            <div className="absolute inset-x-0 top-[65%] h-[35%] bg-gradient-to-b from-[rgba(1,78,122,0.42)] to-[rgba(1,78,122,0.72)]">
              <div className="absolute left-[22px] top-[8%] max-w-[1114px] space-y-2">
                {/* 使用提取的 props */}
                <h1 className="text-[52px] font-bold leading-tight text-white">
                  {title}
                </h1>
                <p className="text-[22px] font-medium leading-relaxed text-white">
                  {description}
                </p>
              </div>

              <div className="absolute bottom-4 right-[24px]">
                <a
                  className="inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0071ef] to-[#149bff] px-8 text-[18px] font-bold text-white transition-shadow hover:shadow-lg" 
                  href={linkUrl}
                  style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Source Han Sans SC", "Microsoft YaHei UI", sans-serif' }}
                >
                  去看看
                  <span className="text-[18px]">&gt;</span>
                </a>
              </div>
            </div>

            {/* 轮播图指示器（小圆点） */}
            <div className="absolute left-[625px] top-[529px] flex items-center gap-[10px]">
              <span className="h-[10px] w-[10px] rounded-full bg-[#0071ef]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#cecece]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#cecece]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#cecece]" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
