import { ActivityList } from "@/components/sections/news/ActivityList";
import { LatestUpdates } from "@/components/sections/news/LatestUpdates";
import { MediaCoverage } from "@/components/sections/news/MediaCoverage";
import { NewsHero } from "@/components/sections/news/NewsHero";
import { NEWS_HERO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "新闻动态 - X-Lab 浙江大学启真交叉学科创新创业实验室",
  description: "了解X-Lab最新动态、活动招募、创新成果和媒体关注。探索实验室的创新生态与跨学科协作。",
};

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 新闻Hero区域 */}
      <NewsHero {...NEWS_HERO} />

      {/* 活动招募 */}
      <ActivityList />

      {/* 最新发布 */}
      <LatestUpdates />

      {/* 媒体关注 */}
      <MediaCoverage />

      {/* 页面底部装饰 */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50" />
    </div>
  );
}
