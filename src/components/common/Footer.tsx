import Image from "next/image";

const FOOTER_BG = "/assets/footer/Footer.svg";
const FOOTER_LOGO = "/assets/footer/WhiteLogo.svg";

export function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      style={{ aspectRatio: "1440 / 410" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={FOOTER_BG}
          alt="Footer background"
          className="object-cover"
          fill
          priority
        />
      </div>

      <div className="mx-auto relative flex h-full w-full max-w-[1440px] flex-col justify-between px-[44px] pb-[34px] pt-[44px] md:px-[62px] md:pt-[50px]">
        <div>
          <h2 className="text-[24px] font-bold leading-none md:text-[30px]">联系我们</h2>
          <p className="mt-[14px] text-[14px] font-bold leading-none">邮箱: xxxlab.zju.edu.cn</p>

          <div className="mt-[24px] flex items-start gap-[20px]">
            <div className="flex flex-col items-center">
              <div className="flex h-[70px] w-[70px] items-center justify-center bg-white text-[10px] font-semibold text-[#0071ef]">
                二维码占位
              </div>
              <p className="mt-[7px] text-[9px] font-bold leading-none">公众号二维码</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-[70px] w-[70px] items-center justify-center bg-white text-[10px] font-semibold text-[#0071ef]">
                二维码占位
              </div>
              <p className="mt-[7px] text-[7px] font-bold leading-none">X-Lab小助手</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-8">
          <p className="pb-[2px] text-[22px] font-bold leading-none">
            解码未来，让未来充满无限可能。
          </p>

          <div className="hidden flex-shrink-0 items-end gap-3 md:flex">
            <div className="mb-[2px] h-[52px] w-[52px] rounded-full bg-white/15 p-[4px]">
              <Image
                src={FOOTER_LOGO}
                alt="X-Lab logo"
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="pb-[1px]">
              <p className="text-[18px] font-bold leading-none">浙江大学启真交叉学科创新创业实验室</p>
              <p className="mt-[6px] text-[9px] tracking-[0.02em] text-white/95">
                ZJU Inspiration Interdisciplinary Innovation&amp; Entrepreneurship Laboratory
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
