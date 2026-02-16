"use client";

import Image from "next/image";
import Link from "next/link";
import { RESEARCH_NEWS } from "@/lib/data";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";

export function ResearchHero() {
  return (
    <section className="w-full bg-white py-8 md:py-12 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="space-y-5">
          <LogoWithTitle
            chineseText="新闻动态"
            englishText="News Update"
          />
          {RESEARCH_NEWS.map((news) => (
            <Link
              key={news.id}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative bg-white w-full h-[263px] rounded-[10px] shadow-[0px_0px_9.2px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.3)] transition-shadow min-h-[263px]">
                <div className="relative h-[263px]">
                  {/* 左侧日期 mm/dd */}
                  <div className="absolute left-[38px] top-[25px] w-[67px] h-[52px]">
                    <p
                      className="font-medium text-[36px] leading-[52px] text-center tracking-[0.16em] text-[#383838]"
                      style={{ fontFamily: "'Source Han Sans CN', sans-serif" }}
                    >
                      {news.date.month.padStart(2, '0')}/{news.date.day.padStart(2, '0')}
                    </p>
                  </div>

                  {/* 主标题 */}
                  <div className="absolute left-[140px] top-[34px] w-[600px]">
                    <h3
                      className="font-bold text-[24px] leading-[35px] text-center text-[#383838]"
                      style={{ fontFamily: "'Source Han Sans CN', sans-serif" }}
                    >
                      {news.title}
                    </h3>
                  </div>

                  {/* 蓝色竖线 */}
                  <div className="absolute left-[123px] top-[96px] w-[7px] h-[31px] opacity-30">
                    <svg
                      width="7"
                      height="31"
                      viewBox="0 0 7 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M3.5 31L3.5 7.7486e-07"
                        stroke="url(#paint0_linear_447_715)"
                        strokeWidth="7"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_447_715"
                          x1="4.5"
                          y1="31"
                          x2="4.5"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0071EF" />
                          <stop offset="1" stopColor="#149BFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* 简介 */}
                  <div className="absolute left-[140px] top-[93px] w-[600px]">
                    <p
                      className="font-bold text-[16px] leading-[23px] text-[#646464]"
                      style={{ fontFamily: "'Source Han Sans CN', sans-serif" }}
                    >
                      {news.desc}
                    </p>
                  </div>

                  {/* 右侧图片 */}
                  <div className="absolute left-[800px] top-[28px] w-[361px] h-[212px] rounded-[10px] overflow-hidden">
                    <Image
                      src={news.img}
                      alt={news.title}
                      fill
                      className="object-cover"
                      sizes="361px"
                    />
                  </div>

                  {/* 左下角装饰图标 */}
                  <div className="absolute left-[25px] top-[170px] w-[94px] h-[93px]">
                    <Image
                      src="/research/news_logo.svg"
                      alt=""
                      width={94}
                      height={93}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
