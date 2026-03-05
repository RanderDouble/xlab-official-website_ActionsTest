"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";
import { LAB_MERCH } from "@/lib/data";

export function Merchandise() {
  return (
    <section className="w-full relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 顶部标题复用 */}
        <div className="flex justify-between items-start mb-4">
          <LogoWithTitle chineseText="文创周边" englishText="Cultural Creative Merchandise" />
          <Link
            href="/ecosystem/life/merchandise-list"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors mt-1"
          >
            <span className="text-sm font-medium">查看全部</span>
            <Image src="/engineering/right_arrow.svg" width={40} height={40} alt="arrow" />
          </Link>
        </div>

        {/* 卡片并列容器 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {LAB_MERCH.map((item, index) => (
            <MerchCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MerchCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      // 动画配置：交错渐显进入
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* 1. 图片容器 + 渐变边框 */}
      <div 
        className="relative group p-[3px] rounded-[23px] transition-transform duration-300 hover:scale-105"
        style={{
          // 参考截图中的渐变色值
          background: "linear-gradient(135deg, #149BFF 0%, #43C5AC 55%, #F08E25 100%)"
        }}
      >
        <div className="relative w-[250px] h-[250px] md:w-[260px] md:h-[260px] xl:w-[300px] xl:h-[300px] rounded-[20px] overflow-hidden bg-white">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* 2. 信息卡片 */}
      <div
        className="relative w-[300px] h-[100px] flex flex-col items-center justify-center rounded-[20px] shadow-lg overflow-hidden"
        style={{
          // 复合多重渐变背景
          background: `
            linear-gradient(132.98deg, rgba(219, 100, 99, 0) 43.52%, rgba(202, 53, 64, 0.2) 84.45%), 
            linear-gradient(223.54deg, rgba(255, 202, 11, 0) 43.66%, rgba(255, 135, 6, 0.2) 93.66%), 
            linear-gradient(71.16deg, rgba(20, 155, 255, 0) 59.54%, rgba(0, 113, 239, 0.25) 86.84%), 
            linear-gradient(158.38deg, rgba(67, 197, 172, 0.25) 0%, rgba(138, 212, 194, 0) 38.5%), 
            #FFFFFF
          `,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.08)"
        }}
      >
        {/* 名称 */}
        <div className="font-bold text-[20px] xl:text-[22px] text-black tracking-tight mb-1">
          {item.name}
        </div>

        {/* 渐变中轴线 */}
        <div 
          className="w-[180px] h-[2.5px] rounded-full my-1.5"
          style={{
            background: "linear-gradient(90deg, #149BFF 0%, #43C5AC 52.4%, #F08E25 92.31%)"
          }}
        />

        {/* 简介 */}
        <div className="font-bold text-[14px] xl:text-[15px] text-[#464646] tracking-[0.05em]">
          {item.desc}
        </div>
      </div>
    </motion.div>
  );
}