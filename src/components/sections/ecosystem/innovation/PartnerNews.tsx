"use client"; // 动画组件必须在客户端运行

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // 导入 motion
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { PARTNER_NEWS } from "@/lib/data";
import { PartnerNewsItem } from "@/types";

export function PartnerNews() {
  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <LogoWithTitle chineseText="合作新闻" englishText="Partner News" />
      </div>

      <div className="flex flex-col items-center gap-10">
        {/* 传入 index 以便判断奇偶项 */}
        {PARTNER_NEWS.map((news, index) => (
          <PartnerNewsCard key={news.id} news={news} index={index} />
        ))}
      </div>
    </section>
  );
}

function PartnerNewsCard({ news, index }: { news: PartnerNewsItem; index: number }) {
  const isOdd = index % 2 === 0; // 索引0是第一项(奇数位)，索引1是第二项(偶数位)

  return (
    <motion.div
        className="relative w-[1100px] h-[356px]"
        initial={{ 
            x: isOdd ? -150 : 150, // 稍微加大初始位移，让滑入路径更长，视觉感更明显
            opacity: 0 
        }}
        whileInView={{ 
            x: 0, 
            opacity: 1 
        }}
        viewport={{ once: true, amount: 0.2 }}
        // --- 核心修改：控制速度 ---
        transition={{ 
            type: "spring", 
            stiffness: 40,   // 降低刚度（Stiffness）：数值越小，弹簧拉力越弱，动作越慢
            damping: 10,     // 增加阻尼（Damping）：数值越大，震动消失越快，动作越稳重
            mass: 1,         // 质量（Mass）：如果你想让它有“沉重”的感觉，可以调大到 1.5
            duration: 1.2    // 增加预计持续时间
        }}
    >
        {/* 卡片背景渐变 */}
        <div
            className="absolute inset-0 rounded-[29px] opacity-65"
            style={{
            background: `
                linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(67,197,172,0.2) 100%),
                linear-gradient(130.56deg, rgba(20,155,255,0) 84.77%, #149BFF 120.55%),
                linear-gradient(241.31deg, rgba(67,197,172,0.2) 8.99%, rgba(255,255,255,0) 43.56%),
                linear-gradient(124.51deg, #0071EF 3.82%, rgba(255,255,255,0) 67.03%)
            `,
            filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            }}
        />

        {/* 右侧白色底卡 */}
        <div
            className="absolute rounded-[15px] shadow-lg"
            style={{
            width: "643px",
            height: "283px",
            left: "420px",
            top: "36px",
            background: "#FFFFFF",
            boxShadow: "4px 0px 4px rgba(0,0,0,0.25), 0px 4px 4px rgba(0,0,0,0.25)",
            zIndex: 5,
            }}
        />

        {/* 左侧图片 */}
        <div
            className="absolute rounded-[25px] overflow-hidden"
            style={{
            width: "491px",
            height: "330px",
            left: "12px",
            top: "13px",
            zIndex: 10,
            }}
        >
            <Image
            src={`/${news.image}`}
            alt={news.title}
            fill
            className="object-cover rounded-[25px]"
            style={{ display: "block" }}
            />
        </div>

        {/* 右侧文字内容 */}
        <div
            className="absolute font-bold"
            style={{
            width: "503px",
            left: "545px",
            top: "75px",
            zIndex: 20,
            }}
        >
            <h3 className="text-[20px] font-bold text-gray-800 mb-3">
                {news.title}
            </h3>

            <div
                className="w-full h-[3px] rounded-[5px] mb-4"
                style={{
                    background: "linear-gradient(90deg, #43C5AC 0%, #149BFF 100%)",
                }}
            />

            <p className="text-[16px] font-bold text-gray-500 leading-relaxed">
                {news.brief}
            </p>
        </div>

        <Link
            href={news.link}
            className="absolute w-[149px] h-[49px] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            style={{
            right: "50px",
            bottom: "40px",
            zIndex: 30,
            }}
        >
            <Image
                src="/innovation/partner_news/button.svg"
                alt="了解更多"
                fill
                className="object-contain"
                />
            <span 
                className="relative z-10 text-white text-[16px] font-bold"
                style={{ top: "-3px" }}
            >
                了解更多
            </span>
        </Link>
    </motion.div>
  );
}