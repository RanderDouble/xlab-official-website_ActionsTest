export function AboutCooperation() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="mb-[42px] flex flex-col items-center">
          <div className="mb-[16px]">
            <img
              src="/assets/header/Logo.svg"
              alt="X-Lab Logo"
              className="h-[66px] w-[66px]"
            />
          </div>
          <h2 className="text-[36px] font-bold leading-[60px] tracking-[5.4px] text-[#333333]">
            合作机构
          </h2>
          <p
            className="-mt-[4px] bg-clip-text text-[24px] font-bold leading-[60px] tracking-[1.2px] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
            }}
          >
            Partner Organizations
          </p>
        </div>

        <div className="relative">
          <img
            src="/assets/about/合作机构.svg"
            alt="合作机构"
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" />
        </div>
      </div>
    </section>
  );
}
