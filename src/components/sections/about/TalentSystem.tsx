import type { CSSProperties } from "react";

export function TalentSystem() {
  const talentScale = 0.8;
  const stageBaseHeight = 1510;
  const stageVars = {
    height: `${stageBaseHeight * talentScale}px`,
  } as CSSProperties;

  return (
    <section className="w-full h-320 bg-white pt-[140px] pb-[80px]">
      <div className="my-30 mx-auto w-full max-w-[1440px] px-4 lg:px-[56px]">
        <div className="mx-auto flex w-full justify-center" style={stageVars}>
          <div
            className="w-[1280px] origin-top"
            style={{ transform: `scale(${talentScale})`, transformOrigin: "top center" }}
          >
            <div className="mx-auto flex w-[1120px] flex-col items-center">
              <div className="w-[420px] h-54 rounded-[15px] bg-black/80 px-[28px] pt-[20px] text-[20px] font-bold leading-[35px] tracking-[2px] text-white translate-z-1">
                <span className="text-[#149BFF]">从0到1</span>
                发现可能性。聚焦跨越学科边界的开放性研究，致力于实质性智慧创造与规律发现，推动师生在交叉学科领域中产出具有长期价值的科学研究成果。
                <div className="mt-[0px] flex justify-center">
                  <div className="grid h-[58px] w-[130px] grid-cols-1 grid-rows-1 items-center overflow-hidden rounded-[10px] bg-gradient-to-r from-[#43C5AC] to-[#8AD4C2]">
                    <img
                      src="/assets/footer/WhiteLogo.svg"
                      alt="White Logo"
                      className="col-start-1 row-start-1 ml-[-10px] mb-8 h-[42px] w-auto justify-self-start opacity-50"
                    />
                    <p className="col-start-1 row-start-1 text-center text-[28px] font-bold leading-[58px] tracking-[4.2px] text-white">研究</p>
                  </div>
                </div>
              </div>

              <div className="mt-[-320px] flex size-[1200px] items-center justify-center rounded-full bg-[#8AD4C2]/14">
                <div className="flex size-[750px] items-center justify-center rounded-full border bg-white">
                  <div className="flex size-[640px] items-center justify-center rounded-full border border-[#8CE4D6] bg-white">
                    <div className="flex size-[600px] items-center justify-center rounded-full bg-[#149BFF]/15">
                      <img src="/assets/about/三环.svg" alt="三环结构" className="size-[500px] object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[-460px] grid w-full grid-cols-2 gap-[640px] ml-[-160px]">
                <div className="w-[420px] h-[240px] rounded-[15px] bg-black/80 px-[28px] pt-[50px] text-[20px] font-bold leading-[35px] tracking-[2px] text-white">
                  <span className="text-[#149BFF]">从10到N</span>
                  探索能持续运行的价值链条。以创业为工具，整合社会资源回应真实需求，推动项目从创意到可持续商业模式演进，实现价值闭环。
                  <div className="mt-[18px] flex justify-end">
                    <div className="grid h-[58px] w-[130px] mt-[-250px] grid-cols-1 grid-rows-1 items-center overflow-hidden rounded-[10px] bg-gradient-to-r from-[#43C5AC] to-[#8AD4C2]">
                      <img
                        src="/assets/footer/WhiteLogo.svg"
                        alt="White Logo"
                        className="col-start-1 row-start-1 ml-[-10px] mb-8 h-[42px] w-auto justify-self-start opacity-50"
                      />
                      <p className="col-start-1 row-start-1 text-center text-[28px] font-bold leading-[58px] tracking-[4.2px] text-white">创业</p>
                    </div>
                  </div>
                </div>
                <div className="w-[420px] h-[240px] rounded-[15px] bg-black/80 px-[28px] pt-[30px] text-[20px] font-bold leading-[35px] tracking-[2px] text-white">
                  <span className="text-[#149BFF]">从1到10</span>
                  寻找规模化的可行方案。工程是连接科研与现实的枢纽。本板块强调以综合学科能力解决真实场景中的复杂问题，将专业知识转化为可落地的解决方案。
                  <div className="mt-[18px] flex justify-start">
                    <div className="grid h-[58px] w-[130px] mt-[-260px] grid-cols-1 grid-rows-1 items-center overflow-hidden rounded-[10px] bg-gradient-to-r from-[#43C5AC] to-[#8AD4C2]">
                      <img
                        src="/assets/footer/WhiteLogo.svg"
                        alt="White Logo"
                        className="col-start-1 row-start-1 ml-[-10px] mb-8 h-[42px] w-auto justify-self-start opacity-50"
                      />
                      <p className="col-start-1 row-start-1 text-center text-[28px] font-bold leading-[58px] tracking-[4.2px] text-white">工程</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
