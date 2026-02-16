export function NewsHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] pt-8 pb-10">
        <div className="relative w-full aspect-[1320/567] overflow-hidden rounded-2xl bg-white">
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            src="/assets/tmp/Frame%2091.svg"
          />
          <div className="absolute inset-x-0 top-[45%] h-[55%] bg-[rgba(1,78,122,0.24)]">
            <div className="absolute left-[22px] top-[8%] max-w-[1114px] space-y-2">
              <h1 className="text-[52px] font-bold text-white leading-tight">X-Lab 2025年会</h1>
              <p className="text-[22px] font-medium text-white leading-relaxed">
                2025年7月2日，X-Lab在xx大楼召开2025年中总结年会占位占位占位占位占位占位占位。
              </p>
            </div>

            <div className="absolute left-[22px] bottom-12">
              <button className="inline-flex items-center gap-3 h-[52px] px-8 justify-center rounded-full text-white text-[18px] font-bold bg-gradient-to-r from-[#0071ef] to-[#149bff] hover:shadow-lg transition-shadow" style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Source Han Sans SC", "Microsoft YaHei UI", sans-serif' }}>
                去看看
                <span className="text-[18px]">&gt;</span>
              </button>
            </div>
          </div>

          <div className="absolute right-6 top-2">
            <a className="flex items-center gap-2 text-[11px] font-semibold text-[#cecece] hover:text-[#0071ef]" href="/news/list">
              查看全部
              <span className="text-[#0071ef]">&gt;</span>
            </a>
          </div>


          <div className="absolute left-[625px] top-[529px] flex items-center gap-[10px]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#0071ef]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#cecece]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#cecece]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#cecece]" />
          </div>
        </div>
      </div>
    </section>
  );
}
