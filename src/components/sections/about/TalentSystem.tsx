export function TalentSystem() {
  return (
    <section className="w-full bg-white pt-[240px] pb-[80px]">
      <div className="my-30 w-full max-w-[1440px] px-[56px]">
        <div className="relative mx-auto h-[760px] w-[1120px] overflow-visible">
          <div className="absolute left-1/2 top-1/2 size-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8AD4C2]/14" />
          <div className="absolute left-1/2 top-1/2 size-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border  bg-white" />
          <div className="absolute left-1/2 top-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8CE4D6] bg-white" />
          <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#149BFF]/15" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/assets/about/三环.svg"
              alt="三环结构"
              className="size-[500px] object-contain"
            />
          </div>

          <div className="absolute left-1/2 top-[-70px] h-[200px] w-[420px] -translate-x-1/2 rounded-[15px] bg-black/80 px-[28px] pt-[20px] text-[20px] font-bold leading-[35px] tracking-[2px] text-white">
            <span className="text-[#149BFF]">
              从0到1
            </span>
            发现可能性。聚焦跨越学科边界的开放性研究，致力于实质性智慧创造与规律发现，推动师生在交叉学科领域中产出具有长期价值的科学研究成果。
            <div className="absolute left-1/2 top-[180px] h-[58px] w-[130px] -translate-x-1/2 rounded-[10px] bg-gradient-to-r from-[#43C5AC] to-[#8AD4C2] overflow-hidden">
              <img
                src="/assets/footer/WhiteLogo.svg"
                alt="White Logo"
                className="absolute left-[-16px] top-[-10px] h-[48px] w-auto opacity-50"
              />
              <p className="text-center text-[28px] font-bold leading-[58px] tracking-[4.2px] text-white">
                研究
              </p>
            </div>
          </div>

          <div className="absolute left-0 top-[520px] h-[220px] w-[420px] -translate-x-20 rounded-[15px] bg-black/80 px-[28px] pt-[40px] text-[20px] font-bold leading-[35px] tracking-[2px] text-white">
            <span className="text-[#149BFF]">
              从10到N
            </span>
            探索能持续运行的价值链条。以创业为工具，整合社会资源回应真实需求，推动项目从创意到可持续商业模式演进，实现价值闭环。
            <div className="absolute left-[260px] top-[-41px] h-[58px] w-[130px] rounded-[10px] bg-gradient-to-r from-[#43C5AC] to-[#8AD4C2] overflow-hidden">
              <img
                src="/assets/footer/WhiteLogo.svg"
                alt="White Logo"
                className="absolute left-[-16px] top-[-10px] h-[48px] w-auto opacity-50"
              />
              <p className="text-center text-[28px] font-bold leading-[58px] tracking-[4.2px] text-white">
                创业
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-[520px] h-[220px] w-[420px] translate-x-20 rounded-[15px] bg-black/80 px-[28px] pt-[30px] text-[20px] font-bold leading-[35px] tracking-[2px] text-white">
            <span className="text-[#149BFF]">
              从1到10
            </span>
            寻找规模化的可行方案。工程是连接科研与现实的枢纽。本板块强调以综合学科能力解决真实场景中的复杂问题，将专业知识转化为可落地的解决方案。
            <div className="absolute left-[20px] top-[-41px] h-[58px] w-[130px] rounded-[10px] bg-gradient-to-r from-[#43C5AC] to-[#8AD4C2] overflow-hidden">
              <img
                src="/assets/footer/WhiteLogo.svg"
                alt="White Logo"
                className="absolute left-[-16px] top-[-10px] h-[48px] w-auto opacity-50"
              />
              <p className="text-center text-[28px] font-bold leading-[58px] tracking-[4.2px] text-white">
                工程
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
