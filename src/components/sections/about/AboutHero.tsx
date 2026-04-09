export function AboutHero() {
  return (
    <section className="relative w-full h-250 overflow-hidden bg-gradient-to-b from-[#000000] to-[#0071EF] pt-[120px] pb-[72px]">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[220px] right-[-220px] h-[640px] w-[640px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(20,155,255,0.35) 0%, rgba(20,155,255,0) 72%)",
          }}
        />
        <div
          className="absolute -bottom-[220px] left-[-160px] h-[520px] w-[520px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(0,113,239,0.38) 0%, rgba(0,113,239,0) 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="mb-[64px] flex flex-col items-center text-center">
          <div className="mb-[16px]">
            <img
              src="/assets/header/Logo.svg"
              alt="X-Lab Logo"
              className="h-[66px] w-[66px]"
            />
          </div>

          <h1 className="mb-[6px] text-[48px] font-bold leading-[60px] tracking-[7.2px] text-white">
            浙江大学启真交叉学科创新创业实验室
          </h1>
          <h2
            className="text-[44px] font-bold leading-[60px] tracking-[2.2px]"
            style={{
              background: "linear-gradient(90deg, #0071ef 0%, #149bff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Us
          </h2>
        </div>

        <div className="relative pl-[148px] text-white">
          <div className="relative mb-[56px]">
            <div className="absolute -left-[28px] top-[26px] h-[10px] w-[10px] rounded-full bg-white" />
            <div className="absolute -left-[23px] top-[48px] h-[172px] w-px bg-white/45" />
            <h3 className="mb-[12px] text-[24px] font-bold leading-[60px] tracking-[1.2px]">
              我们是谁
            </h3>
            <p className="w-[1056px] text-[16px] font-bold leading-[35px] tracking-[0.8px] text-white">
              浙江大学启真交叉学科创新创业实验室成立于2022年7月，是浙江大学校级创新平台。实验室探索拔尖交叉创新人才培养机制，围绕商业、硬件、软件、设计四大方向，选拔并长期培养能够「主动发现问题、独立思考问题、动手解决问题」，具备扎实理论功底和实践能力的青年领袖。实验室构建科技驱动创新创业生态，聘请各学科科学家和各领域企业家组成专家委员会，推动创新各要素自由流动、高效配置。
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[28px] top-[26px] h-[10px] w-[10px] rounded-full bg-white" />
            <div className="absolute -left-[23px] top-[48px] h-[164px] w-px bg-white/45" />
            <h3 className="mb-[12px] text-[24px] font-bold leading-[60px] tracking-[1.2px]">
              使命愿景
            </h3>
            <p className="w-[1076px] text-[16px] font-bold leading-[35px] tracking-[0.8px] text-white">
              实验室致力于汇聚最活跃的创新人才，以多学科力量推动交叉前沿科学研究，以工程技术基础平台助力项目落地，以创业生态孵化科技成果持续提升社会福祉；打造集「人才培养、交叉研究、工程平台、创业生态」于一体的开放创新体系。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
