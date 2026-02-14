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
            <div className="absolute left-[22px] top-[10%] max-w-[1114px] space-y-1.5">
              <h1 className="text-[28px] font-semibold text-white">X-Lab 2025年会</h1>
              <p className="text-[16px] font-semibold text-white">
                2025年7月2日，X-Lab在xx大楼召开2025年中总结年会占位占位占位占位占位占位占位。
              </p>
            </div>

            <div className="absolute left-[21px] bottom-6">
              <button className="inline-flex items-center gap-2 h-[34px] w-[112px] justify-center rounded-[26px] text-white text-[14px] font-semibold bg-gradient-to-r from-[#0071ef] to-[#149bff]">
                去看看
                <span className="text-[14px]">&gt;</span>
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
