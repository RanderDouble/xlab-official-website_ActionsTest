import Image from "next/image";
import Link from "next/link";
import { INNOVATION_HERO } from "@/lib/data";

export function InnovationHero() {
  return (
    <section className="w-full relative py-16 bg-white flex justify-center">
      <div
        className="relative rounded-[15px] shadow-[0px_8px_20px_rgba(0,0,0,0.3)]"
        style={{
          width: "1278px",
          height: "479px",
        }}
      >
        {/* 左侧图片：次顶层 z-30（在标题之下，其他之上） */}
        <div
          className="absolute left-0 top-0 h-full rounded-l-[15px] overflow-hidden z-30"
          style={{
            width: "688.4px",
          }}
        >
          <Image
            src={INNOVATION_HERO.image}
            alt="Voxsee团队"
            fill
            className="object-cover"
          />
        </div>

        {/* 右上角渐变条 */}
        <div
          className="absolute top-0 rounded-r-[25px] z-35"
          style={{
            width: "546.33px",
            height: "25px",
            left: "688.4px",
            background: "linear-gradient(90deg, #43C5AC 0%, rgba(138, 212, 194, 0) 100%)",
          }}
        />

        {/* 蓝色标题栏（移出白色卡片，直接作为兄弟元素，层级z-60，最顶层） */}
        <div
          className="absolute flex items-center px-8 text-white text-3xl font-bold shadow-lg z-60"
          style={{
            width: "780px",
            height: "144px",
            left: "531.5px",
            top: "80px",
            background: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
          }}
        >
          {INNOVATION_HERO.title}
        </div>

        {/* 深蓝色三角形 */}
        <Image
          src="/innovation/blue_rectangle.svg"
          alt="Blue Rectangle"
          width={34.51}
          height={179}
          className="absolute object-contain"
          style={{
            left: "1278px", // 白色边框右边缘
            top: "82px",    // 与蓝色标题齐平
          }}
        />
        
        {/* 右侧白色卡片 */}
        <div
          className="absolute bg-white/95 h-full rounded-r-[15px] shadow-lg z-20"
          style={{
            width: "721.27px",
            left: "556.73px",
            top: 0,
          }}
        >
          {/* 喜报 + 奖杯：整体右移并下移 */}
          <div className="absolute left-[150px] top-[40px] flex items-center gap-3 z-50">
            <span className="text-2xl font-bold text-gray-800">喜报</span>
            <Image
              src="/innovation/tropy.svg"
              alt="奖杯"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          {/* 灰色描述文本：整体右移并下移 */}
          <div
            className="absolute text-gray-500 text-base font-bold leading-relaxed z-50"
            style={{
              left: "150px",
              top: "240px", // 下移20px
              width: "540px",
            }}
          >
            {'　　'+INNOVATION_HERO.description}
          </div>

          {/* 了解详情按钮：整体右移并下移 */}
          <Link
            href={INNOVATION_HERO.link}
            className="absolute flex items-center justify-center bg-black text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all z-50"
            style={{
              width: "198.25px",
              height: "47px",
              left: "150px",
              top: "380px", // 下移20px
              boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
            }}
          >
            了解详情
          </Link>
        </div>
      </div>
    </section>
  );
}