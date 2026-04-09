export function MemberDestinations() {
  return (
    <section className="w-full bg-white py-[82px]">
      <div className="mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="mb-[44px] flex flex-col items-center">
          <div className="mb-[16px]">
            <img
              src="/assets/header/Logo.svg"
              alt="X-Lab Logo"
              className="h-[66px] w-[66px]"
            />
          </div>
          <h2 className="text-[36px] font-bold leading-[60px] tracking-[5.4px] text-[#333333]">成员去向</h2>
          <p
            className="-mt-[4px] bg-clip-text text-[24px] font-bold leading-[60px] tracking-[1.2px] text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)" }}
          >
            Where did they go?
          </p>
        </div>

        <div className="mb-[18px]">
          <img
            src="/assets/about/wheretogo/去向一.svg"
            alt="成员去向一"
            className="w-full"
          />
        </div>

        <div className="relative z-10 mb-[18px]">
          <img
            src="/assets/about/wheretogo/去向二.svg"
            alt="成员去向二"
            className="w-full"
          />
        </div>

        <div>
          <img
            src="/assets/about/wheretogo/去向三.svg"
            alt="成员去向三"
            className="w-full -translate-y-32"
          />
        </div>
      </div>
    </section>
  );
}
